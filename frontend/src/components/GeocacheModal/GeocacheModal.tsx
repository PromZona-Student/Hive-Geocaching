import Modal from "react-bootstrap/Modal";
import { Geocache } from "../../model/Geocache";
import {Link} from "react-router-dom";
import "./GeocacheModal.scss";

interface ModalProps {
    isOpen: boolean;
    toggle: () => void;
    cache: Geocache;
  }

const GeocacheModal = (props: ModalProps) => {
    const handlePremiumCont = (isPremiumOnly:boolean) => {
        if(isPremiumOnly){
            return(
                <div>
                    <label className="cache-attribute">PREMIUM</label><br/><br/>
                </div>
            );
        }
    };
    const formatDate = (rawDate:string) => {
        const date = new Date(rawDate);
        return date.getDay()+"."+date.getMonth()+"."+date.getFullYear();
    };
    return (
        <Modal show={props.isOpen} onHide={props.toggle}>
            <Modal.Header 
                closeButton className="border-0" 
                data-testid="cache-modal-header"
            >
            </Modal.Header>
            <Modal.Body>
                <label className="cache-name">{props.cache.name}</label>
                <hr/>
                <label className="cache-code">{`(${props.cache.referenceCode})`}</label><br/><br/>

                {handlePremiumCont(props.cache.isPremiumOnly)}                                    

                <img width="20px" src="katko2.gif"/> <label className="cache-text">{props.cache.type}</label><br/><br/>

                <label className="cache-attribute">N</label> <label className="cache-text">{props.cache.postedCoordinates.latitude}</label><br/>
                <label className="cache-attribute">E</label> <label className="cache-text">{props.cache.postedCoordinates.longitude}</label><br/>
                <label className="cache-text">{props.cache.location.state}</label><br/><br/>

                <label className="cache-attribute">Piilottaja:</label> <label className="cache-text">{props.cache.ownerAlias}</label><br/>
                <label className="cache-attribute">Piilotettu:</label> <label className="cache-text">{formatDate(props.cache.placedDate)}</label><br/><br/>

                <label className="cache-attribute">Koko:</label> <label className="cache-text">{props.cache.size}</label><br/>
                <label className="cache-attribute">Vaikeus:</label> <label className="cache-text">{props.cache.difficulty}/5</label><br/>
                <label className="cache-attribute">Maasto:</label> <label className="cache-text"></label>{props.cache.terrain}/5<br/><br/>
                    
                <Link to={`/geocaches/${props.cache.referenceCode}`}>                                        
                    <button type="button" className="cache-button">Lisätietoja</button>
                </Link>   
            </Modal.Body>
        </Modal>        
    );
};

export default GeocacheModal;