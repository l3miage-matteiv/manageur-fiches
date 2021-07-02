import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireEtudiantComponent } from './formulaire-etudiant.component';

describe('FormulaireEtudiantComponent', () => {
  let component: FormulaireEtudiantComponent;
  let fixture: ComponentFixture<FormulaireEtudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireEtudiantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
