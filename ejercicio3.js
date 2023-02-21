let arrayNum = [];
let numero;
let pares = 0;
let impares = 0;
let mayor=0;
let menor=0;
let valor = 0;
do {
    numero=parseInt(prompt("Introduce un valor menor a 1 o una letra para terminar"))
    if(!isNaN(numero) || numero >= 1){
        valor += numero;
        if(menor === 0){
            menor = numero;
        }else if (numero< menor){
            menor = numero;
        }
        if (numero > mayor){
            mayor = numero;
        }
        if (numero % 2 ===0 ){
            pares++;
        }else{
            impares++
        }
        arrayNum.push(numero);
    }       
}while(!isNaN(numero) && numero > 0);          

let media=valor/arrayNum.length;
alert("Los numeros introducidos son:"+arrayNum.join([", "])+
"\nLa cantidad de numeros pares intordicidos son "+ pares +
"\nLa cantidad de numeros impares introducidos son "+ (impares) +
"\nLa suma total es "+ valor +
"\nLa media es "+ media +
"\nEl numero mayor es "+ mayor +
"\nEl numero menor "+ menor)