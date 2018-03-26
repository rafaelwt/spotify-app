import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent  {
  // tslint:disable-next-line:no-inferrable-types
  termino: string = '';
  // inyeccion del servicion
  constructor( public _spotify: SpotifyService) {
    // iniciar loading
  }

  BuscarArtista() {

     if ( this.termino.length > 1 ) {
      this._spotify.getArtistas( this.termino).subscribe( resp => {
        console.log(resp);
        // quitar loading
     });

    }

  }


}
