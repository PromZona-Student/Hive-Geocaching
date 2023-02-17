import { Icon } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Geocache } from "../../model/Geocache";
import MapMenu from "../MapMenu";
import "./Map.scss";

interface Props{
    geocaches: Array<Geocache>
}

const Map = ({
    geocaches
}: Props) => {
    
    const center: [number, number] = [65.284255, 26.243655];
    const zoom = 5;

    return (
        <div>
            <MapContainer
                center={center}
                zoom={zoom}
                scrollWheelZoom={true}
                zoomControl={false}
                minZoom={zoom}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                ></TileLayer>
                {
                    geocaches.map((cache) => {
                        return(
                            <Marker key={cache.referenceCode} position={[cache.postedCoordinates.latitude, cache.postedCoordinates.longitude]} icon={new Icon({
                                iconUrl: "katko2.gif"
                            })}>
                                <Popup>
                                    {cache.name}
                                </Popup>
                            </Marker>
                        );
                    })
                }
            </MapContainer>
        </div>
    );
};

export default Map;
