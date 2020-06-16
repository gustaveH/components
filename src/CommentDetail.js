import React from 'react';

const CommentDetail = (props) => {
  return (
    <div className='comment'>
      <a href='/' className='avatar'>
        <img alt='avatar' src='#'></img>
      </a>
      <div className='conetent'>
        <a href='/' className='author'>
          {props.author}
        </a>
        <div className='metadata'>
          <span className='date'>Today at 6:00PM</span>
        </div>
        <div className='text'>Nice blog post!</div>
      </div>
    </div>
  );
};

export default CommentDetail;
