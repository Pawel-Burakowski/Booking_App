import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ReducerContext from "../../context/reducerContext"
import LoadingIcon from "../../components/UI/LoadingIcon"

function Hotel (props) {
    const { id } = useParams()
    const [hotel, setHotel] = useState(null)
    const reducer = useContext(ReducerContext)

    const [loading, setLoading] = useState(true)

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
        setLoading(false)
    }

    useEffect(() => {
        
        setTimeout(() => {
            fetchHotel()
        },500)
    }, [])

    return loading ? <LoadingIcon /> : (
        <h1>Hotel: {hotel.name}</h1>
    )
}

export default Hotel