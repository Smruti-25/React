import React from "react";
class UserClass extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        avatar_url: "dummyphoto"
      },
    };
  }

  async componentDidMount (){
    const data = await fetch("https://api.github.com/users/Smruti-25");
    const json = await data.json();

    this.setState({
      userInfo: json
    });
  }

  render(){
    // const {name, location} = this.props;
    const {name, location, avatar_url} = this.state.userInfo;
    return (
      <div className="user-card">
        <h1>{name}</h1>
        <h2>{location}</h2>
        <img src = {avatar_url} />
        <h2>Contact Info</h2>
      </div>
    );
  }
}

export default UserClass;