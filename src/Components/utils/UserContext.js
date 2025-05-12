const { createContext } = require("react");

const UserContext = createContext(
    {
        loggedInUser: ''
    }
);
export default UserContext;