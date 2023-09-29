import axios from "axios";
import UserContext from "./UserContext";
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";
import { useState } from "react";


const UserProvider = (props) => {
  const backendUrl = import.meta.env.VITE_REACT_APP_BACKEND_API
  const [token, setToken] = useState('')
  const navigate = useNavigate()

  const signup = async ({ name, email, password, isOwner }) => {
    if (isOwner) {
      const response = await axios.post(
        `${backendUrl}/signup`,
        {
          name,
          email,
          password,
          role: "owner",
        }
      ).catch((error) => {
        console.log(error);
      });
      if(response.data.success){
        setToken(response.date.token)
        navigate('/')
      }
    }
  };

  const login = async ({ email, password }) => {
    const response = await axios.post(`${backendUrl}/login`, {
      email, password
    }).catch((error) => {
      console.log(error);
    });
    if(response.data.success){
      setToken(response.data.token)
      navigate('/')
    }
  };

  const logout = async()=>{
    console.log("entry");
    const response = await axios.get(`${backendUrl}/logout`).then((data)=>{
      console.log("logged out");
      setToken('')
    })
    .catch((error)=>{
      console.log(error);
    })
  }

  return (
    <UserContext.Provider value={{ signup, login, token, logout }}>{props.children}</UserContext.Provider>
  );
};

export default UserProvider;