import { PageAuth } from "./pages/PageAuth";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PublicRoute } from "./PublicRoute";
import { FormLogin } from "./components/LoginForm";
import { FormRegister } from "./components/FormRegister";
import { PrivateRoute } from "./PrivateRoute";
import { PageAdmin } from "./pages/PageAdmin";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<PublicRoute redirectTo="/admin" component={<PageAuth />} />}
        >
          <Route path="/" element={<FormLogin />} />
          <Route path="register" element={<FormRegister />} />
        </Route>
        <Route
          path="/admin"
          element={<PrivateRoute redirectTo="/" component={<PageAdmin />} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
