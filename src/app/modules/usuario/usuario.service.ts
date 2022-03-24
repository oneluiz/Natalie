import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

    public ApiUrl:string = environment.urlApi;
    public headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    constructor(private http: HttpClient) { }

    login(datos:string): Observable<any>
    {
        let params = JSON.stringify(datos);
        return this.http.post(`${this.ApiUrl}docente/iniciar-sesion`, params, { headers: this.headers });
    }
}
