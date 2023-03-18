import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import LoginForm from "../LoginForm";
import SignUpForm from "../SignUpForm";

interface ModalProps {
  isOpen: boolean;
  toggle: () => void;
}

const CustomModal = (props: ModalProps) => {
    const [isLogin, setIsLogin] = useState(true);
    const setContent = () => {
        if(isLogin){
            return  <LoginForm handleOnClick={toggleContent} toggleShowParent={props.toggle}/>; 
        }
        else{
            return <SignUpForm handleOnClick={toggleContent} toggleShowParent={props.toggle}/>; 
        }
    };
    const toggleContent = () => {
        setIsLogin(!isLogin);
    };
    return (
        <Modal show={props.isOpen} onHide={props.toggle}>
            {setContent()}
        </Modal>
        
    );
};

export default CustomModal;