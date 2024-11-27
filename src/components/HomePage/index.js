import { Component } from "react";
import { Link } from "react-router-dom";
import ContextOptions from "../../ContextData";
import Header from "../Header";
import "./index.css";

class Home extends Component {
  render() {
    return (
      <ContextOptions.Consumer>
        {(value) => {
          const { loggedData } = value;

          return (
            <div className="header-container">
              <Header />
              <div className="header-align-container">
                <div className="header-inner-container">
                  <div className="header-text-container">
                    <h1 className="header-title actions">
                      Hello {loggedData.role}
                    </h1>
                    {loggedData.role === "Admin" && (
                      <div className="header-description">
                        <p className="home-para">Hey There,</p>
                        <p className="home-para">
                          As an Admin You Can Perform Operations Like :-
                        </p>
                        <ol>
                          <li>
                            <strong className="actions">Add Users :</strong>{" "}
                            Create new users with a name, role, and status.
                          </li>
                          <li>
                            <strong className="actions">Edit Users :</strong>{" "}
                            Modify user details like status or role.
                          </li>
                          <li>
                            <strong className="actions">Delete Users :</strong>{" "}
                            Remove users from the system.
                          </li>
                        </ol>
                      </div>
                    )}
                    {loggedData.role === "Editor" && (
                      <div className="header-description">
                        <p className="home-para">Hey There,</p>
                        <p className="home-para">
                          As an Editor You Can Perform Operations Like :-
                        </p>
                        <ol>
                          <li>
                            <strong className="actions">Edit Articles :</strong>{" "}
                            Modify description of articles only.
                          </li>
                        </ol>
                      </div>
                    )}
                    {loggedData.role === "User" && (
                      <div className="header-description">
                        <p className="home-para">Hey There,</p>
                        <p className="home-para">
                          As an User You Can See Only the Information.
                        </p>
                      </div>
                    )}
                    <Link to={`${loggedData.username}`} className="link-style">
                      <button type="button" className="header-button">
                        {loggedData.role}
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ContextOptions.Consumer>
    );
  }
}
export default Home;
