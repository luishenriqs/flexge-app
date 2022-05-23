import { Action } from "redux";

interface IUserData {
  user: {
    userName: string;
    email: string;
    token: string;
  };
}

export interface ApplicationState {
  user: IUserData[];
}

export interface SignInUsersRequest extends Action {
  type: "signInUsersRequest";
  payload: IUserData;
}

export type ApplicationAction = SignInUsersRequest;
