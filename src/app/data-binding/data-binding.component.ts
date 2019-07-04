import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
  // styles: [

  //   `
  //   .highlight {
  //     background-color: green;
  //     font-weight: bold;
  //   }
  //   `
  // ]

})
export class DataBindingComponent implements OnInit {

  url: string  = 'http://loiane.training';

  imagem: string = 'http://lorempixel.com/400/200/';

  cursoAngular: boolean = true;

  valorAtual: string = '';

  valorSalvo: string = '';

  isMouseOver: boolean = false;

  getValor() {

    return 34;

  }

  getCurtiCurso() {
    if (this.cursoAngular) {
      return 'Eu curti!';

    }
  }

  botaoClicado() {
    alert('Botão clicado!');
  }

  oneKeyUp(evento: KeyboardEvent) {

    // No curso foi mostrado da forma abaixo, acredito que essa forma é antiga. Obs: o curso é com Angular 2
    // console.log((<HTMLInputElement>evento.target).value);
    // console.log((evento.target as HTMLInputElement).value);
    this.valorAtual = (evento.target as HTMLInputElement).value;
  }

  salvarValor(valor) {

    this.valorSalvo = valor;

  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  constructor() { }

  ngOnInit() {
  }

}
