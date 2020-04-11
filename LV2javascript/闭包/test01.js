function outer(){
    var arr=[];
    for(var i=0 ;i<10;i++){
        console.log(i);
        
        arr[i]=function(){
            console.log(i);
            
        }
    }
    return arr;
}

outer();
var xx1=outer();
xx1[1]();