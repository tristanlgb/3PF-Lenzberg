import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AlumnosService } from '../../services/alumnos.service';
import { Router } from '@angular/router';
import { Alumno } from 'src/app/models/alumnos';

@Component({
  selector: 'app-agregar-alumnos',
  templateUrl: './agregar-alumnos.component.html',
  styleUrls: ['./agregar-alumnos.component.css']
})
export class AgregarAlumnosComponent {
  formulario!: FormGroup;
  constructor(
    private alumnoService: AlumnosService,
    private router: Router,
  ){}
  ngOnInit(): void{
    this.formulario = new FormGroup({
        id: new FormControl(''),
        nombre:  new FormControl(''),
        apellido:  new FormControl(''),
        correo: new FormControl('') ,
        pais: new FormControl('') ,
        fechaNac: new FormControl(''),
        cursoRealizado: new FormControl (''),
    })
  }
  agregarAlumno(){
    let alumno: Alumno = {
      id: this.formulario.value.id,
      nombre: this.formulario.value.nombre,
      apellido: this.formulario.value.apellido,
      correo: this.formulario.value.correo,
      fechaNac: this.formulario.value.fechaNac,
      pais: this.formulario.value.pais,
      cursoRealizado: this.formulario.value.cursoRealizado,
    }

    this.alumnoService.agregarAlumno(alumno).subscribe((alumno: Alumno)=>{
      alert(`El alumno ${alumno.nombre} ha sido agregado a la lista de alumnos`)
    });
    this.router.navigate(['alumnos/tabla']);
  }
}
