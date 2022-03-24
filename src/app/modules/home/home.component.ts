import { Component, OnInit } from '@angular/core';
import { FechaService } from 'src/app/shared/services/fecha.service';

import { AsistenciaService } from 'src/app/shared/services/asistencia.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    public tipo_sesion:any;
    public diasMes:any = [];
    public dias:any= [];
    public asistencia:any;
    public lista:any;
    public tipo_asistencia:any = [];

    constructor(private _fecha: FechaService,
                private _asistencia: AsistenciaService) {
                    if(localStorage.getItem('login') === '0'){
                        localStorage.removeItem('login');
                        location.reload();
                    }
                    this.tipo_sesion = localStorage.getItem('sesion_guardada');
            
                }

    ngOnInit(): void {
        this.tablaAsistencia();
        this.asistenciaAlumno();
        this.listaAsistencia();
        this.tipoAsistencia();
    }

    asistenciaAlumno()
    {
        this._asistencia.getAsistenciaAlumno().subscribe(
            (response:any) => {
                this.asistencia = JSON.parse(JSON.stringify(response));
            }
        );
    }

    ingresarAsistencia(docente:any, event:any, alumno:any)
    {
        let tipo_estado = event.target.value;
        this._asistencia.insertAsistencia(docente, tipo_estado, alumno).subscribe(
            (response:any) => {
                this.asistenciaAlumno();
            }
        );
    }

    listaAsistencia()
    {
        let docente = localStorage.getItem('usuario')?.replace(/['"]+/g, '');
        
        this._asistencia.getAsistenciaLista(docente, 1, 1).subscribe(
            (response:any) => {
                this.lista = JSON.parse(JSON.stringify(response));
            }
        );
    }

    tipoAsistencia()
    {
        this._asistencia.tipoAsistencia(0).subscribe(
            (response:any) => {
                this.tipo_asistencia = response;
            }
        );
    }

    tablaAsistencia()
    {
        this._fecha.diasDelMes().subscribe(
            (response) => {

                const nombreDelDiaSegunFecha = (fecha: string | number | Date) => [
                    'D',
                    'L',
                    'K',
                    'M',
                    'J',
                    'V',
                    'S',
                ][new Date(fecha).getDay()];
            
            
                for (let index = 1; index < response+1; index++) {
                    

                    const fechasParaProbar = [
                        `${new Date().getFullYear()}-${new Date().getMonth()+1}-${index}`
                    ];

                    fechasParaProbar.forEach(fecha => {
                        this.diasMes.push(`${nombreDelDiaSegunFecha(fecha)}${index}`);
                    });

                    
                    fechasParaProbar.forEach(fecha => {
                        this.dias.push(index);
                    });
                }
            }
        );
    }
}
