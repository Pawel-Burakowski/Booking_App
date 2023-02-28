import { useParams } from "react-router-dom"

export default function Search (props) {

    const { value } = useParams()

    const searchHandler = value => {
		/* console.log("szukaj z app", value)
		const newHotels = [...backendtHotels].filter(x =>
			x.name.toLowerCase().includes(value.toLowerCase())
		) */
	}

    return (
        <div>
           <h1> Wyniki wyszukiwania dla frazy: "{value}"</h1>
        </div>
    )
}