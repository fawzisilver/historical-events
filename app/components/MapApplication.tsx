"use client"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import 'leaflet/dist/leaflet.css'
import { Icon } from 'leaflet'
import { historyEvents, HistoricalEvents } from "../historyEvents"
import { useState, useRef } from "react"
import { Map as Leaflet} from "leaflet"

const defaultPosition : [number, number] = [51.505, -0.09];

const emptyHeart = <i className="fa-regular fa-heart"></i>;  // icon tag from html
const fullHeart = <i className="fa-solid fa-heart" style={{ color: "rgb(156, 54, 54)"}}></i>
// mapsapp
const MapApplication = () => {
  const [hoveredEvent, setHoveredEvent] = useState<number | null>(null);
  const [activeEvent, setActiveEvent] = useState<HistoricalEvents | null>(null)
  const [favorites, setFavorites] = useState<number[]>(() => {
    // initial data
    const savedFavorites = localStorage.getItem("favorites");
      return savedFavorites ? JSON.parse(savedFavorites) : []; //parse mean string to json otherwise empty array
  });

  console.log(favorites)

  // use ref
  const mapRef = useRef<Leaflet | null>(null);
  const markersRef = useRef<Map<number, L.Marker>>(new Map());

  const defaultIcon: Icon = new Icon({
    iconUrl: "marker.svg",
    iconSize: [20, 15],
    iconAnchor: [12, 5],
  })

  const hoveredIcon: Icon = new Icon({
    iconUrl: "map-marker-svgrepo-com.svg",
    iconSize: [35, 30],
    iconAnchor: [12, 25],
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

  //========================================
  const handleEventHoverFly = (eventPosition : [number, number]) => {
    const map = mapRef.current;

    if(map && eventPosition) {
      map.flyTo(eventPosition, 12, { duration: 1.5 });
    }
  }

  const handleEventClick = (event : HistoricalEvents) => {
    const marker = markersRef.current.get(event.id);
    // console.log(`Hovered event: ${eventId}`, markerHover)
    if (marker) {
        marker.closePopup();

        // fly to the marker's position
        const map = mapRef.current;
        if (map && event.position) {
          map.flyTo(event.position, 12, { duration: 3});
        }

        setActiveEvent(event);
        marker.openPopup();
      }
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
                if(event) {
                  handleEventClick(event)
                }
              }}
              onMouseEnter={() => {
                handleEventHoverFly(event.position)
                setHoveredEvent(event.id)
              }}
              onMouseLeave={() => {
                setHoveredEvent(null);
              }}
              >
              <h3 className="liked-events__eventTitle">{event?.title}</h3>
            </li>
          ))
          
          }
        </ul>
    </div>
    ) : null }
    

    {/* Main Content - Map on the Right */}
    <div className={`${favorites.length > 0 ? 'w-4/5' : 'w-full'} h-full pl-4`}>
      <MapContainer center={defaultPosition} zoom={13} className="map-container" ref={mapRef}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {historyEvents.map((event) => (
          <Marker
            key={event.id}
            position={event.position}
            icon={hoveredEvent === event.id ? (hoveredIcon) : (defaultIcon)}
            zIndexOffset={hoveredEvent === event.id ? 1000 : 0}
            eventHandlers={{
              click: () => {
                setActiveEvent(event);
              }
            }}
            ref={(marker) => {
              if(marker) {
                markersRef.current.set(event.id, marker)
              }
            }}
          />
        ))}
        {/* Active or Clicked Marker */}
        {activeEvent && activeEvent.position && Array.isArray(activeEvent.position) && (
          
          <Popup position={activeEvent.position} offset={[0, -1]} className="popup-style">
            <div className="popup-inner">
              <h2 className="popup-inner__title">{activeEvent.title}</h2>
              <hr style={{ borderColor: "rgb(111, 207, 151)", borderWidth: '1px', width: '40%' }} />
              <div className="popup-inner__description">
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