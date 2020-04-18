console.log({}.prototype===Object);
Object.__proto__
console.log(Object.__proto__);
function demo() {
    try {
        var a = 1;
        return a;
    } catch (error) {
        a=3;
        return a;
    }finally{
        a=4;
    }
}
console.log(demo());

let [a,...b] = "ahello"; console.log(b)