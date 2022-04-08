import logo from "./assets/vortex-logo(Vortex).png"
import dp from "./assets/DisplayPictureAlt.png"
import { NavLink } from "react-router-dom"

const NavBar = () => {
  var name = "Guest"
  return (
    <div className='navbar'>
      <div className='navbar-logo'>
        <img src={logo} alt='website_logo' id='navbar-complogo' />
      </div>
      <div className='navbar-links'>
        <NavLink activeStyle={{ color: "#b3bafb" }} to='/homepage'>
          <p>HOME</p>
        </NavLink>
        <NavLink activeStyle={{ color: "#b3bafb" }} to='/exchange'>
          <p>EXCHANGE</p>
        </NavLink>
        <NavLink exact activeStyle={{ color: "#b3bafb" }} to='/'>
          <p>PORTFOLIO</p>
        </NavLink>
        <NavLink activeStyle={{ color: "#b3bafb" }} to='/learn'>
          <p>LEARN</p>
        </NavLink>
        <NavLink activeStyle={{ color: "#b3bafb" }} to='/login'>
          <p>LOGIN</p>
        </NavLink>
      </div>
      <div className='navbar-profileinfo'>
        <p>{name}</p>
        <div id='navbar-dp'>
          <img src={dp} alt='' />
        </div>
      </div>
    </div>
  )
}

export default NavBar
