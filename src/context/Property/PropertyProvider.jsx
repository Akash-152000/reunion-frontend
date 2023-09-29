import { useCallback, useEffect, useState } from "react";
import PropertyContext from "./PropertyContext";
import axios from 'axios'

const PropertyProvider = (props) => {
    const [properties, setProperties] = useState([])

    const listProperties = useCallback(async()=>{
        const response = await axios.get(`${import.meta.env.VITE_REACT_APP_BACKEND_API}/list-properties`).then((response) => {
            setProperties(response.data.properties)
        }).catch((error) => console.log(error))
    })

    useEffect(()=>{
        listProperties();
    },[])

    return (
        <PropertyContext.Provider value={{properties}}>
            {props.children}
        </PropertyContext.Provider>
    )
}

export default PropertyProvider;