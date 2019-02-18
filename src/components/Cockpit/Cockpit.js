import React from 'react'
import classes from './Cockpit.css'

const cockpit = (props) => {
    const assignedClasses = [];
if( props.persons.length <= 2 ){
  assignedClasses.push(classes.red);
}
if(props.persons.length <= 1){
  assignedClasses.push( classes.bold );
}

let btnClass = "";

if(props.showPerson)
{
    btnClass = classes.Red; 
}
    return (
        <div>
        <h1>{props.title}</h1>
  <p className = {assignedClasses.join( ' ' )}>This is realy working.</p>
  <button className = {btnClass}  onClick={props.toggle.bind(this)}>switch name</button>
  
  </div>
    )
}
export default cockpit;