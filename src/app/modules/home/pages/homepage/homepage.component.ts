import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {

  data= new Date();
  message: string = "Benvenuto nella pagina iniziale";

  constructor() {}

}
