import React, { useCallback, useEffect, useContext } from "react"
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

	const getBestHotel = useCallback(() => {
		if (reducer.state.hotels.length < 2) {
			return null
		} else {
			return reducer.state.hotels.sort((a, b) => (a.rating > b.rating ? -1 : 1))[0]
		}
	})

    const openHotel = (hotel) => {
		setLastHotel(hotel)
	}

	const removeLastHotel = () => {
		setLastHotel(null)
	}

    useEffect(() => {
		reducer.dispatch({ type: "set-loading", loading: true })
		setTimeout(() => {
			reducer.dispatch({ type: "set-hotels", hotels: backendtHotels })
			reducer.dispatch({ type: "set-loading", loading: false })
		}, 1000)
		console.log("Komponent zamontowano")
	}, [])

	if (reducer.state.loading) return null

	return (
		<>
			{lastHotel ? (
				<LastHotel {...lastHotel} onRemove={removeLastHotel} />
			) : null}
			<BestHotel getHotel={getBestHotel} />
			<Hotels onOpen={openHotel} hotels={reducer.state.hotels} theme={reducer.state.theme} />
		</>
	)
}