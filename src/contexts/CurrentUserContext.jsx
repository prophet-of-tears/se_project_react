import React from "react";

const CurrentUserContext = React.createContext({
  email: "",
  password: "",
  avatar: "",
  name: "",
});

export { CurrentUserContext };
