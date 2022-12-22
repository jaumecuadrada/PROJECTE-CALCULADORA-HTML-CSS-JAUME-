class Calculadora {
    sumar(num1, num2){
        let suma = num1+num2;

        if (Number.isInteger(suma)){
        return suma;
        }else{
            return suma.toFixed(4);
        }
    }

    restar(num1, num2){
        let resta = num1-num2;

        if (Number.isInteger(resta)){
        return resta;
        }else{
            return resta.toFixed(4);
        }
    }
    

    dividir(num1, num2){

        if (num2===0){
            return ('ERROR');

        }else{
            let divisio = num1/num2;

            if (Number.isInteger(divisio)){
            return divisio;
            }else{
                return divisio.toFixed(4);
            }
        }
    }
    

    multiplicar(num1, num2){
        let multi = num1*num2;

        if (Number.isInteger(multi)){
        return multi;
        }else{
            return multi.toFixed(4);
        }
    }
    
}