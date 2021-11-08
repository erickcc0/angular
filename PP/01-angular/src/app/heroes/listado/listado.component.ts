import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent{

  heroes: string[] = ['spiderman','ironman','antman','hulk'];
  heroeborrado:string = '';

  borrarHeroe(){
  
      //pop borra el ultimo elemento del array
      //shift() el primero
      let dato = this.heroes.pop() || '';
      this.heroeborrado=dato;
      console.log(dato);

    console.log('borrando...');
  }
}
