import './App.css';
import React, { Component } from 'react'

class App extends Component {

  state = {
    userInput: [''],
    savedNumbers: [],
    value: ""
  }
  save = () => {
    this.setState({
      userInput: 0
    })

  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
  
  handleSubmit(event) {

    this.setState({savedNumbers: [...this.state.savedNumbers, this.state.value] });
    event.preventDefault();
  }


  handleSubmit = this.handleSubmit.bind(this);
  handleChange = this.handleChange.bind(this);



  render() {
    // let allSaved = [...this.state.savedNumbers]
    const numbers = this.state.savedNumbers.map( number => {
      return <h3>{number}</h3>
    })
    console.log(this.state.value);
    return (
      <div>
        <div>
          <label>
            Phone Number:
          <input type="number" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" onClick={this.handleSubmit}/>
         </div>
        {numbers}
      </div>
    )
  }
}


export default App;
