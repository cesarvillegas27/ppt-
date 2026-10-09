import React from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  Volume2,
  VolumeX,
  Calculator,
  ArrowRightLeft,
  HelpCircle,
  LayoutGrid,
  FileText,
  Printer,
  Sparkles,
  HeartPulse,
  Edit3,
  Check,
  Code2,
  Download,
  Share2
} from 'lucide-react';

interface HeaderNavbarProps {
  currentIndex: number;
  totalSlides: number;
  onPrev: () => void;
  onNext: () => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
  isSpeaking: boolean;
  onToggleSpeech: () => void;
  isEditMode: boolean;
  onToggleEditMode: () => void;
  onOpenHtmlModal: () => void;
  onDownloadHtml: () => void;
  onCopyLink: () => void;
  onOpenCalculator: () => void;
  onOpenComparative: () => void;
  onOpenQuiz: () => void;
  onOpenThumbnails: () => void;
  onOpenSpeakerNotes: () => void;
  onPrint: () => void;
}

export const HeaderNavbar: React.FC<HeaderNavbarProps> = ({
  currentIndex,
  totalSlides,
  onPrev,
  onNext,
  isFullscreen,
  onToggleFullscreen,
  isSpeaking,
  onToggleSpeech,
  isEditMode,
  onToggleEditMode,
  onOpenHtmlModal,
  onDownloadHtml,
  onCopyLink,
  onOpenCalculator,
  onOpenComparative,
  onOpenQuiz,
  onOpenThumbnails,
  onOpenSpeakerNotes,
  onPrint,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-gradient-to-r from-[#fae8eb] via-[#fce7f3] to-[#fae8eb] border-b-2 border-rose-300 shadow-xs px-3 sm:px-6 py-2.5 transition-all no-print">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2.5">
        
        {/* Brand & topic */}
        <div className="flex items-center gap-3">
          <div className="p-2 bg-rose-600 text-white rounded-xl shadow-xs flex items-center justify-center">
            <HeartPulse className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-rose-200/90 text-rose-950 border border-rose-300">
                PPT CLÍNICO INTERACTIVO & EDITABLE
              </span>
              <span className="hidden sm:inline-block text-[11px] font-semibold text-neutral-700">
                100% Humanizado & Basado en Evidencia
              </span>
            </div>
            <h1 className="text-sm sm:text-base font-extrabold text-neutral-950 leading-tight">
              Terapia Intravenosa: Escala Maddox, Infiltración, Extravasación, Hematoma y Flebitis
            </h1>
          </div>
        </div>

        {/* Quick Tools & Presentation Controls */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          
          {/* Live In-App HTML Edit Toggle */}
          <button
            onClick={onToggleEditMode}
            className={`flex items-center gap-1 px-2.5 py-1.5 text-xs font-black rounded-lg border transition-all cursor-pointer shadow-2xs ${
              isEditMode
                ? 'bg-rose-700 text-white border-rose-800 animate-pulse'
                : 'bg-white hover:bg-rose-100 text-neutral-900 border-rose-300'
            }`}
            title={isEditMode ? "Salir de modo edición" : "Activar modo edición de textos y títulos"}
          >
            {isEditMode ? <Check className="w-3.5 h-3.5" /> : <Edit3 className="w-3.5 h-3.5 text-rose-700" />}
            <span>{isEditMode ? 'Terminar Edición' : 'Editar PPT'}</span>
          </button>

          {/* HTML Code & Download button */}
          <button
            onClick={onOpenHtmlModal}
            className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-bold rounded-lg bg-rose-200/90 hover:bg-rose-300 text-neutral-950 border border-rose-300 transition-all shadow-2xs cursor-pointer"
            title="Ver código HTML, descargar archivo editable y copiar enlace"
          >
            <Code2 className="w-3.5 h-3.5 text-rose-900" />
            <span className="hidden sm:inline">HTML / Enlaces</span>
          </button>

          {/* Quick interactive clinical tools */}
          <button
            onClick={onOpenCalculator}
            className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-bold rounded-lg bg-rose-200/80 hover:bg-rose-300 text-neutral-950 border border-rose-300 transition-all shadow-2xs cursor-pointer"
            title="Calculadora interactiva de Escala de Maddox"
          >
            <Calculator className="w-3.5 h-3.5 text-rose-900" />
            <span className="hidden sm:inline">Calc. Maddox</span>
          </button>

          <button
            onClick={onOpenComparative}
            className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-bold rounded-lg bg-rose-200/80 hover:bg-rose-300 text-neutral-950 border border-rose-300 transition-all shadow-2xs cursor-pointer"
            title="Tabla Comparativa Diferencial"
          >
            <ArrowRightLeft className="w-3.5 h-3.5 text-rose-900" />
            <span className="hidden sm:inline">Comparativa</span>
          </button>

          <button
            onClick={onOpenQuiz}
            className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-bold rounded-lg bg-rose-200/80 hover:bg-rose-300 text-neutral-950 border border-rose-300 transition-all shadow-2xs cursor-pointer"
            title="Casos clínicos y autoevaluación"
          >
            <HelpCircle className="w-3.5 h-3.5 text-rose-900" />
            <span className="hidden sm:inline">Casos</span>
          </button>

          <div className="h-5 w-[1px] bg-rose-300 mx-0.5 hidden sm:block" />

          {/* Audio voice narration */}
          <button
            onClick={onToggleSpeech}
            className={`flex items-center gap-1 px-2 py-1.5 text-xs font-bold rounded-lg border transition-all cursor-pointer ${
              isSpeaking
                ? 'bg-rose-600 text-white border-rose-700 shadow-sm animate-pulse'
                : 'bg-white hover:bg-rose-100 text-neutral-900 border-rose-300'
            }`}
            title={isSpeaking ? "Detener lectura en voz alta" : "Escuchar diapositiva con voz humana"}
          >
            {isSpeaking ? (
              <VolumeX className="w-3.5 h-3.5 text-white" />
            ) : (
              <Volume2 className="w-3.5 h-3.5 text-rose-800" />
            )}
          </button>

          {/* Thumbnails grid */}
          <button
            onClick={onOpenThumbnails}
            className="p-1.5 text-neutral-900 bg-white hover:bg-rose-100 rounded-lg border border-rose-300 transition-all shadow-2xs cursor-pointer"
            title="Ver todas las diapositivas (Índice)"
          >
            <LayoutGrid className="w-4 h-4 text-neutral-900" />
          </button>

          {/* Speaker notes */}
          <button
            onClick={onOpenSpeakerNotes}
            className="p-1.5 text-neutral-900 bg-white hover:bg-rose-100 rounded-lg border border-rose-300 transition-all shadow-2xs cursor-pointer"
            title="Notas del Orador / Docencia"
          >
            <FileText className="w-4 h-4 text-neutral-900" />
          </button>

          {/* Print button */}
          <button
            onClick={onPrint}
            className="p-1.5 text-neutral-900 bg-white hover:bg-rose-100 rounded-lg border border-rose-300 transition-all shadow-2xs cursor-pointer hidden md:flex"
            title="Imprimir / Exportar a PDF"
          >
            <Printer className="w-4 h-4 text-neutral-900" />
          </button>

          {/* Fullscreen */}
          <button
            onClick={onToggleFullscreen}
            className="p-1.5 text-neutral-900 bg-white hover:bg-rose-100 rounded-lg border border-rose-300 transition-all shadow-2xs cursor-pointer"
            title={isFullscreen ? "Salir de pantalla completa" : "Modo presentación en pantalla completa"}
          >
            {isFullscreen ? (
              <Minimize2 className="w-4 h-4 text-neutral-900" />
            ) : (
              <Maximize2 className="w-4 h-4 text-neutral-900" />
            )}
          </button>

          {/* Prev / Next controls with counter */}
          <div className="flex items-center bg-white rounded-xl border border-rose-300 p-0.5 shadow-2xs">
            <button
              onClick={onPrev}
              disabled={currentIndex === 0}
              className="p-1 text-neutral-900 hover:bg-rose-100 rounded-lg disabled:opacity-30 disabled:hover:bg-transparent transition-colors cursor-pointer"
              title="Diapositiva anterior (Flecha Izquierda)"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="px-2 text-xs font-black text-neutral-950">
              {currentIndex + 1} / {totalSlides}
            </span>
            <button
              onClick={onNext}
              disabled={currentIndex === totalSlides - 1}
              className="p-1 text-neutral-900 hover:bg-rose-100 rounded-lg disabled:opacity-30 disabled:hover:bg-transparent transition-colors cursor-pointer"
              title="Siguiente diapositiva (Flecha Derecha)"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </header>
  );
};

