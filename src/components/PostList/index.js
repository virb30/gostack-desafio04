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
  posts: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      content: PropTypes.string,
      author: PropTypes.shape({
        name: PropTypes.string.isRequired
      })
    })),
    author: PropTypes.shape({
      name: PropTypes.string.isRequired
    })
  }))
}

export default PostList


