import React from 'react';
import PropTypes from 'prop-types';

import Post from '../Post';

import './style.css';

function PostList({ posts }) {
  return (
    <div id="post-list">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  )
}

PostList.propTypes = {
  posts: PropTypes.array.isRequired
}

export default PostList


