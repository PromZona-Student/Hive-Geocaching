import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

interface SignUpProps {
    handleOnClick: () => void;
}

const SignUpForm = (props:SignUpProps) => {
    return (
        <div>
            <Modal.Header closeButton>
                <Modal.Title>Rekisteröidy</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                SIGN UP FORM
            </Modal.Body>
            <Modal.Footer>
                <Button variant="link" onClick={props.handleOnClick}>
                Kirjaudu
                </Button>
            </Modal.Footer>
        </div>
    );
};

export default SignUpForm;