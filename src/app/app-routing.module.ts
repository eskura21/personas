import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonasTablaComponent } from './personas-tabla/personas-tabla.component';
import { PersonaDetallesComponent } from './persona-detalles/persona-detalles.component';


const routes: Routes = [
  { path: '', redirectTo: '/personas-listado', pathMatch: 'full' },
  { path: 'personas-listado', component: PersonasTablaComponent },
  { path: 'persona-detalles', component: PersonaDetallesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
