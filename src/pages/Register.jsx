import { useRef, useState, useEffect } from "react";
import { Col, Row, Container, Card, Form } from "react-bootstrap";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PASS_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]){8,24}$/;


const Register = () => {
    const userRef = useRef();
    const errorRef = useRef();

    const [user, setuser] = useState("");
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setpwd] = useState("");
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState("");
    const [validMatch, setValidMatch] = useState(false);
    const [MatchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState("");
    const [success, setSuccess] = useState(false);


    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        const result = USER_REGEX.test(user);
        console.log(result)
        console.log(user)
        setValidName(result)
    }, [user])

    useEffect(() => {
        const result = USER_REGEX.test(pwd);
        console.log(result)
        console.log(pwd)
        setValidPwd(result);
        const match = pwd === matchPwd;
        setValidMatch(match)
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg("");
    }, [user, pwd, matchPwd])


    return (
        <section>
        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <Container >
                <Row className="vh-100 d-flex justify-content-center align-items-center">
                    <Col md={8} lg={6} xs={12}>
                        <Card className="shadow">
                            <Card.Body>
                                <div className="mb-3 mt-md-4 text-center">
                                    <img src="../assets/logo-AEGcolor.png" alt="logoAEG" className="logoTitle" />
                                    <p className=" mb-5">Login</p>
                                    <div className="mb-3">
                                        {errorLogin &&
                                            <label className="label-alert mb-3">
                                                Usuario o contraseña incorrectos
                                            </label>
                                        }

                                        {/* input user */}
                                        <input id="usuario" name="usuario" placeholder="Email" type="text" onChange={(e) => handleChange(e.target.name, e.target.value)} className="mb-3 form-control" />

                                        {/* input password */}
                                        <input id="contraseña" name="contraseña" placeholder="password" type="password" onChange={(e) => handleChange(e.target.password, e.target.value)} param={passwordError} className="mb-3 form-control" />



                                        <Form.Group
                                            className="mb-3"
                                            controlId="formBasicCheckbox"
                                        >
                                            <p className="small">
                                                <a className="textRegister" href="#!">
                                                    Has olvidado tu contraseña?
                                                </a>
                                            </p>
                                        </Form.Group>
                                        <div className="d-grid">

                                            <button onClick={handleSubmit} className="buttonLogin">Login</button>

                                        </div>

                                        <div className="mt-3">
                                            <p className="mb-0  text-center">
                                                No tienes cuenta{" "}
                                                <a href="{''}" className="textRegister fw-bold">
                                                    Registrate
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Register