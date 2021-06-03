import { Utilisateur } from "./Utilisateur";

export interface Recruteur extends Utilisateur {
  fonction: string;
  service: string;
  typeUtilisateur: 'Recruteur';
}
