import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import 'rxjs/Rx';
import 'rxjs/add/operator/map';
@Injectable()
export class SpotifyService {
  artistas: any [] = [];
  constructor( public http: HttpClient) {
    console.log('Servicio de spotify listo');
   }

   getArtistas(termino: string) {
    const url = `https://api.spotify.com/v1/search?query=${ termino }&type=artist&market=US&limit=20`;
    const headers = new HttpHeaders ({
      'Authorization': 'Bearer BQA647GVE9mNENnYDtGZoB6XSgCZ1dpo74PLjOJtO-yZTEn_fHVf-NBwlRfzqbdCQmIrgRDvAv1lrl7jMBw'
    });
    return this.http.get(url, { headers: headers}).map( (resp: any) => {
      this.artistas = resp.artists.items;
      return this.artistas;
    });
    // No es ideal tener el subscribe en el servicio ya que da una respueta
    // y si se necesita poner un loadin
    /*this.http.get(url, { headers: headers})
      .subscribe( resp => {
          console.log(resp);
      });*/
   }

}
