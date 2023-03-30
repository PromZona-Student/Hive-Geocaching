import { ReactNode } from "react";
import { MapContainer } from "react-leaflet";

interface Props{
    children: ReactNode
}

const center: [number, number] = [65.284255, 26.243655];
const zoom = 5;

export const MapContext = ({ children }: Props) => {
    return (
        <MapContainer
            center={center}
            zoom={zoom}
            scrollWheelZoom={true}
            zoomControl={false}
            minZoom={zoom}
        >
            {children}
        </MapContainer>
    );
};