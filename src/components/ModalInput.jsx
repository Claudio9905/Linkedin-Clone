import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
export default function ModalInput() {
  return (
    <InputGroup className="mb-3">
      <Form.Control
        type="text"
        aria-label="Username"
        aria-describedby="basic-addon1"
        required
      />
    </InputGroup>
  );
}
