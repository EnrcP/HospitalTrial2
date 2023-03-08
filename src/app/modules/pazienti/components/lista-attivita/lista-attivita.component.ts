import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/core/services/patient.service';
import { IActivities } from 'src/app/core/interfaces/iactivities';

@Component({
  selector: 'app-lista-attivita',
  templateUrl: './lista-attivita.component.html',
  styleUrls: ['./lista-attivita.component.scss']
})
export class ListaAttivitaComponent implements OnInit{

  listaAttivita: IActivities[]= []
  item: any;

  constructor(private pazienteService: PatientService){
  }

  ngOnInit(): void {
    this.pazienteService.getAttiv().subscribe(
      (attivita: IActivities[]) => {
        this.listaAttivita = attivita
      }
    )
  }

  getAttivita(){
    this.pazienteService.getAttiv().subscribe(
      (attivita: IActivities[]) => {
        this.listaAttivita = attivita;
      }
    )
  }
}
