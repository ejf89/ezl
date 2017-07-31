import React, { Component } from 'react'
import { withRouter} from 'react-router-dom'
import Stamp from './Stamp'

class Home extends Component {
  // constructor(){
  //   super()
  // }



  render(){
    return(
      <div className="">

        <div id="dropDiv" className="row">
          <h1 id="ezTitle">EASY LIFE</h1>
        </div>
          <Stamp className="img-fluid" />

        <div className="row" id="picCol">
          <div className="col-md-1">
          </div>
          <div className="col-md-5 card">
            <div className="card-block">
                <h4 className="card-title">Cold Specks</h4>
                  <a href="http://coldspecks.com/"><img id="laden" src={require('../images/ColdSpeck_sm.jpg')} alt="laden" /></a>
              </div>
          </div>

          <div className="col-md-5 card">
            <div className="card-block">
              <h4 className="card-title">LA Timpa</h4>
                <img id="" src={require('../images/timpa_good.jpg')} alt="timpa" />
            </div>
          </div>

          <div className="col-md-1">
          </div>
        </div>

        <div className="row" >
          <div className="col-md-12" id="contact">
            <h3>info@itsaneasylife.com</h3>
          </div>
        </div>



      </div>
    )
  }
}

export default withRouter(Home)
