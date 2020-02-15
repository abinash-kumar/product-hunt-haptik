import React from 'react';
import './index.scss';

const Comment = ({
    post, 
    comments, 
    isCommnetLoading, 
    backBtn, 
    loadMoreComment,
    commentPage
})=>{

    return(
        <div className="comment">
            <div className="comment__wrapper">
                <img className="comment__wrapper-image" src={post.thumbnail.image_url} alt='profile_image' />
                <div className="comment__wrapper-title">
                    <h4>{post.name}</h4>
                    <p>{post.tagline}</p>
                    <div>{post.topics.map((el, i)=><span className="chips" key={`${el.name}_${i}`}>{el.name}</span>)}</div>
                    <button className="btn btn-back" onClick={backBtn}>Back to posts</button>
                </div>
            </div>
            <div className="comment__cover">
                <img src={post.screenshot_url['850px']} />
            </div>
            <div className="comment__disscuss-tag">DESSCUSSION</div>
            <div className="comment__activity">
                {comments && !!comments.length &&  comments.map((cmmt)=><div className="comment__activity-comment" key={`comment_${cmmt.id}`} >
                    <div className="comment__activity-comment-user" >
                        <img src={cmmt.user.image_url['40px']} atl="user_icon" />
                        <p>{cmmt.user.name}</p>
                    </div>
                    <p className="comment__activity-comment--user-comment">{cmmt.body}</p>
                </div>)}
                {!isCommnetLoading && ((5*commentPage) < post.comments_count)&& <div className="comment__activity-comment-user" >
                    <p className="load-comments" style={{fontWeight : '300'}} onClick={()=>loadMoreComment(commentPage+1)}>Read More Comments</p>
                </div>}
                {isCommnetLoading && <div className="loading"><p>Comments are loading...</p></div>}
                {!isCommnetLoading && comments && !comments.length &&  <div className="loading"><p>Disscussion not started yet</p></div>}
            </div>
        </div>
    )
}

export default Comment;