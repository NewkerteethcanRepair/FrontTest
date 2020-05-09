// 首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置。
// 再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。
// 重复第二步，直到所有元素均排序完毕。

var num=[1,2,5,7,23,123,12,33,22,11,99];
var len = num.length;
var minIndex, temp;
for (var i = 0; i < len - 1; i++) {
    minIndex = i;
    for (var j = i + 1; j < len; j++) {
        if (num[j] < num[minIndex]) {     // 寻找最小的数
            minIndex = j;                 // 将最小数的索引保存
        }
    }
    temp = num[i];
    num[i] = num[minIndex];
    num[minIndex] = temp;
}

console.log(num);
console.log(num);
