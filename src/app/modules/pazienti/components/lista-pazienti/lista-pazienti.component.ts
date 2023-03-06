import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
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
export class ListaPazientiComponent implements OnInit, OnChanges{

  listaPazienti: IPersone[]=[]
  listaPazientiFiltrati: IPersone[]=[]
  listaAttivita: IActivities[]=[]
  mostraPazienti: boolean=true;
  mostraAttivita: boolean=false;
  userInput: string="";
  userSeleziona: string="";
  sceltaGenere: boolean=false;
  noGenere: boolean=true;
  ciclaPazientiFiltrati: boolean=false;
  mostraBottone: boolean=false;
  sceltaData: boolean=false;


  constructor(private pazienteService: PatientService,
              private router: Router,
              private http: HttpClient,
    ) {
  }

  ngOnInit(): void {

      /* document.addEventListener('DOMContentLoaded', () => {
        const selectElement = document.getElementById('sceltaFiltro') as HTMLSelectElement;
        const selectedValue = selectElement.value;
        this.userSeleziona=selectedValue;
      }); */
      this.listaAttivita=this.pazienteService.attivita;
      this.listaPazienti=this.pazienteService.persone;

    }
    ngOnChanges(changes: SimpleChanges): void {
      this.listaAttivita=this.pazienteService.attivita;
      this.listaPazienti=this.pazienteService.persone;
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
  mostraPazientiB(){
    this.mostraBottone=false;
    this.mostraPazienti=true;
    this.ciclaPazientiFiltrati=false;
  }
  getData(){
    const selectElement4 = document.getElementById('data') as HTMLSelectElement;
    const selectedValue4 = selectElement4.value;
    this.userInput=selectedValue4;
  }

  getGenere(){
    const selectElement3 = document.getElementById('sceltaGenere') as HTMLSelectElement;
    const selectedValue3 = selectElement3.value;
    this.userInput = selectedValue3;
  }
  getTipoFiltro(){
    const selectElement2 = document.getElementById('sceltaFiltro') as HTMLSelectElement;
    const selectedValue2 = selectElement2.value;
    this.userSeleziona=selectedValue2;
    if(this.userSeleziona=="Genere"){
      this.sceltaGenere=true;
      this.noGenere=false;
      this.sceltaData=false;
    }
    else if(this.userSeleziona=="DataNascita"){
      this.noGenere=false;
      this.sceltaData=true;
      this.sceltaGenere=false;
    }
    else{
      this.sceltaData=false;
      this.sceltaGenere=false;
      this.noGenere=true;
    }
  }
  onKeyUp(event: any){
    this.userInput = event.target.value;
  }
  getFiltro(){
    this.mostraBottone=true;
    this.listaPazientiFiltrati.splice(0, this.listaPazientiFiltrati.length);
    this.getTipoFiltro()
    this.mostraPazienti=false;

    this.listaPazienti.forEach(paziente => {
      if(this.userSeleziona=="NomeCognome"){
        if(paziente.name.startsWith(this.userInput)){
          this.listaPazientiFiltrati.push(paziente);
        }
      }
      if(this.userSeleziona=="Genere"){
        this.getGenere()
        if(paziente.gender===this.userInput){
          this.listaPazientiFiltrati.push(paziente)
        }
      }
      if(this.userSeleziona=="DataNascita"){
        this.getData()
        if(paziente.birthDate===this.userInput){
          this.listaPazientiFiltrati.push(paziente)
        }
      }
  })
    this.ciclaPazientiFiltrati=true;
  }
  getPazienti(){
    this.pazienteService.getPersone().subscribe(
      (data: IPersone[]) => {
        this.listaPazienti = data;
      }
    )
  }

  cambiaRotta(url:string){
    console.log(url);
    this.router.navigateByUrl(url);
  }

}
