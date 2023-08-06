import { useState } from "react";
import Form from "react-bootstrap/Form";

export const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    console.log("handle submit here");
  };

  return (
    <Form onSubmit={(e) => e.preventDefault()} className="contact-form-wrapper">
      <Form.Group
        className="mb-3 contact-input"
        controlId="exampleForm.ControlInput1"
      >
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email address"
          placeholder="name@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>
      <Form.Group
        className="mb-3 contact-input"
        controlId="exampleForm.ControlTextarea1"
      >
        <Form.Label>Messsage</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </Form.Group>
      <button
        variant="light"
        className="send-message-btn"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </Form>
  );
};
