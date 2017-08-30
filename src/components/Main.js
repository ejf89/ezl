import React, { Component } from 'react'
import {Switch, Route, withRouter} from 'react-router-dom'

import NavBar from './NavBar'
import ComingSoon from './ComingSoon'
import Home from './Home'



class Main extends Component {

  render(){
    return(
      <div className="container-fluid">
        <NavBar title="EasyLife"  />

      <Switch >
        <Route exact path='/' render={() => <Home />} />
        <Route path='/studio' component={() => window.location = 'https://www.instagram.com/easy_life_studio/'}/>
        <Route path='/label' render={() => <ComingSoon />}/>
        <Route path='/producers' render={() => <ComingSoon />}/>
        <Route path='/info' render={() => <ComingSoon />}/>
        <Route path='/management' render={() => <ComingSoon />}/>

      </Switch>
      </div>
    )
  }
}

export default withRouter(Main)
