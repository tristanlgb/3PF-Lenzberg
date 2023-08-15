import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {  Router } from '@angular/router';
import { Curso } from 'src/app/models/curso';
import { CursosService } from '../../services/curso.service';


@Component({
  selector: 'app-cursos-agregar',
  templateUrl: './cursos-agregar.component.html',
  styleUrls: ['./cursos-agregar.component.css']
})
export class CursosAgregarComponent {
  formulario!: FormGroup;
  constructor(
    private cursoService: CursosService,
    private router: Router,

  ){}
  ngOnInit(): void{

    this.formulario = new FormGroup({
        nombre:  new FormControl(''),
        comision: new FormControl('') ,
        profesor: new FormControl('') ,
        fechaInicio: new FormControl(''),
        fechaFin: new FormControl (''),
        inscripcionAbierta: new FormControl(false),

      })


  }
  agregarCurso(){
    let curso: Curso = {
      id:'',
      nombre: this.formulario.value.nombre,
      comision: this.formulario.value.comision,
      fechaInicio: this.formulario.value.fechaInicio,
      fechaFin: this.formulario.value.fechaFin,
      inscripcionAbierta: this.formulario.value.inscripcionAbierta,
      profesor: this.formulario.value.profesor,
    }

    this.cursoService.agregarCurso(curso).subscribe((curso: Curso)=>{
      alert(`${curso.nombre} ha sido agregado`)
    });
    this.router.navigate(['/cursos/card']);
  }
}
