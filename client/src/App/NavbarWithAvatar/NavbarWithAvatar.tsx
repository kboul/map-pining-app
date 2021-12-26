import { Container, Dropdown, Navbar } from "react-bootstrap";

import { changeState, useAppContext, types } from "../../context";
import { Avatar } from "../../components";
import { RegisterModal, LoginModal } from "../../pages";

export default function NavbarWithAvatar() {
  const {
    state: { currentUser, showRegisterModal, showLoginModal },
    dispatch
  } = useAppContext();

  const handleRegisterModalOpen = () =>
    dispatch(changeState(types.registerModalToggled, { show: true }));

  const handleLoginModalOpen = () =>
    dispatch(changeState(types.loginModalToggled, { show: true }));

  const handleLogout = () => {
    dispatch(changeState(types.currentUserChanged, { currentUser: "" }));
    localStorage.removeItem("username");
  };

  return (
    <Navbar variant="dark" bg="dark">
      <Container fluid>
        <Navbar.Brand>Map Pinning App</Navbar.Brand>
        <Avatar>
          {!currentUser && (
            <>
              <Dropdown.Item onClick={handleRegisterModalOpen}>
                Register
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={handleLoginModalOpen}>
                Login
              </Dropdown.Item>
            </>
          )}
          {currentUser && (
            <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
          )}
        </Avatar>
      </Container>
      {showRegisterModal && <RegisterModal />}
      {showLoginModal && <LoginModal />}
    </Navbar>
  );
}
