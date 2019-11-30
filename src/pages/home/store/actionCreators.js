import {NEXT_PAGE,GRT_AUTHOR_LIST,CHANGE_SHOW_SCROLL,GRT_ARTICLE_LIST,GRT_TOPIC_LIST,get_Author_List_Action,get_Article_List_Action,get_TopicList_Action} from "./actionTypes";

export const changeAuthorListAction = (data) => {
  return {
    type: GRT_AUTHOR_LIST,
    data
  }
};

export const changeArticleListAction = (data) => {
  return {
    type: GRT_ARTICLE_LIST,
    data
  }
};

export const changeTopicListAction = (data) => {
  return {
    type: GRT_TOPIC_LIST,
    data
  }
};

export const getAuthorListAction = () => {
  return {
    type:get_Author_List_Action,
  }
};

export const getNextPageAction = () => {
  return {
    type: NEXT_PAGE,
  }
};

export const getScrollShowAction = (isShow) => {
  return {
    type: CHANGE_SHOW_SCROLL,
    isShow
  }
};

export const getArticleListAction = () => {
  return {
    type:get_Article_List_Action
  }
};

export const getTopicListAction = () => {
  return {
    type:get_TopicList_Action
  }
};

