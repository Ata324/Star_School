"use client";
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Form,
  Row,
} from "react-bootstrap";
import "./login-form.scss";
import { loginAction } from "@/actions/auth-action";
import { initialResponse } from "@/helpers/form-validation";
import { useFormState } from "react-dom";
import PasswordInput from "../common/form-fields/password-input";
const LoginForm = () => {
  const [state, dispatch] = useFormState(loginAction, initialResponse);

  return (
    <Container className="login-form">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card>
            <CardBody>
              <h4>Please enter your username and password</h4>
              <Form action={dispatch} noValidate>
                <Form.Group className="mb-3" controlId="username">
                  <Form.Label>UserName</Form.Label>
                  <Form.Control
                    name="username"
                    type="text"
                    isInvalid={!!state?.errors?.username}
                    defaultValue="root"
                  />
                  <Form.Control.Feedback type="invalid">
                    {state?.errors?.username}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                  <Form.Label>Password</Form.Label>
                  <PasswordInput
                    name="password"
                    error={state?.errors?.password}
                    defaultValue="12345aA."
                  />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100">
                  LOGIN
                </Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;
