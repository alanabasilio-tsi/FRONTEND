import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MediaParcial } from './media-parcial/media-parcial';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MediaParcial],
  templateUrl: './app.html'
})
export class App {
}