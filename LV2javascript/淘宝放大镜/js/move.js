window.onload = function () {
    var biger = document.getElementById("biger");
    var main = document.getElementById("main");
    var smaller = document.getElementById("smaller");
    var mask = document.getElementById("mask");
    var wrap = biger.parentNode;
    var liArr = smaller.children;
    var imgArr = [
        { "path": "images/banner1.jpg" },
        { "path": "images/banner2.jpg" },
        { "path": "images/banner3.jpg" },
        { "path": "images/banner4.jpg" },
        { "path": "images/banner5.jpg" }
    ];

    (function () {
        //先根据图片的数量动态生成小图标
        for (let index = 0; index < imgArr.length; index++) {
            var oli = document.createElement("li");
            var oimg = document.createElement("img");
            oimg.src = imgArr[index].path;
            oli.appendChild(oimg);
            smaller.appendChild(oli);
        }
    })();

    function init() {
        //初始化main图片和biger的图片
        var mainImg = document.createElement("img");
        var bigerImg = document.createElement("img");
        //将第一个li里面的图片src地址取出来 赋值给mainSrc图片和biger src
        bigerImg.src = mainImg.src = liArr[0].children[0].src;
        main.insertBefore(mainImg,mask);
        biger.appendChild(bigerImg);
    }
    init();

    //给li绑定点击事件
    function clickLiShowImg(){
        liArr[0].className = "current";
        for (let index = 0; index < liArr.length; index++) {
            liArr[index].onclick = function(){
                for(let j=0;j<liArr.length;j++){
                    liArr[j].className = "";
                }
                this.className = "current";
                biger.children[0].src = main.children[0].src = this.children[0].src;
            }
        }
    }
    clickLiShowImg()

    function moveImgShow(){
        main.onmouseenter = function(){
            mask.style.display = "block";
            biger.style.display = "block";
        }
        main.onmouseleave = function(){
            mask.style.display = "none";
            biger.style.display = "none";
        }
        //如何让放大镜移动
        main.onmousemove = function(e){
            //如果参数e为null window.event获取事件对象
            // window.event
            var e = e || window.event;
            var pagex = e.pageX
            var pagey = e.pageY;
            
            //计算当前放大镜在从那个坐标开始移动
            //wrap.offsetLeft 当前这个元素 偏移量 x轴的偏移量  
            //mask.offsetWidth获取mask元素的最终大小，包括了边框+内边距
            pagex = pagex-wrap.offsetLeft-mask.offsetWidth/2;
            pagey = pagey-wrap.offsetTop-mask.offsetHeight/2;
            if(pagex<=0){
                pagex = 0;
            }
            if(pagey<=0){
                pagey = 0;
            }

            //控制放大镜结束位置
            if(pagex > main.offsetWidth - mask.offsetWidth){
                pagex = main.offsetWidth - mask.offsetWidth;
            }
            if(pagey > main.offsetHeight - mask.offsetHeight){
                pagey = main.offsetHeight - mask.offsetHeight;
            }

            //让mack移动起来
            mask.style.left = pagex+"px";
            mask.style.top = pagey+"px";

             //放大镜移动如何让biger正确显示图片
             var scale = (biger.children[0].offsetWidth-biger.offsetWidth)/(main.offsetWidth - mask.offsetWidth)
             let xx = pagex * scale;
             let yy = pagey * scale;
             biger.children[0].style.left = -xx + "px";
             biger.children[0].style.top = -yy + "px";
        }

       

    }
    moveImgShow();


}