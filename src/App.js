import React from 'react';

import Titles from './Components/Titles'
import Form from './Components/Form'
import Whether from './Components/Whether'

const API_KEY = 'b30fb5770d4f0d4439e7b28f1c815bcb';

class App extends React.Component
{
  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    desc: undefined,
    error: undefined
 
  }
  getWhether = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const whetherData = await api_call.json();
    if( city && country)
    {
    this.setState ({
      temp: whetherData.main.temp,
      city: whetherData.name,
      country: whetherData.sys.country,
      humidity: whetherData.main.humidity,
      desc: whetherData.weather[0].description,
      error: ""

    })
  }else
  {
    this.setState ({
      temp:undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      desc: undefined,
      error:"Please enter the value"

    })
  }

  }
  render(){
    return( 
    <div>
      <Titles />
      <Form getWhether={this.getWhether.bind()}/>
      <Whether 
      temp = {this.state.temp}
      city =  {this.state.city}
      country =  {this.state.country}
      desc =  {this.state.desc}
      humidity =  {this.state.humidity}
      error = {this.state.error}
       />
    </div>

  );
}
}
export default App;



