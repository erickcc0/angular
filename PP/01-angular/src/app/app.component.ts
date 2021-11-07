import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Contador con Angular';
  a:number =  0;
  b:number = 5;
  // 
  acumularb(valor:number=5){
    this.b += valor;
  }
  acumular(valor:number){
    this.a += valor;
  }

}
