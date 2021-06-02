interface Etudiant extends Utilisateur {
  numeroEtudiant: number;
  typeAffiliation: string | 'Ayant droit' | 'Étudiant' | 'Assuré volontaire' | 'Étudiant étranger';
  caisseAssuranceMaladie: string | 'CPAM' | 'MSA' | 'Travailleur Indépendant' | 'Régimes Spéciaux';
  inscritption: string | 'L3 MIAGE';
  enseignantReferent: string | 'Laurence Pierre';
  typeUtilisateur: 'Étudiant';
}
