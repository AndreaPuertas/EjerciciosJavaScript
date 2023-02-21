function esPrimo (numero){
        if(numero <= 2){
            return true;
        }    
        for(let j = 2; j < numero ; j++){
            if (numero % j === 0){
                return false;
            }
        }return true;
    }
function esPalindromo (num){
    let tamaño =num.length;
    let numero = parseInt(num);
    if (tamaño === 1){
        return true;
    }    
    for(let i = 0; i< tamaño/2; i++){
        if(num.charAt(i) !== num.charAt(tamaño-i-1)){
            return false;
        }
    }return true;
    
} 
   
let primo =[];
let palindromo =[];
let ambas =[]
let numero = parseInt(prompt("Introduzca un numero"));
let cadena;
for (let i = 1; i<=numero; i++){
    if(esPrimo(i)){
        primo.push(i);
    }
    if(esPalindromo(i.toString)){
        palindromo.push(i)
    }
    if(esPrimo(i) && esPalindromo(i.toString)){
        ambas.push(i);
    }

}

alert("Primos: "+primo.join([", "])+"\n Palindromos: "+palindromo.join([", "])+"\n Primos y Palindromos: "+ambas.join([", "]))
//Espalindromo(i.toString)