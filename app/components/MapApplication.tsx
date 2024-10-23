"use client"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import 'leaflet/dist/leaflet.css'
import { Icon } from 'leaflet'
import { events, HistoricalEvents } from "../historyEvents"
import { useState,} from "react"

const defaultPosition : [number, number] = [51.505, -0.09];

const emptyStar = <i className="fa-regular fa-star"></i>;  // icon tag from html
const fullStar = <i className="fa-solid fa-star" style={{ color: "#fdc401"}}></i>
// mapsapp
const MapApplication = () => {

  const [activeEvent, setActiveEvent] = useState<HistoricalEvents | null>(null)
  const [favorites, setFavorites] = useState<number[]>(() => {
    // initial data
    const savedFavorites = localStorage.getItem("favorites");
      return savedFavorites ? JSON.parse(savedFavorites) : []; //parse mean string to json otherwise empty array
  });

  console.log(favorites)

  const icon: Icon = new Icon({
    iconUrl: "marker.svg",
    iconSize: [25, 35],
    iconAnchor: [12, 35],
  })

  const handleFavorite = (eventId : number) => {
    //return new array of favorite that doesnt include the current even Id (becoming unfavorite)
    let updatedFavorites = favorites.filter((id) => id !== eventId); 
          
    // if eventId is not included in favorites (becoming favorite)
    if (!favorites.includes(eventId)) {
      updatedFavorites = [eventId, ...updatedFavorites];
    }
       
    setFavorites(updatedFavorites);
    localStorage.setItem("updatedFavorites", JSON.stringify(updatedFavorites));

  }

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
                    <button onClick={() => handleFavorite(event.id)} className="popup-inner__button">
                      <span>
                          {favorites.includes(event.id) ? fullStar : emptyStar}
                          {favorites.includes(event.id) ? ' Unfavorite' : ' Favorite'}
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