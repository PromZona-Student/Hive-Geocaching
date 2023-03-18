import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Formik } from "formik";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import * as Yup from "yup";
import { register } from "../../api/auth";
import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import UserContext from "../../Context/UserContext";
import { useContext } from "react";
//import { User } from "../../model/User";

interface SignUpProps {
    handleOnClick: () => void;
    toggleShowParent: () => void;
}

const SignUpForm = (props: SignUpProps) => {

    const userContext = useContext(UserContext);

    const [showAlert, setShowAlert] = useState(false);

    const [alertMessage, setAlertMessage] = useState("Ei sallittu.");

    const schema = Yup.object().shape({
        username: Yup.string().required("Tämä kenttä on pakollinen"),
        email: Yup.string().required("Tämä kenttä on pakollinen"),
        password: Yup.string().required("Tämä kenttä on pakollinen"),
        confirm: Yup.string().required("Tämä kenttä on pakollinen")
    });

    return (
        <div>
            <Modal.Header closeButton>
                <Modal.Title data-testid="signup-title">Rekisteröidy</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Alert show={showAlert} variant="danger" onClose={() => setShowAlert(false)} dismissible>
                    { alertMessage }
                </Alert>

                <Formik
                    validationSchema={schema}
                    onSubmit={(values) => {
                        register(values.username, values.email, values.password, values.confirm).then((result) => {
                            if (result.data) {
                                userContext.setUser(result.data);
                                props.toggleShowParent();
                            } 
                            else {
                                if(result.message) {
                                    setAlertMessage(result.message);
                                } else {
                                    setAlertMessage("Ei sallittu.");
                                }
                                setShowAlert(true);
                            }

                        });

                    }}
                    initialValues={{
                        username: "",
                        email: "",
                        password: "",
                        confirm: ""
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
                                    data-testid="username-signup"
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
                            <Form.Group as={Row} md="3" controlId="emailField">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    data-testid="email-signup"
                                    type="email"
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    isInvalid={!!errors.email}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.password}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Row} md="3" controlId="passwordField">
                                <Form.Label>Salasana</Form.Label>
                                <Form.Control
                                    data-testid="password-signup"
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
                            <Form.Group as={Row} md="3" controlId="confirmField">
                                <Form.Label>Salasana uudestaan</Form.Label>
                                <Form.Control
                                    data-testid="confirm-signup"
                                    type="password"
                                    name="confirm"
                                    value={values.confirm}
                                    onChange={handleChange}
                                    isInvalid={!!errors.confirm}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.confirm}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Row} md="3" className="mt-3">
                                <Button data-testid="signup-submit" type="submit">Rekisteröidy</Button>
                            </Form.Group>

                        </Form>
                    )}
                </Formik>

            </Modal.Body>
            <Modal.Footer>
                <Button data-testid="login-button" variant="link" onClick={props.handleOnClick}>
                    Kirjaudu
                </Button>
            </Modal.Footer>
        </div >
    );
};

export default SignUpForm;