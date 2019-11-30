import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects'
import {get_Author_List_Action,get_Article_List_Action,get_TopicList_Action} from "./actionTypes";
import {changeAuthorListAction,changeArticleListAction,changeTopicListAction} from './actionCreators';
import axios from "axios";

function* getAuthorListAction() {
  const res=yield axios.get('api/authorList.json');
  yield put(changeAuthorListAction(res.data.users));

}

function* getArticleListAction() {
  const res=yield axios.get('api/articleList.json');
  yield put(changeArticleListAction(res.data.data));

}

function* getTopicListAction() {
  const res=yield axios.get('api/topicList.json');
  yield put(changeTopicListAction(res.data.data));
}

function * watch() {
  yield takeEvery(get_Author_List_Action, getAuthorListAction);
  yield takeEvery(get_Article_List_Action, getArticleListAction);
  yield takeEvery(get_TopicList_Action, getTopicListAction);
}


export default function* homeSaga() {
  yield all([
    watch(),
  ])
}