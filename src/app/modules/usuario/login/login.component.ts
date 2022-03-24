import { Component, OnInit, Inject, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { UsuarioService } from "../usuario.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    public comprobarDocente:FormGroup;
    public sesion_guardada:any = 0;
    public info_docente:any;
    public semana_activa:any;
    public alerta:boolean = false;
    public url:string = environment.url;
    public urlAnterior:string = '';

    constructor(@Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    private formBuilder: FormBuilder,
    private _router: Router,
    private _usuario: UsuarioService) {
        this.comprobarDocente = this.formBuilder.group({
            cedula: ['', [Validators.required]],
            pin: ['', [Validators.required]]
        });
    }

    iniciarSesion(){
        let cedula = this.comprobarDocente.value.cedula;
        
        if(cedula){
            this._usuario.login(this.comprobarDocente.value).subscribe(
                (response:any) => {
                    this.info_docente = response.result[0].nombre;
                    console.log(this.info_docente);
                    
                    if(response.success == false){
                        this.alerta = true;
                    }else{
                        localStorage.setItem('sesion_guardada', JSON.stringify(1));
                        localStorage.setItem('usuario', JSON.stringify(cedula));
                        localStorage.setItem('nombre', this.info_docente);
                        setTimeout(() => {
                            localStorage.setItem('login', '0');
                            this._router.navigate(['/dashboard/']);
                        }, 1000);
                    }
                    this.comprobarDocente.reset();
                }
            );
        }
    }

    ngOnInit(): void {
        if(localStorage.getItem('sesion_guardada') === '1') this._router.navigate(['/dashboard/']);
        if(localStorage.getItem('sesion_guardada') === '2' ) this._router.navigate(['/dashboard/']);
        
        if(localStorage.getItem('login') === '0'){
            localStorage.clear();
            location.reload();
        }
    }

    ngAfterViewInit(): void {
        this.renderer.removeClass(this.document.body, 'sb-nav-fixed');
    }

    ngOnDestroy(): void {
        this.renderer.addClass(this.document.body, 'sb-nav-fixed');
    }
}
