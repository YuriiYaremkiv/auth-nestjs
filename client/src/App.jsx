import { PageAuth } from "./pages/PageAuth";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PublicRoute } from "./PublicRoute";
import { FormLogin } from "./components/LoginForm";
import { FormRegister } from "./components/FormRegister";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageAuth />}>
          <Route path="/" element={<FormLogin />} />
          <Route path="register" element={<FormRegister />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

// <Route
//   path="/"
//   element={<PublicRoute redirectTo="/" component={<PageAuth />} />}
// />;
