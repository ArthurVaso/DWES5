const TAXA = 0.275;

/*Definir a função calcularMedia()*/
function calcularMedia(a, b){
    return (a + b) / 2;
}

function calcularMedia(a, b, operacao){
    return operacao(a, b);
}

calcularMedia(6, 8, function (a, b) {
  return (a+b)/2;   
});

calcularMedia(6, 8, function (a, b) {
    return (2 * a + 3 * b)/5;   
  });

calcularMedia(6, 8, (a, b) => (a + b) / 2);

let media = calcularMedia(6.0, 8.2);
console.log("Média: ", media);



function showMessage(){
    let txtNome = document.querySelector('#nome');
    let msg = document.querySelector('#msg');

    if(txtNome.value == 'Doug' || txtNome.value == 'doug'){
        msg.classList.remove('oculto');
    } else {
        msg.classList.add('oculto');
    }
}

function somar(a, b){
    return a + b;
}

function validar(x){
    if(x > 5){
        let y = 2 * x;
    }

    console.log(x, '->', y);
}

function contar(){
    for(let i=0; i<10;i++){
        console.log(i);
    }
    console.log("paramos antes do ", i);
}

let xs = [19, 32, 44, 9, 8, 5, 53];

function par(n){
    return n % 2 == 0;
}

function filtra(xs, filtro){
    let ys = [];

    for (let i; i  < xs.length; i++){
        let x = xs[i];

        if(filtro(x)){
            ys.push(x);
        }
    }

    return ys;
}

let frutas =['laranja', 'tamarindo', 'melancia', 'banana'];

for(let i = 0; i < frutas.length; i++){
    let fru = [];
    if(frutas[i].indexOf('r') > -1){
				fru.push(frutas[i]);
    }
    console.log(fru);
  }

frutas.filter(f => f.indexOf('r') > -1);

