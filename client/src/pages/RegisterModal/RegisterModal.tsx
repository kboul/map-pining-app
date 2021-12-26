import { ChangeEvent, useEffect, useState } from "react";
import { Alert, Form } from "react-bootstrap";

import { changeState, types, useAppContext } from "../../context";
import { ModalApp } from "../../components";
import { useAxios } from "../../hooks";
import { getFields } from "./utils";
import { initialState } from "./constants";

export default function RegisterModal() {
  const {
    state: { showRegisterModal },
    dispatch
  } = useAppContext();

  const [localState, setLocalState] = useState(initialState);

  const { username, email, password, postData, callApi } = localState;

  const { data, error } = useAxios(
    { method: "post", url: "/users/register", data: postData },
    callApi
  );

  useEffect(() => {
    if (!data) return;
    if (data && data.userId) handleRegisterModalClose();

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
      postData: { username, email, password },
      callApi: true
    }));
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLocalState(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleRegisterModalClose = () =>
    dispatch(changeState(types.registerModalToggled, { show: false }));

  const actionBtnDisabled = !username || !email || !password;

  const fields = getFields(username, email, password);

  return (
    <ModalApp
      actionBtnDisabled={actionBtnDisabled}
      onAction={handleAction}
      onClose={handleRegisterModalClose}
      show={showRegisterModal}
      title="Register">
      {fields.map(({ id, label, name, type, value }) => (
        <Form.Group className="mb-3" key={`register-form-group-${id}`}>
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
