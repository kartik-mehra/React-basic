import React from 'react';
import './Validate.css'
const validate = (props) => {
let text = null;
if(props.len<5)
{
    text = "Too short";
}
else if (props.len>10){
    text = "Too long";
}
else{
    text = "Perfect";
}
return (
    <div className = "Person">
        <p >{text}</p>
        
    </div>

)};
export default validate;