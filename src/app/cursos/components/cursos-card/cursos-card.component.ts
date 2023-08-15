import { Component,  Input, OnInit,  } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SesionService } from 'src/app/core/services/sesion.service';
import { Curso } from 'src/app/models/curso';
import { Sesion } from 'src/app/models/sesion';
import { CursosService } from '../../services/curso.service';
import { MatDialog } from '@angular/material/dialog';
import { CursoEditarComponent } from '../curso-editar/curso-editar.component';
import { Store } from '@ngrx/store';
import { selectCargandoCursos, selectCursosCargados } from '../../state/cursos-state.selectors';

import { CursoState } from '../../state/cursos-state.reducer';
import { cargarCursosState, cursosCargados } from '../../state/cursos-state.actions';


@Component({
  selector: 'app-cursos-card',
  templateUrl: './cursos-card.component.html',
  styleUrls: ['./cursos-card.component.css']
})
export class CursosCardComponent implements OnInit{

  cursos!: Curso[];
  sesion$!: Observable<Sesion>;
  cursos$!: Observable<Curso[]>;
  cargando$!: Observable<Boolean>
  @Input('appBooleanoEstilo') inscripcionAbierta!: boolean;

  constructor(
    private cursoService: CursosService,
    private router: Router,
    private sesion: SesionService,
    private dialog: MatDialog,
    private store: Store<CursoState>

  ){}
  ngOnInit(): void {
    this.cargando$ = this.store.select(selectCargandoCursos)
    this.store.dispatch(cargarCursosState())
    this.cursoService.obtenerCursos().subscribe((cursos: Curso[])=>{
      this.store.dispatch(cursosCargados({cursos: cursos}));
    });
    this.cursos$ = this.store.select(selectCursosCargados);
    this.sesion$ = this.sesion.obtenerSesion();

  }
  eliminarCurso(curso:Curso){
    this.cursoService.eliminarCurso(curso).subscribe((curso: Curso) =>{
      alert(`${curso.nombre} eliminado`);
      this.cursos$ = this.cursoService.obtenerCursos();
    });
  }
  editarCursoDialog(curso: Curso){
    this.dialog.open(CursoEditarComponent,{
      data: curso
    }).afterClosed().subscribe((curso:Curso)=>{
      alert(`El curso ${curso.nombre} ha sido modificado`);
      this.cursos$ = this.cursoService.obtenerCursos();
    })
  }

  detalleCurso(curso: Curso){
    this.router.navigate(['/cursos/detalle',curso])
  }
}

