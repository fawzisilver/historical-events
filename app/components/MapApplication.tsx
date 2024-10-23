"use client"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import 'leaflet/dist/leaflet.css'
import { Icon } from 'leaflet'
import { historyEvents, HistoricalEvents } from "../historyEvents"
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
    <div className="flex flex-col gap-5 w-full h-full">
  {/* Navigation Bar */}
  <div className="nav h-[8%] flex items-center justify-center ">
    <h1>Navigation Bar</h1>
  </div>

  {/* Main Content with Sidebar on Left and Map on Right */}
  <div className="flex w-full h-[90%]">
    
    {/* Sidebar for Favorite Events on the Left */}
    <div className="w-1/5 h-full liked-events">
      <h2 className="liked_events__title text-white text-center">
        <i className="fa-solid fa-star justify-center"></i> Favorite Events
      </h2>
      <ul className="text-white">
        {favorites.map((id) => {
          const event = historyEvents.find((event) => event.id === id);
          if (event) {
            return (
              <li key={event.id}>
                <h3>{event.title}</h3>
              </li>
            );
          }
          return null;
        })}
      </ul>
    </div>

    {/* Main Content - Map on the Right */}
    <div className="w-4/5 h-full pl-4">
      <MapContainer center={defaultPosition} zoom={13} className="map-container">
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {historyEvents.map((event) => (
          <Marker
            key={event.id}
            position={event.position}
            icon={icon}
            eventHandlers={{
              click: () => {
                setActiveEvent(event);
              }
            }}
          />
        ))}
        {/* Active or Clicked Marker */}
        {activeEvent && activeEvent.position && Array.isArray(activeEvent.position) && (
          <Popup position={activeEvent.position}>
            <div className="popup-inner">
              <h2 className="popup-inner__title">{activeEvent.title}</h2>
              <hr style={{ borderColor: "rgb(111, 207, 151)", borderWidth: '1px', width: '40%' }} />
              <div className="popup-inner__description">
                <p>{activeEvent.description}</p>
                <button onClick={() => handleFavorite(activeEvent.id)} className="popup-inner__button">
                  <span>
                    {favorites.includes(activeEvent.id) ? fullStar : emptyStar}
                    {favorites.includes(activeEvent.id) ? ' Unfavorite' : ' Favorite'}
                  </span>
                </button>
              </div>
            </div>
          </Popup>
        )}
      </MapContainer>
    </div>
  </div>
</div>

  );
}

export default MapApplication