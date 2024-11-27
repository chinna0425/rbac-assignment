import { Redirect, Route } from "react-router-dom";
import ContextOptions from "../../ContextData";

const ProtectedRoute = (props) => (
  <ContextOptions.Consumer>
    {(value) => {
      const { loggedData } = value;
      if (!Object.keys(loggedData).length) {
        return <Redirect to="/login" />;
      }
      return <Route {...props} />;
    }}
  </ContextOptions.Consumer>
);
export default ProtectedRoute;
