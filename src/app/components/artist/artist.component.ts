import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {
  artista: any = {};
  pistas: any[] = [];
  constructor( private activatedRoute: ActivatedRoute,
                    public _spotify: SpotifyService) { }

  ngOnInit() {
    this.activatedRoute.params
      .map( parametro => parametro['id'])
      .subscribe(id => {
        console.log(id);
        this._spotify.getArtista(id).subscribe(el => {
         // console.log(el);
          this.artista  = el;
        });
        this._spotify.getTop(id).map( (resp: any) => resp.tracks)
        .subscribe( res => {
          console.log( res);
          this.pistas = res;
        });
      });
  }

}
