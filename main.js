async function buscaEndereco(cep) {
        var consultaCEP = await fetch(`https://viacep.com.br/wa${cep}/json/`);
}
