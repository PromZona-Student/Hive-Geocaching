import { Icon } from "leaflet";
import { Marker, Popup, TileLayer } from "react-leaflet";
import { Geocache } from "../../model/Geocache";
import "./Map.scss";

interface Props {
    geocaches: Array<Geocache>
}

const Map = ({
    geocaches,
}: Props) => {

    return (
        <>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            ></TileLayer>
            {
                geocaches.map((cache) => {
                    return (
                        <Marker key={cache.referenceCode} position={[cache.postedCoordinates.latitude, cache.postedCoordinates.longitude]} icon={new Icon({
                            iconUrl: "katko2.gif",
                            iconSize: [24, 18]
                        })}>
                            <Popup>
                                {cache.name}
                            </Popup>
                        </Marker>
                    );
                })
            }
        </>
    );
};

export default Map;
