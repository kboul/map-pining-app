import { createContext, ReactNode, useContext, useReducer } from "react";
import { Action, ContextProps, State } from "./models";

// Context

const initialState = { pins: [] };

const Context = createContext<State | any>(initialState);

// Reusable Action Creator
const changeState = (type: string, payload: Object): Action => ({
  type,
  payload
});

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "pinsChanged":
      return { ...state, pins: action.payload.pins };
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
function useAppContext() {
  return useContext<ContextProps>(Context);
}

export { Provider, useAppContext, changeState };
