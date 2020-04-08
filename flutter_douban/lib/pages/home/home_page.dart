import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
class HomePage extends StatelessWidget {
  // const name({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    ScreenUtil.init(context);
    // ScreenUtil.init(context, width: 1080, height: 1920, allowFontScaling: true);
    return Scaffold(
      // Material Design布局结构的基本实现。
      // 此类提供了用于显示drawer、snackbar和底部sheet的API。
      // title: Text("dasdsa"),
      appBar:AppBar(
        title:Text("首页"),
        elevation:0,

      ),//appbar
      body:Column(
        children: <Widget>[
          // chkuid
          Container(
            height:120.w,
            padding:EdgeInsets.all(16.w),
            color:Color(0xFF41bd55),
            child: Container(
              height:80.w,
              
              decoration:BoxDecoration(
                color:Colors.white,
                borderRadius:BorderRadius.circular(8.w),
                
                // color:Colors
              ), //decoreation
            ),
          ),// container
          Column(
            children:<Widget>[
              Container(
                height:120.w,
                color:Colors.white,
                // decoreation
                
                
                
              ),//Container
            Row(
              children:<Widget>
            )     
            ]
          ),
        ],//widget
      ),//Column
  
    );
  }
}