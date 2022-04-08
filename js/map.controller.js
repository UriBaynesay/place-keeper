"use strict"

function init(){
    const elBody=document.body;
    
    const userSettings=getUserSettings();
    if(userSettings){
        elBody.style.backgroundColor=userSettings.bkcColor;
        elBody.style.color=userSettings.txtColor;
    }
}