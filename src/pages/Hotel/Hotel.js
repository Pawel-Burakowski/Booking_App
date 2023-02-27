import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ReducerContext from "../../context/reducerContext"

function Hotel (props) {
    const { id } = useParams()
    const [hotel, setHotel] = useState({})
    const reducer = useContext(ReducerContext)

    const fetchHotel = () => {
        setHotel({
            id: 2,
            name: "Wallackhaus Hotels",
            city: "Unterhauer",
            rating: 9.0,
            description:
                "Obiekt Wallackhaus Hotels położony jest na wysokości 2114 metrów nad poziomem morza w Parku Narodowym Wysokich Taurów, obok stoku narciarskiego Grossglockner/Heiligenblut.",
            image: ""
        },)
        reducer.dispatch({ type: "set-loading", loading: false })
    }

    useEffect(() => {
        reducer.dispatch({ type: "set-loading", loading: true })
        
        setTimeout(() => {
            fetchHotel()
        },500)
    }, [])

    if (reducer.state.loading) return null

    return (
        <h1>Hotel: {hotel.name}</h1>
    )
}

export default Hotel