"use client"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import 'leaflet/dist/leaflet.css'
import { Icon } from 'leaflet'
import { historyEvents, HistoricalEvents } from "../historyEvents"
import { useState, useRef, act } from "react"
import { Map as Leaflet} from "leaflet"
import FlyToMarker from "./FlyToMarker"
import Filter from "./Filter"
import Image from "next/image"

const defaultPosition : [number, number] = [51.505, -0.09];

const emptyHeart = <i className="fa-regular fa-heart"></i>;  // icon tag from html
const fullHeart = <i className="fa-solid fa-heart" style={{ color: "rgb(156, 54, 54)"}}></i>
// mapsapp
const MapApplication = () => {
  const [activeEvent, setActiveEvent] = useState<HistoricalEvents | null>(null);
  const [favorites, setFavorites] = useState<number[]>(() => {
// initial data
      const savedFavorites = localStorage.getItem("favorites");
      return savedFavorites ? JSON.parse(savedFavorites) : []; //parse mean string to json otherwise empty array
  });
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  console.log('selected category :)', selectedCategory)
  console.log(favorites)


  const defaultIcon: Icon = new Icon({
    iconUrl: "marker2.svg",
    iconSize: [35, 25],
    iconAnchor: [12, 15],
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


  const handleListItemClick = (eventId : number) => {
    const event = historyEvents.find((history) => history.id === eventId);

    if(event) {
      setActiveEvent(event);
    }
  }

 

 
  return (
    <div className="flex flex-col gap-5 w-full h-full">
  {/* Navigation Bar */}
    <div className="nav h-[8%] flex items-center justify-start border ">
      <Filter setSelectedCategory={setSelectedCategory} />
    </div>

  {/* Main Content with Sidebar on Left and Map on Right */}
  <div className="flex w-full h-[90%]">
    
    {/* Sidebar for Favorite Events on the Left */}
    {favorites.length > 0 ? (
      <div className="w-1/5 h-full liked-events">
      <h2 className="liked_events__title text-lg text-[var(--color-beige)] mb-2 px-2 rounded text-center font-bold ">
        <i className="fa-solid fa-heart justify-center"></i> Favorite Events
      </h2>
      <ul>
          {favorites
          .map(id => {
            return historyEvents.find(event => event.id === id) //array of events that matched
          })

          .filter(event => event !== undefined) // event with values (as array)
          .map(event => (
            <li 
              className="liked-events__event" 
              key={event?.id} 
              onClick={()=> {
                  handleListItemClick(event.id)
              }}
              >
              <h3 className="liked-events__eventTitle">{event?.title}</h3>
            </li>
          ))
          
          }
        </ul>
    </div>
    ) : null }
    

    {/* Main Content */}
    <div className={`${favorites.length > 0 ? 'w-4/5' : 'w-full'} h-full pl-4`}>
      <MapContainer center={defaultPosition} zoom={13} className="map-container">
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {historyEvents.filter((event) => !selectedCategory || event.category === selectedCategory).map((event) => (
          <Marker
            key={event.id}
            position={event.position}
            icon={defaultIcon}
            eventHandlers={{
              click: () => {
                setActiveEvent(event)
              }
            }}
           
          />

        ))}
       {/* if active favorite, flys to the marker */}
      {activeEvent && <FlyToMarker position={activeEvent?.position} zoomlvl={12} />}  

        {/* if active marker on map */}
        {activeEvent && activeEvent.position && Array.isArray(activeEvent.position) && (
          
          <Popup position={activeEvent.position} offset={[0, -1]}>
            <div className="popup-inner">
              <h2 className="popup-inner__title">{activeEvent.title}</h2>
              <div className="popup-inner__description">
                {activeEvent.image && (
                  <Image
                  src={activeEvent.image}
                  alt={activeEvent.title}
                  width={300}
                  height={300}
                  layout="responsive"
                  style={{ borderRadius: "10px", marginBottom: "1rem", borderColor: "#454545", borderBottom: "2px solid red"}}
                />
                )}
                
                <p>{activeEvent.description}</p>
                <button onClick={() => handleFavorite(activeEvent.id)} className="popup-inner__button">
                  <span>
                    {favorites.includes(activeEvent.id) ? fullHeart : emptyHeart}
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