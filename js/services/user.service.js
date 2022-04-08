"use strict"

const DATA_KEY='USER_SETT_DB';
let userSettings;

function getUserSettings(){
    return _loadUserSettings();
}

function setUserSettings(email,age,bkcColor,txtColor,birthDate,birthTime=0){
    if(isNaN(birthTime)){
        userSettings={email,age,bkcColor,txtColor,birthTimeStamp:birthDate}
    }else{
        userSettings={email,age,bkcColor,txtColor,birthTimeStamp:(birthDate+birthTime)}
    }
    _saveUserSettings();
}

function _saveUserSettings(){
    saveToStorage(DATA_KEY,userSettings);
}

function _loadUserSettings(){
    return loadFromStorage(DATA_KEY)
}