import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Layout from "../Layout";
import Login from "../../components/forms/Login";
import Registration from "../../components/forms/Registration";
import allActions from "../../_redux/actions";

Auth.propTypes = {};

function Auth(props) {
  const message = useSelector((state) => state.authReducer.message);
  const errors = useSelector((state) => state.authReducer.errors);
  const redirect = useSelector((state) => state.authReducer.redirect);

  const { submitAuthForm } = allActions.authActions;
  const dispatch = useDispatch();
  const formType = props.match.params.formType;

  useEffect(() => {
    const redirectUserToProfile = () => {
      props.history.push("/profile/");
      dispatch(allActions.authActions.redirectUser(false));
    };

    if (redirect) {
      redirectUserToProfile();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [redirect]);

  const onSubmit = (formType, values) => {
    const value = {
      ...values,
      formType: formType,
    };
    dispatch(submitAuthForm(value));
  };

  let form;

  switch (formType) {
    case "login":
      form = (
        <Login
          message={message}
          serverErrors={errors}
          onSubmit={(e) => onSubmit("loginForm", e)}
        />
      );
      break;
    case "register":
      form = <Registration />;
      break;
    default:
      form = "404";
      props.history.push("/auth/login/");
      break;
  }

  return <Layout>{form}</Layout>;
}

export default Auth;
