import React, { useCallback, useEffect, useContext, useState } from "react"
import LastHotel from "../../components/Hotels/LastHotel/LastHotel"
import useStateStorage from "../../components/Hooks/useStateStorage"
import BestHotel from "../../components/Hotels/BestHotel/BestHotel"
import Hotels from "../../components/Hotels/Hotels"
import ReducerContext from "../../context/reducerContext"
import LoadingIcon from "../../components/UI/LoadingIcon"

const backendtHotels = [
	{
		id: 1,
		name: "Willa Rauris by ALPS RESORTS",
		city: "Rauris",
		rating: 8.4,
		description:
			"Obiekt Willa Rauris by ALPS RESORTS, położony w miejscowości Rauris, oferuje restaurację oraz centrum spa i odnowy biologicznej z krytym basenem, centrum fitness i sauną.",
		image: "",
	},
	{
		id: 2,
		name: "Wallackhaus Hotels",
		city: "Unterhauer",
		rating: 9.0,
		description:
			"Obiekt Wallackhaus Hotels położony jest na wysokości 2114 metrów nad poziomem morza w Parku Narodowym Wysokich Taurów, obok stoku narciarskiego Grossglockner/Heiligenblut.",
		image: "",
	},
]

export default function Home(props) {

    const [lastHotel, setLastHotel] = useStateStorage("last-hotel", null)
    const reducer = useContext(ReducerContext)

	const [loading, setLoading] = useState(true)
	const [hotels, setHotels] = useState([])

	const getBestHotel = useCallback(() => {
		if (hotels.length < 2) {
			return null
		} else {
			return hotels.sort((a, b) => (a.rating > b.rating ? -1 : 1))[0]
		}
	})

    const openHotel = (hotel) => {
		setLastHotel(hotel)
	}

	const removeLastHotel = () => {
		setLastHotel(null)
	}

    useEffect(() => {

		setTimeout(() => {
			setHotels(backendtHotels)
			setLoading(false)
		}, 1000)
		console.log("Komponent zamontowano")
	}, [])


	return loading ? <LoadingIcon /> : (
		<>
			{lastHotel ? (
				<LastHotel {...lastHotel} onRemove={removeLastHotel} />
			) : null}
			<BestHotel getHotel={getBestHotel} />
			<Hotels onOpen={openHotel} hotels={hotels} theme={reducer.state.theme} />
		</>
	)
}