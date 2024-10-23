"use client"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import 'leaflet/dist/leaflet.css'
import { Icon } from 'leaflet'
import { events } from "../historyEvents"
import { useState } from "react"

const defaultPosition : [number, number] = [51.505, -0.09];

const emptyStar = <i className="fa-regular fa-star"></i>;
const fullStar = <i className="fa-solid fa-star" style={{ color: "#fdc401"}}></i>
// mapsapp
const MapApplication = () => {


  const icon: Icon = new Icon({
    iconUrl: "marker.svg",
    iconSize: [25, 35],
    iconAnchor: [12, 35],
  })

  const [favorites, setFavorites] = useState<HistoricalEvent[]>([]);


  return (
    <div className="flex flex-col w-full h-full">
      <div className="h-12"></div>
      <MapContainer center={defaultPosition} zoom={13} className="map-container">
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
          {events.map((event) => (
            <Marker key={event.id} position={event.position} icon={icon}>
              <Popup>
                <div className="popup-inner">
                  <h2 className="popup-inner__title">
                    {event.title}
                  </h2>
                  <hr style={{ borderColor: "rgb(111, 207, 151)", borderWidth: '1px', width: '35%' } }/>
                  <div className="popup-inner__description">
                    <p>
                      {event.description}
                    </p>
                    <button className="popup-inner__button">
                      <span>
                        {emptyStar} Favorite
                      </span>
                      </button>
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
      </MapContainer>
    </div>

  )
}

export default MapApplication