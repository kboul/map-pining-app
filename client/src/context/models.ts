import { Dispatch } from "react";

interface Pin {
  createdAt: string;
  description: string;
  lat: number;
  lng: number;
  rating: number;
  title: string;
  updatedAt: string;
  username: string;
  _id: number;
}

interface State {
  currentUser: string;
  pins: Pin[];
  showLoginModal: boolean;
  showRegisterModal: boolean;
}

interface Action {
  type: string;
  payload: {
    [property: string]: any;
  };
}

interface ContextProps {
  state: State;
  dispatch: Dispatch<Action>;
}

export type { Action, ContextProps, Pin, State };
