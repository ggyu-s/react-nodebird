import { all, delay, fork, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  LOG_IN_SUCCESS,
  LOG_OUT_FAILURE,
  LOG_IN_FAILURE,
  LOG_OUT_SUCCESS,
  LOG_IN_REQUEST,
  LOG_OUT_REQUEST,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
} from "../reducers/user";

function logInAPI(data) {
  return axios.post("/api/login", data);
}

/**
 *  call - 동기
 *  fork - 비동기
 */

function* logIn(action) {
  try {
    yield delay(1000);
    // const result = yield call(logInAPI, action.data);
    yield put({
      type: LOG_IN_SUCCESS,
      data: action.data,
    });
  } catch (e) {
    yield put({
      type: LOG_IN_FAILURE,
      error: e.response.data,
    });
  }
}

// function logOutAPI() {
//   return axios.post("/api/logOut");
// }

function* logOut() {
  try {
    // const result = yield call(logOutAPI);
    yield put({
      type: LOG_OUT_SUCCESS,
      //   data: result.data,
    });
  } catch (e) {
    yield put({
      type: LOG_OUT_FAILURE,
      error: e.response.data,
    });
  }
}

function* signUp() {
  try {
    // const result = yield call(logOutAPI);
    yield delay(1000);
    yield put({
      type: SIGN_UP_SUCCESS,
      //   data: result.data,
    });
  } catch (e) {
    yield put({
      type: SIGN_UP_FAILURE,
      error: e.response.data,
    });
  }
}

function* watchLogIn() {
  yield takeLatest(LOG_IN_REQUEST, logIn);
}

function* watchLogOut() {
  yield takeLatest(LOG_OUT_REQUEST, logOut);
}

function* watchSignUp() {
  yield takeLatest(SIGN_UP_REQUEST, signUp);
}

export default function* userSaga() {
  yield all([fork(watchLogIn), fork(watchLogOut), fork(watchSignUp)]);
}
