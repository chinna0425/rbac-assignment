import { Link, withRouter } from "react-router-dom";
import Popup from "reactjs-popup";

import ContextOptions from "../../ContextData";

import "./index.css";

const Header = (props) => (
  <ContextOptions.Consumer>
    {(value) => {
      const { loggedData, loggedUser } = value;
      console.log("navbar", loggedData);

      const onLogOut = () => {
        const { history } = props;
        loggedUser({});
        history.replace("/login");
      };

      return (
        <nav className="nav-main-container">
          <Link to="/" className="header-link">
            <h1 className="nav-heading">RBAC</h1>
          </Link>
          <ul className="nav-unorder-list-container">
            <li>
              <Link to="/" className="list-item">
                Home
              </Link>
            </li>
            {loggedData.role === "Admin" && (
              <li>
                <Link to="/admin" className="list-item">
                  Admin Dashboard
                </Link>
              </li>
            )}
            {loggedData.role === "Editor" && (
              <li>
                <Link to="/editor" className="list-item">
                  Editor Dashboard
                </Link>
              </li>
            )}
            {loggedData.role === "User" && (
              <li>
                <Link to="/user" className="list-item">
                  User Dashboard
                </Link>
              </li>
            )}
          </ul>
          <Popup
            modal
            trigger={
              <button type="button" className="header-logout">
                Logout
              </button>
            }
          >
            {(close) => (
              <div className="popup-container">
                <h1 className="popup-title">Are you sure to Logout</h1>
                <div className="header-button-container">
                  <button
                    type="button"
                    onClick={() => close()}
                    className="header-logout cancel-button"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    className="header-logout confirm-button"
                    onClick={onLogOut}
                  >
                    Confirm
                  </button>
                </div>
              </div>
            )}
          </Popup>
        </nav>
      );
    }}
  </ContextOptions.Consumer>
);

export default withRouter(Header);
