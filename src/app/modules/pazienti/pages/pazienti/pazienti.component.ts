import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pazienti',
  templateUrl: './pazienti.component.html',
  styleUrls: ['./pazienti.component.scss']
})
export class PazientiComponent implements OnInit {

  constructor(private router: Router) { }

  cambiaRotta(url:string){
    this.router.navigateByUrl(url);
  }

  ngOnInit(): void {
  }

}
