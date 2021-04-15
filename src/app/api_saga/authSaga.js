// import { put, call, takeLatest, select } from "redux-saga/effects";

// function* submitAuthForm({ payload }) {
//     let url;
//     let body;
//     console.log(payload);
//     switch (payload.formType) {
//         case "loginForm":
//             url = `/token/`;
//             body = {
//                 username: payload.username,
//                 password: payload.password,
//             };
//             break;
//         case "registerForm":
//             url = `/users/registration/`;
//             body = {
//                 username: payload.username,
//                 email: payload.email,
//                 password: payload.password,
//             };
//             break;
//         case "resetPasswordForm":
//             console.log(payload);
//             url = `/users/trigger-password/${payload.code}/`;
//             body = {
//                 password: payload.password,
//             };
//             break;
//         case "forgotPasswordForm":
//             url = `/users/trigger-password/`;
//             body = {
//                 email: payload.email,
//             };
//             break;
//         default:
//             break;
//     }

//     const options = {
//         method: "POST",
//         body: body,
//     };

//     const token_response = yield call(request, url, options);

//     if (token_response.status === 400) {
//         let data = token_response.data;
//         let r = [];
//         for (var [i, j] of Object.entries(data)) {
//             console.log(`${i}: ${j}`);
//             r.push(`${j}`);
//         }
//         yield put(allActions.authActions.setFormErrors(r));
//     } else {
//         if (payload.formType === "loginForm") {
//             auth.setToken(token_response.access, payload.rememberMe);

//             const profile_url = `users/profile`;
//             const options = {
//                 method: "GET",
//             };
//             const user_response = yield call(request, profile_url, options);
//             yield put(allActions.authActions.setUser(user_response));
//             yield put(allActions.authActions.redirectUser(true));
//             auth.setUserInfo(user_response, body.rememberMe);
//         }
//         if (payload.formType === "resetPasswordForm") {
//             yield put(allActions.authActions.redirectUser(true));
//         }
//         if (payload.formType === "forgotPasswordForm") {
//             yield put(
//                 allActions.authActions.setMessage(
//                     "An e-mail has been sent. Please Reset password using the link sent!"
//                 )
//             );
//         }
//         if (payload.formType === "registerForm") {
//             yield put(
//                 allActions.authActions.setMessage(
//                     "An e-mail has been sent. Please use that to reset your password."
//                 )
//             );
//             yield put(allActions.authActions.redirectUser(true));
//         }
//     }
// }

// export function* authWatcher() {
//     yield takeLatest(SUBMIT_AUTH, submitAuthForm);
// }
