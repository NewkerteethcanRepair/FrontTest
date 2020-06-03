let a=1;
let b=a;

console.log(a===b);

let c=["12321","321"];
let d=[...c];
console.log(d===c);

let e=JSON.parse(JSON.stringify(a))
console.log(e===a);


