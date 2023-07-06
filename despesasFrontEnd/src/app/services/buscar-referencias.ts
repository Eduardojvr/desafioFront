import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuscaReferencias {


  constructor(private http: HttpClient) {

  }

  carregarReferencias(): Observable<any> {
    const endpoint_url = "http://localhost:8080/api" + '/referencia/buscarReferencia';

    return this.http.get<any>(endpoint_url, {});


  }
}
