import { useMap } from "react-leaflet";
import { useEffect } from "react";

const FlyToMarker = ({ position, zoomlvl } : any ) => {
    const map = useMap();


    useEffect(() => {
        if (position) {
            const zoom = zoomlvl ?? map.getZoom();
            map.flyTo(position, zoom, { duration: 1 });
        }
    }, [map, position, zoomlvl])

    return null;
}

export default FlyToMarker;