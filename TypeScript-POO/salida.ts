

//Usar tsc archivo.ts -w   (-watch) para autotranspilar typescript a JS
//Usat npm i -g tsun   como comando para actualizar node para typescript

var myString: string = "hello world";

document.write(myString);


// String:

var anyArray: any = ["item1", 2, ""];
var numbreArray: number[] = [1, 2, 3];
var stringArray: string[] = ["item1", "item2", "item3"];

//TUPLE
var strNumTuple: [string, number, boolean]= ["hello", 3, false];

//VOID Undefined Null

var myVoid: void = undefined;
var myNull: null = null;
var myUndefined: undefined = undefined;

document.write(typeof(strNumTuple));


//functions

function getSum (num1: number, num2: number): number{
    return num1 + num2;

}; 

// interface 

interface IToDo {   //interface que define estructura de un dato
    title: string,
    text: string
};


let showToDo2: IToDo = {     //variable para la funcion con el formato de interface
    title: 'Eat Dinner',
    text: 'lorem'
}

function showToDo(todo: IToDo){ //funcion que toma parametros formateados con la interface
    console.log(`${todo.title} - ${todo.text}`);
};



showToDo(showToDo2);   //funcion con variable formateada a interface


//Clases 

class User {
    //atributos
    name: string;
    email: string;
    age: number;


    //metodos
    constructor(name){
        this.name = name;
    };

    register(){
        console.log(`${this.name} is registered!`);
    };
};

function getName(firstnName: string, lastName?: string): string { // el ?:string hace opcional laexistencia de ese parametro
    
    if (lastName == '') {
        return `${firstnName}`
    } else{
    return `${firstnName} ${lastName}`;
    };
};

document.write(getName(' yisus', 'Chist'));



// funciones Void

function myVoidFunction (): void {
    return;
};



function showWork(work: {tarea1:string; tarea2: string}): void{
    console.log (`${work.tarea1} - ${work.tarea2}`);
}

interface iShowWork{
    tarea1: string; 
    tarea2: string
};

let taskProgram: iShowWork= {
    tarea1: 'Borrar cache', 
    tarea2: 'Limpiar RAM'
    };


function workFunction (work: iShowWork): void{
    document.write (`${work.tarea2}`);

};


showWork(taskProgram);
workFunction(taskProgram);



//Clases y modificadores de alcance 

class User1 {

        public name: string;   // public  =>acceso publico
        public email: string; // private  =>accesible solo dentro de la clases
        public age: number; // protected  =>accesible a las clases que se heredan de la misma

        constructor(name?: string, email?: string, age?: number){
            this.name = name;
            this.email = email;
            this.age= age;
        };

        register(){
            console.log(`${this.name} - ${this.email}  is registered!!!`);
        };

        public ageInYears(){
            return this.age + 'years';
        };
    
        public payInvoice (){
            console.log(`${this.name} paid invoice`);
        };
};



var jhon =  new User1('alejandro', 'ale@mail.com', 30);

console.log(jhon.age);

document.write(jhon.ageInYears());





//Herencia de clases, la clase Members hereda el codigo de User1 y agrega el propio (id)
class Member extends User1 {
    id: number;

    constructor (id: number, name, email, age){
        super(name, email, age);         //el constructor necesita saber que parametros son heredados para funcionar, esto se declara en la funcion super(parameters)
    this.id = id;                       //solo se aclara que se obtiene el nuevo parametro de la funcion
    };

    //heredar metodo padre

    payInvoice(){
        super.payInvoice();    //con super tambien se heredan metodos padres
    };
};


var timmy = new Member(1, 'timmy', 'timmy@mail.com', 23);

timmy.payInvoice();

//document.write();
