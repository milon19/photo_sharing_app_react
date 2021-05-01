import React, { useEffect } from "react";
import Layout from "../Layout";
import Login from "../../components/forms/Login";
import Registration from "../../components/forms/Registration";
// import { useDispatch, useSelector } from "react-redux";
// import allActions from "../../actions";
// import ForgetPassword from "../../components/forms/forget-password";
// import ResetPassword from "../../components/forms/reset-password";

Auth.propTypes = {};

function Auth(props) {
  // const message = useSelector((state) => state.authReducer.message);
  // const errors = useSelector((state) => state.authReducer.errors);
  // const redirect = useSelector((state) => state.authReducer.redirect);

  // const { submitAuthForm } = allActions.authActions;
  // const dispatch = useDispatch();
  const formType = props.match.params.formType;

  // useEffect(() => {
  //   if (redirect) {
  //     props.history.push("/profile/");
  //     dispatch(allActions.authActions.redirectUser(false));
  //   }
  // }, [redirect]);

  // const onSubmit = (formType, values) => {
  //   const value = {
  //     ...values,
  //     formType: formType,
  //   };
  //   dispatch(submitAuthForm(value));
  // };

  let form;

  switch (formType) {
    case "login":
      form = <Login />;
      break;
    case "register":
      form = <Registration />;
      break;
    // case "forgot-password":
    //   form = (
    //     <ForgetPassword
    //       message={message}
    //       serverErrors={errors}
    //       onSubmit={(e) => onSubmit("forgotPasswordForm", e)}
    //     />
    //   );
    //   break;
    // case "reset-password":
    //   form = (
    //     <ResetPassword
    //       message={message}
    //       serverErrors={errors}
    //       onSubmit={(e) => onSubmit("resetPasswordForm", e)}
    //     />
    //   );
    //   break;
    default:
      form = "404";
      props.history.push("/auth/login/");
      break;
  }

  return <Layout>{form}</Layout>;
}

export default Auth;
