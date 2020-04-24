$(function () {
    var canvas = document.querySelector("canvas");
    var ctx = canvas.getContext("2d");
    //获取到屏幕的宽度和高度，设置给canvas的画布
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    //设置线条的宽度
    ctx.lineWidth = .3;
    //动态生成一个颜色，比如例子的背景，例子的线条
    ctx.strokeStyle = new Color(150).style;

    //创建一个颜色对象，接受一个参数，根据参数来决定颜色的访问 0-255
    function Color(min) {
        min = min || 0;
        this.r = colorValue(min);
        this.g = colorValue(min);
        this.b = colorValue(min);
        this.style = createColorStyle(this.r, this.g, this.b);
    }
    //随机产生一个min-255的数字
    function colorValue(min) {
        return Math.floor(Math.random() * 255 + min);
    }
    function createColorStyle(r, g, b) {
        return `rgb(${r},${g},${b})`;
    }

    /**
     * 开始设计粒子，并产生例子的随机位置和随机颜色
     */
    //定义一个参数对象，控制例子的数量，控制例子之间位置，控制粒子的半径
    var dots = {
        nb: 300,  //例子的数量控制
        distance: 100,  //粒子之间的位置参考值 粒子之间产生线条
        d_radius: 150,
        array: []
    }
    //每个例子都是一个对象，创建例子对象
    function Dot(){
        //例子随机位置x和y
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;

        //例子每次运动的距离
        this.vx = -0.5 * Math.random();
        this.vy = -0.5 * Math.random();

        //例子对象的半径
        this.radius = Math.random() * 3;
        //例子的颜色
        this.color = new Color();
    }
    //给例子原型添加一个函数draw()
    Dot.prototype = {
        draw:function(){
            ctx.beginPath();
            ctx.fillStyle = this.color.style;
            ctx.arc(this.x,this.y,this.radius,0,Math.PI * 2,false);
            ctx.fill();
        }
    }

    // 产生粒子
    function createDots(){
        for(let i=0;i<dots.nb;i++){
            dots.array.push(new Dot());
        }
    }

    //绘制粒子
    function drawDots(){
        for(let i=0;i<dots.array.length;i++){
            dots.array[i].draw();
        }
    }

    function animateDots(){
        //先清空页面上所有的粒子
        ctx.clearRect(0,0,canvas.width,canvas.height);
        createDots();
        drawDots();
    }
    animateDots();


})