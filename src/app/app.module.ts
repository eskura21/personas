import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonasTablaComponent } from './personas-tabla/personas-tabla.component';

import { HttpClientModule } from '@angular/common/http';
import { MensajesComponent } from './mensajes/mensajes.component';
import { PersonaDetallesComponent } from './persona-detalles/persona-detalles.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonasTablaComponent,
    MensajesComponent,
    PersonaDetallesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
