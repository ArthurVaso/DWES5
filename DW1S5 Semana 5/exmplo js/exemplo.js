function showMessage(){
    let txtNome = document.querySelector('#nome');
    let msg = document.querySelector('#msg');

    // msg.innerText = 'Olá, ' + txtNome.value + '!';
    msg.innerText = `Olá, ${txtNome.value}!`;
}