import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, Subscription } from 'rxjs';
import { Alumno } from 'src/app/models/alumnos';
import { AlumnosService } from '../../services/alumnos.service';

import { MatDialog } from '@angular/material/dialog';
import { EditarAlumnosComponent } from '../editar-alumnos/editar-alumnos.component';
import { Sesion } from 'src/app/models/sesion';
import { SesionService } from 'src/app/core/services/sesion.service';

@Component({
  selector: 'app-tabla-alumnos',
  templateUrl: './tabla-alumnos.component.html',
  styleUrls: ['./tabla-alumnos.component.css']
})
export class TablaAlumnosComponent implements OnInit {
    dataSource!: MatTableDataSource<Alumno>;
    columnas: string[] = ['id','nombre','apellido','cursoRealizado', 'correo', 'pais', 'fechaNac','editar','eliminar']
    suscripcion!:Subscription;
    alumno!: Alumno[];
    alumnos$!: Observable<Alumno[]>
    sesion$!: Observable<Sesion>
    constructor(
      private alumnoService: AlumnosService,
      private dialog: MatDialog,
      private sesion: SesionService

      ){}



    ngOnInit(): void {
      this.dataSource =  new MatTableDataSource<Alumno>();
      this.suscripcion = this.alumnoService.obtenerAlumno().subscribe((alumnos: Alumno[])=>{
        this.dataSource.data = alumnos;
      })
      this.sesion$ = this.sesion.obtenerSesion();
    };

    editarAlumno(alumno: Alumno){
      this.dialog.open(EditarAlumnosComponent,{
        data: alumno
      }).afterClosed().subscribe((alumno: Alumno)=>{
        alert(`Los datos de ${alumno.nombre} ha sido modificado`);
        this.alumnos$ = this.alumnoService.obtenerAlumno();
      })

    }

    eliminarAlumno(alumno:Alumno){
      this.alumnoService.eliminarAlumno(alumno).subscribe((alumno: Alumno) =>{
        alert(`${alumno.nombre} eliminado`);
        this.alumnos$ = this.alumnoService.obtenerAlumno();
      });
    }

  }
