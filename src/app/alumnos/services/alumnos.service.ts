import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alumno } from 'src/app/models/alumnos';
import { env2 } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

constructor(
  private http: HttpClient
)
{}

  obtenerAlumno(): Observable<Alumno[]>{
  return this.http.get<Alumno[]>(`${env2.apiURL}/alumnos`)
  }
  editarAlumno(alumno: Alumno): Observable<Alumno>{
    return this.http.put<Alumno>(`${env2.apiURL}/alumnos/${alumno.id}`,alumno)
  }
  agregarAlumno(alumno: Alumno): Observable<Alumno>{
    return this.http.post<Alumno>(`${env2.apiURL}/alumnos`,alumno)
   }
  eliminarAlumno(alumno:Alumno): Observable<Alumno>{
    return this.http.delete<Alumno>(`${env2.apiURL}/alumnos/${alumno.id}`)
   }
}
