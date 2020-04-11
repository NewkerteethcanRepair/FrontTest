"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var a = 1;

var b = 3;

var Person = function () {
    //定义了一个名字为Person的类
    function Person(name, age) {
        _classCallCheck(this, Person);

        //constructor是一个构造方法，用来接收参数
        this.name = name; //this代表的是实例对象
        this.age = age;
    }

    _createClass(Person, [{
        key: "say",
        value: function say() {
            //这是一个类的方法，注意千万不要加上function
            return "我的名字叫" + this.name + "今年" + this.age + "岁了";
        }
    }]);

    return Person;
}();

var obj = new Person("laotie", 88);
console.log(obj.say()); //我的名字叫laotie今年88岁了