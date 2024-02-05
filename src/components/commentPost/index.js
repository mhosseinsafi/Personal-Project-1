import React, { useEffect, useState } from "react";
import axios from "axios";
require('./style.scss');

 

const CommentPost = (props) => {
  const [comments, setComments] = useState([]);

  useEffect (() => {
    fetchComment()
  }, [])


  const fetchComment = () => {
    axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${props.postId}`)
      .then((response) => {
        setComments(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  return (
    <div className="comment-container">
      {comments.map(comment => (
        <span key={comment.id}>{comment.name}={comment.body}</span>
      ))}
    </div>
  )
}

export default CommentPost;