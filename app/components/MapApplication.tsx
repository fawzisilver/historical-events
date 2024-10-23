"use client"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import 'leaflet/dist/leaflet.css'
import { Icon } from 'leaflet'

const defaultPosition : [number, number] = [51.505, -0.09];
// mapsapp
const MapApplication = () => {

  type HistoricalEvents = {
    id: number;
    title: string;
    description: string;
    position: [number, number];
    category: string;
  }

  const icon: Icon = new Icon({
    iconUrl: "marker.svg",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  })

  const events : HistoricalEvents[] = [
    {
      id: 1,
      title: "Normany Landings (D-Day)",
      description: "Allied forces landed on the beaches of Normandy, Fance on June 6th.",
      position: [49.411, -0.8322],
      category: "War",
    },
    {
      id: 2,
      title: "Completion of the Sistine Chapel Celing",
      description: "Michelangelo completed the ceiling of the Sistine Chapel in Vatican City",
      position: [41.9029, 12.4545],
      category: "Art",
    }
  ]


  return (
    <div className="flex flex-col w-full h-full">
      <div className="h-12"></div>
      <MapContainer center={defaultPosition} zoom={13} className="map-container">
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
          <Marker position={defaultPosition} icon={icon}>
            <Popup>
              A pretty CSS3 popup <br /> Easily customzable
            </Popup>
          </Marker>
      </MapContainer>
    </div>

  )
}

export default MapApplication