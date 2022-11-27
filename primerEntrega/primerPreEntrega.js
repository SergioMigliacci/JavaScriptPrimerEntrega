//CALCULADORA

let numero1
let numero2
let operacion
let resultado
let respuesta

do{

    resultado = " "

    numero1 = Number(prompt("Ingrese el primer numero"))
    numero2 = Number(prompt("Ingrese el segundo numero"))
    operacion = prompt("Ingrese el signo de la operacion que quiere realizar: (+ - * /)")


    switch (operacion) {
        case "+": 
                resultado = numero1 + numero2
        break
        case "-": 
                resultado = numero1 - numero2
        break
        case "*": 
                resultado = numero1 * numero2
        break
        case "/": 
                if(numero2 == 0){
                    alert("ERROR, no se puede dividir por 0")
                    resultado = " "
                }
                else{
                    resultado = numero1 / numero2
                }     
        break
        default:
            alert("ERROR, Ingrese un simbolo valido")
            resultado = " "
            break;
    }

    if(resultado != " "){
        alert("El resultado es: " + resultado)
    }
    

respuesta = prompt("Quiere seguir realizando operaciones? ingrese: si / no").toLowerCase()
}while(respuesta == "si")