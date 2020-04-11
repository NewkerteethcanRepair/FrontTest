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
                // borderRadius:b
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
              children:<Widget>[
                Container(
                  width:240.w,
                  height:360.w,
                  color:Colors.black26,

                  // edgeInsets是Widget的配置类，允许文本方向感知分辨率。
                  // fromLTRB(double left, double top, double right, double bottom)，分别指定四个方向的填充。
                  // all(doube value)，所有方向均使用相同数值的填充。
                  // only(top:0,right:0,bottom:0,left:0)，可以设置具体某个方向的填充(可以同时指定多个方向)。
                  // symmeric(vertical:0,horizontal:0)，用于设置对称方向的填充，vertical指top和bottom，horizontal指left和right。


                  margin:EdgeInsets.fromLTRB(15.w,0,15.w,0.w),

                ),
                Container(
                  width:240.w,
                  height:360.w,
                  color:Colors.black26,
                  margin:EdgeInsets.fromLTRB(15.w,0,15.w,0.w),
                ),
                 Container(
                  width:240.w,
                  height:360.w,
                  color:Colors.black26,
                   margin:EdgeInsets.fromLTRB(15.w,0,15.w,0.w),
                ),
                   Container(
                  width:240.w,
                  height:360.w,
                  color:Colors.black26,
                   margin:EdgeInsets.fromLTRB(15.w,0,15.w,0.w),
                ),
            
              ]
            )     
            ]
          ),
          Container(
            height:800.w,
            child:ListView(
                scrollDirection:Axis.horizontal,
                children: <Widget>[
                  Container(
                    width:240.w,
                    height:360.w,
                    color:Colors.black26,
                    margin:EdgeInsets.fromLTRB(15.w,15.w,15.w,0.w),
                    // decoreation:BoxDecoration(

                    // )
                  ),
                    Container(
                    width:240.w,
                    height:360.w,
                    color:Colors.black26,
                    margin:EdgeInsets.fromLTRB(15.w,15.w,15.w,0.w),
                  ),
                     Container(
                    width:240.w,
                    height:360.w,
                    color:Colors.black26,
                    margin:EdgeInsets.fromLTRB(15.w,15.w,15.w,0.w),
                  ),
                        Container(
                    width:240.w,
                    height:360.w,
                    color:Colors.black26,
                    margin:EdgeInsets.fromLTRB(15.w,15.w,15.w,0.w),
                  ),
                        Container(
                    width:240.w,
                    height:360.w,
                    color:Colors.black26,
                    margin:EdgeInsets.fromLTRB(15.w,15.w,15.w,0.w),
                  ),
                        Container(
                    width:240.w,
                    height:360.w,
                    color:Colors.black26,
                    margin:EdgeInsets.fromLTRB(15.w,15.w,15.w,0.w),
                  ),


                ],
              
            )
          )
        ],//widget
      ),//Column
  
    );
  }
}