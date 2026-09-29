import { Component } from '@angular/core';
@Component({
  selector: 'app-exibe-mensagem',

  templateUrl: './exibe-mensagem.component.html',
  styleUrl: './exibe-mensagem.component.css'
})
export class ExibeMensagem {
  mensagem: string
  constructor() {
    this.mensagem = ''
  }
  alterarMensagem(nome: string) {
    this.mensagem = `Seja bem-vindo, ${nome}!`;
  }
}