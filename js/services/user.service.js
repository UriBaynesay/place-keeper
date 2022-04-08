"use strict"

let userSettings;

function setUserSettings(email,age,bkcColor,txtColor,birthDate,birthTime=0){
    if(isNaN(birthTime)){
        userSettings={email,age,bkcColor,txtColor,birthTimeStamp:birthDate}
    }else{
        userSettings={email,age,bkcColor,txtColor,birthTimeStamp:(birthDate+birthTime)}
    }
}