import { useState } from "react";
import { AuthPageWrapper } from "../../../components/AuthPageWrapper";
import resetCover from "../../../assets/images/cover-reset-password.jpg";
import { NotificationBox } from "../../../components/NotificationBox";
import { RESET_PAGE, ROUTES } from "../../../utils/types";
import EmailReset from "./EmailReset";
import { ResetPassword } from "../../../components/ResetPassword";

const ResetPage = () => {
  const [currentComponent, setCurrentComponent] = useState(RESET_PAGE.EMAIL);

  return (
    <AuthPageWrapper bgImage={resetCover}>
      {currentComponent === RESET_PAGE.EMAIL && (
        <EmailReset setCurrentComponent={setCurrentComponent} />
      )}
      {currentComponent === RESET_PAGE.PASSWORDS && (
        <ResetPassword setCurrentComponent={setCurrentComponent} />
      )}
      {currentComponent === RESET_PAGE.NOTIFICATION && (
        <NotificationBox
          mt="160px"
          navigateTo={ROUTES.SIGN_IN}
          btnTitle="Login"
          title="Your password has been successfully changed"
        />
      )}
    </AuthPageWrapper>
  );
};

export default ResetPage;
