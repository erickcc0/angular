import { Component, Input} from '@angular/core';
import { Personaje } from '../interface/dbz.interface';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {

  @Input() personajes:Personaje[] = [];

}
