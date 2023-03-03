import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPersone } from 'src/app/core/interfaces/ipersone';
import { PatientService } from 'src/app/core/services/patient.service';

@Component({
  selector: 'app-paziente',
  templateUrl: './paziente.component.html',
  styleUrls: ['./paziente.component.scss']
})
export class PazienteComponent implements OnInit {

  listaPazienti: IPersone[]=[]
  persona: IPersone = { id: 0, name : '', gender: '', birthDate: '', heightCm: 0, weightKg: 0, bmi: 0 , summary: []};
  openSummary: boolean = false;
  
  constructor(private route: ActivatedRoute, private pazienteService: PatientService) { }

  ngOnInit(): void {

    this.pazienteService.getPersone().subscribe(
      (pazienti: IPersone[]) => {
        this.listaPazienti = pazienti
        this.listaPazienti.forEach(paziente => {
          this.pazienteService.getSummary(paziente.id).subscribe(data => {
            paziente.summary = data;
            this.setPaziente();
          });
        })
      }
    ) 
    
  }

  setPaziente(){
    this.route.params.subscribe(params => {  
      this.persona = this.listaPazienti[params['id']-1];  
    });
  }

}
