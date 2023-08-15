import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AlumnosService } from '../../services/alumnos.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Alumno } from 'src/app/models/alumnos';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-alumnos',
  templateUrl: './editar-alumnos.component.html',
  styleUrls: ['./editar-alumnos.component.css']
})
export class EditarAlumnosComponent implements OnInit{

  formulario!: FormGroup;

  constructor(
    private alumnoService: AlumnosService,
    private router: Router,
    private activatedRoute:ActivatedRoute,
    private dialogRef: MatDialogRef<EditarAlumnosComponent>,
    @Inject(MAT_DIALOG_DATA) public alumno:Alumno
  ){}
    ngOnInit(): void{
      this.activatedRoute.paramMap.subscribe((parametros)=>{
      this.formulario = new FormGroup({
        nombre:  new FormControl(this.alumno.nombre),
        apellido:  new FormControl(this.alumno.apellido),
        id: new FormControl(this.alumno.id) ,
        fechaNac: new FormControl(this.alumno.fechaNac) ,
        cursoRealizado: new FormControl(this.alumno.cursoRealizado),
        pais: new FormControl(this.alumno.pais),
        correo: new FormControl (this.alumno.correo),
        })
      })
    }
    editarAlumno(){
      let alumno: Alumno = {
        id: this.alumno.id,
        nombre: this.formulario.value.nombre,
        apellido: this.formulario.value.apellido,
        correo: this.formulario.value.correo,
        fechaNac: this.formulario.value.fechaNac,
        pais: this.formulario.value.pais,
        cursoRealizado: this.formulario.value.cursoRealizado
      }
      this.alumnoService.editarAlumno(alumno).subscribe((alumno: Alumno)=>{
      this.dialogRef.close(alumno);

      })
    }
  }
