function adicionarImagem() {
    let rabanete = document.createElement('img');
    let div = document.querySelector('.container');

    rabanete.src = 'rabanete.jpg';
    div.appendChild(rabanete);
}

function excluirImagem() {
    let rabanete = document.querySelector('img');
    let div = document.querySelector('.container');

    div.removeChild(rabanete);
}

