import {
  GET_ALL_POSTS,
  UPDATE_DIRECT_FIELD,
  HANDLE_PRODUCT_CLICK,
  BACK_TO_POSTS,
  NEXT_PREV_PAGE,
  NEXT_FIVE_COMMENTS,
} from './constants';


export const getPosts = payload => ({
  type: GET_ALL_POSTS,
  payload,
});


export const updateDirectField = payload => ({
  type: UPDATE_DIRECT_FIELD,
  payload,
});


export const handleProductClick = payload => ({
  type: HANDLE_PRODUCT_CLICK,
  payload,
});

export const backBtn = payload => ({
  type: BACK_TO_POSTS,
  payload,
});


export const goNextPrevPage = payload => ({
  type: NEXT_PREV_PAGE,
  payload,
});


export const loadMoreComment = payload => ({
  type: NEXT_FIVE_COMMENTS,
  payload,
});

