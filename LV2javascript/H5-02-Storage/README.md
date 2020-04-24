# 浏览器默存储
在H4中我们可以让浏览器默认存储一些数据，cookie技术来完成。cookie可以看成浏览器提供的一种存储技术。将内容存放在
浏览器本地，可以随时获取。

cookie的域： http://www.baidu.com ---> 发送一些数据回浏览器，浏览器就将数据保存到cookie。服务端来实现。
下一次获取cookie值  必须要是相同的域  js获取cookie的内容 http://www.baodu.com才能获取
cookie值：采用键值对来存储，存储内容大小有限制。默认不超过4kb。
cookie安全：cookie存放的内容很容易暴露，不能在cookie里面存放账户密码敏感信息。

服务端编程的时候，学习cookie。

# H5新增了Web Storage存储技术
1. localStorage：本次缓存，只要你把数据存放在localStorage中，一直都会保存下来，就算浏览器关闭过后也会存在
2. sessionStorage：session一次会话，打开浏览器浏览网页，关闭网站。这个过程就成为一次会话。存储有效期就是一次会话，
打开浏览器 将数据保存到sessionStorage里面，在没有关闭浏览器之前 你都可以操作数据，但是当前关闭浏览器，数据会被清空。

目的：H5在浏览器新增这种存储技术，目的是为了更方便我们开发，也是为了解决cookie一些问题。
cookie缺点：
1. cookie保存数据不超过4kb ，storage保存的数据可以达到5M
2. 浏览器发送请求访问服务器的时候，将cookie的数据发送给服务器。storage不会发送、
3. 操作复杂性，cookie的操作相比storage操作起来更麻烦。

