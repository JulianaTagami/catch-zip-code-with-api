async function buscaEndereco(cep) {
        try {
        var consultaCep = await fetch(`https://viacep.com.br/wa${cep}/json/`);
        var consultaCepCovertida = await consultaCep.json();

        if (consultaCepCovertida.erro) {
            throw Error('CEP não existe');
        }
        console.log(consultaCepCovertida);
        } catch (erro) {
                console.log(erro)
        }

}

var cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscaEndereco(cep.value));

