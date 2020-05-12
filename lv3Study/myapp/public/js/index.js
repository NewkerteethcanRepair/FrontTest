$(function () {
    const pageData = {
        currentPage:1,
        pageSize:3,
        total:0,
        rows:[]
    }
    rendering();
    getClasses();

    // 新增学生
    $('.add #addStudentsBtn').click(function () {
        let name = $('.add .name input').val();
        let age = $('.add .age input').val();
        let gender = $('.add .gender input[name=addGender]:checked').val();
        let classesId = $('.add #classesList').val();
        if (name != undefined && age != undefined && gender != undefined) {
            $.ajax({
                url: '/student/addData',
                type: 'post',
                data: { name, age, gender, classesId},
                success: msg => { }
            });
            $('.add .name input').val('');
            $('.add .age input').val('');
            rendering();
        } else {
            alert('请把信息填写完整！');
        }
    });

    // 新增班级
    $('.addClasses #addClassesBtn').click(function(){
        let name = $('.addClasses .name input').val();
        $.ajax({
            url:'/classes/addClasses',
            type:'POST',
            data:{name},
            success: msg =>{
                if(msg){
                    alert('新增成功');
                    $('.addClasses .name input').val('');
                    getClasses();
                }
            }
        })
    })
    
    // 删除
    $('table tbody').on('click', '.del', function () {
        let _id = $(this).data('_id');
        let isdel = confirm('确定删除吗？');
        if (isdel) {
            $.ajax({
                url: '/student/delData',
                type: 'post',
                data: { _id },
                success: msg => { }
            });
        }
        rendering();
    });

    // 获取修改数据
    var id;
    $('table tbody').on('click', '.modification', function () {
        let _id = $(this).data('_id');
        $.ajax({
            url: '/student/inquireData',
            type: 'post',
            data: { _id },
            success: ([msg]) => {
                $('.modification .name input').val(msg.name);
                $('.modification .age input').val(msg.age);
                $(`.modification .gender input[value='${msg.gender}']`).prop('checked', true);
                id = msg._id;
            }
        })

    });

    // 修改
    $('.operation .modification a').click(function () {
        let name = $('.operation .modification .name input').val();
        let age = $('.operation .modification .age input').val();
        let gender = $('.operation .modification .gender input[name="modificationGender"]:checked').next().text();
        let _id = id;
        $.ajax({
            url: '/student/modificationData',
            type: 'post',
            data: { _id, name, age, gender },
            success: msg => { }
        });

        $('input').val('');
        $(":radio").removeAttr('checked');
        rendering();
    });
    
    // 查询
    $('.operation .inquire a').click(function () {
        let genre = $("#inquire option:selected").val();
        let val = $(".inquire input").val();
        let obj = {genre,val};
        rendering(obj);
    });

    // 班级列表渲染
    function getClasses(){
        $.ajax({
            url:'/classes/getClasses',
            type:'GET',
            success: msg =>{
                //
                let HTML = msg.map(item => (`
                <option value="${item._id}">${item.name}</option>
                `)).join('');
                $('#classesList').html(HTML);
            }
        })
    }

    // 学生数据渲染
    function rendering(...obj) {
        
        if(obj.length>0){
            obj = obj[0]
        }else{
            obj = {}
        }
        $.ajax({
            url: '/student/rendering',
            type: 'POST',
            data: {
                genre:obj.genre,
                val:obj.val,
                currentPage:pageData.currentPage,
                pageSize:pageData.pageSize},
            success: msg => {
                pageData.total = msg.total;
                pageData.rows = msg.rows;
                $('#pageSize').text(pageData.total);
                $('#currentPage').text(pageData.currentPage);
                let str = '';
                for (let i = 0; i < msg.rows.length; i++) {
                    str += `
                        <tr>
                            <td>${msg.rows[i]._id}</td>
                            <td>${msg.rows[i].name}</td>
                            <td>${msg.rows[i].age}</td>
                            <td>${msg.rows[i].gender}</td>
                            <td>${msg.rows[i].classesId.name}</td>
                            <td>
                                <a href="javascript:" class='modification' data-_id='${msg.rows[i]._id}'>修改</a>
                                <a href="javascript:" class='del' data-_id='${msg.rows[i]._id}'>删除</a>
                            </td>
                        </tr>
                    `;
                }
                $('table tbody').html(str);
            }
        });
    }

    // 下一页
    $('#nextPage').click(function(){
        if (pageData.currentPage < Math.ceil(pageData.total/$('#pageData').val())) {
            pageData.currentPage++;
            rendering();
        }else{
            alert('已经是最后一页了')
        }
    })
    
    // 上一页
    $('#previousPage').click(function(){
        
        if(pageData.currentPage > 1){
            pageData.currentPage--;
            rendering();
        }else{
            alert('已经是第一页了!');
        }
    })

    // 首页
    $('#homePage').click(function(){
        pageData.currentPage = 1;
        rendering();
    })

    // 尾页
    $('#endPage').click(function(){
        pageData.currentPage = Math.ceil(pageData.total/pageData.pageSize);
        rendering();
    })

    // 选择数据条数
    $('#pageData').change(function(){
        pageData.pageSize = $(this).val();
        pageData.currentPage = 1;
        rendering();
    })
});