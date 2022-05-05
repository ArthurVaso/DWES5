/*  https://my-json-server.typicode.com/mcrisc/produtos-api/produtos/  */


function populateTable(produtos) {
    let table = document.querySelector('table')


    for (let p of produtos) {

        let tr = document.createElement('tr');
        let tdNome = document.createElement('td');
        let tdPreco = document.createElement('td');
        let tdEstoque = document.createElement('td');


        tr.appendChild(tdNome);
        tr.appendChild(tdPreco);
        tr.appendChild(tdEstoque);

        tdNome.textContent = p.nome;
        tdPreco.textContent = p.preco;
        tdEstoque.textContent = p.estoque;

        table.appendChild(tr);

    }
}

function fetchInfo() {
    let xhr = new XMLHttpRequest();

    xhr.onload = function () {
        let data = JSON.parse(this.responseText);
        populateTable(data);
    };

    const url = 'https://my-json-server.typicode.com/mcrisc/produtos-api/produtos/';

    xhr.open('GET', url);
    xhr.send();
}