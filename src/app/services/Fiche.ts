export interface Fiche {
  raisonSociale: string;
  representantLegal: string;
  progress: "En Cours de Traitement" | "Validé" | "Invalidé";
}
