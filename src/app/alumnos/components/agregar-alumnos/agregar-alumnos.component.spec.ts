import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarAlumnosComponent } from './agregar-alumnos.component';

describe('AgregarAlumnosComponent', () => {
  let component: AgregarAlumnosComponent;
  let fixture: ComponentFixture<AgregarAlumnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarAlumnosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
