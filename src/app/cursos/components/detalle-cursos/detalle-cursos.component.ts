import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router} from '@angular/router';
import { Observable, Subscription, map } from 'rxjs';


import { Curso } from 'src/app/models/curso';



@Component({
  selector: 'app-detalle-cursos',
  templateUrl: './detalle-cursos.component.html',
  styleUrls: ['./detalle-cursos.component.css']
})
export class DetalleCursosComponent implements OnInit {
  curso!: Curso;

  suscription!: Subscription;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,

  ){}


  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parametros) => this.curso = {
      id:(parametros.get('id') || ''),
      nombre:(parametros.get('nombre') || ''),
      comision:(parametros.get('comision') || ''),
      profesor:(parametros.get('profesor') || ''),
      fechaInicio:new Date(parametros.get('fechaInicio') || ''),
      fechaFin: new Date(parametros.get('fechaFin') || ''),
      inscripcionAbierta:(parametros.get('inscripcionAbierta') === 'true')
    })
  }

 inscribirmeAlCurso(){
      this.router.navigate(['alumnos/agregar'])
  }
}
