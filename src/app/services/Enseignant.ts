import { Utilisateur } from "./Utilisateur";

export interface Enseignant extends Utilisateur {
  typeUtilisateur: 'Enseignant';
}
