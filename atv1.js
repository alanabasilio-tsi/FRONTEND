//QUESTÃO 1
function questao1(){
    const pi=3.14;
    let raio = prompt("informe o raio: ");
    let h = prompt("informe a altura ");
    let volume = pi * (raio*raio) * h;
    alert('O volume do cilindro é: '+volume.toFixed(2));
}

//QUESTÃO 2
function questao2(){
    mediaParcial=prompt("Informe sua média parcial: ");
    if(mediaParcial<60){
        notaFinal=(60*2)-mediaParcial
        if (notaFinal>100){
            alert('Já está reprovado');
        }
        else{
            alert(`Você precisa de ${notaFinal} para passar`);
        }
        
    }
    else{
        alert('Você não está na prova final!')
    }
}

//QUESTÃO 3
function questao3(){
    inicioAno=new Date(2026, 0, 1);
    dataString=prompt('Digite uma data no formato (ano/mes/dia)');
    data=new Date(dataString);
    difDias = data-inicioAno;
    dias=difDias/(1000*60*60*24);
    alert(`Passaram ${Math.abs(dias)} dias desde o inicio do ano`);
    }

//QUESTÃO 4
function questao4(){
    nome=prompt('Digite o nome do aluno(a):');
    matricula=prompt('Digite a matricula do aluno(a):');
    curso=prompt('Digite o curso do aluno(a):');
    ira=prompt('Digite o IRA do aluno(a):');
    const aluno={
        'nome':nome,
        'matricula':matricula,
        'curso':curso,
        'ira':ira
    }
    alert(`${aluno.nome} é um aluno(a) do curso ${aluno.curso} com matrícula ${aluno.matricula} e possui um IRA de ${aluno.ira}`)
}