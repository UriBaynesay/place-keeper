"use strict";

function onSubmit(ev) {
  ev.preventDefault();
  console.log(ev);

  const usrEmail=ev.target[0].value;
  const userAge=ev.target[1].value;
  const bkcColor=ev.target[2].value;
  const txtColor=ev.target[3].value;
  const userBirthDate=ev.target[4].valueAsNumber;
  const userBirthTime=ev.target[5].valueAsNumber;
  
  setUserSettings(usrEmail,userAge,bkcColor,txtColor,userBirthDate,userBirthTime);

}

function changeBgc(color) {
  const elBody = document.querySelector(`body`);
  elBody.style.backgroundColor = color;
}

function changeTxtColor(color) {
  const elBody = document.querySelector(`body`);
  elBody.style.color = color;
}
