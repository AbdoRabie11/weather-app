import React from "react";
import "./App.css";
import Form from "./component/Form";
import Weather from "./component/Weather";

const API_Key = '5146643f004109bc43ad417602fe5d6d'

class App extends React.Component {
  state = {
    temperature: '',
    city: '',
    country: '',
    humidity: '',
    desc: ''
  }
  getWether = async (e) => {
    e.preventDefault()
    const city = e.target.elements.city.value
    const country = e.target.elements.country.value;
    console.log(city, country);
    const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}%2C${country}&appid=${API_Key}`)
    const data =  await api.json()
    console.log(data);
  this.setState({
    temperature: data.main.temp,
    city: data.city,
    country: data.sys.country,
    humidity:data.main.humidity,
  })
  }
  render() {
    return (
      <div className="App">
      <Form getWether={this.getWether} />
      <Weather  
      temperature={this.state.temperature}
      city= {this.state.city}
      country={this.state.country}
      humidity={this.state.humidity}
      /> 
       </div>
    )
  }
  
}

export default App;
