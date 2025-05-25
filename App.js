import React, { Component } from 'react'
import Navbar from './Compontes/Navbar';
import News from './Compontes/News';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <News pageSize={5} country="us" category="science"/>
      </div>
    )
  }
}

