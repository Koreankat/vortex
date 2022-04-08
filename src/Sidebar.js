import sidebarImage from "./assets/SidebarImage2.png"
import dpalt from "./assets/DisplayPictureAlt.png"
import logo from "./assets/vortex.coin.png"

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

const Sidebar = ({ balance }) => {
  return (
    <div className='sidebar'>
      <div className='portfolio-info'>
        <div className='useless-space' style={{ height: "10vh" }}></div>
        <div className='portfolio'>
          <div className='portfolio-log'>
            <img src={dpalt} alt='' />
          </div>
          <div className='portfolio-text'>
            <div className='portfolio-text-up'>My Portfolio</div>
            <div className='portfolio-text-down'>
              <b className='solde'>0</b>
              <img
                src={logo}
                alt='vortexium'
                align='absbottom'
                style={{ height: "25px", position: "relative", right: "5px" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className='sidebar-img'>
        <img src={sidebarImage} alt='' />
      </div>
    </div>
  )
}

export default Sidebar
