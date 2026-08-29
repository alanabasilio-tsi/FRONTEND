function questao1(){
    let escolha = Number(prompt('Qual operação você quer fazer? (1: a + b = c OU 2:(4𝛑r3)/3'));
    switch (escolha){
        case 1:
            let a=Math.floor(Math.random() * (50 - 1 + 1) + 1);
            let b=Math.floor(Math.random() * (50 - 1 + 1) + 1);
            let c=a+b;
            alert(`${a}+${b} = ${c}`);
            break;
        case 2:
            const pi=3.14;
            let r=prompt('Informe o raio');
            let resultado=(4*pi*(r**3))/3;
            alert('Resultado: '+resultado.toFixed(1));
            break;
    }
}

function questao2(){
    let n1=Number(prompt('Informe um número inteiro'));
    let n2=Number(prompt('Informe um número inteiro'));
    let n3=Number(prompt('Informe um número inteiro'));
    
    let triangulo=false;

    if (n1+n2>n3 && n1+n3>n2 && n2+n3>n1){
        triangulo=true;
    }

    alert('Esses números podem formar um triangulo?\n'+triangulo)
}

function questao3(){
    let n1=Number(prompt('Informe sua nota do primeiro bimestre'));
    let n2=Number(prompt('Informe sua nota do segundo bimestre'));
    resultado=((n1*2)+(n2*3))/5;
    alert('Sua média foi de '+resultado);
    if (resultado>=60){
        alert('Você foi aprovado!');
    }
    else if (resultado<60 && resultado>10){
        alert('Você está na prova final!');
    }
    else{
        alert('Você está reprovado!');
    }
}

function questao4(){
    let h = Number(prompt('Digite sua altura em centimetros'));
    let sexo = prompt('Você é homem(h) ou mulher(m)?');
    var k;
    switch (sexo){
        case 'm':
            k=2;
            break;
        case 'h':
            k=4;
            break;   
    }
    var peso=(h-100)-((h-150)/k);

    alert(`Seu peso ideal é ${peso}kg`) 
}

