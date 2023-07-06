import { Component } from '@angular/core';
import { BuscarDadosDespesas } from 'src/app/services/buscar-dados-despesas';
import { BuscaReferencias } from 'src/app/services/buscar-referencias';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  despesasMes: any[] = [];
  despesasCategoria: any[] = [];
  fonte: any[] = [];
  listaReferencias: any[] = [];
  opcaoSelecionada: any;

  constructor(
    private despesasService: BuscarDadosDespesas,
    private listaRef: BuscaReferencias,

  ) { }
  ngOnInit(): void {

    this.listaRef.carregarReferencias().subscribe((response: any) => {
      this.listaReferencias = response;
    })

  }
  buscarDadosDespesas() {
    this.despesasService.carregarDadosDespesa(this.opcaoSelecionada).subscribe((response: any) => {
      this.despesasMes = response.DepesasMes;
      this.despesasCategoria = response.DespesasCategoria;
      this.fonte = response.FonteDinheiro;
    })
  }
}
