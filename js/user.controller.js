"use strict";

function init(){
  const elBody=document.body;
    
    const userSettings=getUserSettings();
    if(userSettings){
        elBody.style.backgroundColor=userSettings.bkcColor;
        elBody.style.color=userSettings.txtColor;
    }

    renderFormData(userSettings);
}

function renderFormData(settings){
  if(!settings) return;
  const elForm=document.querySelector('form');
  elForm.querySelector('[name="user-email-input"]').value=settings.email;
  elForm.querySelector('[id="user-age"]').value=settings.age;
  elForm.querySelector('[id="user-background-color"]').value=settings.bkcColor;
  elForm.querySelector('[id="user-text-color"]').value=settings.txtColor;
}

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
