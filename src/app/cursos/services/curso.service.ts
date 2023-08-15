import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Curso } from 'src/app/models/curso';
import { env } from 'src/environment/environment';

@Injectable(
 { providedIn: 'root'}
)
export class CursosService {

  constructor(
    private http: HttpClient
  ){}



  obtenerCursos(): Observable<Curso[]>{
    return this.http.get<Curso[]>(`${env.apiURL}/cursos`)
}
  agregarCurso(curso: Curso): Observable<Curso>{
   return this.http.post<Curso>(`${env.apiURL}/cursos`,curso)
  }

  editarCurso(curso: Curso): Observable<Curso>{
    return this.http.put<Curso>(`${env.apiURL}/cursos/${curso.id}`,curso)
  }
  detalleCurso(curso:Curso): Observable<Curso>{
    return this.http.get<Curso>(`${env.apiURL}/cursos/${curso.id}`)
  }

  eliminarCurso(curso:Curso): Observable<Curso>{
   return this.http.delete<Curso>(`${env.apiURL}/cursos/${curso.id}`)
  }

}

