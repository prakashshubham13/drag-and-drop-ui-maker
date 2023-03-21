import { put, takeLatest, call, delay } from "redux-saga/effects";
function* handleDataFetchSaga(action) {
    try {
    //   yield put(rLoading(true));
    //   const result = yield call(
    //     axios.get,
    //     `http://localhost:3000/drinks`
    //   );
    //   console.log(result.data)
    //   yield put(rResult(result.data));
      } catch (error) {
        // yield put(rError());
      }
}

export function* watchForHandleDataFetch() {
    // yield takeLatest("R_HANDLER", handleDataFetchSaga);
  }