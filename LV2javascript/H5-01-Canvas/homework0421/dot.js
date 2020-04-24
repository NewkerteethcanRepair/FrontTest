
$(function(){
    // var num=100;
    // for(var i in num){
    //     console.log(num[i]);
    //     console.log("xixi");
        
    // }
    // 1 获取画笔
    // var canvas = document.getElementById('dot');
    var canvas=$("#dot")[0]
    canvas.width = document.body.clientWidth;
    canvas.height = document.documentElement.clientHeight;
    var c= canvas.getContext("2d");
    //设置canvas的宽高为全屏,为了避免有滚动条，可以设置为HTML标签的宽高
    //获取<body>标签的宽度 ,canvas设置为全屏
    
    class Dot{
        constructor(x,y,r){
            this.x = x;//绘制点的x坐标
            this.y =y;//绘制点的y坐标
            this.r = r;//绘制点的半径
            this.color = randomColor();
            this.speedx=-0.5+Math.random();
            this.speedy=-0.5+Math.random();
        }
        move(){
            this.x+= this.speedx
            this.y+=this.speedy
        }
    }
    // 3
    var dots = [];//保存页面上所有的点
    
    
 
        //新建点
        createDot();
        //绘制
        render();
    
    
    
    // 创建点
    function createDot(){
        for(var i=0;i<100;i++){
            var randomX = Math.random()*canvas.width;
            var randomY =Math.random()*canvas.height;
            var randomR = Math.random()*10;//最大半径是9.x
            var d = new Dot(randomX,randomY,randomR);
            //放入到数组中
            dots.push(d);
        }
    }
    //定义绘制方法
    function render(){
        //遍历数组，完成对所有点的绘制
        for(var i=0;i<dots.length;i++){
            var d = dots[i];
            //绘制点。 一个圆，实心圆
            c.beginPath();//构建新的图形
            
            c.arc(d.x,d.y,d.r,0,2*Math.PI,false);
            c.fillStyle =d.color;//填充颜色即为点的颜色
            c.fill();
           
        }
    }
    
    //随机颜色 rgba()
    function randomColor(){
        var color = "rgba(";
        color += parseInt(Math.random()*256)+",";
        color += parseInt(Math.random()*256)+",";
        color += parseInt(Math.random()*256)+",";
        color += Math.random()+")";
        return color;
    }
    
    
    
    //2 
   
})

