function encontrarPatron(cadena, carac){
	let contar = 0;
	let ubicacion = cadena.indexOf(carac);
	do{
		if (ubicacion != -1){
			contar++;
			ubicacion =cadena.indexOf(carac,ubicacion+1)
		}
	}while(ubicacion != -1)
	return contar;
	
}
function totalPatrones(valores){
	let suma = 0;
	for(let j = 0; j < valores.length; j++){
		suma+=valores[j];
	}return suma;
}
let cadena = prompt("Introduce texto: ");
let caracteres =["AA","BCA","RTB","JT"];
let cantidad;
let patron;
let valores =[];

for(let i = 0; i< caracteres.length; i++){
	patron = caracteres[i];
	cantidad = encontrarPatron(cadena.toUpperCase(), patron);
	valores.push(cantidad);

}
let total = totalPatrones(valores);
alert("Cadena introducida: "+ cadena +"\nPatrones a buscar: "+ caracteres.join([", "]) +"\nAparecen "+ total +" veces");

