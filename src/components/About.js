import User from "./User";
import UserClass from "./UserClass";

const AboutUs = () => {
  return (
    <div>
      <h1>I am the About Component</h1>
      <User name = {"Smruti Karade functional"}/>
      <UserClass name = {"Smruti Karade Class"} location = {Nagpur}/>
    </div>
  );
}

export default AboutUs;