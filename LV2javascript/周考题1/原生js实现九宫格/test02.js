function Father(name){
    this.name = name;
}
class Son extends Father{
    constructor(name,age){
        super(name);
        this.age = age;
    }
    show(){
        console.log(super.name,this.age);
console.log(super.constructor ===Father.prototype.constructor); 
console.log(Father.prototype.constructor);

}
}
var s = new Son("张三",12);s.show();

let m = new Map();m.set({},"1").set({},"2"); console.log(m.size)
console.log(m);
