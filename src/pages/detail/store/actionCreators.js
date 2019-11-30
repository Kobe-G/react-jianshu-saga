import {CHANGE_DETAIL_DATA,get_DetailData_Action} from './actionTypes';

export const changeDetailDataAction = (data) => {
  return {
    type: CHANGE_DETAIL_DATA,
    data
  }
};

export const getDetailDataAction = (id) => {
  return {
    type:get_DetailData_Action,id
  }
};