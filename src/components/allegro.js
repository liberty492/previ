import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faUserFriends} from '@fortawesome/free-solid-svg-icons'
export default function allegro() {
    return (
        <div className="container">
            <h1>Good News</h1>
            <small> hjkhdk fdkjfkjhjfhdkjfhhfjkhdfjkdhf fhdkfjhdfkj kjhdfkjdh dfkjhkdh dhfk</small>
            <div className="container p-5 " style={{display: 'content-end',content:'center'}}>
              <div className="container justify-content-center" style={{alignContent:'end'}}>
              <center>
              <img src="/images/image_1.jpg"  style={{height:'20px',width:'30px',paddingRight:'10px',fontStyle:'oblique',alignContent:'center'}}/>
              <small>Allegro Credit</small>
              </center>
              <div>
                  <h6>You Have been Approved For Financing</h6>
              </div>
              <div>
              <FontAwesomeIcon icon={faUserFriends} style={{}}/><small>You Have been Approved For Financing</small>
              </div>
              <div>
                  <h6>You Have been Approved For Financing</h6>
              </div>
              </div>
            </div>
            
        </div>
    )
}
