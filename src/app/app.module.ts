import { NgModule, LOCALE_ID  } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { MyCoreModule } from '../my-core/my-core.module';

// Servicios
import { MasDatosService } from './servicios/mas-datos.service';
import { LoggerService } from '../my-core/servicios/logger.service'
import { DatosService } from './servicios/datos.service';

// Componentes
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { SizerComponent } from './sizer.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';

// Personas
import { PersonasComponent, PersonasListComponent, PersonasFormComponent,
  PersonasViewComponent, PersonasAddComponent } from './personas/personas.component';
import { PersonasViewModelService, PersonasViewModelServiceOld } from './personas/personas-view-model.service';
import { PersonasDAOService } from './personas/personas-dao.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { MenuComponent } from './menu/menu.component';

import { routes } from './rutas'

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    SizerComponent,
    CalculadoraComponent,
    PersonasComponent,
    PersonasListComponent,
    PersonasFormComponent,
    PersonasViewComponent,
    PersonasAddComponent,
    PageNotFoundComponent,
    HomeComponent,
    AdminComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule, MyCoreModule, FormsModule,
    HttpModule, JsonpModule, RouterModule.forRoot(routes)
  ],
  providers: [MasDatosService, LoggerService, DatosService, { provide: LOCALE_ID, useValue: "es-ES" },
    PersonasViewModelService,
    //{ provide: PersonasViewModelService, useClass: PersonasViewModelServiceOld},
    PersonasDAOService],
  bootstrap: [AppComponent]
})
export class AppModule { }
