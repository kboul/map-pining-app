import { ChangeEvent, useEffect, useState } from "react";
import { Alert, Form } from "react-bootstrap";

import { ModalApp } from "../../components";
import { changeState, types, useAppContext } from "../../context";
import { useAxios } from "../../hooks";
import { getFields } from "./utils";

export default function LoginModal() {
  const {
    state: { showLoginModal },
    dispatch
  } = useAppContext();

  const [localState, setLocalState] = useState({
    username: "",
    password: "",
    postData: {},
    callApi: false
  });

  const handleLoginModalClose = () =>
    dispatch(changeState(types.loginModalToggled, { show: false }));

  const { username, password, postData, callApi } = localState;

  const { data, error } = useAxios(
    { method: "post", url: "/users/login", data: postData },
    callApi
  );

  useEffect(() => {
    if (!data) return;

    if (data && data.username) {
      dispatch(
        changeState(types.currentUserChanged, { currentUser: data.username })
      );

      setTimeout(() => handleLoginModalClose(), 1000);
    }
  }, [data]);

  useEffect(() => {
    if (error)
      setLocalState(prevState => ({
        ...prevState,
        callApi: false
      }));
  }, [error]);

  const handleAction = () => {
    setLocalState(prevState => ({
      ...prevState,
      postData: { username, password },
      callApi: true
    }));
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLocalState(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const actionBtnDisabled = !username || !password;

  const fields = getFields(username, password);

  return (
    <ModalApp
      actionBtnDisabled={actionBtnDisabled}
      onAction={handleAction}
      onClose={handleLoginModalClose}
      show={showLoginModal}
      title="Login">
      {fields.map(({ id, label, name, type, value }) => (
        <Form.Group className="mb-3" key={`login-form-group-${id}`}>
          <Form.Label>{label}</Form.Label>
          <Form.Control
            isInvalid={!value}
            name={name}
            type={type}
            onChange={handleChange}
            placeholder={label}
            value={value}
          />
          <Form.Control.Feedback type="invalid">
            Value cannot be left empty
          </Form.Control.Feedback>
        </Form.Group>
      ))}

      {error && <Alert variant="danger">Something went wrong!</Alert>}
    </ModalApp>
  );
}
