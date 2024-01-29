import { ChangeEvent, useEffect, useState } from "react";
import { Label, TextInput } from "flowbite-react";

import { changeState, types, useAppContext } from "../../context";
import { AppAlertError, AppModal } from "../../components";
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
    if (callApi) setLocalState(prevState => ({ ...prevState, callApi: false }));
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
    <AppModal
      actionBtnDisabled={actionBtnDisabled}
      onAction={handleAction}
      onClose={handleRegisterModalClose}
      show={showRegisterModal}
      title="Register">
      {fields.map(({ id, label, name, type, value }) => (
        <form className="flex flex-col gap-4" key={id}>
          <div className="mb-2">
            <div className="mb-2 block">
              <Label htmlFor={label} value={label} />
            </div>
            <TextInput
              name={name}
              onChange={handleChange}
              type={type}
              placeholder={label}
              value={value}
            />
          </div>
        </form>
      ))}
      {error && <AppAlertError error="Something went wrong!" />}
    </AppModal>
  );
}
