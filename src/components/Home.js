import React, { Component } from 'react'
import { withRouter} from 'react-router-dom'
import Stamp from './Stamp'

class Home extends Component {


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
                  <a href="http://coldspecks.com/">
                    <img id="laden" src={require('../images/LADAN-PRESS.jpg')} alt="laden" />
                  </a>
              </div>
          </div>

          <div className="col-md-5 card">
            <div className="card-block">
              <h4 className="card-title">LA Timpa</h4>
              <a href="http://asklatimpa.com">
                <img id="timpa" src={require('../images/TIMPA-PRESScrop.jpg')} alt="timpa" />
              </a>
            </div>
          </div>

          <div className="col-md-1">
          </div>
        </div>


          <a href="mailto:info@itsaneasylife.com" > <h3 id="contact">info@itsaneasylife.com</h3> </a>



      </div>
    )
  }
}

export default withRouter(Home)
