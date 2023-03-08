import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeModule } from './modules/home/home.module';
import { PazientiModule } from './modules/pazienti/pazienti.module';
import { HttpClientModule } from '@angular/common/http';
import { ListaAttivitaComponent } from './modules/pazienti/components/lista-attivita/lista-attivita.component';
import { LegendaPazientiComponent } from './modules/pazienti/components/legenda-pazienti/legenda-pazienti.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaAttivitaComponent,
    LegendaPazientiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HomeModule,
    HttpClientModule,
    PazientiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
