import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPersone } from 'src/app/core/interfaces/ipersone';
import { ISummary } from 'src/app/core/interfaces/isummary';
import { PatientService } from 'src/app/core/services/patient.service';

@Component({
  selector: 'app-pazienti',
  templateUrl: './pazienti.component.html',
  styleUrls: ['./pazienti.component.scss']
})
export class PazientiComponent implements OnInit {


  listaPazienti: IPersone[]=[]
  summary : ISummary[] = [];
  
  constructor(private router: Router, private pazienteService: PatientService) { }

  cambiaRotta(url:string){
    this.router.navigateByUrl(url);
  }

  ngOnInit(): void {
    this.pazienteService.getPersone().subscribe(
      (pazienti: IPersone[]) => {
        this.listaPazienti = pazienti
        this.listaPazienti.forEach(paziente => {
          this.pazienteService.getSummary(paziente.id).subscribe(data => {
            paziente.summary = data;
      
          });
        })
        console.log(this.listaPazienti);
      }
      
      
    )
  }

  cerca(){

  }

}
