const form = document.querySelector('form');
let linhas = '';
const nomes = [];
const numeros = [];

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNome = document.getElementById('nome-contato');
    const inputNumero = document.getElementById('numero-contato');

    if (nomes.includes(inputNome.value) || numeros.includes(inputNumero.value)) {
        alert(`Esse contato já existe`);
    } else {
        nomes.push(inputNome.value);
        numeros.push(inputNumero.value);
        console.log(nomes)
        console.log(numeros)

        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputNumero.value}</td>`;
        linha += `</tr>`;
    
        linhas += linha;
    }

    inputNome.value = '';
    inputNumero.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}