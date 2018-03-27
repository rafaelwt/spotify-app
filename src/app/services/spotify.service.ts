import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import 'rxjs/Rx';
import 'rxjs/add/operator/map';
@Injectable()
export class SpotifyService {
  artistas: any [] = [];
  urlSpotify = 'https://api.spotify.com/v1/';
  // 'BQBEknCFDxI_jonrZ04JN4qdcCJMYBocJQhadoQ8g1aUvTUMEQBwc1vf9SH_72qNcec33aGGwQ6iHiOoTak';
  token = 'BQDYlwK_k1wTiC6uNx0Xut5jKz2-4QRYkiMcGWRiY8B14qdWGVu5tWCuplR18C6X-2lnStTvxgFP4GL0n_0';
  private getHeader(): HttpHeaders {
    const headers = new HttpHeaders ({
      'Authorization': `Bearer ${this.token}`
    });
    return headers;
  }

  constructor( public http: HttpClient) {
    console.log('Servicio de spotify listo');
   }

   getArtista(id: string) {
    const url = `${ this.urlSpotify }artists/${ id }`;
    const headers = this.getHeader();
    return this.http.get(url, { headers: headers});
/*       .map( (resp: any) => {
      this.artistas = resp.artists.items;
      return this.artistas;
      }); */
   }
   getTop(id: string) {
    const url = `${ this.urlSpotify }artists/${ id }/top-tracks?country=US`;
    const headers = this.getHeader();
    return this.http.get(url, { headers: headers});
   }

   getArtistas(termino: string) {
    const url = `${ this.urlSpotify }search?query=${ termino }&type=artist&market=US&limit=20`;
    const headers = new HttpHeaders ({
      'Authorization': `Bearer ${this.token}`
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
