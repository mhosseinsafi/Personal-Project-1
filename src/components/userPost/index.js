import React, { useEffect, useState } from 'react';
import AlbumAvatar from '../../assets/album_avatar.png';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import Modal from 'react-modal';
import AlbumPhoto from '../albumPhoto';
import CommentPost from '../commentPost'
require('./style.scss');


const UserPost = () => {
  const [album, setAlbum] = useState([])
  const [post, setPost] = useState([])
  const [open, setOpen] = useState(false)
  const [albumId, setAlbumId] = useState();
  const [postId, setPostId] = useState()
  const [commentOpen, setCommentOpen] = useState(false);

  useEffect(() => {
    fetchPost();
    fetchAlbum();
  }, [])


  const location = useLocation();
  const fetchAlbum = () => {
    axios.get(`https://jsonplaceholder.typicode.com/albums?userId=${location.state.id}`)
      .then(response => {
        setAlbum(response.data);
      })
      .catch()
  }


  const onClose = () => {
    setOpen(false);
  }

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };


  const fetchPost = () => {
    axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${location.state.id}`)
      .then(response => {
        setPost(response.data);
      })
      .catch(error => { console.log(error) })
  }
  return (
    <div className='detail-container'>
      <Modal
        isOpen={open}
        onRequestClose={onClose}
        contentLabel="Example Modal"
        style={customStyles}
      >
        <AlbumPhoto albumId={albumId}></AlbumPhoto>
      </Modal>
      <Modal
        isOpen={commentOpen}
        onRequestClose={() => {
          setCommentOpen(false);
        }}
        contentLabel="Example Modal"
        style={customStyles}>
        <CommentPost postId={postId}></CommentPost>
      </Modal>
      <div className='album-container'>
        {album.map((al) => {
          return (
            <div key={al.id} className='album-parent'>
              <img src={AlbumAvatar} alt={al.title} className='albumImage' onClick={() => {
                setOpen(true);
                setAlbumId(al.id);
              }} ></img>
              <span>{al.title}</span>
            </div>
          )
        })}
      </div>
      <div className='post-container'>
        {post.map((p) => {
          return (
            <div className='post-parent' onClick={() => {
              setPostId(p.id);
              setCommentOpen(true);
            }}>
              <span>{p.title}</span>
              <span>{p.body}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
};

export default UserPost;