import { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import { sendMailNow } from "../utils/sendMailNow";
import { UserContext } from "../App";
import { doAnalytics } from "../viewInfo";
// import { doAnalytics } from "../utils/doAnalytics";

export const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [message, setMessage] = useState("");

  const data = useContext(UserContext);

  const userEmailId = data?.user_info?.email;
  const unique_user_id = data?.user_info?.id;

  const handleSubmit = async () => {

    const res = await sendMailNow(firstName, email, message, userEmailId);

    if (res) {
      setEmail("");
      setFirstName("");
      setMessage("");
      alert("Message sent");
      doAnalytics(unique_user_id, "contact_form", "")
      // window.doAnalytics?.(unique_user_id, "contact_form", "")

    } else {
      alert("Message sending failed");
      // window.doAnalytics(unique_user_id, "contact_form", "")

    }
  };

  return (
    <Form onSubmit={(e) => e.preventDefault()} className="contact-form-wrapper">
      <Form.Group
        className="mb-3 contact-input"
        controlId="exampleForm.ControlInput1"
      >
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </Form.Group>
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
        SEND MESSAGE
      </button>
    </Form>
  );
};
