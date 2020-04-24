let number = 0;
// 因为num++混合计算时,会先将值用做计算值,后自加,
// ++num2是先自加然后将自加后的值用做计算值
console.log(number++);
console.log(number);
console.log(++number);
console.log(number);

function sayHi() {
    console.log(name);
    console.log(age);
    var name = "Lydia";
    let age = 21;
}

//   sayHi();

function checkAge(data) {
    if (data === {
            age: 18
        }) {
        console.log("You are an adult!");
    } else if (data == {
            age: 18
        }) {
        console.log("You are still an adult.");
    } else {
        console.log(`Hmm.. You don't have an age I guess`);
    }
}

checkAge({
    age: 18
});


for (let i = 1; i < 5; i++) {
    if (i === 3) continue;
    console.log(i);
}
// ********************
// let i = 5;
// function a(i) {
// i *= 2;
// console.log(i);
// // return i
// }
// // a(i);
// console.log((i));
// 输出值为0是因为forEach方法在数组元素为空时
// 会跳过执行回调函数，
// 相当于此选项回调函数并未执行，所以还是输出0。
// *********************
var a1 = new Array(10)
console.log(a1);

let i = 0;
new Array(10).forEach(() => {
i++;
});
console.log(i);
