import { createContext, ReactNode, useContext, useReducer } from "react";

import { Action, ContextProps, State } from "./models";

// Context

const initialState: State = {
  pins: [],
  showRegisterModal: false,
  showLoginModal: false,
  currentUser: ""
};

const Context = createContext<State | any>(initialState);

// Reusable Action Creator
const changeState = (type: string, payload: Object): Action => ({
  type,
  payload
});

const types = {
  currentUserChanged: "currentUserChanged",
  loginModalToggled: "loginModalToggled",
  pinsChanged: "pinsChanged",
  registerModalToggled: "registerModalToggled"
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case types.currentUserChanged:
      return {
        ...state,
        currentUser: action.payload.currentUser,
        showLoginModal: action.payload.showLoginModal ?? state.showLoginModal
      };
    case types.loginModalToggled:
      return { ...state, showLoginModal: action.payload.show };
    case types.pinsChanged:
      return { ...state, pins: action.payload.pins };
    case types.registerModalToggled:
      return { ...state, showRegisterModal: action.payload.show };

    default:
      return state;
  }
};

// Provider
interface ProviderProps {
  children: ReactNode;
}

function Provider({ children }: ProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
}

// useAppContent hook
const useAppContext = () => useContext<ContextProps>(Context);

export { Provider, useAppContext, changeState, types };
