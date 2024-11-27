import { Component } from "react";

import { Route, Switch, Redirect } from "react-router-dom";
import LoginPage from "./components/Login";
import ContextOptions from "./ContextData";
import Home from "./components/HomePage";
import AdminDashboard from "./components/AdminDashboard";
import EditorDashboard from "./components/EditorDashboard";
import UserDashboard from "./components/UserDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import NotFound from "./components/NotFound";

class App extends Component {
  state = { loggedData: {} };

  onLoggedUserData = (user) => {
    this.setState({ loggedData: user });
  };

  render() {
    const { loggedData } = this.state;
    console.log("app", loggedData);
    return (
      <ContextOptions.Provider
        value={{
          loggedData,
          loggedUser: this.onLoggedUserData,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/admin" component={AdminDashboard} />
          <ProtectedRoute exact path="/editor" component={EditorDashboard} />
          <ProtectedRoute exact path="/user" component={UserDashboard} />
          <ProtectedRoute exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </ContextOptions.Provider>
    );
  }
}

export default App;
