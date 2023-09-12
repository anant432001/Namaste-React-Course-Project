import React from 'react'

const User = (props) => {
  const {name} = props;
  return (
    <div className='user-card'>
        <h2>Name : {name}</h2>
        <h3>Location : Lucknow</h3>
        <h4>Contact : anant432001</h4>
    </div>
  )
}

export default User;