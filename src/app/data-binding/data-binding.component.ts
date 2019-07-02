import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  url: string  = 'http://loiane.training';

  imagem: string = 'http://lorempixel.com/400/200/';

  cursoAngular: boolean = true;

  getValor() {

    return 34;

  }

  getCurtiCurso() {
    if (this.cursoAngular) {
      return "Eu curti!";

    }
  }

  constructor() { }

  ngOnInit() {
  }

}
