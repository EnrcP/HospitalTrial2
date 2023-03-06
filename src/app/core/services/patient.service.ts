import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPersone } from '../interfaces/ipersone';
import { IActivities } from '../interfaces/iactivities';
import { ISummary } from '../interfaces/isummary';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  persone: IPersone[] = [];
  attività: IActivities[] = [];

  constructor(private http: HttpClient) { }

  getPersone(){
    return this.http.get<IPersone[]>('../../../assets/json/patients.json');
  }
  getAttiv(){
    return this.http.get<IActivities[]>('../../../assets/json/definitions/activities.json');
  }

  getSummary(id: number){
    return this.http.get<ISummary[]>('../../../assets/json/patients/'+id+'/summary.json');
  }
  pushPersone(persona: IPersone) {
    this.persone.push(persona);
  }
}
