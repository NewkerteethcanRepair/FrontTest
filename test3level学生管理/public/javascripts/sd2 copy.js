$(function () {

    getajaxAlldata();

    controlpage()
    removebuttom();
    // console.log("sda");
    newaddbutton();

    adddata();

    updatebutton();
    addClass();

    getallClass();

    formsearch()
    // 上传
    $("#uploadBtn").click(function () {
        // 获取 form 表单元素（原生 JS 节点）
        const uploadForm = $("#uploadForm")[0];
        console.log(uploadForm);

        const formData = new FormData(uploadForm);
        $.ajax({
            url: '/files/upload',
            type: 'POST',
            data: formData,
            cache: false,
            processData: false,
            contentType: false,
            success(msg) {
                console.log(msg);
            }
        })
    })
});
let pageData = {
    currentPage: 1, //当前页
    pageSize: 5,
}

//form搜查 控制
function formsearch() {
    $(".button-search").click(function (e) {
        e.preventDefault();
        let name = $("#select-search").val();
        let value = $(".form-search").val();
        let searchdata = {};
        if (name == "classId") {
            searchdata[`${name}`] = name;
        } else {

            searchdata[`${name}`] = value;
        }



        //  let data ={name:value}
        $.ajax({
            type: "get",
            url: "./sd/search",
            data: searchdata,
            //  dataType: "dataType",
            success: function (response) {
                console.log(response);
                if(response==false){
                    // alert("找不断数据,请重新输入")
                    response="数据呢，什么渲染啊，我的html布局都没有的嘛？？？？？？"
                    const error = template("studenterror",response);
                   
                    
                    $(".tbodycontent").html(error);
                }else{

                    const html = template("mystudents", response);
                  
                    
                    $(".tbodycontent").html(html);
                }
                
            }
        });
        //   return {name:value};


    });
}
//总数据 单独 得到
function getcountajax() {
    $.ajax({
        type: "get",
        url: "./sd/total",

        success: function (response) {
            console.log(response);
            $(".total-data strong").text(`一共有${response}条数据`)
            pageData.pagetotal = response
        }
    });
}

function controlpage() {

    $("#page-select").val("5")
    $(".next-page").click(function () {
        if (pageData.currentPage < Math.ceil((pageData.pagetotal) / pageData.pageSize)) {

            pageData.currentPage += 1;
            console.log(pageData.currentPage);
            $(".currentpage").val(pageData.currentPage)

            getajaxAlldata();
        }
    });
    $(".last-page").click(function () {
        if (pageData.currentPage > 1) {

            pageData.currentPage -= 1;
            console.log(pageData.currentPage);
            $(".currentpage").val(pageData.currentPage)

            getajaxAlldata();
        }
    });
    $(".first-page").click(function () {
        pageData.currentPage = 1;
        $(".currentpage").val(pageData.currentPage)
        getajaxAlldata();
    })
    $(".footer-page").click(function () {
        // var total=$("")
        pageData.currentPage = Math.ceil((pageData.pagetotal) / pageData.pageSize);
        $(".currentpage").val(pageData.currentPage)
        getajaxAlldata();
    })
    $(".currentpage").blur(function () {

        pageData.currentPage = $(".currentpage").val()
        getajaxAlldata();
    })
    $("#page-select").change(function () {
        pageData.pageSize = $("#page-select").val();
        getajaxAlldata();
    })

}

function getajaxAlldata() {


    //    let limit =formsearch()


    // console.log(limit);

    $.ajax({
        type: "post",
        url: "http://127.0.0.1:8080/sd/students",
        //   data: null,
        // data: pageData,
        success: function (response) {
            console.log(response);
          
            const html = template("mystudents", response);
            // adddata(response);
            getallClass()
            getcountajax()
            
            $(".tbodycontent").html(html);

        }
    });
}

//   修改是获得 select所有值
// <td>#</td>
//       <td>学生编号</td>
//       <td>name</td>
//       <td>age</td>
//       <td>sex</td>
//       // <td>control</td>
//没用放在那里

function getdata(response) {
    for (var i in response) {
        $(".table-bordered tbody").append(`
          <tr>
          <td>${i}</td>
          <td>${response[i].id}</td>
          <td>${response[i].name}</td>
          <td>${response[i].age}</td>
          <td>${response[i].sex}</td>
          <td><button class="btn btn-danger deletebutton">取消</button></td>
      </tr>
          `);
    }
}

function removebuttom() {
    $("body").on("click", ".deletebutton", function () {
        let id = $(this)
            .parent("td")
            .siblings("td")
            .eq(1)
            .text();
        console.log(id);

        $.ajax({
            type: "delete",
            url: "./sd",
            data: {
                _id: id
            },
            // dataType: "dataType",
            success: function (response) {
                if (response == true) {
                    alert("删除" + response);
                    getajaxAlldata();
                } else {
                    alert("删除失败");
                }
            }
        });
    });
}

