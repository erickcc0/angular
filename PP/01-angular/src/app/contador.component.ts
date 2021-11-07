import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    //alt + 96
    template: `
    <h1>{{title}}</h1>

    <h2>La base es: <strong> {{b}}</strong></h2>
    <br>
    <button (click)='acumular(-b)' > -{{b}} </button>
    <span> {{a}} </span>
    <button (click)='acumular(b)'> +{{b}} </button>
    `
})

export class ContadorComponent {
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