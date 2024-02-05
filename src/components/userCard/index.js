import React, { useEffect, useState } from 'react';
import Profile from '../../assets/boy1.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
require('./style.scss');

const UserCart = () => {
  const [user, setUsers] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetchUsers()
  }, [])
  const fetchUsers = () => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data)
      })
      .catch(error => { console.log(error) })
  };
  const a = (id) => {
    navigate('/post', {state:{ id: id }});
  }
  return (
    <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
      <div className='usercart_section'> {
        user.map((data, index) => {
          return (
            <div className='userCart_container' key={data.id} onClick={() => { a(data.id) }}>
              <img src={Profile} className='userCart_image'></img>
              <div className='userCart_span_content'>
                <span>Name: {data.name} </span>
                <span>Username: {data.username}</span>
                <span>E-mail: {data.email}</span>
              </div>

            </div>
          )
        })}
      </div>
    </div>
  )
};

export default UserCart;