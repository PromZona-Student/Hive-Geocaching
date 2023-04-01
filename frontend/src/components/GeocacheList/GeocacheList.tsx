import { Geocache } from "../../model/Geocache";
import { Link } from "react-router-dom";
import "../../styles/common.scss";
import "./GeocacheList.scss";

interface Props {
    geocaches: Array<Geocache>
}

const GeocacheList = ({
    geocaches
}: Props) => {

    return (
        <ul className="geocachelist">
            {
                geocaches.map(cache => {
                    return (
                        <li key={cache.referenceCode}>
                            <Link to={`/geocaches/${cache.referenceCode}`} className="text-decoration-none">
                                <div className="geocache-item">
                                    <p>{cache.placedDate}</p>
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