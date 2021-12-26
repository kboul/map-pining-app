import { ChangeEvent, useEffect, useState } from "react";
import { Alert, Form } from "react-bootstrap";

import { ModalApp } from "../../components";
import { changeState, types, useAppContext } from "../../context";
import { useAxios } from "../../hooks";
import { getFields } from "./utils";
import { initialState } from "./constants";

export default function LoginModal() {
  const {
    state: { showLoginModal },
    dispatch
  } = useAppContext();

  const [localState, setLocalState] = useState(initialState);

  const { username, password, postData, callApi } = localState;

  const { data, error } = useAxios(
    { method: "post", url: "/users/login", data: postData },
    callApi
  );

  useEffect(() => {
    if (!data) return;

    if (data && data.username) {
      dispatch(
        changeState(types.currentUserChanged, {
          currentUser: data.username,
          showLoginModal: false
        })
      );
      localStorage.setItem("username", data.username);
    }

    // https://stackoverflow.com/questions/54954385/react-useeffect-causing-cant-perform-a-react-state-update-on-an-unmounted-comp
    return () => setLocalState(initialState);
  }, [data]);

  useEffect(() => {
    if (callApi)
      setLocalState(prevState => ({
        ...prevState,
        callApi: false
      }));
  }, [callApi]);

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

  const handleLoginModalClose = () =>
    dispatch(changeState(types.loginModalToggled, { show: false }));

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
      {error && <Alert variant="danger">{error}</Alert>}
    </ModalApp>
  );
}
