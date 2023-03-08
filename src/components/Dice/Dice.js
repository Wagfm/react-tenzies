import React from "react";

import "./Dice.css"

function Dice(props) {
    const { id, value, isFrozen } = props.data;
    return (
        <div
            className={`dice-container ${isFrozen ? "frozen-dice" : "neutral-dice"}`}
            onClick={() => props.handleClick(id)}
        >
            <h4 className="dice-text">{value}</h4>
        </div>
    )
}

export default Dice;