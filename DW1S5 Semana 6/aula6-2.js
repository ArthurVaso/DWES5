let res = `{
    "cep": "17300-000",
    "logradouro": "",
    "complemento": "",
    "bairro": "",
    "localidade": "Dois Córregos",
    "uf": "SP",
    "ibge": "3514106",
    "gia": "2896",
    "ddd": "14",
    "siafi": "6383"
  }`

  let endereco = JSON.parse(res); // parse converte json em string de objeto
  console.log(endereco.cep);

let produto = {
    id: 3,
    nome: "Tinta para pincel para quadro branco",
    preco: 12.90
}

let txt = JSON.stringify(produto);

function buscarCEP(){
    let xhr = new XMLHttpRequest();

    xhr.onload =function() {
        let ans = xhr.responseText;
        let end = JSON.parse(ans);

        let txtCidade = document.querySelector('#cidade');
        let txtLogradouro = document.querySelector('#logradouro');

        txtCidade.value = end.localidade;
        txtLogradouro.value = end.logradouro;
        console.log('Cidade: ', end.localidade);
        console.log('Logradouro: ', end.logradouro);

    }

    let cep = document.querySelector(`#cep`).value;
    xhr.open('GET', `https://viacep.com.br/ws/${cep}/json/`);
    xhr.send();
}


