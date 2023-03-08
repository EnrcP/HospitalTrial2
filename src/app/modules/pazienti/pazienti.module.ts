import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PazientiRoutingModule } from './pazienti-routing.module';
import { PazientiComponent } from './pages/pazienti/pazienti.component';
import { ListaPazientiComponent } from './components/lista-pazienti/lista-pazienti.component';
import { PazienteComponent } from './components/paziente/paziente.component';
import { CustomPipePipe } from 'src/app/shared/pipes/custom-pipe.pipe';



@NgModule({
  declarations: [
    PazientiComponent,
    ListaPazientiComponent,
    PazienteComponent,
    CustomPipePipe
  ],
  imports: [
    CommonModule,
    PazientiRoutingModule
  ]
})
export class PazientiModule { }
