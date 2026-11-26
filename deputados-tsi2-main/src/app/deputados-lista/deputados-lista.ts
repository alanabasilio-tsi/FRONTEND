import { Component, inject, signal } from '@angular/core';
import { DeputadoService } from '../services/deputado-service';
import { Deputado } from '../model/deputado';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-deputados-lista',
  imports: [ReactiveFormsModule],
  templateUrl: './deputados-lista.html',
  styleUrl: './deputados-lista.scss',
})
export class DeputadosLista {
  protected readonly deputadoService = 
    inject(DeputadoService)

  /* signal de deputados*/
  protected deputados = signal<Deputado[]>([])

  /*constructor() {
    this.deputadoService.obterTodos().subscribe(
      res => {
        this.deputados.set(res.dados)
      }
    )
  }*/


      formulario = new FormGroup ({
      nome: new FormControl('', [Validators.minLength(3),Validators.pattern('^[a-zA-ZÀ-ÿ\\s]*$')]),
      estado: new FormControl('', [Validators.minLength(2),Validators.pattern('^[a-zA-ZÀ-ÿ\\s]*$')]),
      partido: new FormControl('', [Validators.minLength(2),Validators.pattern('^[a-zA-ZÀ-ÿ\\s]*$')])
   })

  buscar() {
    const nome = this.formulario.value.nome ?? '';
    const siglaUf = this.formulario.value.estado ?? '';
    const partido = this.formulario.value.partido ?? '';

  if (nome.trim()) {
    this.deputadoService.obterPorNome(nome).subscribe(
      res => this.deputados.set(res.dados)
    );
  } else if (siglaUf.trim()) {
    this.deputadoService.obterPorEstado(siglaUf).subscribe(
      res => this.deputados.set(res.dados)
    );
  } else if (partido.trim()) {
    this.deputadoService.obterPorPartido(partido).subscribe(
      res => this.deputados.set(res.dados)
    );
  }
  else {
    this.deputadoService.obterTodos().subscribe(
      res => this.deputados.set(res.dados)
    );
  }
}

}
