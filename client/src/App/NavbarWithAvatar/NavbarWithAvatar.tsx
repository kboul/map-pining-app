import { Container, Dropdown, Navbar } from "react-bootstrap";

import { changeState, useAppContext, types } from "../../context";
import { Avatar } from "../../components";
import RegisterModal from "../../pages/RegisterModal";

export default function NavbarWithAvatar() {
  const {
    state: { showRegisterModal },
    dispatch
  } = useAppContext();

  const handleRegisterModalOpen = () =>
    dispatch(changeState(types.registerModalToggled, { show: true }));

  return (
    <Navbar variant="dark" bg="dark">
      <Container fluid>
        <Navbar.Brand>Map Pinning App</Navbar.Brand>
        <Avatar>
          <Dropdown.Item onClick={handleRegisterModalOpen}>
            Register
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Login</Dropdown.Item>
        </Avatar>
      </Container>
      {showRegisterModal && <RegisterModal />}
    </Navbar>
  );
}