"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css'
import { Icon } from 'leaflet'

import Image from "next/image";

const defaultPosition: [number, number] = [51.505, -0.09];

export default function Home() {
  return (
    <>
     <main className="content">
        <div>
          <MapContainer center={defaultPosition} zoom={13} className="map-container">
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
              <Marker position={defaultPosition}>
                <Popup>
                  A pretty CSS3 popup <br /> Easily customzable
                </Popup>
              </Marker>
          </MapContainer>
        </div>
     </main>
    </>
  );
}