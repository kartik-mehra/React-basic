import React, { Component } from 'react';
import './App.css';
import Validate from './Validate/Validate'
import CharComponent from './CharComponent/CharComponent'
class App extends Component {
state = {
    "text" : "Kartik"
}
changer = (event)=>{
    const temp = {...this.state};
    temp.text = event.target.value;
    this.setState(temp);
}
deleter = (index) =>{
    let temp = this.state.text.substring(0,index) + this.state.text.substring(index+1);
    this.setState({
        text:temp
    })
}

render() {
const char = this.state.text.split("");
let list = char.map((char,index) => {
    return (
        <CharComponent click = {this.deleter.bind(this,index)} char = {char}></CharComponent>
    )
}) 
const style = {
backgroundColor : "white",
font : 'inherit',
border : "1px solid blue",
padding : "8px",
cursor : 'ponter',
margin : "2%"
}

return (
<div className="App">
<input style = {style} onChange = {this.changer} type="text" value ={this.state.text}></input>
<p>{this.state.text.length}</p>
<Validate len ={this.state.text.length}/>
{list}
</div>
//event => {this.changer(event)}
);

}
}


export default App;
