import {CHANGE_LOG,LOG_IN} from './actionTypes';

export const getChangeLogAction=()=>{
  return {
    type:CHANGE_LOG,
  }
};

export const getLoginAction=(account,password)=>{
  return {
    type:LOG_IN,account,password
  }
};