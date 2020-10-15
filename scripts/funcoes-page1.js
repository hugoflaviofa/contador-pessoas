function salvar(){

    var nome = document.getElementById("nomeEmpresa").value;
    var tamanho = document.getElementById("tamanhoEmpresa").value;
    var capacidade = document.getElementById("capacidadeEmpresa").value;

    sessionStorage.setItem('name', nome);
    sessionStorage.setItem('size', tamanho);
    sessionStorage.setItem('capacity', capacidade);
}

document.onchange = salvar;

function botao(){
    if(document.getElementById("nomeEmpresa").value == "" 
        || 
        document.getElementById("tamanhoEmpresa").value == ""
        ||
        document.getElementById("capacidadeEmpresa").value == ""){

        return alert("Preencha todos os campos.");

    }else{
        return window.location.href ="page-2.html";
    }
}

var button = document.getElementById("botao-entrar");
button.onclick = botao;