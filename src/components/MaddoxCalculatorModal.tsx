import React, { useState } from 'react';
import { X, Calculator, AlertTriangle, CheckCircle2, ShieldAlert, Sparkles, BookOpen } from 'lucide-react';

interface MaddoxCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MaddoxCalculatorModal: React.FC<MaddoxCalculatorModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [pain, setPain] = useState<number>(0);
  const [erythema, setErythema] = useState<boolean>(false);
  const [edema, setEdema] = useState<boolean>(false);
  const [cord, setCord] = useState<'none' | 'short' | 'long'>('none');
  const [purulent, setPurulent] = useState<boolean>(false);
  const [systemic, setSystemic] = useState<boolean>(false);

  if (!isOpen) return null;

  // Calculation logic based on Maddox clinical criteria
  let score = 0;
  let gradeTitle = "Grado 0: Acceso Venoso Sano";
  let recommendation = "Mantener catéter en su sitio. Continuar monitorización habitual cada turno y educar al paciente.";
  let badgeColor = "bg-emerald-100 text-emerald-950 border-emerald-300";
  let actionUrgency = "Sin riesgo";

  if (systemic) {
    score = 5;
    gradeTitle = "Grado 5: Tromboflebitis Avanzada / Afectación Sistémica";
    recommendation = "¡EMERGENCIA!: Retirada urgente del catéter, valorar hemocultivos y cultivo de punta, ecografía vascular Doppler y tratamiento médico urgente.";
    badgeColor = "bg-purple-100 text-purple-950 border-purple-400";
    actionUrgency = "Intervención Médica Urgente";
  } else if (purulent || cord === 'long') {
    score = 4;
    gradeTitle = "Grado 4: Flebitis Grave (Cordón > 7.5 cm o Pus)";
    recommendation = "¡RETIRAR INMEDIATAMENTE!: Retirar catéter, cultivo estéril de exudado y punta de teflón, calor templado local y valoración médica inmediata.";
    badgeColor = "bg-red-100 text-red-950 border-red-400";
    actionUrgency = "Retiro Inmediato + Cultivo";
  } else if (cord === 'short') {
    score = 3;
    gradeTitle = "Grado 3: Flebitis Moderada (Cordón < 7.5 cm)";
    recommendation = "¡RETIRAR EL CATÉTER!: Retirada obligatoria, aplicar compresas húmedas templadas, elevar el miembro e iniciar tratamiento local (pomadas heparinizadas/antiinflamatorias).";
    badgeColor = "bg-rose-100 text-rose-950 border-rose-400";
    actionUrgency = "Retiro Obligatorio + Tratamiento Local";
  } else if (pain > 0 && (erythema || edema)) {
    score = 2;
    gradeTitle = "Grado 2: Flebitis Leve a Moderada (Dolor + Eritema/Edema)";
    recommendation = "¡CRITERIO DE RETIRADA!: En la práctica clínica y guías de GuíaSalud, ante Grado 2 se debe retirar el catéter y canalizar en el miembro opuesto antes de que progrese a cordón venoso.";
    badgeColor = "bg-orange-100 text-orange-950 border-orange-400";
    actionUrgency = "Criterio de Retiro del Catéter";
  } else if (pain > 0) {
    score = 1;
    gradeTitle = "Grado 1: Dolor Inicial sin Signos Inflamatorios";
    recommendation = "Alerta temprana: Vigilar cada 4 horas. Evaluar si la infusión es irritante para aumentar dilución. No requiere retiro inmediato salvo persistencia o progresión.";
    badgeColor = "bg-amber-100 text-amber-950 border-amber-400";
    actionUrgency = "Vigilancia Estrecha";
  }

  const resetForm = () => {
    setPain(0);
    setErythema(false);
    setEdema(false);
    setCord('none');
    setPurulent(false);
    setSystemic(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div className="relative max-w-2xl w-full bg-[#fdf2f4] rounded-2xl border-2 border-rose-300 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="px-6 py-4 bg-gradient-to-r from-rose-200 via-rose-100 to-rose-200 border-b border-rose-300 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-rose-500 text-white rounded-lg shadow-xs">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-neutral-950 text-lg">
                Calculadora Clínica de la Escala de Maddox
              </h3>
              <p className="text-xs text-neutral-700">
                Valoración objetiva de flebitis en catéter venoso periférico (GuíaSalud / INS)
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-rose-300 text-neutral-900 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 space-y-6 bg-white/70">
          {/* Form Options */}
          <div className="space-y-4">
            {/* Dolor */}
            <div className="p-3.5 bg-rose-50/90 rounded-xl border border-rose-200">
              <label className="block text-sm font-bold text-neutral-950 mb-2">
                1. ¿El paciente refiere dolor o molestia al palpar la vía o infundir?
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { value: 0, label: "Sin dolor (0)" },
                  { value: 1, label: "Dolor leve (1)" },
                  { value: 2, label: "Dolor moderado / fuerte (2)" }
                ].map((item) => (
                  <button
                    key={item.value}
                    type="button"
                    onClick={() => setPain(item.value)}
                    className={`py-2 px-3 text-xs font-semibold rounded-lg border transition-all text-center ${
                      pain === item.value
                        ? 'bg-rose-600 text-white border-rose-700 shadow-xs'
                        : 'bg-white text-neutral-800 border-rose-200 hover:bg-rose-100'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Eritema y Edema */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="p-3.5 bg-rose-50/90 rounded-xl border border-rose-200">
                <label className="block text-sm font-bold text-neutral-950 mb-2">
                  2. ¿Hay eritema (enrojecimiento)?
                </label>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setErythema(false)}
                    className={`flex-1 py-1.5 px-3 text-xs font-semibold rounded-lg border transition-all ${
                      !erythema
                        ? 'bg-neutral-800 text-white border-neutral-900'
                        : 'bg-white text-neutral-800 border-rose-200 hover:bg-rose-100'
                    }`}
                  >
                    No
                  </button>
                  <button
                    type="button"
                    onClick={() => setErythema(true)}
                    className={`flex-1 py-1.5 px-3 text-xs font-semibold rounded-lg border transition-all ${
                      erythema
                        ? 'bg-rose-600 text-white border-rose-700 shadow-xs'
                        : 'bg-white text-neutral-800 border-rose-200 hover:bg-rose-100'
                    }`}
                  >
                    Sí, eritema visible
                  </button>
                </div>
              </div>

              <div className="p-3.5 bg-rose-50/90 rounded-xl border border-rose-200">
                <label className="block text-sm font-bold text-neutral-950 mb-2">
                  3. ¿Presenta edema o hinchazón?
                </label>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setEdema(false)}
                    className={`flex-1 py-1.5 px-3 text-xs font-semibold rounded-lg border transition-all ${
                      !edema
                        ? 'bg-neutral-800 text-white border-neutral-900'
                        : 'bg-white text-neutral-800 border-rose-200 hover:bg-rose-100'
                    }`}
                  >
                    No
                  </button>
                  <button
                    type="button"
                    onClick={() => setEdema(true)}
                    className={`flex-1 py-1.5 px-3 text-xs font-semibold rounded-lg border transition-all ${
                      edema
                        ? 'bg-rose-600 text-white border-rose-700 shadow-xs'
                        : 'bg-white text-neutral-800 border-rose-200 hover:bg-rose-100'
                    }`}
                  >
                    Sí, edema local
                  </button>
                </div>
              </div>
            </div>

            {/* Cordón venoso */}
            <div className="p-3.5 bg-rose-50/90 rounded-xl border border-rose-200">
              <label className="block text-sm font-bold text-neutral-950 mb-2">
                4. ¿Se palpa cordón venoso (vena endurecida como una cuerda)?
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { value: 'none', label: "No se palpa" },
                  { value: 'short', label: "Cordón corto (< 7.5 cm)" },
                  { value: 'long', label: "Cordón largo (> 7.5 cm)" }
                ].map((item) => (
                  <button
                    key={item.value}
                    type="button"
                    onClick={() => setCord(item.value as any)}
                    className={`py-2 px-3 text-xs font-semibold rounded-lg border transition-all text-center ${
                      cord === item.value
                        ? 'bg-rose-600 text-white border-rose-700 shadow-xs'
                        : 'bg-white text-neutral-800 border-rose-200 hover:bg-rose-100'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Signos graves */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <label className="flex items-center gap-2.5 p-3 bg-rose-50 rounded-xl border border-rose-200 cursor-pointer hover:bg-rose-100/70 transition-colors">
                <input
                  type="checkbox"
                  checked={purulent}
                  onChange={(e) => setPurulent(e.target.checked)}
                  className="w-4 h-4 accent-rose-600 rounded"
                />
                <span className="text-xs font-bold text-neutral-950">
                  ¿Secreción purulenta (pus) en el punto de punción?
                </span>
              </label>

              <label className="flex items-center gap-2.5 p-3 bg-rose-50 rounded-xl border border-rose-200 cursor-pointer hover:bg-rose-100/70 transition-colors">
                <input
                  type="checkbox"
                  checked={systemic}
                  onChange={(e) => setSystemic(e.target.checked)}
                  className="w-4 h-4 accent-rose-600 rounded"
                />
                <span className="text-xs font-bold text-neutral-950">
                  ¿Fiebre o signos de sepsis / tromboflebitis avanzada?
                </span>
              </label>
            </div>
          </div>

          {/* Resultado Clínico */}
          <div className="p-4 rounded-xl border-2 bg-gradient-to-br from-rose-50 to-white border-rose-300 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black uppercase tracking-wider text-rose-900">
                Resultado de la Escala de Maddox:
              </span>
              <span className={`px-3 py-1 rounded-full text-xs font-black border ${badgeColor}`}>
                Puntaje: {score} / 5 ({actionUrgency})
              </span>
            </div>

            <div className="text-base font-extrabold text-neutral-950">
              {gradeTitle}
            </div>

            <div className="p-3 bg-rose-100/60 rounded-lg border border-rose-200 text-sm text-neutral-950 leading-relaxed">
              <span className="font-bold text-rose-950 block mb-1">
                Conducta de enfermería recomendada:
              </span>
              {recommendation}
            </div>

            <div className="flex items-center gap-2 text-xs text-neutral-700 pt-1">
              <BookOpen className="w-3.5 h-3.5 text-rose-700" />
              <span>
                Criterio clínico: toda puntuación ≥ 2 se considera flebitis significativa que indica el retiro de la vía.
              </span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-rose-50 border-t border-rose-200 flex items-center justify-between">
          <button
            type="button"
            onClick={resetForm}
            className="text-xs font-bold text-neutral-700 hover:text-neutral-950 underline cursor-pointer"
          >
            Reiniciar valores
          </button>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 bg-neutral-950 hover:bg-neutral-800 text-white text-xs font-bold rounded-lg shadow-sm transition-colors cursor-pointer"
          >
            Aceptar / Cerrar Evaluador
          </button>
        </div>
      </div>
    </div>
  );
};
