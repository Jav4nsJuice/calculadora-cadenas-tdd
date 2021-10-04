function validar(cadena){
    // limitador = cadena[3];
    let ipre= 0;
    let isuf = 4;
    let i = 0;
    let indicador = true;
    let prefijo = "//[";
    let sufijo = "] ";
    while(i < prefijo.length && indicador ==true){
        if(cadena[ipre] != prefijo[i]){
            indicador = false;
        }
        ipre = ipre + 1;
        i = i+1;
    }   
    i = 0;
    if(indicador == true){
        while(i < sufijo.length && indicador == true){
            if(cadena[isuf] != sufijo[i]){
                indicador = false;
            }
            isuf = isuf + 1;
            i = i+1;
        }
    }else{
        return false;
    }
    if(indicador == true){
        return true;
    }else{
        return false;
    }
}

export default function calcularCadena(cadena){
    var i = 6;
    var suma = 0;
    if(isNaN(parseInt(cadena[0]))){
        if(validar(cadena)){
            while(i < cadena.length){
                if(cadena[i] == "," || cadena[i] == "-" || cadena[i] == cadena[3]){
                    suma = suma + 0;
                }else{
                    suma = suma + parseInt(cadena[i]);
                }
                i = i + 1;
            } 
            return suma;
        }  else{
            if(cadena[0] == ',' || cadena[0] == '-'){
                return 0;
            }
            return "Bad News";
        }
    }else{
        i = 0;
        while(i < cadena.length){
            if(cadena[i] == "," || cadena[i] == "-"){
                suma = suma + 0;
            }else{
                suma = suma + parseInt(cadena[i]);
            }
            i = i + 1;
        } 
    }
    return suma;
}