import React from 'react';
import User from './User';
import UserClass from './UserClass';

const About = () => {
  return (
    <div>
      <h1>This is About Page..</h1>
      {/* <User name={"Anant Functional"}/> */}
      <UserClass name={"Anant Classic"}/>
    </div>
  )
}

export default About;