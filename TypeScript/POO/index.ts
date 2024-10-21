// Programacion Orientada a Objetos
// Es una forma de programar intentando siempre describir o pensar las cosas como si fueran objetos

// Conceptos Principales de POO -> Clases y los Objetos
// Clases -> Molde para generar algo
// Objeto -> Lo que podemos crear en base a ese molde

//Declaracion de clase

class Auto{

    //Caracteristicas generales -> Propiedades o atributos
    numChasis:number;
    motor:string;
    color:string;
    tipoCombustible:string;
    transmision:string;
    cantKilometraje:string;
    plazas:number;
    frenos:string;
    modelo:string;
    anioFab:number;

    //Constructor -> Metodo reservado que nos sirve para instanciar objetos
    constructor(numChasisParam:number,motorParam:string,colorParam:string,tipoCompustibleParam:string, transmisionParam:string,plazasParam:number,frenosParam:string, modeloParam:string, añoFabParam:number){
        this.numChasis = numChasisParam;
        this.motor = motorParam;
        this.color = colorParam;
        this.tipoCombustible = tipoCompustibleParam;
        this.transmision = transmisionParam;
        this.plazas = plazasParam;
        this.frenos = frenosParam;
        this.modelo = modeloParam;
        this.anioFab = añoFabParam;
    }

    //Metodos -> Acciones 
    encender():void {
        console.log("Brum re brum");
    }    

    apagar():void{
        console.log("Chauchis");
    }
    
}

//Instanciar objetos a traves de una clase -> Crear un objeto

let autito:Auto = new Auto(123456,"v8","Azul","Gasolina","Manual",2,"ABC","Huayra",2018);
console.log(autito);

//Asignamos una propiedad al objeto
//autito.modelo = "Huayra";
//console.log(autito);

//autito.motor = "v12"
//console.log(autito);