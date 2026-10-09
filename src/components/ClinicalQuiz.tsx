import React, { useState } from 'react';
import { X, CheckCircle2, AlertCircle, HelpCircle, Award, RotateCcw } from 'lucide-react';
import { CLINICAL_CASES } from '../data/slidesData';

interface ClinicalQuizProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ClinicalQuiz: React.FC<ClinicalQuizProps> = ({
  isOpen,
  onClose,
}) => {
  const [currentCaseIndex, setCurrentCaseIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [showExplanation, setShowExplanation] = useState<Record<number, boolean>>({});

  if (!isOpen) return null;

  const currentCase = CLINICAL_CASES[currentCaseIndex];
  const selectedOptionId = selectedAnswers[currentCase.id];
  const isAnswered = selectedOptionId !== undefined;
  const isCorrect = currentCase.options.find(o => o.id === selectedOptionId)?.isCorrect;

  const handleSelectOption = (optionId: string) => {
    if (selectedAnswers[currentCase.id]) return; // lock once answered
    setSelectedAnswers(prev => ({ ...prev, [currentCase.id]: optionId }));
    setShowExplanation(prev => ({ ...prev, [currentCase.id]: true }));
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setShowExplanation({});
    setCurrentCaseIndex(0);
  };

  const totalAnswered = Object.keys(selectedAnswers).length;
  const totalCorrect = CLINICAL_CASES.filter(c => {
    const ansId = selectedAnswers[c.id];
    return c.options.find(o => o.id === ansId)?.isCorrect;
  }).length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative max-w-3xl w-full bg-[#fdf2f4] rounded-2xl border-2 border-rose-300 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="px-6 py-4 bg-gradient-to-r from-rose-200 via-rose-100 to-rose-200 border-b border-rose-300 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-rose-600 text-white rounded-lg shadow-xs">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-neutral-950 text-lg">
                Casos Clínicos de Cabecera: Taller de Autoevaluación
              </h3>
              <p className="text-xs text-neutral-700">
                Caso {currentCaseIndex + 1} de {CLINICAL_CASES.length} — Responde y comprueba tu criterio clínico
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

        {/* Progress bar */}
        <div className="bg-rose-100 h-2 w-full">
          <div
            className="bg-rose-600 h-2 transition-all duration-300"
            style={{ width: `${((currentCaseIndex + 1) / CLINICAL_CASES.length) * 100}%` }}
          />
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 space-y-5 bg-white/70">
          {/* Scenario Card */}
          <div className="p-4 bg-rose-50/90 rounded-xl border border-rose-200 shadow-xs">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-black uppercase text-rose-800 tracking-wider">
                Situación Clínica en Planta:
              </span>
              <span className="text-xs font-bold text-neutral-600">
                Aciertos: {totalCorrect} / {totalAnswered}
              </span>
            </div>
            <p className="text-sm md:text-base font-medium text-neutral-950 leading-relaxed">
              {currentCase.patientScenario}
            </p>

            <div className="mt-3 flex flex-wrap gap-1.5">
              {currentCase.symptoms.map((s, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 bg-white border border-rose-200 rounded-md text-xs font-semibold text-rose-950 shadow-2xs"
                >
                  ⚡ {s}
                </span>
              ))}
            </div>
          </div>

          {/* Options */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-black text-neutral-800 uppercase tracking-wide">
              ¿Cuál es tu diagnóstico y conducta de enfermería adecuada?
            </h4>
            {currentCase.options.map((option) => {
              const isSelected = selectedOptionId === option.id;
              let optionClass = "bg-white hover:bg-rose-50 border-rose-200 text-neutral-900";

              if (isAnswered) {
                if (option.isCorrect) {
                  optionClass = "bg-emerald-50 border-emerald-400 text-emerald-950 font-semibold ring-2 ring-emerald-300";
                } else if (isSelected && !option.isCorrect) {
                  optionClass = "bg-red-50 border-red-400 text-red-950 ring-2 ring-red-300";
                } else {
                  optionClass = "bg-white/50 border-neutral-200 text-neutral-500 opacity-70";
                }
              }

              return (
                <button
                  key={option.id}
                  disabled={isAnswered}
                  onClick={() => handleSelectOption(option.id)}
                  className={`w-full text-left p-3.5 rounded-xl border-2 transition-all flex items-start gap-3 cursor-pointer ${optionClass}`}
                >
                  <span className="w-6 h-6 rounded-full bg-rose-100 text-rose-900 font-extrabold text-xs flex items-center justify-center shrink-0 border border-rose-300">
                    {option.id.toUpperCase()}
                  </span>
                  <div className="flex-1 text-sm font-medium">
                    {option.label}
                    {isAnswered && (
                      <div className="mt-2 text-xs pt-1.5 border-t border-black/10 font-normal">
                        {option.explanation}
                      </div>
                    )}
                  </div>
                  {isAnswered && option.isCorrect && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  )}
                  {isAnswered && isSelected && !option.isCorrect && (
                    <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Expert Teaching Box */}
          {isAnswered && (
            <div className="p-3.5 bg-gradient-to-r from-rose-100/90 via-rose-50 to-rose-100/90 rounded-xl border border-rose-300 text-xs md:text-sm text-neutral-950 space-y-1">
              <div className="font-extrabold text-rose-950 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-rose-700" />
                <span>Enseñanza del Experto en Salud:</span>
              </div>
              <p className="leading-relaxed">
                {currentCase.expertTeaching}
              </p>
            </div>
          )}
        </div>

        {/* Footer controls */}
        <div className="px-6 py-3.5 bg-rose-50 border-t border-rose-200 flex items-center justify-between">
          <button
            onClick={handleReset}
            className="flex items-center gap-1.5 text-xs font-bold text-neutral-700 hover:text-neutral-950 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reiniciar taller
          </button>

          <div className="flex gap-2">
            <button
              disabled={currentCaseIndex === 0}
              onClick={() => setCurrentCaseIndex(prev => prev - 1)}
              className="px-3.5 py-1.5 text-xs font-bold rounded-lg border border-rose-300 bg-white hover:bg-rose-100 text-neutral-900 disabled:opacity-40 cursor-pointer"
            >
              Anterior
            </button>
            {currentCaseIndex < CLINICAL_CASES.length - 1 ? (
              <button
                onClick={() => setCurrentCaseIndex(prev => prev + 1)}
                className="px-4 py-1.5 text-xs font-bold rounded-lg bg-neutral-950 hover:bg-neutral-800 text-white shadow-xs cursor-pointer"
              >
                Siguiente Caso →
              </button>
            ) : (
              <button
                onClick={onClose}
                className="px-4 py-1.5 text-xs font-bold rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white shadow-xs cursor-pointer"
              >
                Finalizar Taller ✓
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
