import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AsistenciaService {

    public ApiUrl:string = environment.urlApi;
    public headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    constructor(private http: HttpClient) { }

    getAsistencia(docente:any, servicio:any): Observable<any>
    {
        return this.http.get(`${this.ApiUrl}asistencia/docente/${docente}/${servicio}`, { headers: this.headers });
    }

    getAsistenciaAlumno() : Observable<any>
    {
        return this.http.get(`${this.ApiUrl}asistencia/estudiante`, { headers: this.headers });
    }

    getAsistenciaLista(docente:any, servicio:number, estado:number) : Observable<any>
    {
        return this.http.get(`${this.ApiUrl}asistencia/lista/${docente}/${servicio}/${estado}`, { headers: this.headers });
    }

    tipoAsistencia(estado:number) : Observable<any>
    {
        return this.http.get(`${this.ApiUrl}asistencia/tipo/${estado}`, { headers: this.headers });
    }

    insertAsistencia(docente:any, tipo_asistencia:any, alumno:any) : Observable<any>
    {
        let params = JSON.stringify({ docente:docente, tipo_asistencia: tipo_asistencia, alumno: alumno });

        console.log(params);
        
        return this.http.post(`${this.ApiUrl}asistencia/ingresar`, params, { headers: this.headers });
    }
}
