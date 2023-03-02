import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeModule } from './modules/home/home.module';
import { PazientiModule } from './modules/pazienti/pazienti.module';
import { DefinitionsModule } from './modules/definitions/definitions.module';
import { AuthenticationComponent } from './core/authentication/authentication.component';
import { CardPersonaComponent } from './modules/pazienti/components/card-persona/card-persona.component';
import { CustomPipePipe } from './shared/pipes/custom-pipe.pipe';
import { HttpClientModule } from '@angular/common/http';
import { ListaAttivitaComponent } from './modules/pazienti/components/lista-attivita/lista-attivita.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaAttivitaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HomeModule,
    HttpClientModule,
    PazientiModule,
    DefinitionsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
