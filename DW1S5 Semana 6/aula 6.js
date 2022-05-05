//Exercicio 1

let produto = {
        id: 3,
        nome: "Tinta para pincel para quadro branco",
        preco: 12.90
}

//Exercicio 2

let produtos = [
    {
        id: 1,
        titulo: "Caneta BIC Cristal 0.7mm",
        preco: 6.60,
        desconto: 10
    },
    {
        id: 2,
        titulo: "Caneta Esferográfica Trilux",
        preco: 5.50,
        desconto: 0
    },
    {
        id: 3,
        titulo: "Lapiseira 0.5mm Pentel",
        preco: 27.90,
        desconto: 15
    },
    {
        id: 4,
        titulo: "Grafite Fino 0.5mm HB 2 Faber-Castel",
        preco: 10.90,
        desconto: 5
    },
    {
        id: 5,
        titulo: "Pincel quadro branco recarregável",
        preco: 9.80,
        desconto: 0
    }
]

//Exercicio 3

function exibirProduto(id){
    let prod = [];
    for(let i = 0; i < produtos.length; i++){
        if(produtos[i].id == id){
            prod = produtos[i];
            console.log(prod);
        }
    }
    if (prod.length == 0){
            console.log("Produto não encontrado.")
    }
}

//Exercicio 4

function verMenorPreco(valor){
    let tem = false;
    for(let i = 0; i < produtos.length; i++){
        if(produtos[i].preco < valor){
            tem = true;
            console.log(produtos[i]);
        }
    }
    if (tem == false){
            console.log("Produto não encontrado.")
    }
}

let baratos = produtos.filter(p => p.preco < 10);
for(let p of baratos){
    console.log(p.titulo + " | " + p.preco);
}

function naoTemDesconto(){
    let tem = false;
    for(let i = 0; i < produtos.length; i++){
        if(produtos[i].desconto == 0){
            tem = true;
            console.log(produtos[i]);
        }
    }
    if (tem == false){
            console.log("Todos os produtos tem desconto a vista.")
    }
}

let caros = produtos.filter(p => p.desconto < 0);
for(let p of caros){
    console.log(p.titulo + " | " + p.preco);
}

//Exercicio 5

/*
function semDesconto(){
    for (const prod of produtos) {
        console.log(prod.titulo + " |  R$ " + prod.preco);
    }
}

function comDesconto(){
    for (const prod of produtos) {
        console.log(prod.titulo + " |  R$ " + prod.preco * (100 - prod.desconto) / 100);
    }
}
*/
let total = 0;
for (let p of produtos){
    total = total + p.preco;
}

let totalComDesconto = 0;
for (let p of produtos){
    totalComDesconto = totalComDesconto + p.preco * (100 - p.desconto) / 100;
}

let xs = [8, 3, 5, 6, 9];

let acc = 0;
for (let x of xs) {
    acc = acc + x;
}
//reduce - da para usar direto no array ou tranform o array em um map só de preços
acc2 = 0;
let totalR = xs.reduce((acc2, curr) => acc2 + curr, 0);

let SemDecMap = produtos.map(p => p.preco)
    .reduce((acc, curr) => acc + curr);
    
let ComDescMap = produtos.map(p => p.preco * (100 - p.desconto) / 100)
    .reduce((acc, curr) => acc + curr);




let menor = xs[0];
for (let i = 1; i < xs.length; i++) {
    let x = xs[i];
    menor = x < menor ? x : menor;
}