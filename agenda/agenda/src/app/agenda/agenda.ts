import { Component } from "@angular/core";
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

type tipoContato = "amigo" | "família" | "trabalho" | "outro";

class Contato {
    nome: string| null | undefined;
    telefone: string| null | undefined;
    email: string| null | undefined;
    aniversario: string| null | undefined;
    tipo: tipoContato | null|  undefined;

    constructor() {
        this.nome = undefined;
        this.telefone = undefined;
        this.email = undefined;
        this.aniversario = undefined;
        this.tipo = undefined;
    }
}

@Component({
    selector: 'app-agenda',
    imports: [ReactiveFormsModule],
    templateUrl: './agenda.html'
})
export class Agenda {

    contatos: Contato[] = [];
    mostrarAgenda = false;
    formulario = new FormGroup ({
        nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
        telefone: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email]),
        aniversario: new FormControl('', Validators.required),
        tipo: new FormControl<tipoContato | null> (null, Validators.required)
    })

    cadastrarContato(contato: Contato) {
        this.contatos.push(contato);
        alert('Contato cadastrado com sucesso!')
        this.mostrarAgenda = false;
    } 

    exibirAgenda(){
        this.mostrarAgenda = true;
    }

}