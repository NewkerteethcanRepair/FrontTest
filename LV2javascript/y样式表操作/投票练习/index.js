$(function(){
    let x=1;
    let y=1;
    $(".t1").find("strong").text(x);
    $(".t2").find("strong").text(y);
    function titietnum(){
        // console.log(123);
        
        $(".btn1").on("click",function(){
            x+=1;
            console.log(1);
            
            $(".t1").find("strong").text(x);
            controlProgress()
        })
        $(".btn2").on("click",function(){
            y+=1;
            $(".t2").find("strong").text(y);
            controlProgress()
        })
    }
    titietnum();

    function controlProgress(){
        // let total=x+y;
        let dx=Math.floor(x / (x+y) * 10000) / 100 + "%";
        let dy=Math.floor(y / (x+y) * 10000) / 100 + "%";
        // Math.round(num1 / num2 * 10000) / 100 + "%";
      
      
        // dx=dx.toFixed(2);
        // dy=dy.toFixed(2);
        $(".myprogress1").css({
            // "width":dx*100+"%",
            "width":dx,
            "max-width":"95%",
            "min-width":"5%"
        })
        $(".myprogress1").find("strong").text(dx)
        $(".myprogress2").css({
            // "width":dy*100+"%",
            "width":dy,
            "max-width":"95%",
            "min-width":"5%"
        })
        $(".myprogress2").find("strong").text(dy)
    }
})