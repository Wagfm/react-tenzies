import React from "react";
import Confetti from "react-confetti"

import { v4 as uuidv4 } from "uuid";

import Dice from "../components/Dice/Dice"

import "./App.css"

function App() {

    const generateNewDices = function () {
        const initialDices = [];
        for (let i = 0; i < 10; i++)
            initialDices.push({
                id: uuidv4(),
                value: Math.ceil(Math.random() * 6),
                isFrozen: false
            });
        return initialDices;
    }

    const [dices, setDices] = React.useState(generateNewDices());

    const [isOver, setIsOver] = React.useState(false);

    React.useEffect(() => {
        const allFrozen = dices.every(dice => dice.isFrozen);
        const referenceValue = dices[0].value;
        const allEqual = dices.every(dice => dice.value === referenceValue);
        if (allFrozen && allEqual)
            setIsOver(true);
        else
            setIsOver(false);
    }, [dices]);

    const rollDices = function () {
        if (!isOver) {
            setDices(previousDices => {
                return previousDices.map(dice => dice.isFrozen ? dice : { ...dice, value: Math.ceil(Math.random() * 6) })
            })
            return;
        }
        setIsOver(false);
        setDices(() => generateNewDices());
    }

    const freezeDice = function (id) {
        setDices(previousDices => {
            return previousDices.map(dice => dice.id === id ? { ...dice, isFrozen: !dice.isFrozen } : dice);
        })
    }

    const diceElements = dices.map(dice => (
        <Dice
            key={dice.id}
            data={dice}
            handleClick={freezeDice}
        />
    ));

    return (
        <main id="main-container">
            {isOver && <Confetti />}
            <section id="tenzies-container">
                <h2 id="title">Tenzies</h2>
                <h4 id="hint">Roll until all dices are the same. Click each dice to freeze it at its current value between rolls.</h4>
                <div id="dices-container">
                    {diceElements}
                </div>
                <button
                    id="roll-button"
                    onClick={rollDices}
                >
                    {isOver ? "New Game" : "Roll"}
                </button>
            </section>
        </main>
    )
}


export default App;