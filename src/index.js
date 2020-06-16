import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className='ui container comments'>
      <ApprovalCard>
        <CommentDetail
          author='Sam'
          timeAgo='Today at 4:45pm'
          blogPost='awesome post'
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author='Alex'
          timeAgo='Today at 2:am'
          blogPost='good input'
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author='Jane'
          timeAgo='Today at 9:45pm'
          blogPost='thanks for the help'
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};
ReactDOM.render(<App />, document.querySelector('#root'));
