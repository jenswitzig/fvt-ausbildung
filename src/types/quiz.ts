export interface Antwort {
  id: string;
  text: string;
  korrekt: boolean;
}

export interface Frage {
  id: number;
  thema: string;
  lernfeld: string;
  schwierigkeit: 'leicht' | 'mittel' | 'schwer';
  frage: string;
  antworten: Antwort[];
  erklaerung: string;
  track?: string;
}
