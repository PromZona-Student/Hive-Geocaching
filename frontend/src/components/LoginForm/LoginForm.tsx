import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Formik} from "formik";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import * as Yup from "yup";
import { login } from "../../api/auth";
import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import UserContext from "../../context/UserContext";
import {useContext} from "react";

interface LoginProps {
    handleOnClick: () => void;
    toggleShowParent: () => void;
}

const LoginForm = (props: LoginProps) => {

    const userContext = useContext(UserContext);

    const [showAlert, setShowAlert] = useState(false);

    const schema = Yup.object().shape({
        username: Yup.string().required("Tämä kenttä on pakollinen"),
        password: Yup.string().required("Tämä kenttä on pakollinen"),
    });

    return (
        <div>
            <Modal.Header closeButton>
                <Modal.Title data-testid="login-title">Kirjaudu</Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <Alert show={showAlert} variant="danger" onClose={() => setShowAlert(false)} dismissible>
                Ei sallittu.
                </Alert>
                
                <Formik
                    validationSchema={schema}
                    onSubmit={(values) => {
                        login(values.username,values.password).then(result => {
                            if(result==null){
                                setShowAlert(true);
                            }
                            else{      
                                userContext.setUser(result);
                                props.toggleShowParent();                              
                            }
                        });
                        
                    }}
                    initialValues={{
                        username: "",
                        password: "",
                    }}
                >
                    {({
                        handleSubmit,
                        handleChange,                        
                        values,                        
                        errors,
                    }) => (
                        <Form noValidate onSubmit={handleSubmit}>
                            <Form.Group as={Row} md="3" controlId="usernameField">
                                <Form.Label>Nimimerkki</Form.Label>
                                <Form.Control
                                    data-testid="username-login"
                                    type="text"                                    
                                    name="username"
                                    value={values.username}
                                    onChange={handleChange}
                                    isInvalid={!!errors.username}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.username}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Row} md="3" controlId="passwordField">
                                <Form.Label>Salasana</Form.Label>
                                <Form.Control
                                    data-testid="password-login"
                                    type="password"                                  
                                    name="password"
                                    value={values.password}
                                    onChange={handleChange}
                                    isInvalid={!!errors.password}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.password}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Row} md="3" className="mt-3">
                                <Button data-testid="login-submit"  type="submit">Kirjaudu</Button>
                            </Form.Group>
                            
                        </Form>
                    )}
                </Formik>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="link">
                Salasana unohtui?
                </Button>
                <Button data-testid="signup-button" variant="link" onClick={props.handleOnClick}>
                Rekisteröidy
                </Button>
            </Modal.Footer>
        </div>
    );
};

export default LoginForm;