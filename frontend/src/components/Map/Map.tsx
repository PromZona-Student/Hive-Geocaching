import { Icon } from "leaflet";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { Geocache } from "../../model/Geocache";
import { useState } from "react";
import GeocacheModal from "../GeocacheModal";

interface Props {
    geocaches: Array<Geocache>
}
const Map = ({
    geocaches,
}: Props) => {
    const [isOpen, setisOpen] = useState(false);
    const [currentCache, setCurrentCache] = useState<Geocache | null>(null);

    const toggle = () => {
        setisOpen(!isOpen);
    };

    const handleOnClick = (cache: Geocache) => {
        setCurrentCache(cache);
    };

    return (
        <>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            ></TileLayer>
            {
                geocaches.map((cache) => {
                    return (
                        <Marker key={cache.referenceCode}
                            position={[cache.postedCoordinates.latitude, cache.postedCoordinates.longitude]}
                            icon={new Icon({
                                iconUrl: "katko2.gif",
                                iconSize: [24, 18]
                            })}
                            eventHandlers={{
                                click: () => {
                                    handleOnClick(cache);
                                    toggle();
                                },
                            }}
                        >
                        </Marker>
                    );
                })
            }
            <GeocacheModal isOpen={isOpen} toggle={toggle} cache={currentCache} />
        </>
    );
};

export default Map;
