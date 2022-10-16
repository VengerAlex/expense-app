import ReduxToastrLib from "react-redux-toastr";
import { FC } from "react";

export const ReduxToastr: FC = () => {
  return (
    <ReduxToastrLib
      newestOnTop={false}
      preventDuplicates
      progressBar
      closeOnToastrClick
      timeOut={3000}
      transitionIn="fadeIn"
      transitionOut="fadeOut"
    />
  );
};
