import { useCallback, useEffect, useState, useContext } from "react";
import PropertyContext from "./PropertyContext";
import axios from 'axios'
import UserContext from "../User/UserContext";

const PropertyProvider = (props) => {
    const [properties, setProperties] = useState([])
    const [singleProperty, setSingleProperty] = useState('')
    const context = useContext(UserContext)
    const { user } = context

    const listProperties = useCallback(async () => {
        if (user) {
            if (user.user.role === 'owner') {
                const response = await axios.get(`${import.meta.env.VITE_REACT_APP_BACKEND_API}/property`, { withCredentials: true }).then((response) => {
                    setProperties(response.data.property)
                }).catch((error) => console.log(error))
            } else {
                const response = await axios.get(`${import.meta.env.VITE_REACT_APP_BACKEND_API}/list-properties`, { withCredentials: true }).then((response) => {
                    setProperties(response.data.properties)
                }).catch((error) => console.log(error))
            }
        }


    })

    const getProperty = useCallback(async(id)=>{
        const response = axios.get(`${import.meta.env.VITE_REACT_APP_BACKEND_API}/property/${id}`,{withCredentials:true})
        .then((data)=>{
            setSingleProperty(data.data.property)
        }).catch((error)=>{
            console.log(error);
        })
    })

    useEffect(() => {
        listProperties();
    }, [user])

    return (
        <PropertyContext.Provider value={{ properties, getProperty, singleProperty }}>
            {props.children}
        </PropertyContext.Provider>
    )
}

export default PropertyProvider;