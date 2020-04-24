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
        nb: 150,  //例子的数量控制
        distance: 100,  //粒子之间的位置参考值 粒子之间产生线条
        d_radius: 150, //判断鼠标和粒子之间的位置
        array: []
    }
    //每个例子都是一个对象，创建例子对象
    function Dot() {
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
        draw: function () {
            ctx.beginPath();
            ctx.fillStyle = this.color.style;
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            ctx.fill();
        }
    }

    // 产生粒子
    function createDots() {
        for (let i = 0; i < dots.nb; i++) {
            dots.array.push(new Dot());
        }
    }

    //绘制粒子
    function drawDots() {
        for (let i = 0; i < dots.array.length; i++) {
            dots.array[i].draw();
        }
    }

    //设置例子运动起来
    function moveDots() {
        for (let i = 0; i < dots.array.length; i++) {
            var dot = dots.array[i];
            //判断粒子运动的位置，不能超过屏幕
            if (dot.y < 0 || dot.y > canvas.height) {
                dot.vx = dot.vx;
                //反向运动的意思
                dot.vy = -dot.vy;
            } else if (dot.x < 0 || dot.x > canvas.width) {
                dot.vx = -dot.vx;
                dot.vy = dot.vy;
            }
            dot.x += dot.vx;
            dot.y += dot.vy;
        }
    }

    //设置鼠标在屏幕上的位置
    var mousePosition = {
        x: 50 * canvas.width / 100,
        y: 50 * canvas.height / 100
    }

    function mixComponents(comp1,weight1,comp2,weight2){
        return (comp1 * weight1 + comp2 * weight2) / (weight1+weight2);
    }
    //定义一个函数，获取到平均颜色
    function averageColorStyles(dot1,dot2){
        var color1 = dot1.color;
        var color2 = dot2.color;
        //计算出两个点之间的线条的颜色，两个点之间的线条色是通过计算两点之间颜色获取相似颜色
        var r = mixComponents(color1.r,dot1.radius,color2.r,dot2.radius);
        var g = mixComponents(color1.g,dot1.radius,color2.g,dot2.radius);
        var b = mixComponents(color1.b,dot1.radius,color2.b,dot2.radius);

        return createColorStyle(r,g,b);
    }
    //粒子之间的连接线
    function connectDots() {
        //外层循环获取到一个固定的粒子
        for (let i = 0; i < dots.array.length; i++) {
            //内层循环就判断例子和当前i这个例子之间的位置
            for (let j = 0; j < dots.array.length; j++) {
                var i_dot = dots.array[i];
                var j_dot = dots.array[j];
                //判断粒子之间的位置关系
                if ((i_dot.x - j_dot.x) < dots.distance &&
                    (i_dot.y - j_dot.y < dots.distance) &&
                    (i_dot.x - j_dot.x) > -dots.distance &&
                    (i_dot.y - j_dot.y) > -dots.distance) {

                    //等会你要用鼠标来控制粒子的连接区域，我们需要判断鼠标位置和当前粒子的位置
                    if ((i_dot.x - mousePosition.x) < dots.d_radius &&
                        (i_dot.y - mousePosition.y) < dots.d_radius && 
                        (i_dot.x - mousePosition.x) > -dots.d_radius && 
                        (i_dot.y - mousePosition.y) > -dots.d_radius) {

                            ctx.beginPath();
                            ctx.strokeStyle = averageColorStyles(i_dot,j_dot);
                            ctx.moveTo(i_dot.x,i_dot.y);
                            ctx.lineTo(j_dot.x,j_dot.y);
                            ctx.closePath();
                            ctx.stroke();
                    }

                }
            }
        }
    }

    function animateDots() {
        //先清空页面上所有的粒子
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        //绘制粒子
        drawDots();
        //例子移动
        moveDots();
        //粒子链接线
        connectDots();
        //canvas提供的一个动画函数，，递归
        //基于系统的刷新屏幕来更新动画，不会出现丢
        //requestAnimationFrame是window对象提供的一个函数，默认调用一次。使用递归来完成动画的持续调用
        requestAnimationFrame(animateDots);
    }

    //鼠标控制当前粒子的链接位置
    $("canvas").on("mousemove",function(e){
        mousePosition.x = e.pageX;
        mousePosition.y = e.pageY;
    });
    $("canvas").on("mouseleave",function(){
        mousePosition.x = canvas.width /2;
        mousePosition.y = canvas.height /2;
    });

    //创建粒子
    createDots();
    requestAnimationFrame(animateDots);




})