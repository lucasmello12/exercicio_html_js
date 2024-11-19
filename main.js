const form = document.getElementById('form-exercicio');

form.addEventListener('submit', function(e) {

    const mensagemErro = 'O numero B deve ser maior que o numero A'
    const campoA = document.getElementById('campo-a').value;
    const campoB = document.getElementById('campo-b').value;
    const numA = parseFloat(campoA);
    const numB = parseFloat(campoB);

    if (numB < numA) {
        e.preventDefault();
        const containerMensagemErro = document.querySelector('.error-message');
        containerMensagemErro.innerHTML = mensagemErro;
        containerMensagemErro.style.display = 'block';


    } else {
        alert('O formulario foi enviado com sucesso!');
    }
});