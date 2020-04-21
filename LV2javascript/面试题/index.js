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