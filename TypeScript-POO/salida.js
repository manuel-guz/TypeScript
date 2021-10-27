var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var myString = "hello world";
document.write(myString);
// String:
var anyArray = ["item1", 2, ""];
var numbreArray = [1, 2, 3];
var stringArray = ["item1", "item2", "item3"];
//TUPLE
var strNumTuple = ["hello", 3, false];
//VOID Undefined Null
var myVoid = undefined;
var myNull = null;
var myUndefined = undefined;
document.write(typeof (strNumTuple));
//functions
function getSum(num1, num2) {
    return num1 + num2;
}
;
;
var showToDo2 = {
    title: 'Eat Dinner',
    text: 'lorem'
};
function showToDo(todo) {
    console.log(todo.title + " - " + todo.text);
}
;
showToDo(showToDo2); //funcion con variable formateada a interface
//Clases 
var User = /** @class */ (function () {
    //metodos
    function User(name) {
        this.name = name;
    }
    ;
    User.prototype.register = function () {
        console.log(this.name + " is registered!");
    };
    ;
    return User;
}());
;
function getName(firstnName, lastName) {
    if (lastName == '') {
        return "" + firstnName;
    }
    else {
        return firstnName + " " + lastName;
    }
    ;
}
;
document.write(getName(' yisus', 'Chist'));
// funciones Void
function myVoidFunction() {
    return;
}
;
function showWork(work) {
    console.log(work.tarea1 + " - " + work.tarea2);
}
;
var taskProgram = {
    tarea1: 'Borrar cache',
    tarea2: 'Limpiar RAM'
};
function workFunction(work) {
    document.write("" + work.tarea2);
}
;
showWork(taskProgram);
workFunction(taskProgram);
//Clases y modificadores de alcance 
var User1 = /** @class */ (function () {
    function User1(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    ;
    User1.prototype.register = function () {
        console.log(this.name + " - " + this.email + "  is registered!!!");
    };
    ;
    User1.prototype.ageInYears = function () {
        return this.age + 'years';
    };
    ;
    User1.prototype.payInvoice = function () {
        console.log(this.name + " paid invoice");
    };
    ;
    return User1;
}());
;
var jhon = new User1('alejandro', 'ale@mail.com', 30);
console.log(jhon.age);
document.write(jhon.ageInYears());
//Herencia de clases, la clase Members hereda el codigo de User1 y agrega el propio (id)
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    function Member(id, name, email, age) {
        var _this = _super.call(this, name, email, age) || this;
        _this.id = id; //solo se aclara que se obtiene el nuevo parametro de la funcion
        return _this;
    }
    ;
    //heredar metodo padre
    Member.prototype.payInvoice = function () {
        _super.prototype.payInvoice.call(this); //con super tambien se heredan metodos padres
    };
    ;
    return Member;
}(User1));
;
var timmy = new Member(1, 'timmy', 'timmy@mail.com', 23);
timmy.payInvoice();
document.write();
