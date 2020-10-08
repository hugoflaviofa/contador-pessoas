document.getElementById("resultado").value = 0;

	function mais(){

		if(document.getElementById("resultado").value >= Math.round(quantidadeMaxima)){
			return document.getElementById("resultado").value = Math.round(quantidadeMaxima), alert("Capacidade máxima atingida!");
		}else{
			return document.getElementById("resultado").value = parseInt(document.getElementById("resultado").value) + 1;
			}
	}

	function menos(){
		if(parseInt(document.getElementById("resultado").value) <= 0){
			document.getElementById("resultado").value = 0;
		}else{
			return document.getElementById("resultado").value = parseInt(document.getElementById("resultado").value) - 1;
			}
	}

	var botaoMais = document.getElementById("mais");
	botaoMais.onclick = mais;
	
	var botaoMenos = document.getElementById("menos");
	botaoMenos.onclick = menos;

	document.getElementById("nome-empresa").value = sessionStorage.getItem('name');

	var tamanhoEmpresa = parseInt(sessionStorage.getItem('size'));
	var quantidadePessoas = parseFloat(sessionStorage.getItem('capacity'));

	var quantidadeMaxima = tamanhoEmpresa / quantidadePessoas;

	document.getElementById("quantidade-pessoas").value = Math.round(quantidadeMaxima);