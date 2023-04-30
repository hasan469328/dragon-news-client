import React, { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const {signIn} = useContext(AuthContext)
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/'

  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    
    signIn(email, password)
    .then(result => {
      const loggedUser = result.user;
      console.log(loggedUser);
      form.reset();
      navigate(from, {replace: true})
    })
    .catch(error => console.log(error))
  }
  return (
    <Container style={{ width: "35%", margin: "auto" }}>
      <Form  onSubmit={handleLogin}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
        </Form.Group>
        <br />
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" />
        </Form.Group>
        <br />
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" name="confirm" label="Remember me" />
        </Form.Group>
        <br />
        <Button variant="primary" type="submit">
          Login
        </Button>
        <br />
        <Form.Text className="text-muted">
          Don't have an account <Link to="/register">register</Link>
        </Form.Text>
      </Form>
    </Container>
  );
};

export default Login;
