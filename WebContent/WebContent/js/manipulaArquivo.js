var leitorDeCSV = new FileReader();
var leitorDeCSV2 = new FileReader();

var totalArquivoTipo1 = 0;
var totalArquivoTipo2 = 0;

window.onload = function init() {
	leitorDeCSV.onload = leCSV;
	leitorDeCSV2.onload = leCSV2;

}

function pegaCSV(inputFile) {
	var file = inputFile.files[0];
	leitorDeCSV.readAsText(file);
}

function pegaCSV2(inputFile) {
	var file = inputFile.files[0];
	leitorDeCSV2.readAsText(file);
}

function leCSV(evt) {

	var fileArr = evt.target.result.split('\n');
	var strDiv = '<table>';
	totalArquivoTipo1 = 0; 	//Zera o totalizador cada vez que é lido um novo arquivo

	for ( var i = 0; i < fileArr.length; i++) {
		strDiv += '<tr>';
		var fileLine = fileArr[i].split(';');
		for ( var j = 0; j < fileLine.length; j++) {
			strDiv += '<td>' + fileLine[j].trim() + '</td>';
			//Condição para recuperar o valores
			if(i > 0 && fileArr[0].split(';')[j] == 'saldo'){ 	//verifica na linha 1 onde está localizado o valor "saldo" e traz a posição da coluna
				totalArquivoTipo1 += +fileLine[j];				//Pega o valor da variável e soma ao totalizador "totalArquivoTipo1"
			}
		}
		strDiv += '</tr>';
	}
	// Imprime total 2
	strDiv += '<tr>';
	strDiv += '<td>Total</td>';
	strDiv += '<td>' + totalArquivoTipo1 + '</td>';				//Mostra o valor total
	strDiv += '</tr>';

	strDiv += '</table>';

	var CSVsaida = document.getElementById('CSVsaida');
	CSVsaida.innerHTML = strDiv;
}

function leCSV2(evt) {

	var fileArr = evt.target.result.split('\n');
	var strDiv = '<table>';
	totalArquivoTipo2 = 0;	 //Zera o totalizador cada vez que é lido um novo arquivo
	
	for ( var i = 0; i < fileArr.length; i++) {
		strDiv += '<tr>';
		var fileLine = fileArr[i].split(';');
		for ( var j = 0; j < fileLine.length; j++) {
			strDiv += '<td>' + fileLine[j].trim() + '</td>';
			//Condição para recuperar o valores
			if(i > 0 && fileArr[0].split(';')[j] == 'saldo'){	//verifica na linha 1 onde está localizado o valor "saldo" e traz a posição da coluna
				totalArquivoTipo2 += +fileLine[j];				//Pega o valor da variável e soma ao totalizador "totalArquivoTipo2"
			}
		}
		strDiv += '</tr>';
	}

	// Imprime total 2
	strDiv += '<tr>';
	strDiv += '<td>Total</td>';
	strDiv += '<td>' + totalArquivoTipo2 + '</td>';				//Mostra o valor total
	strDiv += '</tr>';
	strDiv += '</table>';

	var CSVsaida = document.getElementById('CSVsaida2');
	CSVsaida.innerHTML = strDiv;
}