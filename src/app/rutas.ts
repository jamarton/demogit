import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { SizerComponent } from './sizer.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { PersonasComponent, PersonasListComponent, PersonasFormComponent,
  PersonasViewComponent, PersonasAddComponent } from './personas/personas.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { MenuComponent } from './menu/menu.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'calculadora', component: CalculadoraComponent },
    { path: 'admin', component: AdminComponent, outlet: 'lateral' },
    { path: 'demos', component: DemoComponent },
    { path: 'personas', component: PersonasComponent },
    /*
    { path: 'personas/add', component: PersonasComponent },
    { path: 'personas/:id', component: PersonasComponent },
    { path: 'personas/:id/edit', component: PersonasComponent },
    { path: 'personas/:id/:cmd', component: PersonasComponent },
    */
//    { path: 'personas', component: PersonasListComponent },
    { path: 'personas/add', component: PersonasAddComponent },
    { path: 'personas/:id', component: PersonasViewComponent },
    { path: 'personas/:id/edit', component: PersonasFormComponent },
    { path: 'pepito/grillo', redirectTo: 'personas/2' },
    { path: '**', component: PageNotFoundComponent },
];

