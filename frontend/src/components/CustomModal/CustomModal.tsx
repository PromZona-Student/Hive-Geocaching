import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import LoginForm from "../LoginForm";
import SignUpForm from "../SignUpForm";

interface ModalProps {
  isOpen: boolean;
  toggle: () => void;
}

const CustomModal = (props: ModalProps) => {
    const [contentType, setContentType] = useState(true);
    const setContent = () => {
        if(contentType){
            return  <LoginForm handleOnClick={toggleContent}/>; 
        }
        else{
            return <SignUpForm handleOnClick={toggleContent}/>; 
        }
    };
    const toggleContent = () => {
        setContentType(!contentType);
    };
    return (
        <Modal show={props.isOpen} onHide={props.toggle}>
            {setContent()}
        </Modal>
        
    );
};

export default CustomModal;