import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaAttivitaComponent } from './components/lista-attivita/lista-attivita.component';
import { ListaPazientiComponent } from './components/lista-pazienti/lista-pazienti.component';
import { PazienteComponent } from './components/paziente/paziente.component';
import { PazientiComponent } from './pages/pazienti/pazienti.component';
import { LegendaPazientiComponent } from './components/legenda-pazienti/legenda-pazienti.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
    {
      path:'',
      component: PazientiComponent,
      children: [
        {
          path:'lista-pazienti',
          component: ListaPazientiComponent,
        },
        {
          path:'legenda',
          component: LegendaPazientiComponent,
        },
        {
          path:'lista-attivita',
          component: ListaAttivitaComponent,
        },
        {
          path:'paziente/:id',
          component: PazienteComponent,
        }
      ]
    }])
  ],
  exports: [RouterModule]
})
export class PazientiRoutingModule { }
