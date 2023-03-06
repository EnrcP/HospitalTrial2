import { Component, EventEmitter, OnInit, Output, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientService } from './core/services/patient.service';
import { HomepageComponent } from './modules/home/pages/homepage/homepage.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit{

  title = 'HospitalTrail';

  constructor(private router : Router, personeService: PatientService){

  }
  cambiaRotta(url:string){
    this.router.navigateByUrl(url);
  }

   ngAfterViewInit(){  }

  ngOnInit(): void {}

}
