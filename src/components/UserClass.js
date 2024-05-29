import React from "react";
class UserClass extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      count: 0,
    }
  }
  render(){
    const {name, location} = this.props;
    const {count} = this.state;
    return (
      <div className="user-card">
        <h1>count = {count}</h1>
        <h1>{name}</h1>
        <h2>{location}</h2>
        <h2>Contact Info</h2>
      </div>
    );
  }
}

export default UserClass;