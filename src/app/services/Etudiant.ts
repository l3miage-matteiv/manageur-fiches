import { Utilisateur } from "./Utilisateur";

export interface Etudiant extends Utilisateur {
  numeroEtudiant: number | null;
  typeAffiliation: string | 'Ayant droit' | 'Étudiant' | 'Assuré volontaire' | 'Étudiant étranger' | null;
  caisseAssuranceMaladie: string | 'CPAM' | 'MSA' | 'Travailleur Indépendant' | 'Régimes Spéciaux' | null;
  inscription: string | 'L3 MIAGE' | null;
  enseignantReferent: string | 'Laurence Pierre' | null;
  typeUtilisateur: 'Étudiant';
}
