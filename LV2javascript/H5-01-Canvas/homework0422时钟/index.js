$(function () {
  draw();
  console.log("sdsa");
});

function draw() {
  var canvas = $("#clock")[0];
  console.log(canvas + "sadsa");
  // if (!canvas.getContext) return;

  canvas.height = 500;
  canvas.width = 500;
  var ctx = canvas.getContext("2d");
  ctx.beginPath();
  // ctx.moveTo(50,50);
  /**
   * 绘制圆弧：包括圆、包括半圆 等等
   * arc(6个参数)
   * 第一个参数：x轴上面取一个点
   * 第二个参数：y轴上面取一个点  这两个点作为圆心
   * 第三个参数：绘制的圆弧半径
   * 第四个参数：弧度的开始（指定从哪个位置开始绘制圆弧  0代表的意思是默认在x轴正方形
   * 第五个参数：弧度的结束（绘制到哪儿完成） Math.PI  180deg
   *      需要一个弧度，但是平时我们习惯写角度  180deg = (Math.PI/180)*180
   * 第六个参数：true 逆时针 false代表顺时针 默认false
   */
  ctx.arc(150, 150, 100, 0, Math.PI * 2, false);
  // ctx.lineTo(200,200);
  ctx.stroke();
  // ctx.fill();
}
