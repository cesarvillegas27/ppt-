import React, { useState } from 'react';
import { X, Copy, Check, Download, ExternalLink, Code2, Sparkles, Share2 } from 'lucide-react';
import { SlideData } from '../types/presentation';
import { generateStandaloneEditableHTML } from '../utils/htmlExporter';

interface HtmlCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  slides: SlideData[];
  sharedUrl: string;
}

export const HtmlCodeModal: React.FC<HtmlCodeModalProps> = ({
  isOpen,
  onClose,
  slides,
  sharedUrl,
}) => {
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  if (!isOpen) return null;

  const htmlString = generateStandaloneEditableHTML(slides, sharedUrl);

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(htmlString);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2500);
    } catch {
      // fallback
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(sharedUrl);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    } catch {
      // fallback
    }
  };

  const handleDownload = () => {
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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative max-w-4xl w-full bg-[#fdf2f4] rounded-2xl border-2 border-rose-300 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="px-6 py-4 bg-gradient-to-r from-rose-200 via-rose-100 to-rose-200 border-b border-rose-300 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-rose-600 text-white rounded-lg shadow-xs">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-neutral-950 text-base md:text-lg">
                Presentación en Formato HTML Editable & Enlaces
              </h3>
              <p className="text-xs text-neutral-700">
                Archivo HTML autónomo 100% editable con paleta palo rosa y datos clínicos verificados
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-rose-300 text-neutral-900 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Link Share Box */}
        <div className="p-4 bg-white/80 border-b border-rose-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="w-full sm:w-auto">
            <span className="text-[11px] font-black uppercase tracking-wider text-rose-900 block mb-0.5">
              🔗 Enlace Directo de la Presentación Web:
            </span>
            <div className="text-xs font-mono font-bold text-neutral-900 bg-rose-50 px-3 py-1.5 rounded-lg border border-rose-200 truncate max-w-lg">
              {sharedUrl}
            </div>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <button
              onClick={handleCopyLink}
              className="flex items-center gap-1.5 px-3 py-2 bg-rose-100 hover:bg-rose-200 text-neutral-950 font-bold text-xs rounded-xl border border-rose-300 transition-all cursor-pointer shadow-2xs"
            >
              {copiedLink ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-rose-800" />}
              <span>{copiedLink ? '¡Enlace Copiado!' : 'Copiar Link'}</span>
            </button>

            <a
              href={sharedUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-2 bg-neutral-950 hover:bg-neutral-800 text-white font-bold text-xs rounded-xl shadow-2xs transition-all cursor-pointer"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Abrir Web</span>
            </a>
          </div>
        </div>

        {/* Action Bar */}
        <div className="px-6 py-2.5 bg-rose-50/70 border-b border-rose-200 flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2 text-neutral-800">
            <Sparkles className="w-4 h-4 text-rose-600" />
            <span className="font-semibold">
              Puedes descargar este archivo <strong>.html</strong> y abrirlo o editarlo en cualquier navegador o bloc de notas sin conexión.
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-3.5 py-1.5 bg-rose-600 hover:bg-rose-700 text-white font-black text-xs rounded-lg shadow-xs transition-all cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Descargar .html Editable</span>
            </button>

            <button
              onClick={handleCopyCode}
              className="flex items-center gap-1.5 px-3.5 py-1.5 bg-white hover:bg-rose-100 text-neutral-950 font-bold text-xs rounded-lg border border-rose-300 transition-all cursor-pointer"
            >
              {copiedCode ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-rose-700" />}
              <span>{copiedCode ? '¡Código Copiado!' : 'Copiar Código HTML'}</span>
            </button>
          </div>
        </div>

        {/* Code viewer */}
        <div className="flex-1 overflow-auto p-4 bg-neutral-900 text-emerald-300 font-mono text-xs leading-relaxed max-h-[50vh]">
          <pre>{htmlString}</pre>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-rose-50 border-t border-rose-200 flex justify-between items-center text-xs text-neutral-700">
          <span>Incluye todos los 5 temas íntegros, imágenes, fuentes, calculadora y modo de edición en vivo.</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-neutral-950 hover:bg-neutral-800 text-white font-bold rounded-lg cursor-pointer"
          >
            Cerrar Ventana
          </button>
        </div>
      </div>
    </div>
  );
};
