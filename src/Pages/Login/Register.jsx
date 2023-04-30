import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {
  const {createUser} = useContext(AuthContext);
  const [accepted, setAccepted] = useState(false);

  const handleCheckBox = event => {
    setAccepted(event.target.checked)
  }

  const handleRegister = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    console.log(email, password, photo);

    createUser(email, password)
    .then(result => {
      const createdUser = result.user;
      console.log(createdUser)
      form.reset()
    })
    .catch(error => console.log(error))
  }

  return (
    <Container style={{ width: "35%", margin: "auto" }}>
      <Form onSubmit={handleRegister}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" name='name' placeholder="type your name" />
        </Form.Group>
        <br />
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Photo url</Form.Label>
          <Form.Control type="text" name='photo' placeholder="photo url" />
        </Form.Group>
        <br />
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='email' placeholder="Enter email" />
        </Form.Group>
        <br />
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name='password' placeholder="Password" />
        </Form.Group>
        <br />
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check onClick={handleCheckBox} type="checkbox" name='confirm' label={<>accept our <Link to='/terms'>terms and condition</Link></>} />
        </Form.Group>
        <br />
        <Button variant="primary" disabled={!accepted} type="submit">
          Register
        </Button>
        <br />
        <Form.Text className="text-muted">
          Don't have an account <Link to="/login">login</Link>
        </Form.Text>
      </Form>
    </Container>
  );
};

export default Register;