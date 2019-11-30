import { call, put, takeEvery, take, all } from 'redux-saga/effects'
import {LOG_IN} from "./actionTypes";
import {getChangeLogAction} from './actionCreators';
import axios from "axios";

function* getAuthorListAction() {
  const action=yield take(LOG_IN);
  const res=yield axios.get('api/login.json?account='+action.account+'&password='+action.password);
  yield put(getChangeLogAction(res));
}



function * watch() {

}


export default function* homeSaga() {
  yield all([
    watch(),
    getAuthorListAction(),
  ])
}