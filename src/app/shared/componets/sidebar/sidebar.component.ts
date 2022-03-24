import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
    public nombre:string;

    constructor() {
        this.Sidebar();
        this.nombre = JSON.parse(JSON.stringify(localStorage.getItem('nombre')));
    }

    ngOnInit(): void {
    }

    Sidebar(){
        window.addEventListener('DOMContentLoaded', event => {
            const sidebarToggle = document.body.querySelector('#sidebarToggle');
            if (sidebarToggle) {
                sidebarToggle.addEventListener('click', event => {
                    event.preventDefault();
                    document.body.classList.toggle('sb-sidenav-toggled');
                    localStorage.setItem('sb|sidebar-toggle', JSON.stringify(document.body.classList.contains('sb-sidenav-toggled')));
                });
            }
        });
    }
}
