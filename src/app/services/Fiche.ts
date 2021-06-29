export interface Fiche {
  raisonSociale: string;
  representantLegal: string;
  progres: "En Cours de Traitement" | "Validé" | "Invalidé";
}
