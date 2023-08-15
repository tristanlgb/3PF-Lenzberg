import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosAgregarComponent } from './cursos-agregar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BooleanoATextoPipe } from '../../pipes/booleano-atexto.pipe';

describe('CursosAgregarComponent', () => {
  let component: CursosAgregarComponent;
  let fixture: ComponentFixture<CursosAgregarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CursosAgregarComponent,
        BooleanoATextoPipe,

       ],
      imports: [
        ReactiveFormsModule,


      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursosAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Componente creado correctamente', () => {
    expect(component).toBeTruthy();
  });
});
