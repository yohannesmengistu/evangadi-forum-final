import React from 'react'
import logo from "../Images/evangadi-logo-footer.png"

import "./Footer.css"


function Footer() {
  return (
    <div className="footer ">
      <div className="container some row">
        <div className="footer_logo tp col-sm-12 col-md-4">
          <img src={logo} />
          <div className="row ic">
            <a className="col" href="https://www.facebook.com/evangaditech">
              <i className="fab fa-facebook"></i>
            </a>
            <a className="col" href="https://www.youtube.com/c/weareethiopians">
              <i className="fab fa-youtube"></i>
      
            </a>
            <a className="col" href="https://www.instagram.com/evangaditech/">
              <i className="fab fa-instagram" />
        
            </a>
         
          </div>
        </div>
        <div className="col-sm-12 col-md-4 tp">
          <h5 className="title">Useful Link</h5>
          <ul className="st">
            <li>
              <a href="https://www.evangadi.com/explained">How it Works</a>
            </li>
            <li>
              <a href="https://www.evangadi.com/legal/terms/">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="https://www.evangadi.com/legal/privacy/">
                Privacy policy
              </a>
            </li>
          </ul>
        </div>
        <div className="col-sm-12 col-md-4 tp ">
          <h5 className="title">Contact Info</h5>
          <ul className="net">
            <li>Evangadi Networks</li>
            <li>support@evangadi.com</li>
            <li>+1-202-386-2702</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer