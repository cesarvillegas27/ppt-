export interface SlideReference {
  name: string;
  url: string;
  details: string;
}

export interface SlideSection {
  title: string;
  description: string;
  keyPoints: string[];
}

export interface SlideData {
  id: number;
  questionNumber?: number;
  questionTitle: string;
  badge: string;
  subtitle: string;
  image: string;
  imageCaption: string;
  definition: string;
  clinicalSigns: {
    label: string;
    description: string;
    severity?: 'normal' | 'alerta' | 'grave' | 'critico';
  }[];
  etiology?: string[];
  actionProtocol: string[];
  clinicalPearl: string; // "Perla humana de enfermería"
  sources: SlideReference[];
  speakerNotes: string;
  grades?: {
    grade: string;
    title: string;
    signs: string;
    clinicalAction: string;
    severityColor: string;
  }[];
}

export interface ClinicalCase {
  id: number;
  patientScenario: string;
  symptoms: string[];
  options: {
    id: string;
    label: string;
    isCorrect: boolean;
    explanation: string;
  }[];
  expertTeaching: string;
}
