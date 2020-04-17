window.onload = function () {
    var otiyan = document.querySelector(".tiyan");
    var otan = document.querySelector(".tan");
    var oclose = document.querySelector(".close");
    var errorObj = document.querySelector(".error");
    otiyan.onclick = function () {
        otan.style.display = "block";
    }
    oclose.onclick = function () {
        otan.style.display = "none";
    }

    var ousername = document.getElementById("name");
    function checkUser() {
        var emailreg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
        var emailValue = ousername.value;
        if (!emailreg.test(emailValue)) {
            showmsg(true, "邮箱格式不正确");
            ousername.className = "red";
            return false;
        } else {
            showmsg(false);
            ousername.className = "";
            return true;
        }
    }
    ousername.onblur = checkUser;


    var opassword = document.getElementById("passw");
    function checkPwd(){
        var passreg = /^[0-9a-zA-Z]{6}$/;
        var passwordValue = opassword.value;
        if (!passreg.test(passwordValue)) {
            showmsg(true, "密码格式不正确");
            opassword.className = "red";
            return false;
        } else {
            showmsg(false);
            opassword.className = "";
            return true;
        }
    }
    opassword.onblur = checkPwd;

    var oform = document.getElementById("myform");
    oform.onsubmit = function () {
        var res = checkUser();
        var res2 = checkPwd();
        if(res && res2){
            return true;
        }
        return false;
    }

    function showmsg(boo, errtxt) {
        if (boo) {
            errorObj.style.display = "block";
            errorObj.innerHTML = errtxt;
        } else {
            errorObj.style.display = "none";
        }
    }

}