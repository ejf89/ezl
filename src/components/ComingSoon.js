import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ezLogo from '../images/EasyLifelogo.png' // relative path to image
// import { Glyphicon } from 'react-bootstrap'


class ComingSoon extends Component {
    render() {
        return (
          <div id="comeSoon">
            <h1 > COMING SOON </h1>
            <img className="ezLogo" id="soonLogo" src={ezLogo} alt={"ez"}/>
            <div>
            <Link  id="soonBack" className="nav-link" to="/"> Back</Link>
            </div>


          </div>
        )
    }
}

export default ComingSoon
