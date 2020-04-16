# DOM 样式表操作
用户可以基于js可以操作html元素，元素新增、删除、替换等等。还可以使用js来操作css样式表。
DOM提供了对css样式操作的api。
在js中操作css样式。在DOM中提供了操作css样式的对象。IE4.0开始给页面上的元素引入了一个style对象。
        * 使用这个对象可以管理页面上所有的css样式。
        * DOM采用操作style对象来完成html样式的控制
         * DOM将这个中方式作为其标准来操作样式。


## style对象
平时在用的时候style其实是一个属性，任何都拥有这个属性。真正实例对象cssStyleDeclaration，当前cssStyleDeclaration对象
包含了css的属性。


## 最终样式
getComputedStyle()函数可以获取到当前标签最终渲染的时候所有样式，包括浏览器默认样式，浏览器用户自定义样式，
内联样式、内部样式、外部样式。
对于一个简单的标签来说，就算你没有设置任何样式，最终样式都会很多内容。
getComputedStyle返回的对象length 190+
（测试 FF 192 IE9 195 chrome：253）


