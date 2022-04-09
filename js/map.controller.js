"use strict";
let map;
// let marker;

function init() {
  const elBody = document.body;

  const userSettings = getUserSettings();
  if (userSettings) {
    elBody.style.backgroundColor = userSettings.bkcColor;
    elBody.style.color = userSettings.txtColor;
  }

  initMap(29.558988255885662, 34.93963726774294);
  createLocations()
  renderSavedPlaces();
  map.addListener("click", onMapClick);
}

function onRemovePlace(locationId){
    removeLocationById(locationId);
    renderSavedPlaces();
}

function renderSavedPlaces(){
    const locations=getLocations();
    let strHTML=locations.map(location=>`<div class=location-container><h2>${location.name}</h2><button onclick="onRemovePlace('${location.id}')">X</button></div>`);
    const elSaved=document.querySelector('.saved-places');

    elSaved.innerHTML=strHTML.join('');
}

function onMapClick(mouseEvent) {
let locationName=prompt('please enter the location saved name')
    const position=mouseEvent.latLng.toJSON();
    addLocation(locationName,position);

  newLocationFocus(position);
  renderSavedPlaces();
//   console.log("moust event :", mouseEvent);
}

function initMap(lat, lng) {
  //            if (!lat) lat = 32.0749831;
  //            if (!lng) lat = 34.9120554;
  const elMap = document.querySelector("#map");
  const options = {
    center: { lat, lng },
    zoom: 10,
  };

  map = new google.maps.Map(elMap, options);
}

function onCurrentLocation() {
  navigator.geolocation.getCurrentPosition(
    showCurrentLocation,
    currentLocationErrorHandler
  );
}

function showCurrentLocation(position){

    newLocationFocus({lat:position.coords.latitude,lng:position.coords.longitude})
}

function currentLocationErrorHandler() {
  console.log("Location not supported");
}

function newLocationFocus(position) {
  let cord = { lat: position.lat, lng: position.lng };
  console.log(cord);
  map.setCenter(cord);
  new google.maps.Marker({
    position: cord,
    map,
    title: "Your location",
  });
}
