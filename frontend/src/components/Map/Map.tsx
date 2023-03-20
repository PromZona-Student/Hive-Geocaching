import { Icon } from "leaflet";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { Geocache } from "../../model/Geocache";
import { useState } from "react";
import GeocacheModal from "../GeocacheModal";

interface Props{
    geocaches: Array<Geocache>
}

const Map = ({geocaches}: Props) => {
    const [isOpen, setisOpen] = useState(false);
    const [currentCache, setCurrentCache] = useState<Geocache>(
        {
            referenceCode: "",
            name: "",
            placedDate: "",
            publishedDate: "",
            type: "",
            size: "",
            postedCoordinates: {
                latitude: 0,
                longitude: 0,
            },
            lastVisitedDate: "",
            isPremiumOnly: false,
            shortDescription: "",
            longDescription: "",
            hints: "",
            location: {
                country: "",
                countryId: 0,
                state: "",
                stateId: 0,
            },
            ownerAlias: "",
            difficulty: 0,
            terrain: 0
        }
    );
    const center: [number, number] = [65.284255, 26.243655];
    const zoom = 5;

    const toggle = () => {
        setisOpen(!isOpen);
    };

    const handleOnClick = (cache:Geocache) => {
        setCurrentCache(cache);
    };

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
                            <Marker key={cache.referenceCode} 
                                position={[cache.postedCoordinates.latitude, cache.postedCoordinates.longitude]} 
                                icon={new Icon({
                                    iconUrl: "katko2.gif",
                                    iconSize: [24,18]
                                })}
                                eventHandlers={{click: () => {                                 
                                    handleOnClick(cache);
                                    toggle();
                                },  
                                }}
                            >                                 
                            </Marker>
                        );
                    })
                }
                <GeocacheModal isOpen={isOpen} toggle={toggle} cache={currentCache}/>
            </MapContainer>
        </div>
    );
};

export default Map;
