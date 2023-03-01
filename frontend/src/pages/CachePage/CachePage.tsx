import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCache } from "../../api/geocaches";
import { Geocache } from "../../model/Geocache";
import NavBar from "../../components/NavBar";
import "./CachePage.scss";

function CachePage() {
    let { cacheId } = useParams();
    const [cache, setCache] = useState<Geocache>({
        referenceCode: "",
        name: "",
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
        hints: ""
    });

    if (cacheId?.at(0) == ":") { cacheId = cacheId.slice(1); }
    useEffect(() => {
        getCache(cacheId).then(cacheResult => {
            setCache(cacheResult);
        });
    });

    if (cacheId && cache && cache.name) {
        return (
            <>
                <NavBar fixedTop />
                <div className="layout">
                    <div className="cache-page-content">
                        <div className="feed-section">
                            <h3>{cache.name}</h3>
                            <p>({cacheId})</p>
                        </div>
                        <div className="feed-section">

                            <p>{cache.type}</p>
                            <p>N {cache.postedCoordinates.latitude}</p>
                            <p>E {cache.postedCoordinates.longitude}</p>
                            <p>Piilotettu: {cache.placedDate.slice(0, 10)}</p>
                            <p>Koko: {cache.size}</p>
                            <p>{cache.shortDescription}</p>

                        </div>
                        <div className="feed-section">
                            <button className="button">Lisätietoja</button>
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
