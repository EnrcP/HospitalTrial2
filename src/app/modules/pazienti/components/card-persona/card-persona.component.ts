import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IPersone } from 'src/app/core/interfaces/ipersone';
import { CustomPipePipe } from 'src/app/shared/pipes/custom-pipe.pipe';


@Component({
  selector: 'app-card-persona',
  templateUrl: './card-persona.component.html',
  styleUrls: ['./card-persona.component.scss']
})
export class CardPersonaComponent implements OnInit{

  @Input() persona: IPersone = { id: 0, name : '', gender: '', birthDate: '', heightCm: 0, weightKg: 0, bmi: 0 , summary: []};
  @Output() nomePersona = new EventEmitter();
  @Output() dipendenteSelezionato = new EventEmitter<string>();

  constructor(private router : Router) {}

  accedi(){
    this.nomePersona.emit(this.persona)
  }

  mostraDipendente(url:string){
    this.dipendenteSelezionato.emit(url);
  }

  ngOnInit() {}

}
