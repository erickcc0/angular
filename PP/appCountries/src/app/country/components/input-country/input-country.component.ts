import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-input-country',
  templateUrl: './input-country.component.html',
  styleUrls: ['./input-country.component.css']
})
export class InputCountryComponent implements OnInit {

  @Input() title : string = '';

  //Emision
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  //DebounceTime
  @Output() onDebounce:EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject;

  termino:string = '';

  buscar(){
    this.onEnter.emit( this.termino );
    
  }
  teclaPresionada(){
    // const valor = event.target.value;
    // console.log(valor);
    this.debouncer.next(this.termino);
  }


  constructor() { }


  ngOnInit(){
    this.debouncer.pipe(debounceTime(300))
    .subscribe(valor => {
      this.onDebounce.emit (valor)
    });
    
  }


}
