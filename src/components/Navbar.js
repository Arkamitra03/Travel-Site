import "./Navbarstyle.css";
import { Component } from "react";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";

class Navbar extends Component {
  // as we are using extends so we are rendering, i.e render() method
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="navbarItems">
        <h1 className="navbarLogo">Exploraholic</h1>
        <div
          className="menu-icon"
          onClick={this.handleClick}
          style={{ cursor: "pointer" }}
        >
          <i
            className={
              this.state.clicked ? "fa-solid fa-times" : "fa-solid fa-bars"
            }
          />
        </div>
        <ul className={this.state.clicked ? "navMenu active" : "navMenu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}
          <button>Sign Up</button>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
