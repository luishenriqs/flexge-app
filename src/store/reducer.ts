import produce from "immer";
import { ApplicationState, ApplicationAction } from "./types";

export const initialState: ApplicationState = {
  user: [],
};

const reducer = (state = initialState, action: ApplicationAction) => {
  switch (action.type) {
    case "signInUsersRequest":
      return produce(state, (draft) => {
        //@ts-ignore
        draft.user = action.payload.user;
      });
  }
};

export default reducer;
