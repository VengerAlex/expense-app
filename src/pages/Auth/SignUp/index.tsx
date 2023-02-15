import { useState } from "react";

import { AuthPageWrapper } from "../../../components/AuthPageWrapper";
import { NotificationBox } from "../../../components/NotificationBox";

import signInCover from "../../../assets/images/cover-login.jpg";
import signUpCover from "../../../assets/images/cover-sign-up.jpg";
import { ROUTES, SIGN_UP } from "../../../utils/types";
import { SignUpForm } from "./SignUpForm";

const SignUp = () => {
  const [currentComponent, setCurrentComponent] = useState(SIGN_UP.FORM);

  const currentImage =
    currentComponent === SIGN_UP.FORM ? signUpCover : signInCover;

  return (
    <AuthPageWrapper bgImage={currentImage}>
      {currentComponent === SIGN_UP.FORM && (
        <SignUpForm setCurrentComponent={setCurrentComponent} />
      )}
      {currentComponent === SIGN_UP.NOTIFICATION && (
        <NotificationBox
          p="9.5px 112.5px"
          navigateTo={ROUTES.SIGN_IN}
          btnTitle="Let`s Start"
          title="Your account successfully created"
        />
      )}
    </AuthPageWrapper>
  );
};

export default SignUp;
