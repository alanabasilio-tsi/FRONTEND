import {Component} from '@angular/core';

@Component({
    selector:'app-media-parcial',
    imports:[],
    templateUrl: './media-parcial.html'
})
export class MediaParcial {
    mediaParcial: number | undefined
    situacao: string | undefined;

    constructor(){
        this.mediaParcial = undefined
    }

    calcularMediaParcial(bim1:number,bim2:number){
        if (bim1 >= 0 && bim2 >=0){
            this.mediaParcial = (bim1 * 2 + bim2 * 3)/5;
            this.situacao = this.verificarSituacao(this.mediaParcial);
        } else{
            this.mediaParcial = undefined;
            this.situacao = '';
        }
    }

    verificarSituacao(media: number):string{

        if (media >= 60) {
            return 'Aprovado(a)';
          } else if (media >= 10) {
            return 'Avaliação final';
          } else {
            return 'Reprovado(a)';
    }
}
}