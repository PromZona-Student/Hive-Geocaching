import Modal from "react-bootstrap/Modal";
import { Geocache } from "../../model/Geocache";
import {Link} from "react-router-dom";
import "./GeocacheModal.scss";

interface ModalProps {
    isOpen: boolean;
    toggle: () => void;
    cache: Geocache | null;
  }

const GeocacheModal = (props: ModalProps) => {
    const handlePremiumCont = (isPremiumOnly:boolean) => {
        if(isPremiumOnly){
            return(
                <div className="flex-row">
                    <label className="cache-attribute">PREMIUM</label><br/><br/>
                </div>
            );
        }
    };
    const formatDate = (rawDate:string) => {
        const date = new Date(rawDate);
        return date.getDay()+"."+date.getMonth()+"."+date.getFullYear();
    };
    const setContent = () => {
        if(props.cache){
            return (
                <div>
                    <div className="cache-name">{props.cache.name}</div>
                    <hr/>
                    <div className="cache-code">{`(${props.cache.referenceCode})`}</div><br/>

                    {handlePremiumCont(props.cache.isPremiumOnly)}                                    

                    <div className="flex-row">
                        <img width="20px" src="katko2.gif"/> <div className="cache-text">{props.cache.type}</div>
                    </div><br/>

                    <div className="flex-row">
                        <div className="cache-attribute">N</div> <div className="cache-text">{props.cache.postedCoordinates.latitude}</div>
                    </div>
                    <div className="flex-row">
                        <div className="cache-attribute">E</div> <div className="cache-text">{props.cache.postedCoordinates.longitude}</div>
                    </div>
                    <div className="cache-text">{props.cache.location.state}</div><br/>

                    <div className="flex-row">
                        <div className="cache-attribute">Piilottaja:</div> <div className="cache-text">{props.cache.ownerAlias}</div>
                    </div>
                    <div className="flex-row">
                        <div className="cache-attribute">Piilotettu:</div> <div className="cache-text">{formatDate(props.cache.placedDate)}</div>
                    </div><br/>

                    <div className="flex-row">
                        <div className="cache-attribute">Koko:</div> <div className="cache-text">{props.cache.size}</div>
                    </div>
                    <div className="flex-row">
                        <div className="cache-attribute">Vaikeus:</div> <div className="cache-text">{props.cache.difficulty}/5</div>
                    </div>
                    <div className="flex-row">
                        <div className="cache-attribute">Maasto:</div> <div className="cache-text"></div>{props.cache.terrain}/5<br/><br/>
                    </div>
                    
                    <Link to={`/geocaches/${props.cache.referenceCode}`}>                                        
                        <button type="button" className="cache-button">Lisätietoja</button>
                    </Link>
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