import Modal from "react-bootstrap/Modal";
import { GeoCacheTypeIconUrls, Geocache, defaultGeoCacheTypeIconUrl } from "../../model/Geocache";
import { Link } from "react-router-dom";
import "./GeocacheModal.scss";
import { useEffect, useState } from "react";
import { getCache } from "../../api/geocaches";
import Spinner from "react-bootstrap/Spinner";

const ICON_DIMENSIONS = [36 / 1.5, 27 / 1.5];

interface ModalProps {
    isOpen: boolean;
    toggle: () => void;
    cacheId: string | null;
}

const GeocacheModal = (props: ModalProps) => {
    const [cache, setCache] = useState<Geocache | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        if (props.cacheId !== null) {
            setIsLoading(true);
            getCache(props.cacheId).then(c => {
                setCache(c);
                setIsLoading(false);
            }
            );
        }
    }, [props.cacheId]);

    const handlePremiumCont = (isPremiumOnly: boolean) => {
        if (isPremiumOnly) {
            return (
                <div className="flex-row bottom-space">
                    <label className="cache-attribute">PREMIUM</label>
                </div>
            );
        }
    };

    const formatCoordinate = (coord?: number) => {
        return coord ? coord : "***";
    };

    const formatDate = (rawDate: string) => {
        const date = new Date(rawDate);
        return date.getDay() + "." + date.getMonth() + "." + date.getFullYear();
    };
    const setContent = () => {
        if (props.cacheId && cache && !isLoading) {
            return (
                <div>
                    <div className="cache-name">{cache.name}</div>
                    <hr  className="yellow-hr"/>
                    <div className="cache-code bottom-space">{`(${cache.referenceCode})`}</div>

                    {handlePremiumCont(cache.isPremiumOnly)}

                    <div className="flex-row">
                        <img width={ICON_DIMENSIONS[0]} height={ICON_DIMENSIONS[1]} src={GeoCacheTypeIconUrls[cache.type] || defaultGeoCacheTypeIconUrl} /> <div className="cache-text">{cache.type}</div>
                    </div>

                    <div className="flex-row">
                        <div className="cache-attribute">N</div><div className="cache-text">{formatCoordinate(cache.postedCoordinates.latitude)}</div>
                    </div>
                    <div className="flex-row">
                        <div className="cache-attribute">E</div> <div className="cache-text">{formatCoordinate(cache.postedCoordinates.longitude)}</div>
                    </div>
                    <div className="cache-text bottom-space">{cache.location.state}</div>

                    <div className="flex-row">
                        <div className="cache-attribute">Piilottaja:</div> <div className="cache-text">{cache.ownerAlias}</div>
                    </div>
                    <div className="flex-row bottom-space">
                        <div className="cache-attribute">Piilotettu:</div> <div className="cache-text">{formatDate(cache.placedDate)}</div>
                    </div>

                    <div className="flex-row">
                        <div className="cache-attribute">Koko:</div> <div className="cache-text">{cache.size}</div>
                    </div>
                    <div className="flex-row">
                        <div className="cache-attribute">Vaikeus:</div> <div className="cache-text">{cache.difficulty}/5</div>
                    </div>
                    <div className="flex-row big-bottom-space">
                        <div className="cache-attribute">Maasto:</div> <div className="cache-text"></div>{cache.terrain}/5
                    </div>

                    <Link to={`/geocaches/${cache.referenceCode}`}>
                        <button type="button" className="cache-button">Lisätietoja</button>
                    </Link>
                </div>
            );
        }
        else {
            return (
                <div style={{display: "flex", alignItems: "center", "flexDirection": "column"}}>
                    <p>Ladataan...</p>
                    <Spinner animation="border" variant="secondary" role="status"/>
                </div>
            );
        }
    };
    return (
        <Modal show={props.isOpen} onHide={props.toggle}>
            <Modal.Header
                closeButton className="border-0"
                data-testid="cache-modal-header"
            >
            </Modal.Header>
            <Modal.Body>
                {setContent()}
            </Modal.Body>
        </Modal>
    );
};

export default GeocacheModal;