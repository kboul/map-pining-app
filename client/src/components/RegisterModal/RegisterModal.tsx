import { Form } from "react-bootstrap";

import { changeState, types, useAppContext } from "../../context";
import ModalApp from "../ModalApp";

export default function RegisterModal() {
  const {
    state: { showRegisterModal },
    dispatch
  } = useAppContext();

  const handleRegisterModalClose = () =>
    dispatch(changeState(types.registerModalToggled, { show: false }));

  if (showRegisterModal)
    return (
      <ModalApp
        actionBtnDisabled={false}
        onAction={() => {}}
        onClose={handleRegisterModalClose}
        show={showRegisterModal}
        title="Register">
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Username" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </ModalApp>
    );
  return null;
}
