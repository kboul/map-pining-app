import { Container, Dropdown, Navbar } from "react-bootstrap";

import Avatar from "../Avatar";

export default function NavbarWithAvatar() {
  return (
    <Navbar variant="dark" bg="dark">
      <Container fluid>
        <Navbar.Brand>Map Pinning App</Navbar.Brand>
        <Avatar>
          <Dropdown.Item>Register</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Login</Dropdown.Item>
        </Avatar>
      </Container>
    </Navbar>
  );
}
