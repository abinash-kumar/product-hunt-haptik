import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Post from './assets/Post';
import Portfolio from './assets/Portfolio';
import Comment from './assets/Comment';
import { createStructuredSelector } from 'reselect';
import { makeProductHuntSelector } from './selectors';

import * as ProductHuntActions from './actions'


import logo from './logo.svg';
import './index.scss';

class ProductHunt extends Component {

    constructor(props) {
        super(props);
        this.state = {};
      }

    componentDidMount() {
      const { postPageNo } = this.props.ProductHuntStore;
      this.props.actions.getPosts({page : postPageNo, per_page : '5', newer : '1'});
    }

    componentWillReceiveProps(nextProps){
      const { postPageNo, commentPage, post } = this.props.ProductHuntStore;

      const updatedPostNo = nextProps.ProductHuntStore.postPageNo;
      const updatedCommentPage = nextProps.ProductHuntStore.commentPage;
      const latestComment = nextProps.ProductHuntStore.comments; 
      if(updatedPostNo && (postPageNo !== updatedPostNo)){
        this.props.actions.getPosts({page : updatedPostNo, per_page : '5', newer : '1'});
      }
      if(updatedCommentPage && updatedCommentPage>commentPage){
        this.props.actions.handleProductClick({post : post, pageNumber : updatedCommentPage, comments : latestComment});
      }
    }

    render (){

      const { posts,
              isOnDisscussion,
              post,
              comments,
              isCommnetLoading,
              isPostsLoading,
              postPageNo,
              commentPage
            } = this.props.ProductHuntStore;
      
      const   { handleProductClick,
                backBtn,
                goNextPrevPage,
                loadMoreComment,
              } = this.props.actions;

        return (
            <div className="ProductHunt">
                <header className="header">
                  <div className="header__wrappr">
                    <div className="header__wrappr-title">
                      <img src={logo} className="header__wrappr-logo" alt="logo" />
                      <h1 className="header__wrappr-title--capitalize"> Product Hunt </h1>
                    </div>
                    <div className="header__wrappr-user-icon">
                      <img src="https://dl3.pushbulletusercontent.com/QWs2tEpoD2valMJhnkbTyDYupxPG2rMB/abinash.jpeg" alt="user"/>
                    </div>
                  </div>
                </header>
                
                <figure className="posts-container">
                  {!isOnDisscussion && <h2>All Resent Product On Product Hunt</h2>}
                  <div className="posts-container__wrapper">
                    {posts && !!posts.length && !isPostsLoading && !isOnDisscussion &&
                      <main>
                        {posts.map((el, i)=>Post(el, i, handleProductClick, comments))}
                        <div className="next-prev-btn-cntr">
                          <button 
                            onClick={postPageNo!==1 ? ()=>goNextPrevPage(postPageNo-1) : null} 
                            className={`btn ${postPageNo===1 ? 'btn-disabled' : ''}`}>
                              Previous
                          </button>
                          <span>Page {postPageNo}</span>
                          <button 
                            className="btn" 
                            onClick={()=>goNextPrevPage(postPageNo+1)}>
                              Next
                          </button>
                        </div>
                      </main>
                    }
                    {isPostsLoading && <main>
                      <div className="loading">
                        <p>Loading...</p>
                      </div>
                      </main>}
                    {isOnDisscussion && 
                      <main>
                        <Comment 
                          post={post} 
                          comments={comments} 
                          isCommnetLoading={isCommnetLoading}
                          backBtn={backBtn}
                          loadMoreComment={loadMoreComment}
                          commentPage={commentPage}
                        />
                      </main>
                    }
                    <aside><Portfolio /></aside>
                  </div>
                </figure>
            </div>
          );
    }
}



const mapStateToProps = createStructuredSelector({
    ProductHuntStore: makeProductHuntSelector(),
  });
  
  function mapDispatchToProps(dispatch) {
    return {
      dispatch,
      actions: bindActionCreators({ ...ProductHuntActions }, dispatch),
    };
  }
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(ProductHunt);
