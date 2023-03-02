import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren:() => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'definitions',
    loadChildren:() => import('./modules/definitions/definitions.module').then(m => m.DefinitionsModule)
  },
  {
    path: 'pazienti',
    loadChildren:() => import('./modules/pazienti/pazienti.module').then(m => m.PazientiModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
