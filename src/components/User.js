import { useState } from "react";

const User = (props) => {
  const {name} = props;
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(1);
  return (
    <div className="user-card">
      <h1>count = {count}</h1>
      <h1>count1 = {count1}</h1>
      <h1>{name}</h1>
      <h2>Nagpur</h2>
      <h2>Contact Info</h2>
    </div>
  );
}

export default User;