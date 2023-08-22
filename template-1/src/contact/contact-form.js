import { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import { sendMailNow } from "../utils/sendMailNow";
import { UserContext } from "../App";
import { InputGroup } from "react-bootstrap";

export const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [message, setMessage] = useState("");
  const [validated, setValidated] = useState(false);

  const data = useContext(UserContext);

  const userEmailId = data?.user_info?.email;
  const unique_user_id = data?.user_info?.id;

  const handleSubmit = async (event) => {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();

      alert("please check all fields");
      return;
    }

    setValidated(true);

    const res = await sendMailNow(firstName, email, message, userEmailId);

    if (res) {
      setEmail("");
      setFirstName("");
      setMessage("");
      alert("Message sent");
      window?.viewInfo?.doAnalytics(unique_user_id, "contact_form", "");
    } else {
      alert("Message sending failed");
      // window.doAnalytics(unique_user_id, "contact_form", "")
    }
  };

  return (
    <Form
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
      className="contact-form-wrapper"
      controlId="validationCustom01"
    >
      <Form.Group
        className="mb-3 contact-input"
        controlId="exampleForm.ControlInput1"
      >
        <Form.Label>First Name</Form.Label>
        <InputGroup hasValidation>
          <Form.Control
            required
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            Please choose a first name.
          </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>
      <Form.Group
        className="mb-3 contact-input"
        controlId="exampleForm.ControlInput1"
      >
        <Form.Label>Email address</Form.Label>
        <Form.Control
          required
          type="email"
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
          required
          as="textarea"
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </Form.Group>
      <button variant="light" className="send-message-btn" type="submit">
        SEND MESSAGE
      </button>
    </Form>
  );
};
