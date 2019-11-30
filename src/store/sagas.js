import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects'
import headSaga from '../common/header/store/sagas'
import homeSaga from '../pages/home/store/sagas'
import loginSaga from '../pages/login/store/sagas'
import detailSaga from '../pages/detail/store/sagas'


export default function* rootSaga() {
  yield all([
    headSaga(),
    homeSaga(),
    loginSaga(),
    detailSaga()
  ])
}