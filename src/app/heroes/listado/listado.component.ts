import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'  
})
export class ListadoComponent {
  
  heroes: string[] = ['Alfa', 'Bravo', 'Charly', 'Delta', 'Eco', 'Foxtrot', 'GOL'];
  heroeBorrado: string = '';

    
  borrarElemento() {
    this.heroeBorrado = this.heroes.shift() || '';
    //console.log(heroeBorrado);
  }

}
