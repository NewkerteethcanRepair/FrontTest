
// 递归 比如 5的阶乘

var f=function(x){
    if(x<2) return 1;//递归结束条件
    else return x*f(x-1)
}
var s =f(6);
console.log(s);

// 斐波那契数列
// 1 1 2 3 5 8 13 21 34 
// 求第10列是多少

function a(m){
    // var num=1;
    if(m<=2){
        result=1;
        return result=1;
    };
    if(m>2){
        result=a(m-1)+a(m-2);
        return result
    }
}

console.log(a(6));

// a(5)