 import React, {Component} from 'react'
 import Person from './Person/Person'

class Persons extends Component {
    static getDerivedStateFromProps(props,state)
    {
        console.log("[Persons.js] getDerivedStateFromProps")
        return state;
    }

    shouldComponentUpdate(nextProps,nextState)
    {
        console.log("[Persons.js] shouldComponentUpdate")
        return true;
    }


    componentDidUpdate(){
        console.log("[Persons.js] componentDidUpdate");
    }

    render(){
        console.log("[Persons.js] rendering...");
     return (
        this.props.persons.map((person,index) => {
            return(
              <Person 
      name = {person.name}
      age = {person.age}
      key={person.id}
      click = {this.props.clicked.bind(this,index)}
      changed = {(event) => {this.props.changed(event,person.id)}} >
      My Hobbies : Gaming
      </Person>
            )
            })
     )
    }
     
 }
     
 
export default Persons;