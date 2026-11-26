import { Component, inject, signal } from '@angular/core';
import { DeputadoService } from '../services/deputado-service';
import { Deputado } from '../model/deputado';

@Component({
  selector: 'app-deputados-lista',
  imports: [],
  templateUrl: './deputados-lista.html',
  styleUrl: './deputados-lista.scss',
})
export class DeputadosLista {
  protected readonly deputadoService = 
    inject(DeputadoService)

  /* signal de deputados*/
  protected deputados = signal<Deputado[]>([])

  constructor() {
    this.deputadoService.obterTodos().subscribe(
      res => {
        this.deputados.set(res.dados)
      }
    )
  }
}
