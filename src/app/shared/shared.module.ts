import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SidebarComponent } from './componets/sidebar/sidebar.component';
import { NavbarComponent } from './componets/navbar/navbar.component';
import { FooterComponent } from './componets/footer/footer.component';



@NgModule({
    declarations: [
        SidebarComponent,
        NavbarComponent,
        FooterComponent
    ],
    imports: [
        CommonModule,
        FormsModule, ReactiveFormsModule, RouterModule
    ],
    exports: [
        SidebarComponent,
        NavbarComponent,
        FooterComponent
    ]
})
export class SharedModule { }
