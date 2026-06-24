import { LOGO_URL } from "../../utils/constants";
const Header = () => {
  return (
    <div className="header">
      <div className="app-icon-container">
        <img
          className="app-icon"
          alt="Company Icon"
          src="https://thf.bing.com/th/id/OIP.bGqGU3ApBe4huVZH-jVAJgHaHa?o=7&cb=thfc1falcon2rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
        ></img>
      </div>
      <div className="nav-bar-conatiner">
        <ul className="navbar">
          <li>Orders</li>
          <li>Account</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
