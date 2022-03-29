/*
 * Copyright 2019 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/* eslint-disable no-undef, @typescript-eslint/no-unused-vars, no-unused-vars */
import './style.css';

// This example creates a simple polygon representing the Bermuda Triangle.

function initMap(): void {
  // Locations
  const carl_von_stahl_haus = { lat: 47.575, lng: 13.043 };

  // Map
  const map = new google.maps.Map(
    document.getElementById('map') as HTMLElement,
    {
      zoom: 13,
      center: carl_von_stahl_haus,
      mapTypeId: 'terrain', // possible values: roadmap, terrain
    }
  );

  // Define the LatLng coordinates for the polygon's path.
  const berchtesgaden_ost_goell_coordinates = [
    { lat: 47.575, lng: 13.043 }, // start point
    { lat: 47.595, lng: 13.043 },
    { lat: 47.595, lng: 13.083 },
    { lat: 47.575, lng: 13.083 },
    { lat: 47.575, lng: 13.043 }, // end point
  ];

  // Polygon.
  const berchtesgaden_ost_goell = new google.maps.Polygon({
    paths: berchtesgaden_ost_goell_coordinates,
    clickable: false,
    strokeColor: '#FF4200',
    strokeOpacity: 0.8,
    strokeWeight: 4,
    fillColor: '#2C2C2B',
    fillOpacity: 0.35,
    map: map,
  });

  // Marker
  new google.maps.Marker({
    position: carl_von_stahl_haus,
    anchorPoint: new google.maps.Point(100, 50),
    clickable: false,
    visible: true,
    icon: drawInvisibleIcon(),
    label: drawLable('17'),
    map: map,
  });

}

function drawLable(label: string): google.maps.MarkerLabel {
  var markerLabel = {
    text: label,
    color: '#FF4200',
    fontSize: '24px',
    fontWeight: 'bold',
  };

  return markerLabel;
}

function drawInvisibleIcon(): google.maps.Symbol {
  var invisibleIcon = {
    path: 'M 0 0 z',
    fillColor: 'black',
    fillOpacity: 1.0,
    strokeWeight: 0,
    rotation: 0,
    scale: 2,
    anchor: new google.maps.Point(0, 0),
    labelOrigin: new google.maps.Point(12,-10),
  };

  return invisibleIcon;
}

export { initMap };
