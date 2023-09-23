import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "",
        login: "",
        avatar_url: ""
      },
    //   Below would have also worked.
    //   userInfo: {
    //   }
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/anant432001");
    const jsonData = await data.json();
    console.log(jsonData);
    this.setState({
      userInfo: jsonData,
    });
  }

  render() {
    return (
      <div className="">
        <img src={this.state.userInfo.avatar_url}/>
        <h2>Name : {this.state.userInfo.name}</h2>
        <h3>UserId : {this.state.userInfo.login}</h3>
      </div>
    );
  }
}

export default UserClass;
