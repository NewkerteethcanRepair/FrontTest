import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';

class HomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    ScreenUtil.init(context, width: 750, height: 1334, allowFontScaling: true);
    return Scaffold(
      // 导航栏
      appBar: AppBar(
        title: Text('首页'), // 导航栏的标题
        // title:t
        // cen
      ),
      body: Center(
        child: Column(
          children: <Widget>[
            Container(
              width: 750.w,
              height: 88.h,
              // color: Color(0xFF647e8a),
              // color: Color.fromRGBO(234, 213, 188, 1),
              color: Colors.blue[900],
              child: Text(
                '测试文字内容测试文字内容测试文字内容测试文字内容测试文字内容测试文字内容',
                style: TextStyle(
                  fontSize: 40.sp,
                  color: Colors.white,
                  fontWeight: FontWeight.w900,
                  decoration: TextDecoration.underline,
                ),
                maxLines: 1,
                overflow: TextOverflow.ellipsis,
              ),
            ),
            Container(
              width: 200.w,
              height: 200.w,
              // color: Color(0xFF647e8a),
              // color: Color.fromRGBO(234, 213, 188, 1),
              color: Colors.green[900],
            ),
            Container(
              width: 200.w,
              height: 200.w,
              decoration: BoxDecoration(
                border: Border.all(width: 5.w, color: Colors.red),
                color: Colors.yellowAccent,
                borderRadius: BorderRadius.circular(10),
                
              ),
            ),
          ],
        ),
      ),
    );
  }
}
