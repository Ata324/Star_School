"use client";

import TextInput from "@/components/common/form-fields/text-input";
import { Col, Container, Form, Row } from "react-bootstrap";

const AssistantCreateForm = () => {

        const [state,dispatch]=useFormState();

  return (
    <Container>
      <div className="card">
        <div className="card-body">
          <div className="card-title">NEW</div>
          <Form noValidate action={dispatch}>
            <Row xs={1} md={2} xl={3}>
            <Col>
            <TextInput
            error={state.error.name}
            name="name"
            type="text"
            label="FirstName"
            className="mb-3"
            />
            </Col>
            </Row>
          </Form>
        </div>
      </div>
    </Container>
  );
};

export default AssistantCreateForm;
