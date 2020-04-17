// $(function() {
	// 	//弹窗
	// 	$('.tiyan').click(function() {
	// 		$('.tan').show();
	// 	})
	// 	//关闭
	// 	$('.close').click(function() {
	// 		$('.tan').hide();
	// 	})
	// 	//触焦变色
	// 	$("input").focus(function() {
	// 		$(this).removeClass('red');
	// 	});
	// 	//失去焦点验证当前表单

	// 	$("#name").blur(function() {

	// 		var emailreg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
	// 		var errtxt = "",
	// 			name = $('#name').val();
	// 		if(name == "") {
	// 			errtxt = "邮箱地址不能为空";
	// 			$('#name').addClass('red');
	// 		} else if((!emailreg.test(name))) {
	// 			errtxt = "请输入正确邮箱地址";
	// 			$('#name').addClass('red');
	// 		}else{
	// 			errtxt = "";
	// 			$('#name').removeClass('red');
	// 		}
	// 		//错误提示消息，有错误则显示，没错误就隐藏
	// 		showmsg(errtxt);
	// 	})
	// 	$("#passw").blur(function() {
	// 		var errtxt = "",
	// 			passw = $('#passw').val();
	// 		if(passw == "") {
	// 			errtxt = "请输入密码";
	// 			$('#passw').addClass('red');
	// 		}else{
	// 			errtxt = "";
	// 			$('#passw').removeClass('red');
	// 		}
	// 		//错误提示消息，有错误则显示，没错误就隐藏
	// 		showmsg(errtxt);
	// 	})
	// 	$("#valicode").blur(function() {
	// 		var errtxt = "",
	// 			valicode = $('#valicode').val();
	// 		if(valicode == "") {
	// 			errtxt = "请输入正确的验证码";
	// 			$('#valicode').addClass('red');
	// 		}else{
	// 			errtxt = "";
	// 			$('#valicode').removeClass('red');
	// 		}
	// 		//错误提示消息，有错误则显示，没错误就隐藏
	// 		showmsg(errtxt);
	// 	})
	// 	//验证
	// 	$('#Submit').click(function() {
	// 		var thisid = "",
	// 			errtxt = "";
	// 		$('input').removeClass('red');
	// 		var emailreg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/; //邮箱正则
	// 		var name = $('input[name=name]').val(),
	// 			passw = $('input[name=password]').val(),
	// 			valicode = $('input[name=valicode]').val();

	// 		if(name == "") {
	// 			errtxt = "邮箱地址不能为空";
	// 			thisid = "name";
	// 		} else if((!emailreg.test(name))) {
	// 			errtxt = "请输入正确邮箱地址";
	// 			thisid = "name";
	// 		} else if(passw == "") {
	// 			errtxt = "请输入密码";
	// 			thisid = "passw";
	// 		} else if(valicode == "") {
	// 			errtxt = "请输入正确的验证码";
	// 			thisid = "valicode";
	// 		} else {

	// 		}
	// 		//错误提示消息，有错误则显示，没错误就隐藏
	// 		showmsg(errtxt);
	// 		//错误边框变红
	// 		thisid ? $('input').removeClass('red').parents('form').find('#' + thisid).focus().addClass('red') : $('#' + thisid).removeClass('red');
	// 	})

	// 	function showmsg(errtxt) {
	// 		errtxt ? $('.error').show().text(errtxt) : $('.error').hide();
	// 	}
	// })