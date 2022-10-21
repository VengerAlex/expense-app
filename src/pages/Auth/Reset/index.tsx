import { ReactElement, useState } from "react";
import { AuthPageWrapper } from "../../../components/AuthPageWrapper";
import { NotificationBox } from "../../../components/NotificationBox";
import { RESET_PAGE, ROUTES } from "../../../utils/types";
import EmailReset from "./EmailReset";
import { ResetPassword } from "./ResetPassword";
import signUpCover from "../../../assets/images/cover-sign-up.jpg";
import signInCover from "../../../assets/images/cover-login.jpg";

type ISteps = Record<RESET_PAGE, { component: ReactElement }>;

const ResetPage = () => {
  const [currentComponent, setCurrentComponent] = useState(RESET_PAGE.EMAIL);

  const currentImage =
    currentComponent === RESET_PAGE.NOTIFICATION ? signInCover : signUpCover;

  const STEPS: ISteps = {
    [RESET_PAGE.EMAIL]: {
      component: <EmailReset setCurrentComponent={setCurrentComponent} />,
    },
    [RESET_PAGE.PASSWORDS]: {
      component: <ResetPassword setCurrentComponent={setCurrentComponent} />,
    },
    [RESET_PAGE.NOTIFICATION]: {
      component: (
        <NotificationBox
          navigateTo={ROUTES.SIGN_IN}
          btnTitle="Login"
          title="Your password has been successfully changed"
        />
      ),
    },
  };

  return (
    <AuthPageWrapper bgImage={currentImage}>
      {STEPS[currentComponent].component}
    </AuthPageWrapper>
  );
};

export default ResetPage;
