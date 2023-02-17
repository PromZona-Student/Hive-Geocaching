import { useEffect, useState } from "react";
import { getGeoCaches } from "../../api/geocaches";
import Map from "../../components/Map";
import MapMenu from "../../components/MapMenu";
import { Geocache } from "../../model/Geocache";
import "./MapViewPage.scss";

const MapViewPage: React.FC = () => {

    const [geoCaches, setGeoCaches] = useState<Array<Geocache>>([]);

    useEffect(() => {
        getGeoCaches().then(geocaches => {
            setGeoCaches(geocaches.data);
        });
    }, []);

    return (
        <div>
            <MapMenu/>
            <Map geocaches={geoCaches}/>
        </div>
    );
};

export default MapViewPage;
