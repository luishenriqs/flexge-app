import { SignInUsersRequest } from "./types";

export const signInUsersRequest = (user: any): SignInUsersRequest => {
  return {
    type: "signInUsersRequest",
    payload: user,
  };
};
