import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientService } from 'src/app/core/services/patient.service';
import { IPersone } from 'src/app/core/interfaces/ipersone';
import { IActivities } from 'src/app/core/interfaces/iactivities';
import { ISummary } from 'src/app/core/interfaces/isummary';


@Component({
  selector: 'app-lista-pazienti',
  templateUrl: './lista-pazienti.component.html',
  styleUrls: ['./lista-pazienti.component.scss']
})
export class ListaPazientiComponent implements OnInit{


  listaPazienti: IPersone[]=[];
  listaAttivita: IActivities[]=[];

  constructor(private pazienteService: PatientService, private router: Router, private http: HttpClient) {}

  ngOnInit(): void {

    this.listaAttivita=this.pazienteService.attivita;
    this.listaPazienti=this.pazienteService.persone;

    console.log(this.listaAttivita);
    console.log(this.listaPazienti);  
      
  }

  sceltaColore(summary: ISummary[]): string{
 
    var in_salute = false;
    var moderate = false;
    var vigorous = false;

    summary.forEach(item => {
      this.listaAttivita.forEach(attivita => {
        if(item.activity == attivita.activity){
          if(attivita.intensity=="moderate" && item.minutes>=150){
            in_salute = true;
          }
          if(attivita.intensity=="vigorous" && item.minutes>=75){
            in_salute = true;
          }
          if(attivita.intensity=="moderate" && item.minutes>=100){
            moderate = true;
          }
          if(attivita.intensity=="vigorous" && item.minutes>=25){
            vigorous = true;
          }
          if(moderate && vigorous){
            in_salute = true;
          }
        }
      });
    })
    if(in_salute){
      return "col-sm-3 bg-success"; 
    }else{
      return "col-sm-3 bg-danger"; 
    }   

  }

  cambiaRotta(url:string){
    this.router.navigateByUrl(url);
  }

}
