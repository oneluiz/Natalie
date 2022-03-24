import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { TitleService } from './shared/services/title.service';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    public langs: string[] = [];
    public session: any;
    public location:any;
    public url:string = environment.url;

    constructor(
        private _titleService: TitleService,
        public _router: Router,
        private _location: Location
    ) {

    }

    ngOnInit(): void {
        this.initRouteConfig();
        
        this.session = this.getSesionGuardada();
        
        if (this.session == 0 || this.session == null) {
            this._router.navigate(['/usuario/iniciar-sesion']);
        }
        
        this.location = this._location.path();
    }
  
    initRouteConfig(): void {
        this._titleService.initRouteConfig();
    }

    getSesionGuardada()
    {
        let codigo = localStorage.getItem('sesion_guardada');
        if (codigo == '1' || codigo == '2') {
            this.session = codigo;
        } else {
            this.session = null;
        }
        return this.session;
    }
}
