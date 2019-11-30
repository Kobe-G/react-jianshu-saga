import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects'
import {GET_LIST_ACTION} from "./actionTypes";
import {changeListAction} from './actionCreators';
import axios from "axios";

function * getList() {
  const res=yield axios.get('api/headerList.json');
  const action=changeListAction(res.data.data);
  yield put(action);
}

function * watchGetList() {
  yield takeEvery(GET_LIST_ACTION, getList);
}



export default function* headSaga() {
  yield all([
    watchGetList(),
  ])
}