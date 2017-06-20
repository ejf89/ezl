import React, { Component } from 'react'
import ezLogo from '../images/EasyLifelogo.png' // relative path to image

class Stamp extends Component {
    render() {
        return (
            <img className="ezLogo" src={ezLogo} alt={"ez"}/>
        )
    }
}

export default Stamp
