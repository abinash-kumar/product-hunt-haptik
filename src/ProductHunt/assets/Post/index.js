import React from 'react';
import './index.scss';

const Post = (el, i, func, comments)=>{
    return(
        <div className="post" key={`post_${i}`}>
            <div className="post__wrapper">
                <img className="post__wrapper-image" src={el.thumbnail.image_url} alt='xks' />
                <div className="post__wrapper-title">
                    <h4>{el.name}</h4>
                    <p>{el.tagline}</p>
                </div>
                <div className="post__wrapper-votes">
                    <img src="https://dl3.pushbulletusercontent.com/DooWDfW4Ob5D44x9YwwWQj0doXsxd8zb/Screenshot%202020-01-26%20at%202.14.38%20PM.png" alt="vote_up" />
                    <p>{el.votes_count} <br/> votes</p>
                </div>
            </div>
            <div className="post__activity">
                <div className="post__activity--chip-box" onClick={()=>func({type : 'VOTE', post_id : el.id})}>
                {
                    el.isVoteDone ? <span>Undo Vote &nbsp;</span> : <span>Vote &nbsp;</span>}
                    {
                    el.isVoteDone ? <img src="https://dl3.pushbulletusercontent.com/9DqCaPBAcdZnJXYaUx9Ke5GLvcSxrulX/Screenshot%202020-01-26%20at%202.16.12%20PM.png" alt="comment_icon" /> 
                    : <img src="https://dl3.pushbulletusercontent.com/DooWDfW4Ob5D44x9YwwWQj0doXsxd8zb/Screenshot%202020-01-26%20at%202.14.38%20PM.png" alt="comment_icon" />
                    }
                    
                </div>
                <div className="post__activity--chip-box" onClick={()=>func({type : 'COMMENT', post : el, comments, pageNumber : 1 })}>
                    <span>{el.comments_count}&nbsp;</span>
                    <img src="https://dl3.pushbulletusercontent.com/FitBN1Gjb5i4kcsnppGvgtGVKHoxxh9B/images-comment.png" alt="comment_icon" />
                </div>
            </div>
        </div>
    )
}

export default Post;