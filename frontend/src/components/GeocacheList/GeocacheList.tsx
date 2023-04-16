import { Geocache } from "../../model/Geocache";
import { Link } from "react-router-dom";
import "../../styles/common.scss";
import "./GeocacheList.scss";
import GeocacheTitle from "../GeocacheTitle";

interface Props {
    geocaches: Array<Geocache>
}

const GeocacheList = ({geocaches}: Props) => {
    return (
        <ul className="geocachelist">
            {
                geocaches.map(cache => {
                    return (
                        <li key={cache.referenceCode}>
                            <Link to={`/geocaches/${cache.referenceCode}`}>
                                <div className="geocache-item">                                                                     
                                    <GeocacheTitle date={ new Date(cache.placedDate)}></GeocacheTitle>
                                    <hr/>
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