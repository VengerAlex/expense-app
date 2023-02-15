import { FC } from "react";

import { Route, Routes } from "react-router-dom";

import { PrivateRoute } from "./components/PrivateRoute";
import { PublicRoute } from "./components/PublicRoute";

import Reset from "./pages/Auth/Reset";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import { Analytics } from "./pages/Home/Analytics";
import { Categories } from "./pages/Home/Categories";
import { Dashboard } from "./pages/Home/Dashboard";
import { Settings } from "./pages/Home/Settings";
import NotFound from "./pages/NotFound";
import { ROUTES } from "./utils/types";

const App: FC = () => {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path={ROUTES.HOME} element={<Dashboard />} />
        <Route path={ROUTES.ANALYTICS} element={<Analytics />} />
        <Route path={ROUTES.CATEGORIES} element={<Categories />} />
        <Route path={ROUTES.SETTINGS} element={<Settings />} />
      </Route>

      <Route element={<PublicRoute />}>
        <Route path={ROUTES.SIGN_IN} element={<SignIn />} />
        <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
        <Route path={ROUTES.RESET} element={<Reset />} />
      </Route>

      <Route path={ROUTES.NotFound} element={<NotFound />} />
    </Routes>
  );
};

export default App;
