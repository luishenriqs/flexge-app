import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./styles/global";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer, { initialState } from "./store/reducer";
import SignIn from "../src/pages/Signin";
import SignUp from "../src/pages/Signup";
import Dashboard from "../src/pages/Dashboard";
import Contracts from "../src/pages/Contracts";
import Companys from "../src/pages/Companys";

const store = createStore(reducer, initialState);

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="contracts" element={<Contracts />} />
          <Route path="companys" element={<Companys />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}
