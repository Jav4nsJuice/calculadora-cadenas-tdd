import calcularCadena from "./Calculadora"

describe("Calculadora", () => {
    it("Deberia calcular un numero", () =>{
        expect(calcularCadena("1")).toEqual(1);
    });
    it("Deberia evitar caracter limitador", () =>{
        expect(calcularCadena(',')).toEqual(0);
    });
    it("Deberia evitar caracter limitador", () =>{
        expect(calcularCadena('-')).toEqual(0);
    });
    it("Deberia calcular un numero ingresado", () =>{
        expect(calcularCadena("4")).toEqual(4);
    });
    it("Deberia calcular una cadena ingresada", () =>{
        expect(calcularCadena("4,1")).toEqual(5);
    });
    it("Deberia calcular una cadena ingresada", () =>{
        expect(calcularCadena("4-1")).toEqual(5);
    });
    it("Deberia calcular una cadena ingresada", () =>{
        expect(calcularCadena("4,1,7,5,2,1")).toEqual(20);
    });
    it("Deberia calcular una cadena ingresada", () =>{
        expect(calcularCadena("4-1-7-5-2-1")).toEqual(20);
    });
    it("Deberia calcular una cadena ingresada", () =>{
        expect(calcularCadena("4,1-7,5,2-1")).toEqual(20);
    });
    it("Deberia calcular una cadena ingresada", () =>{
        expect(calcularCadena("//[;] 6;7;4")).toEqual(17);
    });
    it("Deberia calcular una cadena ingresada", () =>{
        expect(calcularCadena("/[;] 6;7;4")).toEqual("Bad News");
    });
    it("Deberia calcular una cadena ingresada", () =>{
        expect(calcularCadena("//[;]6;7;4")).toEqual("Bad News");
    });
    it("Deberia calcular una cadena ingresada", () =>{
        expect(calcularCadena("//[;] 6,7;4-3")).toEqual(20);
    });
});
