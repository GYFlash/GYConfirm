# javascript-GYConfirm-
JavaScript 仿照iOS 和 Android 写出的原生的Alert confirm 提示框，自动识别iOS 和Android 平台，及其简单，一行代码就能实现原生提示框效果

使用方法
GYConfirm.show("标题","提示?",["确认","取消"],function (index) {

},"H");
第一个参数为弹框标题。
第二个参数为提示信息。
第三个参数为字符串数组，弹框将会生成与字符串数组对应的按钮组。
第四个参数为block，返回值index 为点击按钮的索引，可根据索引判断点击了哪个按钮执行相关逻辑代码。
第五个参数有两个值，分别为"H",和"V",传H 按钮横向排列，传V按钮则纵向排列。
备注：由于本confirm 使用的是 "rem"单位，请在使用前先设置html 的font-size
