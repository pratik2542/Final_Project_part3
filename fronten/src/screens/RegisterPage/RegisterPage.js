import React, {  } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
//import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
//import Loading from "../../components/Loading";
//import ErrorMessage from "../../components/ErrorMessage";
//import { register } from "../../actions/userActions";
import MainScreen from "../../components/MainScreen";
import "./RegisterPage.css";

const Register = () => {
  return (
    <MainScreen title="REGISTER">
      <div className="loginContainer">
        
        <Form>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              //value={name}
              placeholder="Enter name"
              //onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              //value={email}
              placeholder="Enter email"
              //onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              //value={password}
              placeholder="Password"
              //onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              //value={confirmpassword}
              placeholder="Confirm Password"
              //onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>

          
          <Form.Group controlId="pic">
            <Form.Label>Profile Picture</Form.Label>
            <Form.File
              //onChange={(e) => postDetails(e.target.files[0])}
              id="custom-file"
              type="image/png"
              label="Upload Profile Picture"
              custom
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Register
          </Button>
        </Form>
        <Row className="py-3">
          <Col>
            Have an Account ? <Link to="/login">Login</Link>
          </Col>
        </Row>
      </div>
    </MainScreen>
  )
}

export default Register