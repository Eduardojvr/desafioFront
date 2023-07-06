import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formataMoeda'
})
export class FormataMoeda implements PipeTransform {
  transform(valor: any): string {
    const numero = parseFloat(valor);
    if (isNaN(numero)) {
      return 'Valor inválido';
    }

    const valorFormatado = numero.toFixed(2).replace('.', ',');
    return `R$ ${valorFormatado}`;
  }
}
