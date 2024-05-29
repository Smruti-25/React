const User = (props) => {
  const {name} = props;
  return (
    <div className="user-card">
      <h1>{name}</h1>
      <h2>Nagpur</h2>
      <h2>Contact Info</h2>
    </div>
  );
}

export default User;