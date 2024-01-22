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
            }
        }
        const response = await axios.get(`${import.meta.env.VITE_REACT_APP_BACKEND_API}/list-properties`, { withCredentials: true }).then((response) => {
            setProperties(response.data.properties)
        }).catch((error) => console.log(error))




    })

    const getProperty = useCallback(async (id) => {
        const response = axios.get(`${import.meta.env.VITE_REACT_APP_BACKEND_API}/property/${id}`, { withCredentials: true })
            .then((data) => {
                setSingleProperty(data.data.property)
            }).catch((error) => {
                console.log(error);
            })
    })

    const updateProperty = useCallback(async (id, credentials) => {
        const { propertyName, propertyDescription, availableFrom, propertyType, rooms, toilets, area, category, price, address, city, state, nearbyHospital, nearbySchool, nearbyBusStation, nearByRailwayStation } = credentials

        let payload = {}

        if (propertyName) payload.propertyName = propertyName
        if (propertyDescription) payload.propertyDescription = propertyDescription
        if (availableFrom) payload.availableFrom = availableFrom
        if (propertyType) payload.propertyType = propertyType
        if (rooms) payload.rooms = rooms
        if (toilets) payload.toilets = toilets
        if (area) payload.area = area
        if (category) payload.category = category
        if (price) payload.price = price

        if (address) payload.address = address
        if (city) payload.city = city
        if (state) payload.state = state

        if (nearbyHospital) payload.nearbyHospital = nearbyHospital
        if (nearbySchool) payload.nearbySchool = nearbySchool
        if (nearbyBusStation) payload.nearbyBusStation = nearbyBusStation
        if (nearByRailwayStation) payload.nearByRailwayStation = nearByRailwayStation

        const response = axios.put(`${import.meta.env.VITE_REACT_APP_BACKEND_API}/property/${id}`, payload, { withCredentials: true })
            .then((data) => {
                setSingleProperty(data.data.property)
            })
            .catch((error) => [
                console.log(error)
            ])
    })

    useEffect(() => {
        listProperties();
    }, [user, singleProperty])

    return (
        <PropertyContext.Provider value={{ properties, getProperty, singleProperty, updateProperty }}>
            {props.children}
        </PropertyContext.Provider>
    )
}

export default PropertyProvider;