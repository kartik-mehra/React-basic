import React from 'react';
const style = {
    backgroundColor : "red",
    border : "1px solid blue",
    padding : "8px",
    
  }
const userInput = (props) =>{
    return (
        <div style = {style}>
            <p>
                {props.text1}
            </p>
            <p>
                {props.text2}
            </p>
        </div>
    )
}

export default userInput;