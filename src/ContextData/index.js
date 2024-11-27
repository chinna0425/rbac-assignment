import React from "react";

const ContextOptions = React.createContext({
  loggedData: {},
  loggedUser: () => {},
});
export default ContextOptions;
