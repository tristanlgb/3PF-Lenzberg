import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Curso } from 'src/app/models/curso';
import { CursosService } from '../../services/curso.service';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-curso-editar',
  templateUrl: './curso-editar.component.html',
  styleUrls: ['./curso-editar.component.css']
})
export class CursoEditarComponent implements OnInit{
formulario!: FormGroup;
constructor(
    private cursoService: CursosService,
    private activatedRoute:ActivatedRoute,
    private dialogRef: MatDialogRef<CursoEditarComponent>,
    @Inject(MAT_DIALOG_DATA) public curso: Curso
  ){}
  ngOnInit(): void{

    this.activatedRoute.paramMap.subscribe((parametros)=>{
      this.formulario = new FormGroup({
        nombre:  new FormControl(this.curso.nombre),
        comision: new FormControl(this.curso.comision) ,
        profesor: new FormControl(this.curso.profesor) ,
        fechaInicio: new FormControl(this.curso.fechaInicio),
        fechaFin: new FormControl (this.curso.fechaFin),
        inscripcionAbierta: new FormControl(this.curso.inscripcionAbierta),

      })
    })

  }
  editarCurso(){
    let curso: Curso = {
      id: this.curso.id,
      nombre: this.formulario.value.nombre,
      comision: this.formulario.value.comision,
      fechaInicio: this.formulario.value.fechaInicio,
      fechaFin: this.formulario.value.fechaFin,
      inscripcionAbierta: this.formulario.value.inscripcionAbierta,
      profesor: this.formulario.value.profesor
    }

    this.cursoService.editarCurso(curso).subscribe((curso: Curso)=>{
      this.dialogRef.close(curso);

    });
  }
}
