import React from 'react';

const CommentDetail = (props) => {
  return (
    <div className='comment'>
      <a href='/' className='avatar'>
        <img alt='avatar' src={props.avatar}></img>
      </a>
      <div className='conetent'>
        <a href='/' className='author'>
          {props.author}
        </a>
        <div className='metadata'>
          <span className='date'>{props.timeAgo}</span>
        </div>
        <div className='text'>{props.blogPost}</div>
      </div>
    </div>
  );
};

export default CommentDetail;
