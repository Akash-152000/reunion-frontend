import axios from "axios";
import UserContext from "./UserContext";
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


const UserProvider = (props) => {
  const backendUrl = import.meta.env.VITE_REACT_APP_BACKEND_API
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState('')
  const navigate = useNavigate()

  const signup = async ({ name, address, email, phone, password }, isOwner) => {
    try {
      let response;

      if (isOwner) {
        response = await axios.post(`${backendUrl}/signup`, {
          name,
          address,
          email,
          phone,
          password,
          role: "owner",
        });
      } else {
        response = await axios.post(`${backendUrl}/signup`, {
          name,
          address,
          email,
          phone,
          password,
          role: "user",
        });
      }

      if (response.data.success) {
        Cookies.set('token', response.data.token);
        setIsLoggedIn(true);
        setUser(response.data);
        navigate('/');
      } else {
        // Handle unsuccessful signup, e.g., show an error message
        console.log('Signup failed:', response.data.message);
      }
    } catch (error) {
      // Handle any unexpected errors
      console.error('An error occurred during signup:', error);
    }
  };

  const login = async ({ email, password }) => {
    const response = await axios.post(`${backendUrl}/login`, {
      email, password
    }).then((data) => {
      if (data.data.success) {
        Cookies.set('token', data.data.token)
        setUser(data.data)
        navigate('/')
        setIsLoggedIn(true)
      }
    })
      .catch((error) => {
        console.log(error);
      });
  };

  const logout = async () => {
    const response = await axios.get(`${backendUrl}/logout`).then((data) => {
      setUser('')
      Cookies.remove('token');
      setIsLoggedIn(false)
      navigate('/')
    })
      .catch((error) => {
        console.log(error);
      })
  }

  const myProfile = async () => {
    const response = await axios.get(`${backendUrl}/myprofile`, { withCredentials: true }).then((data) => {
      if (data.data.success) {
        setUser(data.data)
        setIsLoggedIn(true)
      }
    })
      .catch((error) => {
        console.log(error);
        setIsLoggedIn(false)
      });
  }

  const updateUser = async ({ name = '', phone = '', email = '', address = '' }) => {

    const payload = {};
    if (name) payload.name = name;
    if (phone) payload.phone = phone;
    if (email) payload.email = email;
    if (address) payload.address = address;
    
    const response = await axios.post(`${backendUrl}/updateuser`, {
      payload
    }, { withCredentials: true }).then((data) => {
      setUser(data.data)
    }).catch((error) => {
      console.log(error);
    })
  }

  useEffect(() => {
    if (Cookies.get('token')) {
      myProfile()
    }


  }, [isLoggedIn])

  return (
    <UserContext.Provider value={{ signup, login, user, logout, isLoggedIn, updateUser }}>{props.children}</UserContext.Provider>
  );
};

export default UserProvider;