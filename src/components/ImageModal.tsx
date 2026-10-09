import React from 'react';
import { X, ZoomIn } from 'lucide-react';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageTitle: string;
  caption: string;
}

export const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onClose,
  imageSrc,
  imageTitle,
  caption,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative max-w-4xl w-full bg-[#fdf2f4] rounded-2xl border-2 border-rose-300 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-rose-200 via-rose-100 to-rose-200 border-b border-rose-300">
          <div className="flex items-center gap-2">
            <ZoomIn className="w-5 h-5 text-rose-800" />
            <h3 className="font-bold text-neutral-950 text-base md:text-lg">
              {imageTitle}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-rose-300/80 text-neutral-900 transition-colors"
            title="Cerrar ampliación"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image body */}
        <div className="overflow-auto p-4 flex flex-col items-center justify-center bg-white/70">
          <img
            src={imageSrc}
            alt={imageTitle}
            referrerPolicy="no-referrer"
            className="max-h-[65vh] w-auto object-contain rounded-xl shadow-md border border-rose-200"
          />
          <div className="mt-4 p-3 bg-rose-100/70 border border-rose-200 rounded-xl text-neutral-900 text-sm text-center max-w-2xl font-medium">
            <span className="font-bold text-rose-950">Nota didáctica:</span> {caption}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-rose-50 border-t border-rose-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-1.5 bg-rose-600 hover:bg-rose-700 text-white text-sm font-semibold rounded-lg shadow-sm transition-colors"
          >
            Entendido / Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};
