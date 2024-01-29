import { Avatar, Dropdown, Navbar } from "flowbite-react";

import { RegisterModal, LoginModal } from "../pages";
import { changeState, useAppContext, types } from "../context";

export default function AppNavbar() {
  const {
    state: { currentUser, showRegisterModal, showLoginModal },
    dispatch
  } = useAppContext();

  const handleRegisterModalOpen = () =>
    dispatch(changeState(types.registerModalToggled, { show: true }));

  const handleLoginModalOpen = () =>
    dispatch(changeState(types.loginModalToggled, { show: true }));

  const handleSignOut = () => {
    dispatch(changeState(types.currentUserChanged, { currentUser: "" }));
    localStorage.removeItem("username");
  };

  const placeholderInitials = currentUser.substring(0, 2).toUpperCase();

  return (
    <>
      <Navbar fluid rounded>
        <Navbar.Brand>
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Map Pinning App
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2 ">
          <Dropdown
            className="z-[1000]"
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                placeholderInitials={placeholderInitials}
                rounded
              />
            }>
            {currentUser && (
              <Dropdown.Header>
                <span className="block text-sm">{currentUser}</span>
                <span className="block truncate text-sm font-medium">
                  {currentUser}@gmail.com
                </span>
              </Dropdown.Header>
            )}
            {!currentUser && (
              <>
                <Dropdown.Item onClick={handleRegisterModalOpen}>
                  Register
                </Dropdown.Item>
                <Dropdown.Item onClick={handleLoginModalOpen}>
                  Login
                </Dropdown.Item>
              </>
            )}
            {currentUser && (
              <Dropdown.Item onClick={handleSignOut}>Sign out</Dropdown.Item>
            )}
          </Dropdown>
          <Navbar.Toggle />
        </div>
      </Navbar>
      {showRegisterModal && <RegisterModal />}
      {showLoginModal && <LoginModal />}
    </>
  );
}
