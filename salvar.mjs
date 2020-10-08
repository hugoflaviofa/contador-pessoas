export function salvar(){

    var nome = document.getElementById("nomeEmpresa").value;
    var tamanho = document.getElementById("tamanhoEmpresa").value;
    var capacidade = document.getElementById("capacidadeEmpresa").value;

    sessionStorage.setItem('name', nome);
    sessionStorage.setItem('size', tamanho);
    sessionStorage.setItem('capacity', capacidade);
}