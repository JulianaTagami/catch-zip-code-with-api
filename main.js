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

let ceps = ['001001000', '01001001'];
let conjutoCeps = ceps.map(valores => buscaEndereco(valores));

Promise.all(conjutoCeps).then(respostas => console.log(respostas));

var cep = document.getElementById('cep');