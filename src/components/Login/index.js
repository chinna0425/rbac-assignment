import { Component } from "react";
import ContextOptions from "../../ContextData";
import MockApiService from "../api/mockApi";
import "./index.css";

class Login extends Component {
  state = {
    username: "",
    password: "",
    errMsg: "",
    showPass: false,
  };

  onChangeUsername = (event) => {
    this.setState({ username: event.target.value, errMsg: "" });
  };

  onChangePassword = (event) => {
    this.setState({ password: event.target.value, errMsg: "" });
  };

  onShowPassword = () => {
    this.setState((prev) => ({ showPass: !prev.showPass }));
  };

  render() {
    const { username, password, errMsg, showPass } = this.state;
    return (
      <ContextOptions.Consumer>
        {(value) => {
          const { loggedUser } = value;

          const onSubmitTheForm = (event) => {
            event.preventDefault();
            const userDetails = { username: username.toLowerCase(), password };

            const isCheckingUser = MockApiService.authenticateUser(userDetails);

            if (!isCheckingUser.isMatch) {
              this.setState({
                errMsg: isCheckingUser.error,
                username: "",
                password: "",
              });
            } else {
              const { history } = this.props;
              this.setState({ errMsg: "", username: "", password: "" });
              loggedUser(isCheckingUser.user);
              history.replace("/");
            }
          };

          return (
            <div className="login-main-container">
              <form className="login-form-container" onSubmit={onSubmitTheForm}>
                <div className="logo-container">
                  <img
                    src="https://res.cloudinary.com/dakxyhuei/image/upload/v1732420268/czcx8tk8r86zozkcr9xt.jpg"
                    alt="logo"
                    className="logo-img"
                  />
                </div>
                <div className="login-input-container">
                  <label htmlFor="username" className="login-label-item">
                    USERNAME
                  </label>
                  <br />
                  <input
                    type="text"
                    id="username"
                    className="login-input-item"
                    placeholder="Username"
                    value={username}
                    onChange={this.onChangeUsername}
                  />
                </div>
                <div className="login-input-container">
                  <label htmlFor="password" className="login-label-item">
                    PASSWORD
                  </label>
                  <br />
                  <input
                    type={showPass ? "text" : "password"}
                    className="login-input-item"
                    id="password"
                    value={password}
                    onChange={this.onChangePassword}
                    placeholder="Password"
                  />
                </div>
                <div className="login-checkbox-container">
                  <input
                    type="checkbox"
                    id="checkbox"
                    onClick={this.onShowPassword}
                    className="login-checkbox-item"
                  />
                  <label htmlFor="checkbox" className="login-checkbox-label">
                    Show Password
                  </label>
                </div>
                {errMsg !== "" ? (
                  <p className="error-message-para">*{errMsg}</p>
                ) : null}
                <div>
                  <button type="submit" className="login-button-style">
                    Login
                  </button>
                </div>
              </form>
            </div>
          );
        }}
      </ContextOptions.Consumer>
    );
  }
}
export default Login;
