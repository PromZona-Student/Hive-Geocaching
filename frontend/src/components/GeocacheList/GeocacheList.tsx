import { useState, useEffect } from "react";
import { Geocache } from "../../model/Geocache";
import "../../styles/common.scss";
import {getGeoCaches} from "../../api/geocaches";

const GeocacheList = () => {
    const [geocaches, setGeocaches] = useState<Array<Geocache>>([]);

    useEffect(() => {
        getGeoCaches({limit: 10}).then(geocachesResult => {
            setGeocaches(geocachesResult);
        });
    }, []);

    return (
        <div>
            <h3>Uusimmat geokätköt</h3>
            <ul>
                {
                    geocaches.map(cache => {
                        return (
                            <li key={cache.referenceCode}>
                                {cache.name}
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
};

export default GeocacheList;