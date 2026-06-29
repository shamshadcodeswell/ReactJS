import AboutFunc from "./AboutFunc";
import AboutClass from "./AboutClass";
const About = () => {
  return (
    <div>
      <h1>About US</h1>
      <h2>We are a Food Delivery Company</h2>
      <AboutFunc name={"Shamshad"} location={"Banglore"}></AboutFunc>
      <AboutClass name={"Shamshad"} location={"Banglore"}></AboutClass>
    </div>
  );
};

export default About;
