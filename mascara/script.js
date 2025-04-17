function mascaraCPF(campo) {
    campo.value = campo.value
        .replace(/\D/g, '') // Remove caracteres não numéricos
        .replace(/(\d{3})(\d)/, '$1.$2') // Adiciona o ponto
        .replace(/(\d{3})(\d)/, '$1.$2') // Adiciona o ponto
        .replace(/(\d{3})(\d{1,2})$/, '$1-$2'); // Adiciona o traço
}

function mascaraTelefone(campo) {
    campo.value = campo.value
        .replace(/\D/g, '') // Remove caracteres não numéricos
        .replace(/(\d{2})(\d)/, '($1) $2') // Adiciona parênteses e espaço
        .replace(/(\d)(\d{4})$/, '$1-$2') // Adiciona o traço
        .replace(/(\d{5})(\d)/, '$1-$2'); // Adiciona o traço para celular
}

function mascaraData(campo) {
    campo.value = campo.value
        .replace(/\D/g, '') // Remove caracteres não numéricos
        .replace(/(\d{2})(\d)/, '$1/$2') // Adiciona a barra
        .replace(/(\d{2})(\d{4})$/, '$1/$2'); } // Adiciona a barra para o ano