import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
// import UserInput from './User/UserInput'
// import UserOutput from './User/UserOutput'
class App extends Component {
state = {
persons : [
{"id":"1","name" : "Kartik","age":11},
{"id":"2","name" : "Achhu","age":10}
],
otherState : "Tst",
showPerson : false
};
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
const style = {
backgroundColor : "green",
color:"white",
font : 'inherit',
border : "1px solid blue",
padding : "8px",
cursor : 'ponter'
}

let persons = null;

if(this.state.showPerson)
{
style.backgroundColor = "red"
persons = (
<div>
  {
    this.state.persons.map((person,index) => {
      return(
        <Person 
name = {person.name}
age = {person.age}
key={person.id}
click = {this.delete.bind(this,index)}
changed = {(event) => {this.nameChangedHandler(event,person.id)}} >
My Hobbies : Gaming
</Person>
      )
      })
  }
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
</div>
);
}
return (
<div className="App">
  <h1>kkkk</h1>
  <button style = {style} onClick={this.toggleHandler.bind(this)}>switch name</button>
  {persons}
  {/* {this.state.showPerson?:null} */}
</div>

);
//return React.createElement('div',{className :'App'},React.createElement('h1',null,'hi!!'));
}

// state = {
//   persons : [
//     {"text1":"HI","text2":"Kartik"}
//   ],
//   otherState : "Tst"
// };
// switchNameHandler = (newName) =>{
//   //console.log("Clicker" + JSON.stringify(this.state));
//   //this.state.persons[0].name = "Kartik Mehra";
//   this.setState(
//     {
//       persons : [
//         {"text1":"HI","text2":"Kartik"}
//       ]
//     })  
//   }
//   nameChangedHandler = (event) =>{
//     this.setState(
//       {
//         persons : [
//           {"text1":event.target.value,"text2":"Kartik"}
//         ]
//       })
//   }
// render() {

//   return (
//     <div className="App" >
//       <UserInput change = {this.nameChangedHandler} text1 = {this.state.persons[0].text1} />
//       <UserOutput 
//       text1 = {this.state.persons[0].text1}
//       text2 = {this.state.persons[0].text2}/>
//     </div>

//   );
//return React.createElement('div',{className :'App'},React.createElement('h1',null,'hi!!'));
//}
}


export default App;
