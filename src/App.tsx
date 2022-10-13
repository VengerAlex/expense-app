import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import NotFound from "./pages/NotFound";
import Reset from "./pages/Auth/Reset";
import { ROUTES } from "./utils/types";
import ProtectedRoute from "./components/PrivateRoute";
import { Analytics } from "./pages/Home/Analytics/Analytics";
import { Dashboard } from "./pages/Home/Dashboard";
import { Categories } from "./pages/Home/Categories";
import { Settings } from "./pages/Home/Settings";

const App: FC = () => {
  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route path={ROUTES.HOME} element={<Dashboard />} />
        <Route path={ROUTES.ANALYTICS} element={<Analytics />} />
        <Route path={ROUTES.CATEGORIES} element={<Categories />} />
        <Route path={ROUTES.SETTINGS} element={<Settings />} />
      </Route>
      <Route path={ROUTES.SIGN_IN} element={<SignIn />} />
      <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
      <Route path={ROUTES.RESET} element={<Reset />} />
      <Route path={ROUTES.NotFound} element={<NotFound />} />
    </Routes>
  );
};

export default App;
