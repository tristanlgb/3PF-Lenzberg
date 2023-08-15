import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosCardComponent } from './cursos-card.component';

describe('CursosCardComponent', () => {
  let component: CursosCardComponent;
  let fixture: ComponentFixture<CursosCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursosCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
