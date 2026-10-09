import React, { useState } from 'react';
import { X, ArrowRightLeft, ShieldCheck, AlertCircle, Thermometer, Droplet, Flame, Eye } from 'lucide-react';

interface ComparativeTableProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ComparativeTable: React.FC<ComparativeTableProps> = ({
  isOpen,
  onClose,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'infiltracion' | 'extravasacion' | 'flebitis' | 'hematoma'>('all');

  if (!isOpen) return null;

  const comparisonData = [
    {
      id: 'infiltracion',
      name: 'Infiltración',
      category: 'Evento mecánico',
      icon: Droplet,
      accentBg: 'bg-blue-50 border-blue-200 text-blue-950',
      badgeColor: 'bg-blue-100 text-blue-900 border-blue-300',
      liquid: 'NO VESICANTE (suero salino, glucosado, Ringer lactato).',
      temperature: 'FRÍA al tacto (signo patognomónico).',
      skinColor: 'Pálida, blanquecina, translúcida por edema.',
      pain: 'Dolor sordo, pesadez, tirantez, no quemante.',
      edema: 'Edema blando y difuso alrededor de la punción (fóvea +).',
      tissueRisk: 'Bajo a moderado (compresión mecánica, molestia transitoria).',
      immediateAction: 'Detener infusión, retirar catéter, elevar extremidad, compresas secas.',
      goldenRule: 'Toca con el dorso de tu mano: si está fría, es infiltración.'
    },
    {
      id: 'extravasacion',
      name: 'Extravasación',
      category: 'EMERGENCIA clínica',
      icon: Flame,
      accentBg: 'bg-rose-50 border-rose-300 text-rose-950',
      badgeColor: 'bg-rose-200 text-rose-950 border-rose-400 font-bold',
      liquid: 'VESICANTE o IRRITANTE (quimioterapia, calcio, noradrenalina, KCl concentrado).',
      temperature: 'Inicialmente fría o neutra, luego calor por inflamación severa.',
      skinColor: 'Eritema violáceo oscuro, flictenas (ampollas) y necrosis negruzca tardía.',
      pain: 'Dolor URENTE severo, quemante, punzante ("fuego bajo la piel").',
      edema: 'Induración tensa y dura, delimitada, con gran sensibilidad.',
      tissueRisk: 'EXTREMO: Necrosis celular irreversible, úlcera profunda, pérdida funcional.',
      immediateAction: 'PARAR DE INMEDIATO. NO retirar catéter aún: aspirar 3-5 ml, delimitar eritema con rotulador, aplicar antídoto específico si procede y luego retirar.',
      goldenRule: 'Si el paciente dice "me quema", no dudes: cierra la vía en el segundo uno.'
    },
    {
      id: 'flebitis',
      name: 'Flebitis',
      category: 'Inflamación endotelial',
      icon: AlertCircle,
      accentBg: 'bg-amber-50 border-amber-300 text-amber-950',
      badgeColor: 'bg-amber-200 text-amber-950 border-amber-400',
      liquid: 'Cualquier infusión o simple presencia del catéter (mecánica, química, infecciosa).',
      temperature: 'CALIENTE al tacto (calor local palpable).',
      skinColor: 'Eritema lineal (línea roja que sube por la vena).',
      pain: 'Dolor y sensibilidad exquisita a lo largo del trayecto venoso.',
      edema: 'Edema moderado con CORDÓN VENOSO palpable (dura como una cuerda).',
      tissueRisk: 'Moderado a alto: Tromboflebitis, fibrosis venosa, riesgo de bacteriemia.',
      immediateAction: 'Evaluar con Maddox (retirar si Grado ≥ 2), compresas tibias, reposo del brazo, recanalizar en otro miembro.',
      goldenRule: 'Si ves una franja roja y se siente como una cuerda dura, es flebitis.'
    },
    {
      id: 'hematoma',
      name: 'Hematoma',
      category: 'Complicación hemorrágica',
      icon: Eye,
      accentBg: 'bg-purple-50 border-purple-200 text-purple-950',
      badgeColor: 'bg-purple-200 text-purple-950 border-purple-300',
      liquid: 'SANGRE extravasada (rotura de pared de vaso sanguíneo o transfixión).',
      temperature: 'Normotérmica o neutra.',
      skinColor: 'Equimosis violácea/azulada ("moretón") que vira a verde y amarillo.',
      pain: 'Dolor localizado a la presión directa, sensación de bulto doloroso.',
      edema: 'Tumefacción delimitada, masa blanda elástica palpable.',
      tissueRisk: 'Bajo a moderado (molestia estética y dolor local; riesgo de sobreinfección si es grande).',
      immediateAction: 'Suspender punción, PRESIÓN DIGITAL FIRME continua por 3-5 min (sin doblar brazo), frío las primeras 24 h.',
      goldenRule: '¡Nunca le digas al paciente que doble el brazo! Compresión firme con brazo extendido.'
    }
  ];

  const filteredData = selectedFilter === 'all' 
    ? comparisonData 
    : comparisonData.filter(d => d.id === selectedFilter);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative max-w-5xl w-full bg-[#fdf2f4] rounded-2xl border-2 border-rose-300 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="px-6 py-4 bg-gradient-to-r from-rose-200 via-rose-100 to-rose-200 border-b border-rose-300 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-rose-600 text-white rounded-lg shadow-xs">
              <ArrowRightLeft className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-neutral-950 text-lg">
                Cuadro Comparativo de Diagnóstico Diferencial en Cabecera
              </h3>
              <p className="text-xs text-neutral-700">
                Infiltración vs Extravasación vs Flebitis vs Hematoma — Criterios de GuíaSalud y de la INS
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

        {/* Filter pills */}
        <div className="px-6 py-3 bg-white/60 border-b border-rose-200 flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold text-neutral-700">Ver complicación:</span>
          {[
            { id: 'all', label: 'Ver todas (Matriz completa)' },
            { id: 'infiltracion', label: 'Infiltración' },
            { id: 'extravasacion', label: 'Extravasación' },
            { id: 'flebitis', label: 'Flebitis' },
            { id: 'hematoma', label: 'Hematoma' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedFilter(tab.id as any)}
              className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                selectedFilter === tab.id
                  ? 'bg-neutral-950 text-white shadow-xs'
                  : 'bg-rose-100/70 hover:bg-rose-200 text-neutral-900 border border-rose-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Table / Cards content */}
        <div className="overflow-y-auto p-4 md:p-6 space-y-4 bg-white/70">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredData.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className={`p-4 rounded-xl border-2 shadow-xs transition-all ${item.accentBg} space-y-3`}
                >
                  <div className="flex items-center justify-between border-b pb-2.5 border-black/10">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 bg-white/80 rounded-lg shadow-2xs">
                        <Icon className="w-5 h-5 text-neutral-950" />
                      </div>
                      <h4 className="font-extrabold text-lg text-neutral-950">
                        {item.name}
                      </h4>
                    </div>
                    <span className={`text-[11px] px-2.5 py-0.5 rounded-full border ${item.badgeColor}`}>
                      {item.category}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-white/85 p-2 rounded-lg border border-black/5">
                      <span className="font-bold text-neutral-900 block flex items-center gap-1">
                        <Thermometer className="w-3.5 h-3.5 text-rose-600" /> Temperatura:
                      </span>
                      <p className="text-neutral-800 font-semibold">{item.temperature}</p>
                    </div>

                    <div className="bg-white/85 p-2 rounded-lg border border-black/5">
                      <span className="font-bold text-neutral-900 block flex items-center gap-1">
                        <Eye className="w-3.5 h-3.5 text-rose-600" /> Color cutáneo:
                      </span>
                      <p className="text-neutral-800">{item.skinColor}</p>
                    </div>
                  </div>

                  <div className="bg-white/85 p-2.5 rounded-lg border border-black/5 text-xs space-y-1">
                    <span className="font-bold text-neutral-950 block">Líquido causante:</span>
                    <p className="text-neutral-800">{item.liquid}</p>
                  </div>

                  <div className="bg-white/85 p-2.5 rounded-lg border border-black/5 text-xs space-y-1">
                    <span className="font-bold text-neutral-950 block">Dolor y palpación:</span>
                    <p className="text-neutral-800">{item.pain} {item.edema}</p>
                  </div>

                  <div className="bg-white/85 p-2.5 rounded-lg border border-black/5 text-xs space-y-1">
                    <span className="font-bold text-neutral-950 block">Conducta de enfermería:</span>
                    <p className="text-neutral-900 font-medium">{item.immediateAction}</p>
                  </div>

                  <div className="p-2.5 bg-rose-200/50 rounded-lg border border-rose-300 text-xs text-neutral-950">
                    <span className="font-extrabold text-rose-950 block mb-0.5">💡 Regla de oro de cabecera:</span>
                    {item.goldenRule}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-rose-50 border-t border-rose-200 flex justify-between items-center">
          <p className="text-xs text-neutral-700 italic">
            Basado en la Guía de Práctica Clínica de Terapia Intravenosa (GuíaSalud / AETSA).
          </p>
          <button
            onClick={onClose}
            className="px-5 py-1.5 bg-neutral-950 hover:bg-neutral-800 text-white text-xs font-bold rounded-lg shadow-sm transition-colors cursor-pointer"
          >
            Cerrar Comparador
          </button>
        </div>
      </div>
    </div>
  );
};
