import React from 'react';

const charComp = (props) =>{
    return (
        <div onClick = {props.click} style = {{display: "inline-block", padding: "16px", textalign: "center", margin: "16px", border: "1px solid black"}}>
            <p > {props.char}</p>
        </div>
    )
}

export default charComp;