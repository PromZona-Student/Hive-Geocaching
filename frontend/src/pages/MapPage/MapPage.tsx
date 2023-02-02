import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapPage: React.FC = () => {
    
    const center: [number, number] = [61.494, 23.7798]; // Tampere
    const zoom = 13;

    return (
        <div>
            <MapContainer
                center={center}
                zoom={zoom}
                scrollWheelZoom={true}
                style={{ height: "100vh", width: "100%" }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                ></TileLayer>
            </MapContainer>
        </div>
    );
};

export default MapPage;
