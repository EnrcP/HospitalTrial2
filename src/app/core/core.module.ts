import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpComponent } from './http/http.component';
import { InterceptorsComponent } from './interceptors/interceptors.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HttpComponent,
    InterceptorsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [HeaderComponent, FooterComponent]
})

export class CoreModule { }
