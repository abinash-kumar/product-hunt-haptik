/* eslint-disable no-case-declarations */

import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';

import {
  UPDATE_DIRECT_FIELD,
  HANDLE_PRODUCT_CLICK,
  BACK_TO_POSTS,
  NEXT_PREV_PAGE,
  NEXT_FIVE_COMMENTS,
} from './constants';

const opticalStoreInitialsInitial = {
  toggle : false,
  posts : {},
  isOnDisscussion : false,
  isLoading : false,
  isCommnetLoading : false,
  isPostsLoading : true,
  comments : [],
  postPageNo : 1,
  commentPage : 1,
  post:''
};

const opticalStoreInitials = fromJS(opticalStoreInitialsInitial);


const productHuntStore = (state = opticalStoreInitials, { type, payload }) => {
  switch (type) {
    case UPDATE_DIRECT_FIELD:
      return state.set(payload.fieldKey, payload.fieldValue);
    case HANDLE_PRODUCT_CLICK :
      if(payload.type === 'COMMENT'){
      return state.set('post', payload['post'])
                  .set('isOnDisscussion', true);
      }else if(payload.type === 'VOTE'){
        let store = state.toJS();
          let postPosation = store.posts.findIndex((el)=>el.id=== payload['post_id']);
          if(store.posts[postPosation].isVoteDone){
            store.posts[postPosation]['votes_count'] = store.posts[postPosation]['votes_count']-1;
            store.posts[postPosation]['isVoteDone'] = false;
          }else{
            store.posts[postPosation]['votes_count'] = store.posts[postPosation]['votes_count']+1;
            store.posts[postPosation]['isVoteDone'] = true;
          }
          return fromJS(store);
        }else{
          return state;
        }
        case BACK_TO_POSTS :
        return state
        .set('isOnDisscussion', false)
        .set('post', '')
        .set('comments', [])
        .set('commentPage', 1)
        .set('isPostsLoading' , false)
        .set('isCommnetLoading', false)
      case NEXT_PREV_PAGE : 
        return state.set('postPageNo', payload)
      case NEXT_FIVE_COMMENTS : 
        return state.set('commentPage', payload)
    default:
      return state;
  }
};



export default function createReducer(asyncReducers) {
  return combineReducers({
    productHuntStore : productHuntStore,
    ...asyncReducers
  });
}
