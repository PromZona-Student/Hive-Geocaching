import { Icon } from "leaflet";
import { Marker, TileLayer } from "react-leaflet";
import { Geocache, GeocacheMapDetails } from "../../model/Geocache";
import { useState } from "react";
import GeocacheModal from "../GeocacheModal";

interface Props {
    geocaches: Array<GeocacheMapDetails>
}
const Map = ({
    geocaches,
}: Props) => {
    const [isOpen, setisOpen] = useState(false);
    const [currentCacheId, setCurrentCacheId] = useState<string | null>(null);

    const toggle = () => {
        setisOpen(!isOpen);
    };

    const handleOnClick = (cacheId: string) => {
        setCurrentCacheId(cacheId);
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
                                    handleOnClick(cache.referenceCode);
                                    toggle();
                                },
                            }}
                        >
                        </Marker>
                    );
                })
            }
            <GeocacheModal isOpen={isOpen} toggle={toggle} cacheId={currentCacheId} />
        </>
    );
};

export default Map;
