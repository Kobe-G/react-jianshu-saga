import { call, put, takeEvery, take, all } from 'redux-saga/effects'
import {get_DetailData_Action} from "./actionTypes";
import {changeDetailDataAction} from './actionCreators';
import axios from "axios";

function* getDetailDataAction() {
  const action=yield take(get_DetailData_Action);
  const res=yield axios.get('api/detailData.json?id=' + action.id);
  const data = res.data[0];
  yield put(changeDetailDataAction(data))
}



function * watch() {

}


export default function* detailSaga() {
  yield all([
    watch(),
    getDetailDataAction(),
  ])
}