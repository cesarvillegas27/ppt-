import React from 'react';
import { X, LayoutGrid, Check } from 'lucide-react';
import { SlideData } from '../types/presentation';

interface ThumbnailsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  slides: SlideData[];
  currentIndex: number;
  onSelectSlide: (index: number) => void;
}

export const ThumbnailsDrawer: React.FC<ThumbnailsDrawerProps> = ({
  isOpen,
  onClose,
  slides,
  currentIndex,
  onSelectSlide,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative max-w-4xl w-full bg-[#fdf2f4] rounded-2xl border-2 border-rose-300 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="px-6 py-4 bg-gradient-to-r from-rose-200 via-rose-100 to-rose-200 border-b border-rose-300 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <LayoutGrid className="w-5 h-5 text-rose-800" />
            <h3 className="font-extrabold text-neutral-950 text-base md:text-lg">
              Índice y Miniaturas de la Presentación ({slides.length} Diapositivas)
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-rose-300 text-neutral-900 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Grid */}
        <div className="overflow-y-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 bg-white/70">
          {slides.map((slide, index) => {
            const isSelected = currentIndex === index;
            return (
              <div
                key={slide.id}
                onClick={() => {
                  onSelectSlide(index);
                  onClose();
                }}
                className={`group relative p-3 rounded-xl border-2 transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'border-rose-600 bg-rose-100/90 shadow-md ring-2 ring-rose-400'
                    : 'border-rose-200 bg-white/90 hover:border-rose-400 hover:bg-rose-50 shadow-2xs'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-black px-2 py-0.5 rounded-full bg-rose-200 text-neutral-950 border border-rose-300">
                      Diapo {index + 1}
                    </span>
                    {isSelected && (
                      <span className="flex items-center gap-0.5 text-[11px] font-bold text-rose-800">
                        <Check className="w-3.5 h-3.5" /> En pantalla
                      </span>
                    )}
                  </div>

                  <div className="relative aspect-video rounded-lg overflow-hidden border border-rose-200 mb-2.5 bg-neutral-100">
                    <img
                      src={slide.image}
                      alt={slide.questionTitle}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <h4 className="text-xs font-extrabold text-neutral-950 line-clamp-2 leading-snug">
                    {slide.questionTitle}
                  </h4>
                </div>

                <p className="mt-2 text-[11px] text-neutral-600 line-clamp-2">
                  {slide.subtitle}
                </p>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-rose-50 border-t border-rose-200 flex justify-between items-center text-xs text-neutral-700">
          <span>Haz clic en cualquier diapositiva para navegar inmediatamente.</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-neutral-950 hover:bg-neutral-800 text-white font-bold rounded-lg cursor-pointer"
          >
            Cerrar Índice
          </button>
        </div>
      </div>
    </div>
  );
};
