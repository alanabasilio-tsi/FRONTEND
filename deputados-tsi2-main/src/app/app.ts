import { Component, signal } from '@angular/core';
import { DeputadosLista } from './deputados-lista/deputados-lista';

@Component({
  selector: 'app-root',
  imports: [DeputadosLista],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('deputados');
}
