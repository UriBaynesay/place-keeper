"use strict"

function init(){
    const elBody=document.body;
    
    const userSettings=getUserSettings();
    if(userSettings){
        elBody.style.backgroundColor=userSettings.bkcColor;
        elBody.style.color=userSettings.txtColor;
    }

    renderMap();
}

function renderMap(){
    const elMap=document.querySelector('.map');
    const options = {
        center: { lat :29.572127503903275, lng: 34.955430113139926 },
        zoom: 10
    };

    const map = new google.maps.Map(
        elMap,
        options
    );
}