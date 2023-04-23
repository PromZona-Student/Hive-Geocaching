import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCache } from "../../api/geocaches";
import { Geocache } from "../../model/Geocache";
import NavBar from "../../components/NavBar";
import "./CachePage.scss";

function CachePage() {
    const { cacheId } = useParams();
    const [cache, setCache] = useState<Geocache>({
        referenceCode: "",
        name: "",
        isMeeting: false,
        placedDate: "",
        publishedDate: "",
        type: "",
        size: "",
        postedCoordinates: {
            latitude: 0,
            longitude: 0
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
    });

    useEffect(() => {
        if (cacheId !== undefined) {
            getCache(cacheId).then(cacheResult => {
                setCache(cacheResult);
            });
        }
    },[cacheId]);

    const formatCoordinate = (coord?: number) => {
        return coord ? coord : "***";
    };

    if (cacheId && cache && cache.name) {
        return (
            <>
                <NavBar fixedTop />
                <div className="layout">
                    <div className="cache-page-content">
                        <div className="feed-section">
                            <h3>{cache.name}</h3>
                            <p>({cache.referenceCode})</p>
                        </div>
                        <div className="feed-section">

                            <p>{cache.type}</p>
                            <p>N {formatCoordinate(cache.postedCoordinates.latitude)}</p>
                            <p>E {formatCoordinate(cache.postedCoordinates.longitude)}</p>
                            <p>Piilotettu: {cache.placedDate.slice(0, 10)}</p>
                            <p>Koko: {cache.size}</p>
                            <p>{cache.shortDescription}</p>

                        </div>
                    </div>
                </div>
            </>
        );
    } else {
        return (
            <>
                <NavBar fixedTop />
                <div className="cache-page-content">
                    <div className="feed-section">
                        Kätkön id:tä ei annettu tai sitä ei löytynyt. Id: ({cacheId})
                    </div>
                </div>
            </>
        );
    }

}

export default CachePage;
