export interface Utilisateur {
  id: number;
  nom: string;
  prenom: string;
  tel: number;
  mail: string;
  adresse: string;
  codePostal: string;
  ville: string;
  pays: string | 'France';
  typeUtilisateur: 'Étudiant' | 'ServiceRH' | 'Tuteur' | 'Enseignant' | null;
}
