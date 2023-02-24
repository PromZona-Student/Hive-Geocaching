import { useState, useEffect } from "react";
import { Geocache } from "../../model/Geocache";
import "../../styles/common.scss";
import "./GeocacheList.scss";
import { getGeoCaches } from "../../api/geocaches";
import { Card } from "react-bootstrap";

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
                            <div className="geocache-item">
                                <p>{cache.placedDate}</p>
                                <b>{cache.name}</b>
                            </div>
                        </li>
                    );
                })
            }
        </ul>
    );
};

export default GeocacheList;