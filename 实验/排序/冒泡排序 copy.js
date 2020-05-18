
var num=[1,2,5,7,23,123,12,33,22,11,99];

for(var i=0;i<num.length-1;i++){
    // 第一次遍历后 最大的数会放在最后
    for(var j=0;j<num.length-1-i;j++){
        if(num[j]>num[j+1]){
            var d=num[j];
            num[j]=num[j+1];
            num[j+1]=d;
        }
// sdsadasdasZZZZzZZZZZZZZZZZZZdsada

// dsakld
    }
}

console.log(num);
