import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefinitionsRoutingModule } from './definitions-routing.module';
import { DefinitionsComponent } from './pages/definitions/definitions.component';
import { ActivitiesComponent } from '../pazienti/components/activities/activities.component';


@NgModule({
  declarations: [
    DefinitionsComponent,
    ActivitiesComponent
  ],
  imports: [
    CommonModule,
    DefinitionsRoutingModule
  ]
})
export class DefinitionsModule { }
