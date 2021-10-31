import React from "react"
import "./Square.css"

export default function Square(props){
    let symbol = props.symbol;
    let backgroundColor = 'white';
    if(symbol==='white'){
        backgroundColor = 'whiteBackground';
    }
    else if(symbol==='black'){
        backgroundColor = 'blackBackground';
    }
    return(
        <div id='square' class={backgroundColor} onClick={()=>{
            // if(state='white'){
            //     setState('black');
            // }
            // else if (state = 'black'){
            //     setState('white');
            // }
            const {boardState,onClick,x,y} = props;
            if(boardState[x][y]==='white'){
                boardState[x][y] = 'black';
            }else if(boardState[x][y]==='black'){
                boardState[x][y] = 'white';
            }

            onClick([...boardState]);
        }}>
        </div>
    )
}