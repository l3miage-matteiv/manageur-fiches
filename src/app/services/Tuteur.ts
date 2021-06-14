import { Utilisateur } from "./Utilisateur";

export interface Tuteur extends Utilisateur {
  fonction: string | undefined;
  service: string | undefined;
  typeUtilisateur: 'Tuteur';
}
