"use client"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import 'leaflet/dist/leaflet.css'
import { Icon } from 'react-leaflet'

const defaultPosition : [number, number] = [51.505, -0.09];
// mapsapp
const MapApplication = () => {
  return (
   
    <div className="flex flex-col w-full h-full">
      <div className="h-13"></div>
      <MapContainer center={defaultPosition} zoom={13} className="map-container">
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
          <Marker position={defaultPosition}>
            <Popup>
              A pretty CSS3 popup <br /> Easily customzable
            </Popup>
          </Marker>
      </MapContainer>
    </div>

  )
}

export default MapApplication