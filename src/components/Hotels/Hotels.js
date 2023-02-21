import React, { Component } from "react";
import Hotel from './Hotel/Hotesl'
import "./Hotels.css"


class Hotels extends Component {
    render() {
        return (
            <div className="container">
                <h2 className="title">Oferty:</h2>
                <Hotel />
                <Hotel />
            </div>
        )
    }
}

export default Hotels