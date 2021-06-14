import { Adresse } from "./Adresse";

export interface Utilisateur {
  id: number;
  nom: string;
  prenom: string;
  tel: number;
  mail: string;
  adresse: Adresse | undefined;
  typeUtilisateur: 'Étudiant' | 'ServiceRH' | 'Tuteur' | 'Enseignant' | undefined;
}
