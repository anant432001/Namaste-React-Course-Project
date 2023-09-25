import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "",
        login: "",
        avatar_url: "",
      },
      //   Below would have also worked.
      //   userInfo: {
      //   }
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/anant432001");
    const jsonData = await data.json();
    this.setState({
      userInfo: jsonData,
    });
  }

  render() {
    return (
      <div className="my-4 px-4 flex flex-col items-center">
        <div>
          <img
            src={this.state.userInfo.avatar_url}
            className="rounded-lg w-80"
          />
        </div>
        <div>
          <h2>{this.state.userInfo.name}</h2>
        </div>
      </div>
    );
  }
}

export default UserClass;
