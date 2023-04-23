import { Icon, LatLng, LatLngBounds, Path } from "leaflet";
import { Marker, TileLayer, useMap, useMapEvent } from "react-leaflet";
import { GeocacheMapDetails } from "../../model/Geocache";
import { useEffect, useState } from "react";
import GeocacheModal from "../GeocacheModal";
import L from "leaflet";
import "./Map.scss";

const locationIcon = new L.DivIcon({ className: "location-icon", iconSize: [20, 20] });

interface Props {
    geocaches: Array<GeocacheMapDetails>
    onBoundsChanged: (bounds: LatLngBounds, centerPoint: LatLng) => void;
}
const Map = ({
    geocaches,
    onBoundsChanged
}: Props) => {
    const [isOpen, setisOpen] = useState(false);
    const [currentCacheId, setCurrentCacheId] = useState<string | null>(null);
    const [userPos, setUserPos] = useState<GeolocationPosition | null>(null);
    const map = useMap();

    const onUserPosEnabled = (geoPos: GeolocationPosition) => {
        setUserPos(geoPos);
        navigator.geolocation.watchPosition((newPos) => {
            setUserPos(newPos);
        });
    };

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(onUserPosEnabled);
    }, []);

    const handleBoundsChange = () => {
        const bounds = map.getBounds();
        const centerPoint = map.getCenter();
        onBoundsChanged(bounds, centerPoint);
    };

    useMapEvent("zoomend", () => {
        handleBoundsChange();
    });

    useMapEvent("moveend", () => {
        handleBoundsChange();
    });

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
            {
                userPos && (
                    <Marker position={[userPos.coords.latitude, userPos.coords.longitude]} icon={locationIcon}></Marker>
                )
            }
        </>
    );
};

export default Map;
