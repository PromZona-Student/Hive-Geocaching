import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import LoginForm from "../LoginForm";
import SignUpForm from "../SignUpForm";

interface Props {
    onFormSubmit: () => void;
    isOpen: boolean;
    toggle: () => void;
}

const LoginRegisterModal = ({
    onFormSubmit,
    isOpen,
    toggle
}: Props) => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleContent = () => {
        setIsLogin(!isLogin);
    };

    return (
        <Modal show={isOpen} onHide={toggle}>
            {
                isLogin
                    ? (<LoginForm onSubmit={onFormSubmit} onRegisterClicked={toggleContent} toggleShowParent={toggle} />)
                    : (<SignUpForm onSubmit={onFormSubmit} onLoginClicked={toggleContent} toggleShowParent={toggle} />)
            }
        </Modal>
    );
};

export default LoginRegisterModal;