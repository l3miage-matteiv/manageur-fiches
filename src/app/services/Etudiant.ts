import { Utilisateur } from "./Utilisateur";

export interface Etudiant extends Utilisateur {
  numeroEtudiant: number | undefined;
  typeAffiliation: string | 'Ayant droit' | 'Étudiant' | 'Assuré volontaire' | 'Étudiant étranger' | undefined;
  caisseAssuranceMaladie: string | 'CPAM' | 'MSA' | 'Travailleur Indépendant' | 'Régimes Spéciaux' | undefined;
  inscription: string | 'L3 MIAGE' | undefined;
  enseignantReferent: string | 'Laurence Pierre' | undefined;
  typeUtilisateur: 'Étudiant';
}
