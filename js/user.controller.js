"use strict";

function setUserSettings(ev) {
  ev.preventDefault();
  console.log(ev);
}

function changeBgc(color) {
  const elBody = document.querySelector(`body`);
  elBody.style.backgroundColor = color;
}

function changeTxtColor(color) {
  const elBody = document.querySelector(`body`);
  elBody.style.color = color;
}
