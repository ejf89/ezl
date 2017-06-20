import React, { Component } from 'react'
// import {Route} from 'react-router-dom'
import NavBar from './NavBar'
import Stamp from './Stamp'

export default class Main extends Component {
  constructor(){
    super()

  }



  render(){
    return(
      <div className="container-fluid">

        <NavBar title="EasyLife" style="" />

        <div className="row">
          <h1 id="ezTitle">EASY LIFE</h1>
        </div>
          <Stamp className="img-fluid" />
      </div>

    )
  }
}
