import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../components/Login/Login";
import Plan from "../components/Plan/Plan";
import Layout from "../components/Layout/Layout";
import { store } from "../redux";

const AppRouter = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Layout />}>
            <Route path="plan" element={<Plan />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default AppRouter;
