import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { User, Briefcase, Feather, Smile, Heart, Calendar } from 'react-feather'
import logo from '../../../assets/img/logo.png'


import {HeartButton, NavbarElement, NavbarList, NavbarLogo, CenteredElemtent} from './style'

const Navbar = ({ siteTitle }) => (
  <nav>
    <div className="container">
      <NavbarElement>
          <NavbarLogo>
            <h3>
              <Link to="/">
                <img width="500" height="150" src={logo}/>  
              </Link>
            </h3>
          </NavbarLogo> 
          <div className="main-navigation">
            <NavbarList>
              <li><Link to="/" className="lined-link" activeClassName="active"> <HeartButton> <CenteredElemtent>Home</CenteredElemtent> </HeartButton> </Link></li>
              <li><Link to="/über" className="lined-link" activeClassName="active"> <HeartButton> <CenteredElemtent>Über</CenteredElemtent> </HeartButton> </Link></li> 
              <li><Link to="/kurs" className="lined-link" activeClassName="active"> <HeartButton> <CenteredElemtent>Kurse</CenteredElemtent> </HeartButton> </Link></li> 
              <li><Link to="/kontakt" className="lined-link" activeClassName="active"> <HeartButton> <CenteredElemtent>Kontakt</CenteredElemtent> </HeartButton> </Link></li>  

            </NavbarList>
          </div>
      </NavbarElement>
    </div>
  </nav>
)

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
