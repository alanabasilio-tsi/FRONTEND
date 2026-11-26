import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RespostaApi } from '../model/deputado';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DeputadoService {
  readonly API = 
  'https://dadosabertos.camara.leg.br/api/v2'

  //Serviço HttpClient para se comunicar com a API externa
  readonly #http = inject(HttpClient)

  /** Devolve a lista de todos os parlamentares */
  obterTodos(): Observable<RespostaApi> {
    return this.#http.get<RespostaApi>(
      `${this.API}/deputados?ordem=ASC&ordenarPor=nome`)
  }

  obterPorEstado(siglauf: string) {
    
  }
}
