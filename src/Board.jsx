import {useState} from "react";
import './Board.css'
import Square from "./Square";

export default function Board(){
    const [boardState,setBoard] = useState([
        ['white','white'],
        ['white','white'],
    ])

    const [counter,setCounter] = useState(0);

    const boardComponent = [];

    for (let i = 0; i < boardState.length; i++) {
        let row = boardState[i];
        for (let j = 0; j < row.length; j++) {
            boardComponent.push(<Square symbol={boardState[i][j]} onClick={(board)=>{
                setBoard(board);
                setCounter(counter+1);
            }} boardState={boardState} x={i} y={j} counter={counter}/>);
        }
    }

    return(
        <div>
            <div class = 'counter'> 
                Count: {counter}
            </div>
            <div id='board'>
                {boardComponent}
            </div>
        </div>
    )

}