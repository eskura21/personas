import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonasTablaComponent } from './personas-tabla/personas-tabla.component';


const routes: Routes = [
  { path: '', redirectTo: '/listado', pathMatch: 'full' },
  { path: 'listado', component: PersonasTablaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
