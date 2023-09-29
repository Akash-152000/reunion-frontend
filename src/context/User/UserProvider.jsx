import axios from "axios";
import UserContext from "./UserContext";

const UserProvider = (props) => {
  const signup = async ({ name, email, password, isOwner }) => {
    if (isOwner) {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_API}`,
        {
          name,
          email,
          password,
          role: "owner",
        }
      ).catch((error)=>{
        console.log(error);
      });
      console.log(response)
    }
  };

  const login = async () => {};

  return (
    <UserContext.Provider value={{signup}}>{props.children}</UserContext.Provider>
  );
};

export default UserProvider;