import React, { useState } from 'react';
import {
  ZoomIn,
  AlertTriangle,
  CheckCircle2,
  ExternalLink,
  BookOpen,
  Sparkles,
  HeartHandshake,
  ShieldAlert,
  ChevronRight,
  Flame,
  Thermometer,
  Eye,
  Info,
  Layers,
  ArrowRight
} from 'lucide-react';
import { SlideData } from '../types/presentation';

interface SlideViewerProps {
  slide: SlideData;
  isEditMode?: boolean;
  onOpenImageModal: (src: string, title: string, caption: string) => void;
  onOpenCalculator?: () => void;
  onOpenComparative?: () => void;
  onOpenQuiz?: () => void;
}

export const SlideViewer: React.FC<SlideViewerProps> = ({
  slide,
  isEditMode = false,
  onOpenImageModal,
  onOpenCalculator,
  onOpenComparative,
  onOpenQuiz,
}) => {
  const [activeTab, setActiveTab] = useState<'general' | 'protocolo' | 'humanizado' | 'grados'>('general');

  return (
    <div className="w-full max-w-6xl mx-auto px-3 sm:px-6 py-4 slide-container">
      {/* Live edit alert banner if active */}
      {isEditMode && (
        <div className="mb-3 px-4 py-2.5 bg-rose-200 border-2 border-rose-400 rounded-2xl text-xs font-bold text-rose-950 flex items-center justify-between shadow-xs animate-pulse">
          <div className="flex items-center gap-2">
            <span>✏️ <strong>MODO EDICIÓN ACTIVO:</strong> Puedes hacer clic sobre cualquier título, texto o perla clínica para editarlo directamente aquí.</span>
          </div>
          <span className="text-[10px] bg-rose-700 text-white px-2 py-0.5 rounded-md font-bold uppercase">Editable</span>
        </div>
      )}

      {/* Main Slide Card in Palo Rosa styling */}
      <div className="bg-[#fef7f8] rounded-3xl border-2 border-rose-300 shadow-xl overflow-hidden transition-all duration-300">
        
        {/* Top Highlighted Badge & Centered Bold Title Section */}
        <div className="pt-8 pb-5 px-4 sm:px-10 text-center bg-gradient-to-b from-[#fce7ed] to-[#fef7f8] border-b border-rose-200">
          
          {/* Badge */}
          <div className="flex justify-center mb-3">
            <span
              contentEditable={isEditMode}
              suppressContentEditableWarning
              className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-black tracking-wider uppercase bg-rose-200/90 text-neutral-950 border border-rose-300 shadow-2xs ${
                isEditMode ? 'ring-2 ring-rose-400 cursor-text' : ''
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-rose-800" />
              {slide.badge}
            </span>
          </div>

          {/* Centered Bold Highlighted Title */}
          <div className="flex justify-center px-2">
            <h2
              contentEditable={isEditMode}
              suppressContentEditableWarning
              className={`inline-block bg-gradient-to-r from-rose-200 via-rose-300 to-rose-200 text-neutral-950 font-black text-xl sm:text-2xl md:text-3xl px-6 py-2.5 rounded-2xl border-2 border-rose-300/80 shadow-xs tracking-tight text-center max-w-4xl ${
                isEditMode ? 'ring-2 ring-rose-500 cursor-text bg-rose-100' : ''
              }`}
            >
              {slide.questionTitle}
            </h2>
          </div>

          {/* Subtitle */}
          <p
            contentEditable={isEditMode}
            suppressContentEditableWarning
            className={`mt-3 text-sm sm:text-base font-semibold text-neutral-800 max-w-2xl mx-auto text-center ${
              isEditMode ? 'p-1 border border-dashed border-rose-400 rounded-lg cursor-text' : ''
            }`}
          >
            {slide.subtitle}
          </p>

          {/* Internal Slide Tabs for interactive navigation */}
          <div className="mt-5 flex flex-wrap justify-center gap-1.5 sm:gap-2">
            <button
              onClick={() => setActiveTab('general')}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                activeTab === 'general'
                  ? 'bg-neutral-950 text-white shadow-xs'
                  : 'bg-white hover:bg-rose-100 text-neutral-900 border border-rose-200'
              }`}
            >
              📋 Definición & Signos Clave
            </button>
            
            {slide.grades && (
              <button
                onClick={() => setActiveTab('grados')}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                  activeTab === 'grados'
                    ? 'bg-neutral-950 text-white shadow-xs'
                    : 'bg-white hover:bg-rose-100 text-neutral-900 border border-rose-200'
                }`}
              >
                📊 Niveles 0 al 5 de Maddox
              </button>
            )}

            <button
              onClick={() => setActiveTab('protocolo')}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                activeTab === 'protocolo'
                  ? 'bg-neutral-950 text-white shadow-xs'
                  : 'bg-white hover:bg-rose-100 text-neutral-900 border border-rose-200'
              }`}
            >
              🛡️ Protocolo y Conducta Inmediata
            </button>

            <button
              onClick={() => setActiveTab('humanizado')}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                activeTab === 'humanizado'
                  ? 'bg-neutral-950 text-white shadow-xs'
                  : 'bg-white hover:bg-rose-100 text-neutral-900 border border-rose-200'
              }`}
            >
              ❤️ Perla Humanizada & Fuentes
            </button>
          </div>
        </div>

        {/* Slide Body: 2 Columns Layout */}
        <div className="p-4 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Column: Interactive Medical Illustration with Click-to-Zoom */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <div
              onClick={() => onOpenImageModal(slide.image, slide.questionTitle, slide.imageCaption)}
              className="group relative rounded-2xl overflow-hidden border-2 border-rose-200 bg-white shadow-md cursor-pointer aspect-4/3 flex items-center justify-center"
            >
              <img
                src={slide.image}
                alt={slide.questionTitle}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Zoom overlay badge */}
              <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="px-3 py-1.5 bg-white/95 text-neutral-950 text-xs font-bold rounded-xl shadow-lg flex items-center gap-1.5">
                  <ZoomIn className="w-4 h-4 text-rose-700" />
                  Clic para ampliar ilustración
                </span>
              </div>
              <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/60 backdrop-blur-xs text-white text-[10px] font-semibold rounded-md flex items-center gap-1">
                <ZoomIn className="w-3 h-3" /> Zoom
              </div>
            </div>

            {/* Image caption */}
            <p
              contentEditable={isEditMode}
              suppressContentEditableWarning
              className={`text-xs text-neutral-700 italic text-center px-2 ${
                isEditMode ? 'p-1 border border-dashed border-rose-300 rounded' : ''
              }`}
            >
              <span className="font-bold text-neutral-900 not-italic">Ilustración médica:</span> {slide.imageCaption}
            </p>

            {/* Quick interactive shortcuts inside slide */}
            {slide.id === 2 && onOpenCalculator && (
              <button
                onClick={onOpenCalculator}
                className="w-full mt-2 py-2.5 px-4 bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800 text-white text-xs font-black rounded-xl shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Abrir Calculadora Interactiva de Maddox</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            )}

            {slide.id === 7 && onOpenComparative && (
              <button
                onClick={onOpenComparative}
                className="w-full mt-2 py-2.5 px-4 bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800 text-white text-xs font-black rounded-xl shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Ver Matriz Comparativa Completa</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            )}

            {slide.id === 8 && onOpenQuiz && (
              <button
                onClick={onOpenQuiz}
                className="w-full mt-2 py-2.5 px-4 bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800 text-white text-xs font-black rounded-xl shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Iniciar Taller de 5 Casos Clínicos</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Right Column: Tabbed Content */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Tab: General & Signos */}
            {activeTab === 'general' && (
              <div className="space-y-4 animate-fadeIn">
                {/* Definition Box */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-rose-200 shadow-2xs space-y-2">
                  <div className="flex items-center gap-2 text-xs font-black uppercase text-rose-800 tracking-wider">
                    <Info className="w-4 h-4 text-rose-600" />
                    <span>Definición Clínica Veraz y Práctica:</span>
                  </div>
                  <p
                    contentEditable={isEditMode}
                    suppressContentEditableWarning
                    className={`text-neutral-950 text-sm sm:text-base leading-relaxed font-medium ${
                      isEditMode ? 'p-1.5 border border-dashed border-rose-400 rounded-lg cursor-text' : ''
                    }`}
                  >
                    {slide.definition}
                  </p>
                </div>

                {/* Etiology (if exists) */}
                {slide.etiology && (
                  <div className="p-4 rounded-2xl bg-[#fff0f3] border border-rose-200 space-y-2">
                    <span className="text-xs font-black uppercase text-neutral-900 tracking-wider block">
                      ¿Por qué ocurre? (Causas frecuentes en el hospital):
                    </span>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-neutral-900">
                      {slide.etiology.map((et, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-rose-600 font-bold">•</span>
                          <span>{et}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Clinical Signs Cards */}
                <div className="space-y-2">
                  <span className="text-xs font-black uppercase text-neutral-900 tracking-wider block">
                    Signos Clínicos y Semiología de Cabecera:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {slide.clinicalSigns.map((sign, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-white border border-rose-200 shadow-2xs hover:border-rose-300 transition-colors"
                      >
                        <h4 className="font-extrabold text-neutral-950 text-xs sm:text-sm mb-1 flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-rose-500 shrink-0" />
                          {sign.label}
                        </h4>
                        <p className="text-neutral-800 text-xs leading-normal">
                          {sign.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Tab: Grados de Maddox (when available) */}
            {activeTab === 'grados' && slide.grades && (
              <div className="space-y-3 animate-fadeIn">
                <div className="p-3 bg-rose-100/70 border border-rose-200 rounded-xl text-xs text-neutral-900">
                  <span className="font-bold text-rose-950">Criterio unificado:</span> La escala de Maddox valora del 0 al 5. A partir de <strong>Grado 2</strong> se considera flebitis significativa y se aconseja retirar la vía. A partir de <strong>Grado 3</strong> se instaura tratamiento activo.
                </div>

                <div className="space-y-2 max-h-[420px] overflow-y-auto pr-1">
                  {slide.grades.map((g, idx) => (
                    <div
                      key={idx}
                      className={`p-3 rounded-xl border-2 transition-all ${g.severityColor} space-y-1`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-black text-xs uppercase px-2 py-0.5 rounded-md bg-white/70 border border-black/10">
                          {g.grade}
                        </span>
                        <span className="font-extrabold text-xs">
                          {g.title}
                        </span>
                      </div>
                      <p className="text-xs font-medium">
                        <strong>Signos:</strong> {g.signs}
                      </p>
                      <p className="text-xs font-semibold pt-1 border-t border-black/10 text-neutral-900">
                        <strong>Conducta:</strong> {g.clinicalAction}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab: Protocolo de Actuación */}
            {activeTab === 'protocolo' && (
              <div className="space-y-4 animate-fadeIn">
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-rose-200 shadow-2xs space-y-3">
                  <div className="flex items-center gap-2 text-xs font-black uppercase text-rose-800 tracking-wider">
                    <ShieldAlert className="w-4 h-4 text-rose-600" />
                    <span>Protocolo de Actuación y Seguridad del Paciente:</span>
                  </div>

                  <div className="space-y-2.5">
                    {slide.actionProtocol.map((step, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-rose-50/70 border border-rose-200 flex items-start gap-3"
                      >
                        <div className="w-6 h-6 rounded-full bg-rose-600 text-white text-xs font-black flex items-center justify-center shrink-0">
                          {idx + 1}
                        </div>
                        <p className="text-xs sm:text-sm font-semibold text-neutral-950 leading-relaxed">
                          {step}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Additional Safety Callout */}
                <div className="p-3.5 bg-gradient-to-r from-amber-50 to-rose-50 rounded-xl border border-amber-300 text-xs text-neutral-950">
                  <span className="font-black text-amber-950 block mb-1">
                    ⚠️ Notificación y Registro Clínico:
                  </span>
                  Recuerda siempre plasmar en la gráfica o sistema electrónico la fecha, hora, estado del acceso, medidas adoptadas y comunicación con el facultativo responsable.
                </div>
              </div>
            )}

            {/* Tab: Humanizado & Fuentes */}
            {activeTab === 'humanizado' && (
              <div className="space-y-4 animate-fadeIn">
                {/* Clinical Pearl Box */}
                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-[#fbe3e8] to-[#fce7eb] border-2 border-rose-300 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-xs font-black uppercase text-rose-950 tracking-wider">
                    <HeartHandshake className="w-5 h-5 text-rose-700" />
                    <span>Perla de Cabecera (El Lado Humano del Cuidado):</span>
                  </div>
                  <p
                    contentEditable={isEditMode}
                    suppressContentEditableWarning
                    className={`text-neutral-950 text-sm sm:text-base font-semibold italic leading-relaxed ${
                      isEditMode ? 'p-1.5 border border-dashed border-rose-400 rounded-lg cursor-text' : ''
                    }`}
                  >
                    "{slide.clinicalPearl}"
                  </p>
                </div>

                {/* Sources & Citations Box */}
                <div className="p-4 rounded-2xl bg-white border border-rose-200 shadow-2xs space-y-3">
                  <div className="flex items-center gap-2 text-xs font-black uppercase text-neutral-900 tracking-wider">
                    <BookOpen className="w-4 h-4 text-rose-700" />
                    <span>Fuentes Bibliográficas Consultadas:</span>
                  </div>

                  <div className="space-y-2">
                    {slide.sources.map((src, idx) => (
                      <a
                        key={idx}
                        href={src.url}
                        target="_blank"
                        rel="noreferrer"
                        className="block p-3 rounded-xl bg-rose-50/70 hover:bg-rose-100 border border-rose-200 transition-colors group cursor-pointer"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-neutral-950 group-hover:text-rose-800 flex items-center gap-1.5">
                            {src.name}
                            <ExternalLink className="w-3.5 h-3.5 text-rose-700 inline" />
                          </span>
                        </div>
                        <p className="mt-1 text-[11px] text-neutral-700 leading-normal">
                          {src.details}
                        </p>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>

        {/* Slide Bottom Bar with Clinical summary quote */}
        <div className="px-6 py-3 bg-[#fae8eb] border-t border-rose-200 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-neutral-800">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span className="font-black text-rose-950">💡 Recordatorio clínico:</span>
            <span>Un catéter periférico bien valorado evita dolor, infecciones y estancias prolongadas.</span>
          </div>
          <div className="flex items-center gap-1 text-[11px] font-bold text-neutral-600">
            <span>Usa las flechas ← → para avanzar</span>
          </div>
        </div>

      </div>
    </div>
  );
};
