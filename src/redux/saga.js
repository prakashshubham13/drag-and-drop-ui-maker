import { all, fork } from 'redux-saga/effects';

import * as previewSagas from './saga/PreviewSaga';

export default function* rootSaga() {
  yield all([...Object.values(previewSagas)].map(fork));
}
