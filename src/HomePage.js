import logo from "./assets/vortex.coin.png"
import bank from "./assets/bank.png"
import account from "./assets/account.png"
import buy from "./assets/buy.png"
import { Link, NavLink } from "react-router-dom"

const HomePage = () => {
  return (
    <div className='homepage'>
      <div className='sec1'>
        <div className='sec1-left'>
          <img src={logo} alt=' ' class='logo' />
        </div>
        <div className='sec1-right'>
          <div className='sec1-heading'>
            Kickstart Your Crypto Journey with Vortexium
          </div>
          <br></br>
          <div className='sec1-para'>
            be one of the first to benefit from the prestige of holding the
            VORTEXIUM and get 20% from staking !
          </div>
          <br></br>

          <NavLink to='/login' className='sec1-button'>
            {" "}
            Register/Login
          </NavLink>
        </div>
      </div>
      <div className='sec2'>
        <div className='sec2-heading'>We have got you all covered</div>
        <div className='sec2-cards'>
          <div class='sec2-card'>
            <div class='sec2-container'>
              <p>What is a crypto wallet? </p>
            </div>
          </div>
          <div class='sec2-card'>
            <div class='sec2-container'>
              <p>What are the top cryptocurrencies? </p>
            </div>
          </div>
          <div class='sec2-card'>
            <div class='sec2-container'>
              <p>How are cryptocurrency transactions recorded? </p>
            </div>
          </div>
          <div class='sec2-card'>
            <div class='sec2-container'>
              <p>Are blockchain and cryptocurrencies the same? </p>
            </div>
          </div>
        </div>
        <div className='sec2-learn'>Learn More...</div>
      </div>
      <div className='sec3'></div>
      <div className='sec4'>
        <div className='sec4-heading'>START TRADING NOW</div>
        <div className='sec4-body'>
          <div className='sec4-cards'>
            <div class='sec4-card'>
              <div class='sec4-container'>
                <img src={account} alt=' ' class='sec4-img' />
                <p>Create an account </p>
              </div>
            </div>
            <div className='line'></div>
            <div class='sec4-card'>
              <div class='sec4-container'>
                <img src={bank} alt=' ' class='sec4-img' />
                <p>Link with your bank</p>
              </div>
            </div>
            <div className='line'></div>
            <div class='sec4-card'>
              <div class='sec4-container'>
                <img src={buy} alt=' ' class='sec4-img' />
                <p>Buy & Sell </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='sec3'></div>

      <div className='sec6'>
        <div className='sec6-heading'>JOIN FOR FREE</div>
        <button className='sec6-button'>
          <Link to='/login'>Sign Up</Link>
        </button>
      </div>
    </div>
  )
}

export default HomePage
