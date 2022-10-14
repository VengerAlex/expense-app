import { useState } from "react";
import { AuthPageWrapper } from "../../../components/AuthPageWrapper";
import { NotificationBox } from "../../../components/NotificationBox";
import { RESET_PAGE, ROUTES } from "../../../utils/types";
import EmailReset from "./EmailReset";
import { ResetPassword } from "./ResetPassword";
import signUpCover from "../../../assets/images/cover-sign-up.jpg";
import signInCover from "../../../assets/images/cover-login.jpg";

const ResetPage = () => {
  const [currentComponent, setCurrentComponent] = useState(RESET_PAGE.EMAIL);

  const currentImage =
    currentComponent === RESET_PAGE.NOTIFICATION ? signInCover : signUpCover;

  return (
    <AuthPageWrapper bgImage={currentImage}>
      {currentComponent === RESET_PAGE.EMAIL && (
        <EmailReset setCurrentComponent={setCurrentComponent} />
      )}
      {currentComponent === RESET_PAGE.PASSWORDS && (
        <ResetPassword setCurrentComponent={setCurrentComponent} />
      )}
      {currentComponent === RESET_PAGE.NOTIFICATION && (
        <NotificationBox
          navigateTo={ROUTES.SIGN_IN}
          btnTitle="Login"
          title="Your password has been successfully changed"
        />
      )}
    </AuthPageWrapper>
  );
};

export default ResetPage;
