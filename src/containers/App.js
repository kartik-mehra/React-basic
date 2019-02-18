import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'
// import UserInput from './User/UserInput'
// import UserOutput from './User/UserOutput'
class App extends Component {

  constructor(props){
    super(props);
    console.log("[App.js] constructor");
    this.state = {
      persons : [
      {"id":"1","name" : "Kartik","age":11},
      {"id":"2","name" : "Achhu","age":10},
      {"id": "4","name" : "Kartik","age":11},
      {"id":"3","name" : "Achhu","age":10}
      ],
      otherState : "Tst",
      showPerson : false
      }
      
  }
  static getDerivedStateFromProps(props,state){
    console.log("[App.js] getDerivedStateFromProps",props)
    return state;
  }

  componentDidMount(){
    console.log("[App.js] componentDidMount");
  }
// state = {
// persons : [
// {"id":"1","name" : "Kartik","age":11},
// {"id":"2","name" : "Achhu","age":10},
// {"id": "4","name" : "Kartik","age":11},
// {"id":"3","name" : "Achhu","age":10}
// ],
// otherState : "Tst",
// showPerson : false
// };
delete = (i)=>{
  const per = [...this.state.persons];//to create a copy
  per.splice(i,1);
  this.setState({persons:per});
}
nameChangedHandler = (event,id) =>{
  const personID = this.state.persons.findIndex(person1=> person1.id===id);
  const person = {
    ...this.state.persons[personID]
  };
  person.name = event.target.value;

  const persons  = [...this.state.persons];
  console.log(persons)
  persons[personID] = person;
this.setState(
  {
    persons : persons
  })
}
toggleHandler = () => {
this.setState(
  {
    showPerson : !this.state.showPerson
  })
}
render() {
  console.log("[App.js] render");
// const style = {
// backgroundColor : "green",
// color:"white",
// font : 'inherit',
// border : "1px solid blue",
// padding : "8px",
// cursor : 'ponter'
// }

let persons = null;



if(this.state.showPerson)
{
  
//style.backgroundColor = "red"
persons = <div>
  <Persons 
  persons = {this.state.persons}
  clicked = {this.delete} 
  changed = {this.nameChangedHandler}/>
{/* <Person 
name = {this.state.persons[0].name}
age = {this.state.persons[0].age} />
<Person 
name = {this.state.persons[1].name}
age = {this.state.persons[1].age}
click = {this.switchNameHandler.bind(this,"Kartik")}
changed = {this.nameChangedHandler} >
My Hobbies : Gaming
</Person> */}
</div>;

}

return (
<div className={classes.App}>
<Cockpit 
title = {this.props.title}
toggle = {this.toggleHandler}
showPerson = {this.state.showPerson}
persons = {
  this.state.persons}/>
{persons}
  {/* {this.state.showPerson?:null} */}
</div>

);
//return React.createElement('div',{className :'App'},React.createElement('h1',null,'hi!!'));
}
}


export default App;
