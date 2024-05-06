import React from "react";

const TextInput = ({name,className,title,error, ...rest}) => {
  return (
    <Form.Group className={className} controlId={rest.name}>
      <Form.Label>{title}</Form.Label>
      <Form.Control {...rest} isInvalid={!!error}/>
      <Form.Control.Feedback type="invalid">
        {error}
      </Form.Control.Feedback>
    </Form.Group>
  );
};

export default TextInput;
