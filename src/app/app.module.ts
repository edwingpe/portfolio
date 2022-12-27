import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Error404Component } from './components/error404/error404.component';
import { IndexComponent } from './components/index/index.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BannerComponent } from './components/banner/banner.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ModalLoginComponent } from './modals/modal-login/modal-login.component';
import { ModalLogoutComponent } from './modals/modal-logout/modal-logout.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ModalAboutComponent } from './modals/modal-about/modal-about.component';



@NgModule({
  declarations: [
    AppComponent,
    Error404Component,
    IndexComponent,
    NavBarComponent,
    BannerComponent,
    LoginComponent,
    LogoutComponent,
    ModalLoginComponent,
    ModalLogoutComponent,
    AboutComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    ProjectsComponent,
    ModalAboutComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
