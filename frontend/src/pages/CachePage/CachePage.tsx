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

    useEffect(() => {
        if (cacheId !== undefined) {
            getCache(cacheId).then(cacheResult => {
                setCache(cacheResult);
            });
        }
    },[cacheId]);

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
                            <p>N {cache.postedCoordinates.latitude}</p>
                            <p>E {cache.postedCoordinates.longitude}</p>
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
                        K??tk??n id:t?? ei annettu tai sit?? ei l??ytynyt. Id: ({cacheId})
                    </div>
                </div>
            </>
        );
    }

}

export default CachePage;
