import { useEffect, useState } from "react";
import { getGeoCaches } from "../../api/geocaches";
import Map from "../../components/Map";
import MapMenu from "../../components/MapMenu";
import { Geocache } from "../../model/Geocache";
import "./MapViewPage.scss";
import NavBar from "../../components/NavBar";

const MapViewPage: React.FC = () => {

    const [geoCaches, setGeoCaches] = useState<Array<Geocache>>([]);

    useEffect(() => {
        getGeoCaches({ limit: 100 }).then(geocaches => {
            setGeoCaches(geocaches);
        });
    }, []);

    return (
        <>
            <NavBar fixedTop />
            <div className="map-view-page">
                <div className="map-menu-wrapper">
                    <MapMenu />
                </div>
                <Map geocaches={geoCaches} />
            </div>
        </>
    );
};

export default MapViewPage;
