import React from 'react';
import Comment from './Comment';

export default class CommentList extends React.Component {
  render() {
    return (
      <div className="commentList">
        <Comment author="Pete Hunt">This is one comment</Comment>
        <Comment author="Jordan Walke">This is *another* comment</Comment>
      </div>
    );
  }
}

