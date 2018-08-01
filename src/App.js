import React, { Component } from 'react';
import FetchApi from './Components/FetchApi';
import './App.css';


class App extends Component {
 constructor(props){
    super(props)
    this.state = {
      city:'',
      inputdata:''
  }

}

fetchData = (e) => {
      fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&units=metric&appid=e269b0432cb35577201f06837e2a5803`)
      .then(response => {
        console.log(response)
        return response.json()
  })
      .then(data => {
        console.log(data);
        this.setState({inputdata:data})
        // console.log(this.state.inputdata)   
  })
      .catch(err =>{
        console.error('Fetch error', err)
  });

} 

handleChange = (e) => {
  this.setState({city :e.target.value})
}


handleAdd = (e) => {
e.preventDefault();
  this.fetchData();
}


render() {
  return(
    <div>
      <FetchApi handleChange={this.handleChange}
                handleAdd={this.handleAdd}
                inputdata={this.state.inputdata}  
                city={this.state.city}/>
    </div>

    );
  }
}

export default App;
