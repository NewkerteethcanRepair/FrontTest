$(function () {
    
    getFl()
    getbottomimg();
    taball();
})

function getFl() {
    $(".proIntro").on("click", ".fl", function () {
        // console.log("sd");
        
        $(this).toggleClass("fl-clicked")
        var imgsrc=$(this).find("img").attr("src");
        $(".det").attr("src",imgsrc);

        $(this).siblings().removeClass("fl-clicked")
    })
}

function getbottomimg(){
    $(".proImg").find(".smallImg img").hover(
        function() {
            $(this).addClass("fl-clicked")
            var imgsrc=$(this).attr("src");
            $(".det").attr("src",imgsrc);
        },
        function() {
            $(this).removeClass("fl-clicked")
        }
    )
}

function taball(){
    $(".msgTit").on("click","a",function(){
        $(this).addClass("on");
        $(this).siblings().removeClass("on");
        if($(this).text()=="所有评价"){
            console.log(123);
            $(".eva").css("display","block");
            $(".msgImgs").css("display","none")
        }
        else{
            $(".eva").css("display","none");
            $(".msgImgs").css("display","block")
        }
    })
}

