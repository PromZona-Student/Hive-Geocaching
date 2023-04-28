import { Geocache, GeoCacheTypeIconUrls, defaultGeoCacheTypeIconUrl } from "../../model/Geocache";
import { Link } from "react-router-dom";
import "../../styles/common.scss";
import "./GeocacheList.scss";
import GeocacheTitle from "../GeocacheTitle";

interface Props {
    geocaches: Array<Geocache>
}

//const ICON_DIMENSIONS = [36 / 1.5, 27 / 1.5];
const ICON_DIMENSIONS = [18 / 1, 13.5 / 1];

const GeocacheList = ({geocaches}: Props) => {
    return (
        <ul className="geocachelist">
            {
                geocaches.map(cache => {
                    return (
                        <li key={cache.referenceCode}>
                            <Link to={`/geocaches/${cache.referenceCode}`}>
                                <div className="geocache-item">
                                    <div className="flex-row">
                                        <img width={ICON_DIMENSIONS[0]} height={ICON_DIMENSIONS[1]} src={GeoCacheTypeIconUrls[cache.type] || defaultGeoCacheTypeIconUrl} />                                                                     
                                        <GeocacheTitle date={ new Date(cache.placedDate)}></GeocacheTitle>
                                    </div>
                                    <hr className="yellow-hr"/>
                                    <b>{cache.name}</b>
                                </div>
                            </Link>
                        </li>
                    );
                })
            }
        </ul>
    );
};

export default GeocacheList;