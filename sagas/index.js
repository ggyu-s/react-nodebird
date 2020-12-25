import {
  all,
  call,
  delay,
  fork,
  put,
  take,
  takeEvery,
  takeLatest,
  throttle,
} from "redux-saga/effects";
import axios from "axios";

import postSaga from "./post";
import userSaga from "./user";

/**
 *  call - 동기
 *  fork - 비동기
 */

// take - 1회성 한 번 사용하면 사라진다,
// takeEvery - 계속 사용할 수 있도록 해준다.
// takeLatest - 마우스를 두번 클릭한 경우 앞에 클릭한거는 무시하고 마지막 클릭한거만 실행 <- 주로사용
// 두번클릭시 첫번째 클릭한거 요청은 취소하지 못하고 응답만 취소되기때문에 서버쪽 데이터를 되었는지 확인해줘야한다.
// takeLeading - 앞에 클린한거만 실행
// throttle - 시간을 설장하여 한 번 클릭시 설정한 시간동안 클릭이 안되도록한다.(설정한 시간동안 제거)

export default function* rootSaga() {
  yield all([fork(postSaga), fork(userSaga)]);
}
