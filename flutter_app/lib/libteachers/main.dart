// Widget（组件、部件、控件）
// 一切皆 widget，包括文字、图片等，甚至是颜色、大小等

import 'package:flutter/material.dart';
import 'package:flutter_douban/pages/home_page.dart';


void main() => runApp(MyApp());

// 快捷键：stl
class MyApp extends StatelessWidget {
  
  @override
  Widget build(BuildContext context) {    
    return MaterialApp(
      title: '豆瓣',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        primarySwatch: Colors.orange,
      ),
      home: HomePage(),
    );
  }
}

// List 理解为数组

// 返回值类型 函数名(参数) {
//   函数内容
//   return 返回值
// }

// var a = 1;
// int a = 1;
