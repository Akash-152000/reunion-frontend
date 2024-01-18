import { useCallback, useEffect, useState, useContext } from "react";
import PropertyContext from "./PropertyContext";
import axios from 'axios'
import UserContext from "../User/UserContext";

const PropertyProvider = (props) => {
    const [properties, setProperties] = useState([])
    const context = useContext(UserContext)
    const { user } = context

    const listProperties = useCallback(async () => {
        if (user) {
            const response = await axios.get(`${import.meta.env.VITE_REACT_APP_BACKEND_API}/property`, { withCredentials: true }).then((response) => {
                setProperties(response.data.property)
            }).catch((error) => console.log(error))
        } else {
            const response = await axios.get(`${import.meta.env.VITE_REACT_APP_BACKEND_API}/list-properties`, { withCredentials: true }).then((response) => {
                setProperties(response.data.properties)
            }).catch((error) => console.log(error))
        }

    })

    useEffect(() => {
        listProperties();
    }, [user])

    return (
        <PropertyContext.Provider value={{ properties }}>
            {props.children}
        </PropertyContext.Provider>
    )
}

export default PropertyProvider;