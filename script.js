'use strict'

var question1 = document.getElementById("btn01");
var answer1 = document.getElementById("txt");
var icon1 = document.getElementById("icon");
question1.addEventListener("click", function () {
  answer1.classList.toggle("visible");
  icon1.classList.toggle("rotate");
});

var question2 = document.getElementById("btn02");
var answer2 = document.getElementById("txt02");
var icon2 = document.getElementById("icon02");
question2.addEventListener("click", function () {
  answer2.classList.toggle("visible");
  icon2.classList.toggle("rotate");
});

var question3 = document.getElementById("btn03");
var answer3 = document.getElementById("txt03");
var icon3 = document.getElementById("icon03");
question3.addEventListener("click", function () {
  answer3.classList.toggle("visible");
  icon3.classList.toggle("rotate");
});

var question4 = document.getElementById("btn04");
var answer4 = document.getElementById("txt04");
var icon4 = document.getElementById("icon04");
question4.addEventListener("click", function () {
  answer4.classList.toggle("visible");
  icon4.classList.toggle("rotate");
});

var question5 = document.getElementById("btn05");
var answer5 = document.getElementById("txt05");
var icon5 = document.getElementById("icon05");
question5.addEventListener("click", function () {
  answer5.classList.toggle("visible");
  icon5.classList.toggle("rotate");
});