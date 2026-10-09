import React, { useState, useEffect, useCallback } from 'react';
import { SLIDES } from './data/slidesData';
import { HeaderNavbar } from './components/HeaderNavbar';
import { SlideViewer } from './components/SlideViewer';
import { ImageModal } from './components/ImageModal';
import { MaddoxCalculatorModal } from './components/MaddoxCalculatorModal';
import { ComparativeTable } from './components/ComparativeTable';
import { ClinicalQuiz } from './components/ClinicalQuiz';
import { SpeakerNotesModal } from './components/SpeakerNotesModal';
import { ThumbnailsDrawer } from './components/ThumbnailsDrawer';
import { HtmlCodeModal } from './components/HtmlCodeModal';
import { generateStandaloneEditableHTML } from './utils/htmlExporter';
import {
  ChevronLeft,
  ChevronRight,
  Calculator,
  ArrowRightLeft,
  HelpCircle,
  LayoutGrid,
  FileText,
  Volume2,
  VolumeX,
  BookOpen,
  Sparkles,
  Heart,
  Printer,
  Edit3,
  Code2,
  Download
} from 'lucide-react';

const SHARED_APP_URL = "https://ais-pre-jxtyoyddiqytgpceipcric-600317537407.us-west2.run.app";

export default function App() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

  // Modals state
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [modalImageData, setModalImageData] = useState({ src: '', title: '', caption: '' });
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [isComparativeOpen, setIsComparativeOpen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isNotesOpen, setIsNotesOpen] = useState(false);
  const [isThumbnailsOpen, setIsThumbnailsOpen] = useState(false);
  const [isHtmlModalOpen, setIsHtmlModalOpen] = useState(false);

  const currentSlide = SLIDES[currentSlideIndex];

  // Stop speech when slide changes
  const stopSpeech = useCallback(() => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  }, []);

  const handlePrev = useCallback(() => {
    stopSpeech();
    setCurrentSlideIndex((prev) => Math.max(0, prev - 1));
  }, [stopSpeech]);

  const handleNext = useCallback(() => {
    stopSpeech();
    setCurrentSlideIndex((prev) => Math.min(SLIDES.length - 1, prev + 1));
  }, [stopSpeech]);

  const handleSelectSlide = (index: number) => {
    stopSpeech();
    setCurrentSlideIndex(index);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if an input is focused or in edit mode
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName) || (e.target as HTMLElement)?.isContentEditable) {
        return;
      }

      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        handleNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        handlePrev();
      } else if (e.key === 'Escape') {
        setIsImageModalOpen(false);
        setIsCalculatorOpen(false);
        setIsComparativeOpen(false);
        setIsQuizOpen(false);
        setIsNotesOpen(false);
        setIsThumbnailsOpen(false);
        setIsHtmlModalOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  // Fullscreen toggle
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
        setIsFullscreen(false);
      }
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Text to Speech
  const toggleSpeech = () => {
    if (!('speechSynthesis' in window)) {
      alert("Tu navegador no soporta síntesis de voz.");
      return;
    }

    if (isSpeaking) {
      stopSpeech();
    } else {
      stopSpeech();
      const narrationText = `${currentSlide.questionTitle}. ${currentSlide.subtitle}. ${currentSlide.definition}. Perla de enfermería: ${currentSlide.clinicalPearl}`;
      const utterance = new SpeechSynthesisUtterance(narrationText);
      utterance.lang = 'es-ES';
      utterance.rate = 0.95;
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      setIsSpeaking(true);
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleOpenImageModal = (src: string, title: string, caption: string) => {
    setModalImageData({ src, title, caption });
    setIsImageModalOpen(true);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadHtml = () => {
    const htmlString = generateStandaloneEditableHTML(SLIDES, SHARED_APP_URL);
    const blob = new Blob([htmlString], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'presentacion_salud_terapia_intravenosa_editable.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(SHARED_APP_URL);
      alert("¡Enlace copiado al portapapeles!\n" + SHARED_APP_URL);
    } catch {
      // fallback
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fdf2f4] text-neutral-950 font-sans selection:bg-rose-300 selection:text-black">
      
      {/* Top Navigation & Controls */}
      <HeaderNavbar
        currentIndex={currentSlideIndex}
        totalSlides={SLIDES.length}
        onPrev={handlePrev}
        onNext={handleNext}
        isFullscreen={isFullscreen}
        onToggleFullscreen={toggleFullscreen}
        isSpeaking={isSpeaking}
        onToggleSpeech={toggleSpeech}
        isEditMode={isEditMode}
        onToggleEditMode={() => setIsEditMode(prev => !prev)}
        onOpenHtmlModal={() => setIsHtmlModalOpen(true)}
        onDownloadHtml={handleDownloadHtml}
        onCopyLink={handleCopyLink}
        onOpenCalculator={() => setIsCalculatorOpen(true)}
        onOpenComparative={() => setIsComparativeOpen(true)}
        onOpenQuiz={() => setIsQuizOpen(true)}
        onOpenThumbnails={() => setIsThumbnailsOpen(true)}
        onOpenSpeakerNotes={() => setIsNotesOpen(true)}
        onPrint={handlePrint}
      />

      {/* Main Slide Presentation Content */}
      <main className="flex-1 flex flex-col items-center justify-center p-2 sm:p-4 md:py-6">
        <SlideViewer
          slide={currentSlide}
          isEditMode={isEditMode}
          onOpenImageModal={handleOpenImageModal}
          onOpenCalculator={() => setIsCalculatorOpen(true)}
          onOpenComparative={() => setIsComparativeOpen(true)}
          onOpenQuiz={() => setIsQuizOpen(true)}
        />
      </main>

      {/* Slide Navigator Thumbnails Bar (Bottom) */}
      <footer className="bg-gradient-to-r from-[#fae8eb] via-[#fce7f3] to-[#fae8eb] border-t-2 border-rose-300 py-3 px-4 shadow-sm no-print">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          
          {/* Quick numbers pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto max-w-full pb-1 sm:pb-0">
            {SLIDES.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => handleSelectSlide(idx)}
                className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                  currentSlideIndex === idx
                    ? 'bg-neutral-950 text-white shadow-sm ring-2 ring-rose-400'
                    : 'bg-white/80 hover:bg-rose-200 text-neutral-900 border border-rose-200'
                }`}
                title={s.questionTitle}
              >
                <span>{idx + 1}</span>
                <span className="hidden md:inline text-[11px] font-semibold opacity-90">
                  {idx === 0 ? 'Portada' : idx <= 5 ? `Tema ${idx}` : idx === 6 ? 'Comparativa' : idx === 7 ? 'Casos' : idx === 8 ? 'Decálogo' : 'Fuentes'}
                </span>
              </button>
            ))}
          </div>

          {/* Direct Slide Controllers */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              disabled={currentSlideIndex === 0}
              className="flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-bold bg-white hover:bg-rose-100 border border-rose-300 disabled:opacity-40 disabled:hover:bg-white text-neutral-950 transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Anterior</span>
            </button>

            <span className="text-xs font-extrabold text-neutral-900 px-1">
              Diapositiva {currentSlideIndex + 1} de {SLIDES.length}
            </span>

            <button
              onClick={handleNext}
              disabled={currentSlideIndex === SLIDES.length - 1}
              className="flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-bold bg-rose-600 hover:bg-rose-700 text-white shadow-xs disabled:opacity-40 disabled:hover:bg-rose-600 transition-colors cursor-pointer"
            >
              <span>Siguiente</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </footer>

      {/* Modals */}
      <ImageModal
        isOpen={isImageModalOpen}
        onClose={() => setIsImageModalOpen(false)}
        imageSrc={modalImageData.src}
        imageTitle={modalImageData.title}
        caption={modalImageData.caption}
      />

      <MaddoxCalculatorModal
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
      />

      <ComparativeTable
        isOpen={isComparativeOpen}
        onClose={() => setIsComparativeOpen(false)}
      />

      <ClinicalQuiz
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
      />

      <SpeakerNotesModal
        isOpen={isNotesOpen}
        onClose={() => setIsNotesOpen(false)}
        slide={currentSlide}
      />

      <ThumbnailsDrawer
        isOpen={isThumbnailsOpen}
        onClose={() => setIsThumbnailsOpen(false)}
        slides={SLIDES}
        currentIndex={currentSlideIndex}
        onSelectSlide={handleSelectSlide}
      />

      <HtmlCodeModal
        isOpen={isHtmlModalOpen}
        onClose={() => setIsHtmlModalOpen(false)}
        slides={SLIDES}
        sharedUrl={SHARED_APP_URL}
      />

    </div>
  );
}

