var conten1 = document.getElementById("content1");
var conten2 = document.getElementById("content2");
var conten3 = document.getElementById("content3");
var conten4 = document.getElementById("content4");
var conten5 = document.getElementById("content5");
var conten6 = document.getElementById("content6");
var conten7 = document.getElementById("content7");
var conten8 = document.getElementById("content8");
var conten9 = document.getElementById("content9");

var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var btn5 = document.getElementById("btn5");
var btn6 = document.getElementById("btn6");
var btn7 = document.getElementById("btn7");
var btn8 = document.getElementById("btn8");
var btn9 = document.getElementById("btn9");

function tab1() {
  conten1.style.transform = "translateX(0px)";
  conten2.style.transform = "translateX(100%)";
  conten3.style.transform = "translateX(100%)";
  conten4.style.transform = "translateX(100%)";
  conten5.style.transform = "translateX(100%)";
  conten6.style.transform = "translateX(100%)";
  conten7.style.transform = "translateX(100%)";
  conten8.style.transform = "translateX(100%)";
  conten9.style.transform = "translateX(100%)";
}
btn1.addEventListener("click", function () {
  btn1.classList.add("active");
  btn2.classList.remove("active");
  btn3.classList.remove("active");
  btn4.classList.remove("active");
  btn5.classList.remove("active");
  btn6.classList.remove("active");
  btn7.classList.remove("active");
  btn8.classList.remove("active");
  btn9.classList.remove("active");
});

function tab2() {
  conten2.style.transform = "translateX(0px)";
  conten3.style.transform = "translateX(100%)";
  conten4.style.transform = "translateX(100%)";
  conten1.style.transform = "translateX(100%)";
  conten5.style.transform = "translateX(100%)";
  conten6.style.transform = "translateX(100%)";
  conten7.style.transform = "translateX(100%)";
  conten8.style.transform = "translateX(100%)";
  conten9.style.transform = "translateX(100%)";
}
btn2.addEventListener("click", function () {
  btn2.classList.add("active");
  btn1.classList.remove("active");
  btn3.classList.remove("active");
  btn4.classList.remove("active");
  btn5.classList.remove("active");
  btn7.classList.remove("active");
  btn8.classList.remove("active");
  btn9.classList.remove("active");
  btn6.classList.remove("active");
});

function tab3() {
  conten3.style.transform = "translateX(0px)";
  conten2.style.transform = "translateX(100%)";
  conten1.style.transform = "translateX(100%)";
  conten4.style.transform = "translateX(100%)";
  conten5.style.transform = "translateX(100%)";
  conten6.style.transform = "translateX(100%)";
  conten7.style.transform = "translateX(100%)";
  conten8.style.transform = "translateX(100%)";
  conten9.style.transform = "translateX(100%)";
}
btn3.addEventListener("click", function () {
  btn3.classList.add("active");
  btn1.classList.remove("active");
  btn2.classList.remove("active");
  btn4.classList.remove("active");
  btn5.classList.remove("active");
  btn7.classList.remove("active");
  btn8.classList.remove("active");
  btn9.classList.remove("active");
  btn6.classList.remove("active");
});

function tab4() {
  conten4.style.transform = "translateX(0px)";
  conten3.style.transform = "translateX(100%)";
  conten2.style.transform = "translateX(100%)";
  conten1.style.transform = "translateX(100%)";
  conten5.style.transform = "translateX(100%)";
  conten6.style.transform = "translateX(100%)";
  conten7.style.transform = "translateX(100%)";
  conten8.style.transform = "translateX(100%)";
  conten9.style.transform = "translateX(100%)";
}
btn4.addEventListener("click", function () {
  btn4.classList.add("active");
  btn3.classList.remove("active");
  btn1.classList.remove("active");
  btn2.classList.remove("active");
  btn5.classList.remove("active");
  btn7.classList.remove("active");
  btn8.classList.remove("active");
  btn9.classList.remove("active");
  btn6.classList.remove("active");
});

