export interface Utilisateur {
  id: number;
  nom: string;
  prenom: string;
  tel: string | null;
  mail: string | null;
  adresse: string | null;
  codePostal: string | null;
  ville: string | null;
  pays: string | 'France' | null;
  typeUtilisateur: 'Étudiant' | 'ServiceRH' | 'Tuteur' | 'Enseignant' | 'Utilisateur';
}
