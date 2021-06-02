export interface FicheRenseignement {
  id: number;
  etudiant: Etudiant;
  serviceRH: ServiceRH | Recruteur;
  recruteurResponsable: Recruteur;
  enseignant: Enseignant;
  ficheAccueilStagiaire: FicheAccueilStagiaire;
  ficheRecruteur: FicheRecruteur;
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

interface FicheRecruteur {
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

interface FicheEnseignant {

}
