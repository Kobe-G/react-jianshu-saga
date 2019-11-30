import {CHANGE_LIST, INPUT_BLUR, INPUT_FOCUS,Mouse_In,Mouse_Out,NEXT_PAGE,GET_LIST_ACTION} from './actionTypes';
import {fromJS} from 'immutable';

export const changeListAction = (data) => {
  return {
    type: CHANGE_LIST,
    data: fromJS(data)
  }
};

export const getSearchFocusAction = () => {
  return {
    type: INPUT_FOCUS,
  }
};

export const getSearchBlurAction = () => {
  return {
    type: INPUT_BLUR,
  }
};

export const getMouseInAction = () => {
  return {
    type: Mouse_In,
  }
};

export const getMouseOutAction = () => {
  return {
    type: Mouse_Out,
  }
};

export const getNextPageAction = () => {
  return {
    type: NEXT_PAGE,
  }
};

export const getListAction = () => {
  return {
    type:GET_LIST_ACTION,
  }
};
