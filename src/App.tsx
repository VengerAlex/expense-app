import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import NotFound from "./pages/NotFound";
import Reset from "./pages/Auth/Reset";
import { ROUTES } from "./utils/types";
import ProtectedRoute from "./components/PrivateRoute";

const App: FC = () => {
  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route path={ROUTES.Home} element={<Home />} />
      </Route>
      <Route path={ROUTES.SIGN_IN} element={<SignIn />} />
      <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
      <Route path={ROUTES.RESET} element={<Reset />} />
      <Route path={ROUTES.NotFound} element={<NotFound />} />
    </Routes>
  );
};

export default App;
