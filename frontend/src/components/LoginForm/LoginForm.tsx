import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Formik} from "formik";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import * as Yup from "yup";
import { login } from "../../api/geocaches"; //TODO: change to own file, api for user

interface LoginProps {
    handleOnClick: () => void;
}

//Rekisteröidy = sign up, Salasana unohtui? = forgot password?
const LoginForm = (props: LoginProps) => {

    const schema = Yup.object().shape({
        username: Yup.string().required("Tämä kenttä on pakollinen"),
        password: Yup.string().required("Tämä kenttä on pakollinen"),
    });

    return (
        <div>
            <Modal.Header closeButton>
                <Modal.Title>Kirjaudu</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                
                <Formik
                    validationSchema={schema}
                    onSubmit={(values, { setSubmitting }) => {
                        console.log(login(values.username,values.password));
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
                                    type="text"                                    
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
                                <Button  type="submit">Kirjaudu</Button>
                            </Form.Group>
                            
                        </Form>
                    )}
                </Formik>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="link">
                Salasana unohtui?
                </Button>
                <Button variant="link" onClick={props.handleOnClick}>
                Rekisteröidy
                </Button>
            </Modal.Footer>
        </div>
    );
};

export default LoginForm;