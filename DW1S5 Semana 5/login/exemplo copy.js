
let xs = [19, 32, 44, 9, 8, 5, 53];


function dobrar (x){
    return 2 * x;
}

function transformar(operacao){
    let transformados = [];

    for (let i = 0; i  < xs.length; i++){
        let x = xs[i];

        transformados.push(operacao(x));
    }
    return transformados;
}

xs.map(x => 2 * x);