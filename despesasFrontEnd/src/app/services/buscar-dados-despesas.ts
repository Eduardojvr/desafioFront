import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuscarDadosDespesas {


  constructor(private http: HttpClient) {

  }

  carregarDadosDespesa(anoRef: number): Observable<any> {
    const endpoint_url = "http://localhost:8080/api" + '/despesas/buscarDadosReferencia';

    const params = new HttpParams().set('ano', anoRef);
    return this.http.get<any>(endpoint_url, { params });


  }
}
