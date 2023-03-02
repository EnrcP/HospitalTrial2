import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientService } from 'src/app/core/services/patient.service';
import { IPersone } from 'src/app/core/interfaces/ipersone';
import { IActivities } from 'src/app/core/interfaces/iactivities';

@Component({
  selector: 'app-lista-pazienti',
  templateUrl: './lista-pazienti.component.html',
  styleUrls: ['./lista-pazienti.component.scss']
})
export class ListaPazientiComponent implements OnInit{

  listaPazienti: IPersone[]=[]

  constructor(private pazienteService: PatientService,
              private router: Router,
              private http: HttpClient
    ) {

  }

  ngOnInit(): void {
    this.pazienteService.getPersone().subscribe(
      (pazienti: IPersone[]) => {
        this.listaPazienti = pazienti
      }
    )

  }

  getPazienti(){

    /*     this.http.get<Paziente[]>('assets/patients.json').subscribe(data => {
      console.log(data); */

    this.pazienteService.getPersone().subscribe(
      (data: IPersone[]) => {
        this.listaPazienti = data;
      }
    )
  }

  handleAccedi(persona: IPersone) {
    alert("Ciao "+ persona.name+" , hai effettuato l'accesso!");
  }

  handleDipendente(url:string){
    this.router.navigateByUrl("dipendenti/" + url);
    console.log(url);
  }

}
