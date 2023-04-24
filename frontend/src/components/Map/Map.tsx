import { Icon, PointExpression } from "leaflet";
import { Marker, TileLayer } from "react-leaflet";
import { GeoCacheMapIconUrls, GeocacheMapDetails, defaultMapIconUrl } from "../../model/Geocache";
import { useCallback, useEffect, useState } from "react";
import GeocacheModal from "../GeocacheModal";
import L from "leaflet";
import "./Map.scss";

const MAP_ICON_DIMENSIONS = [36 / 1.5, 27 / 1.5];

const locationIcon = new L.DivIcon({ className: "location-icon", iconSize: [20, 20] });

interface Props {
    geocaches: Array<GeocacheMapDetails>
}
const Map = ({
    geocaches
}: Props) => {
    const [isOpen, setisOpen] = useState(false);
    const [currentCacheId, setCurrentCacheId] = useState<string | null>(null);
    const [userPos, setUserPos] = useState<GeolocationPosition | null>(null);

    const updateUserPos = useCallback((newPos: GeolocationPosition) => {
        setUserPos(newPos);
    }, []);

    useEffect(() => {
        navigator.geolocation.watchPosition(updateUserPos, null, {
            enableHighAccuracy: true,
            timeout: 20000
        });
    }, [updateUserPos]);

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
                                iconUrl: GeoCacheMapIconUrls[cache.type] || defaultMapIconUrl,
                                iconSize: MAP_ICON_DIMENSIONS as PointExpression
                            })}
                            eventHandlers={{
                                click: () => {
                                    handleOnClick(cache.referenceCode);
                                    toggle();
                                },
                            }}
                            zIndexOffset={0}
                        >
                        </Marker>
                    );
                })
            }
            <GeocacheModal isOpen={isOpen} toggle={toggle} cacheId={currentCacheId} />
            {
                userPos && (
                    <Marker position={[userPos.coords.latitude, userPos.coords.longitude]} icon={locationIcon} zIndexOffset={10}></Marker>
                )
            }
        </>
    );
};

export default Map;
