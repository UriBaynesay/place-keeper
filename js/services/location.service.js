"use strict";

const LOCATION_KEY ="LOCATION_DB";
const gLocations = [];


function removeLocationById(locationId) {
  const locationIdx = gLocations.findIndex(
    (location) => location.id === locationId
  );
  gLocations.splice(locationIdx, 1);
  _saveLocations();
}

function getLocations() {
  return _loadLocations();
}

function addLocation(name, position) {
  gLocations.push(_createLocation(position, name));
  _saveLocations();
}

function createLocations() {
    if(_loadLocations()) return;
  gLocations.push(
    _createLocation({ lat: 32.715583676206116, lng: 35.31399762608496 }, "home")
  );
  _saveLocations();
}

function _createLocation(position, name) {
  return {
    id: makeId(),
    lat: position.lat,
    lng: position.lng,
    name,
  };
}

function _saveLocations() {
    saveToStorage(LOCATION_KEY,gLocations);
}

function _loadLocations(){
    return loadFromStorage(LOCATION_KEY)
}