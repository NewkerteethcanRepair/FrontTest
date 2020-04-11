import 'package:flutter/material.dart';
import "package:flutter_screenutil/flutter_screenutil.dart";
import 'dart:core';
class HomePage extends StatelessWidget {
  // const name({Key key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    ScreenUtil.init(context);
    ScreenUtil.init(context, width: 1080, height: 1920, allowFontScaling: true);
    // default value : width : 1080px , height:1920px , allowFontScaling:false

    return Scaffold(
      appBar:AppBar(
         //必须要再Text 组件里写首页
         title:Text("首页") //导航栏的标题
       ),//AppBar
        // body:Text("首页内容")
        // 只有一个container
        // body:Container(import 'package:flutter/material.dart';
        //   width:100,
        //   height:100,
        //   // color:Color(0xFF647e8a)
        //   // color:Color.formRGBO(R,g,b,opacity)
        //   // color:Colors.orange
        //   color:Colors.blue[900]
        // )
        body:Row(
          // child 只有一个儿子
          // CHI
          children:<Widget>[
            Container(
              width:100.h,
              
              height:100.w,
              color:Colors.blue[900],
              
              // coolr
              // color:Colors.

              //  color:color
            // color:Color
            ),
             Container(
              width:100,
              height:100,
              // color:Colors.blue[100],
              // 就不能用上面的颜色了
              
              decoration: BoxDecoration(
                border: Border.all(width: 5.w, color: Colors.red),
                color: Colors.yellowAccent,
                borderRadius: BorderRadius.circular(10),
     
              ),
              //  color:Colors.formRGBO()
            ),
          ],
        // children
   

        ),
        
        
        // 列
        // body:Column(
        //   child
        // )
    );
  }
}