import React from 'react';
import { X, Mic, Lightbulb, GraduationCap } from 'lucide-react';
import { SlideData } from '../types/presentation';

interface SpeakerNotesModalProps {
  isOpen: boolean;
  onClose: () => void;
  slide: SlideData;
}

export const SpeakerNotesModal: React.FC<SpeakerNotesModalProps> = ({
  isOpen,
  onClose,
  slide,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div className="relative max-w-xl w-full bg-[#fdf2f4] rounded-2xl border-2 border-rose-300 shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
        {/* Header */}
        <div className="px-6 py-4 bg-gradient-to-r from-rose-200 via-rose-100 to-rose-200 border-b border-rose-300 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-rose-800" />
            <h3 className="font-extrabold text-neutral-950 text-base md:text-lg">
              Notas Docentes y Guión del Orador
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-rose-300 text-neutral-900 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 space-y-4 bg-white/70">
          <div className="p-3 bg-rose-100/70 border border-rose-200 rounded-xl">
            <span className="text-xs font-black uppercase text-rose-900 block mb-1">
              Diapositiva Actual:
            </span>
            <p className="font-bold text-neutral-950 text-sm">
              {slide.questionTitle}
            </p>
          </div>

          <div className="p-4 bg-white rounded-xl border border-rose-200 shadow-2xs space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-black uppercase text-rose-800">
              <Mic className="w-4 h-4 text-rose-600" />
              <span>Qué decir en voz alta durante la ponencia:</span>
            </div>
            <p className="text-sm text-neutral-950 leading-relaxed italic">
              "{slide.speakerNotes}"
            </p>
          </div>

          <div className="p-4 bg-rose-50 rounded-xl border border-rose-200 space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-black uppercase text-neutral-800">
              <Lightbulb className="w-4 h-4 text-amber-600" />
              <span>Perla de Humanización en Cabecera:</span>
            </div>
            <p className="text-sm text-neutral-900 leading-relaxed font-medium">
              {slide.clinicalPearl}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-rose-50 border-t border-rose-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-neutral-950 hover:bg-neutral-800 text-white text-xs font-bold rounded-lg shadow-sm transition-colors cursor-pointer"
          >
            Cerrar Notas
          </button>
        </div>
      </div>
    </div>
  );
};
