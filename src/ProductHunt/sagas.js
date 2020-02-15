import { takeLatest, put } from 'redux-saga/effects';
import { makeApiCall } from '../untils'



import {
  errorMsgs,
} from './helperFunctions';


import {
  GET_ALL_POSTS,
  HANDLE_PRODUCT_CLICK,
  products

} from './constants';



import {
  updateDirectField,
} from './actions';


export function* getPosts({payload}) {
  yield put(updateDirectField({ fieldKey: 'isPostsLoading', fieldValue: true }));
  const data = yield makeApiCall('https://api.producthunt.com/v1/posts/all', 'GET', payload);
  if(data){
    yield put(updateDirectField({ fieldKey: 'posts', fieldValue: data.posts }));
    yield put(updateDirectField({ fieldKey: 'isPostsLoading', fieldValue: false }));
  }
}


export function* getPostsWatcher() {
  yield takeLatest(GET_ALL_POSTS, getPosts);
}

export function* getComment({payload : {type, post, pageNumber, comments}}) {
  if(type==='VOTE')
    return;
  yield put(updateDirectField({ fieldKey: 'isCommnetLoading', fieldValue: true }));
  const data = yield makeApiCall('https://api.producthunt.com/v1/comments', 'GET', {per_page : '5', 'search[post_id]' : post.id, page : pageNumber});
  if(data){
    yield put(updateDirectField({ fieldKey: 'comments', fieldValue: comments.concat(data.comments)}));
    yield put(updateDirectField({ fieldKey: 'isCommnetLoading', fieldValue: false }));

  }
}


export function* getPostsCommentWatcher() {
  yield takeLatest(HANDLE_PRODUCT_CLICK, getComment);
}


export default [
  getPostsWatcher,
  getPostsCommentWatcher
];
