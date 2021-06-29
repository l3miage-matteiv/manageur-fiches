import { Adresse } from "./Adresse";
import { Enseignant } from "./Enseignant";
import { Etudiant } from "./Etudiant";
import { Tuteur } from "./Tuteur";
import { ServiceRH } from "./ServiceRH";

export interface FicheRenseignement {
  id: number;
  idetudiant: number;
  idserviceRH: number;
  idtuteur: number;
  idenseignant: number;
  // etudiant: Etudiant;
  // serviceRH: ServiceRH | Tuteur | null;
  // tuteur: Tuteur | null;
  // enseignant: Enseignant | null;
  mailServiceRH: string;
  mailTuteur: string;
  mailEnseignant: string;
  idficheAccueilStagiaire: number;
  idficheTuteur: number;
  // ficheAccueilStagiaire: FicheAccueilStagiaire | null;
  // ficheTuteur: FicheTuteur | null;
  raisonSociale: string;
  representantLegal: string;
  progres: "En Cours de Traitement" | "Validé" | "Invalidé";
}

interface FicheAccueilStagiaire {
  raisonSociale: string;
  representantLegal: string;
  fonction: string;
  siret: number;
  domaineActivite: string;
  effectif: number;
  adresse: Adresse;
  adresseAccueilStagiaire: Adresse;
}

interface FicheTuteur {
  disponibilite: 'Importante' | 'Partielle' | 'Inexistante';
  dateDebut: Date;
  dateFin: Date;
  // === Optionnel === //
  dateInterruptionDebut: Date;
  dateInterruptionFin: Date;
  // ================= //
  gratification: boolean;
  montantMensuel: number;
  montantHeure: number;
  typeVersement: string | 'Chèque' | 'Virement Bancaire' | 'Espèces';
  // === Optionnel === //
  organismeUGA: string;
  // ================= //
  avantages: string | 'Aucune' | 'Restauration' | 'Hébergement' | 'Remboursement';
  confidentialite: boolean;
  titreStage: string;
  descriptionProjet: string;
  objectifsStage: string;
  detailTravaux: string;
}