function tab5() {
  conten5.style.transform = "translateX(0px)";
  conten3.style.transform = "translateX(100%)";
  conten2.style.transform = "translateX(100%)";
  conten1.style.transform = "translateX(100%)";
  conten4.style.transform = "translateX(100%)";
  conten6.style.transform = "translateX(100%)";
  conten7.style.transform = "translateX(100%)";
  conten8.style.transform = "translateX(100%)";
  conten9.style.transform = "translateX(100%)";
}
btn5.addEventListener("click", function () {
  btn5.classList.add("active");
  btn3.classList.remove("active");
  btn1.classList.remove("active");
  btn2.classList.remove("active");
  btn4.classList.remove("active");
  btn7.classList.remove("active");
  btn8.classList.remove("active");
  btn9.classList.remove("active");
  btn6.classList.remove("active");
});

function tab6() {
  conten6.style.transform = "translateX(0px)";
  conten3.style.transform = "translateX(100%)";
  conten2.style.transform = "translateX(100%)";
  conten1.style.transform = "translateX(100%)";
  conten4.style.transform = "translateX(100%)";
  conten5.style.transform = "translateX(100%)";
  conten7.style.transform = "translateX(100%)";
  conten8.style.transform = "translateX(100%)";
  conten9.style.transform = "translateX(100%)";
}
btn6.addEventListener("click", function () {
  btn6.classList.add("active");
  btn3.classList.remove("active");
  btn1.classList.remove("active");
  btn2.classList.remove("active");
  btn4.classList.remove("active");
  btn7.classList.remove("active");
  btn8.classList.remove("active");
  btn9.classList.remove("active");
  btn5.classList.remove("active");
});

function tab7() {
  conten7.style.transform = "translateX(0px)";
  conten3.style.transform = "translateX(100%)";
  conten2.style.transform = "translateX(100%)";
  conten1.style.transform = "translateX(100%)";
  conten4.style.transform = "translateX(100%)";
  conten5.style.transform = "translateX(100%)";
  conten6.style.transform = "translateX(100%)";
  conten8.style.transform = "translateX(100%)";
  conten9.style.transform = "translateX(100%)";
}
btn7.addEventListener("click", function () {
  btn7.classList.add("active");
  btn3.classList.remove("active");
  btn1.classList.remove("active");
  btn2.classList.remove("active");
  btn4.classList.remove("active");
  btn6.classList.remove("active");
  btn8.classList.remove("active");
  btn9.classList.remove("active");
  btn5.classList.remove("active");
});

function tab8() {
  conten8.style.transform = "translateX(0px)";
  conten3.style.transform = "translateX(100%)";
  conten2.style.transform = "translateX(100%)";
  conten1.style.transform = "translateX(100%)";
  conten4.style.transform = "translateX(100%)";
  conten5.style.transform = "translateX(100%)";
  conten6.style.transform = "translateX(100%)";
  conten7.style.transform = "translateX(100%)";
  conten9.style.transform = "translateX(100%)";
}
btn8.addEventListener("click", function () {
  btn8.classList.add("active");
  btn3.classList.remove("active");
  btn1.classList.remove("active");
  btn2.classList.remove("active");
  btn4.classList.remove("active");
  btn6.classList.remove("active");
  btn7.classList.remove("active");
  btn9.classList.remove("active");
  btn5.classList.remove("active");
});

function tab9() {
  conten9.style.transform = "translateX(0px)";
  conten3.style.transform = "translateX(100%)";
  conten2.style.transform = "translateX(100%)";
  conten1.style.transform = "translateX(100%)";
  conten4.style.transform = "translateX(100%)";
  conten5.style.transform = "translateX(100%)";
  conten6.style.transform = "translateX(100%)";
  conten7.style.transform = "translateX(100%)";
  conten8.style.transform = "translateX(100%)";
}
btn9.addEventListener("click", function () {
  btn9.classList.add("active");
  btn3.classList.remove("active");
  btn1.classList.remove("active");
  btn2.classList.remove("active");
  btn4.classList.remove("active");
  btn6.classList.remove("active");
  btn7.classList.remove("active");
  btn8.classList.remove("active");
  btn5.classList.remove("active");
});
