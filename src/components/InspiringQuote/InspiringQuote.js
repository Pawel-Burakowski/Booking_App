import { useEffect, useState, useLayoutEffect } from "react"
import "./InspiringQuote.css"


const quotes = [
    "„Nie odkładaj marzeń, odkładaj na marzenia.” - autor nieznany",
    "„Ten kto żyje widzi dużo, ten kto podróżuje widzi więcej”",
    "„Podróże to jedyna rzecz na którą wydajemy pieniądze, a stajemy się bogatsi.” - autor nieznany",
    "„Gdy raz połknie się podróżniczego bakcyla, to nie ma lekarstwa. Wiem, że będę szczęśliwie chory do końca moich dni.” - Michael Palin",
    "„Raz do roku pojedź w miejsce, w którym jeszcze nie byłeś.” - Dalajlama",
    "„Turyści nie wiedzą gdzie byli, podróżnicy nie wiedzą gdzie będą.” - Paul Theroux"
]

function InspiringQuote(props) {

    const [quote, setQuote] = useState("Wczytywanie cytatu...")
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(false)
    }, [])

    useLayoutEffect(() => {
        setQuote(quotes[Math.floor(Math.random() * quotes.length)])
    }, [loading])

    return (
        <p className="quote">{quote}</p>
    )
}

export default InspiringQuote