function adddata() {
    $("body").on("click", ".addconfirm", function () {
        // id
        var $id = $(".add-sql-table")
            .find("td")
            .eq(1)
            .find("input")
            .val();
        var $name = $(".add-sql-table")
            .find("td")
            .eq(2)
            .find("input")
            .val();
        var $age = $(".add-sql-table")
            .find("td")
            .eq(3)
            .find("input")
            .val();
        var $sex = $(".add-sql-table")
            .find("td")
            .eq(4)
            .find("input")
            .val();
        var $classid = $(".add-sql-table")
            .find("td")
            .eq(5)
            .find("option:selected").val()

        // $id=$(".add-sql-table").find("td").eq(1).find("input").val();
        // console.log( $classid);
        var text = {
            name: $name,
            age: $age,
            sex: $sex,
            classId: $classid
        }
        console.log(text);

        if ($name && $age && $sex !== "") {
            $.ajax({
                type: "post",
                url: "./sd/addlist",
                data: {
                    name: $name,
                    age: $age,
                    sex: $sex,
                    classId: $classid
                },
                // dataType: "dataType",
                success: function (response) {
                    alert("成功添加");
                    getajaxAlldata();
                }
            });
        } else {
            alert("有数据为空，不能为空");
        }
    });
}

function newaddbutton() {
    $(".add-sql-table").hide();
    var indexbutton = -1;
    //新增点击按钮控制
    $(".addbutton").click(function () {
        // $(".add-sql-table").toggleClass("add-sql-table-show")
        $(".add-sql-table").fadeToggle(500);
        if (indexbutton == -1) {
            $(this).text("取消");
            indexbutton = 1;
        } else {
            $(this).text("确定");
            indexbutton = -1;
        }
    });
}

function updatebutton() {
    // $(".tbodycontent").find("input").prop("disabled",true);
    // console.log(;
    $("body").on("click", ".updatebutton", function () {
        console.log("sd1");

        var isdisabled = $(this)
            .parent("td")
            .parent("tr")
            .find("td").eq(2)
            .find("input")
            .prop("disabled");
        if (isdisabled == true) {
            $(this)
                .parent("td")
                .parent("tr")
                .find("td")
                .siblings()
                .find("input")
                .prop("disabled", false);
            $(this)
                .parent("td")
                .parent("tr")
                .find("td")
                .eq(5)
                .prop("hidden", true);
            $(this)
                .parent("td")
                .parent("tr")
                .find("td")
                .eq(6)
                .prop("hidden", false);

            //传入修改的数据数据

            $(this).text("确定");
        } else {
            $(this)
                .parent("td")
                .parent("tr")
                .find("td")
                .eq(5)
                .prop("hidden", false);
            $(this)
                .parent("td")
                .parent("tr")
                .find("td")
                .eq(6)
                .prop("hidden", true);




            var id = $(this)
                .parent("td")
                .parent("tr")
                .find("td")
                .eq(1)
                .text();
            var name = $(this)
                .parent("td")
                .parent("tr")
                .find("td")
                .eq(2)
                .find("input")
                .val();
            var age = $(this)
                .parent("td")
                .parent("tr")
                .find("td")
                .eq(3)
                .find("input")
                .val();
            var sex = $(this)
                .parent("td")
                .parent("tr")
                .find("td")
                .eq(4)
                .find("input")
                .val();
            var classId = $(this)
                .parent("td")
                .parent("tr")
                .find("td")
                .eq(6)
                .find("option:selected")
                .val();

            // console.log( $id,$name,$age,$sex);
            var updata = {
                _id: id,
                name: name,
                age: age,
                sex: sex,
                classId: classId
            };
            // console.log(updata);

            // console.log( $sex);
            $.ajax({
                type: "post",
                url: "./sd/updatedata",
                data: updata,
                success: function (response) {
                    if (response == true) {

                        console.log(response);

                        getajaxAlldata();
                        alert("修改成功");
                    } else {
                        alert("失败" + response);
                    }

                }
            });
            $(this)
                .parent("td")
                .parent("tr")
                .find("td")
                .siblings()
                .find("input")
                .prop("disabled", true);
            $(this).text("修改");
        }
    });
}

function addClass() {
    $(".addClassConfirm").click(function () {
        console.log($("input[name=addClass-input]").val());

        $.ajax({
            type: "post",
            url: "./studentClass/addclass",
            data: {
                name: $("input[name=addClass-input]").val()
            },
            // dataType: "dataType",
            success: function (response) {
                alert(response);
                getajaxAlldata();
            }
        });
    });
}

function getallClass() {
    $.ajax({
        type: "post",
        url: "./studentClass/getAll",
        // data: "data",
        // dataType: "dataType",
        success: function (response) {
            // console.log(response);

            // const html=response.map(item=>`<p)
            var str = "";
            for (var i in response) {
                str += ` <option value ="${response[i]._id}">${response[i].name}</option>`;
            }

            $("#selectClass").html(`
       ${str}
      `);
            $(".select-alter").html(`
      ${str}`)
        }
    });
}