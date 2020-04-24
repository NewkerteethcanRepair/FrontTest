// 1 获取画笔
$(function () {

    var canvas = document.getElementById('dot');
    canvas.width = document.body.clientWidth;
    canvas.height = document.documentElement.clientHeight;
    // canvas.width = $(document.body).width();
    // canvas.height = $(document.body).height();
    var c = canvas.getContext("2d");
    // 设置距离
    var dis_connect = 80
    // 设置 鼠标半径
    var radiu_r = 100;
    var mouseX = 0
    var mouseY = 0
    $("body").on("mousemove", "#dot", function (e) {
        mouseX = e.clientX;
        mouseY = e.clientY
        // console.log(mouseX);



    })

    function isInside(dot1, dot2) {
        var mousedot = new Dot(mouseX, mouseY, 1)
        var d1 = getDistance(dot1, mousedot);
        var d2 = getDistance(dot2, mousedot);
        if (d1 < radiu_r && d2 < radiu_r) {
            return true
        }
        return false;
    }
    class Dot {
        constructor(x, y, r, color) {
            this.x = x;
            this.y = y;
            this.r = r;
            this.color = color;
            // 定义水平方向或垂直方向
            this.speedx = -0.5 + Math.random();
            this.speedy = -0.5 + Math.random();

        }
        move() {
            if (this.x >= canvas.width - this.r || this.x - this.r <= 0) {
                this.speedx = -this.speedx;
            }
            if (this.y >= canvas.height - this.r || this.y - this.r <= 0) {
                this.speedy = -this.speedy;
            }

            this.x += 2 - Math.random() * 4 //乱晃
            this.y += 2 - Math.random() * 4 //乱晃
            this.x += this.speedx //水平动
            this.y += this.speedy
        }
    }
    var dots = [];
    createdot(100);

    window.requestAnimationFrame(draw)

    function createdot(num) {
        for (var i = 0; i < num; i++) {
            var x = Math.random() * canvas.width
            var y = Math.random() * canvas.height
            var r = Math.random() * 10
            var a = new Dot(x, y, r, color());
            dots.push(a);
        }
    }

    function color() {
        var r = parseInt(Math.random() * 256)
        var g = parseInt(Math.random() * 256)
        var b = parseInt(Math.random() * 256)
        var color = `rgba(${r},${g},${b})`;
        return color
    }

    function draw() {
        c.clearRect(0, 0, canvas.width, canvas.height)
        for (var i in dots) {
            c.beginPath();
            var d = dots[i];
            c.arc(d.x, d.y, d.r, 0, 2 * Math.PI, false);
            c
            c.fillStyle = d.color;
            c.fill();
            d.move()
            drawline(d);

        }
        window.requestAnimationFrame(draw);
    }
    //绘制线条
    function drawline(dot) {
        for (var i in dots) {
            var d = dots[i]
            if (dot == d) {
                continue;
                //自己就跳过
            }
            // 两点之间距离确实小于设定值的话就连线
            // if(getDistance(d,dot)<dis_connect&&!isInside(d,dot)){
            if (isInside(d, dot)) {
                c.beginPath();
                c.moveTo(d.x, d.y);
                c.lineTo(dot.x, dot.y);
                c.strokeStyle = d.color;
                c.stroke()

            }
        }
    }

    function getDistance(d, dot) {
        var distance = Math.sqrt(Math.pow(dot.x - d.x, 2) + Math.pow(dot.y - d.y, 2));
        return distance;
    }
})