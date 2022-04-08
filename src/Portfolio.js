import { styled } from "@mui/material/styles"
import Button from "@mui/material/Button"
import { IconContext } from "react-icons/lib"
import { GoTriangleUp, GoTriangleDown } from "react-icons/go"
import { FaPlus } from "react-icons/fa"
import PortfolioTable from "./PortfolioTable"
import PortfolioChart from "./PortfolioChart"
import Sidebar from "./Sidebar"
import StripeCheckout from "react-stripe-checkout"
const ColorButtonA = styled(Button)(({ theme }) => ({
  color: "white",
  backgroundImage: "linear-gradient(to right,#7716A5, #C1A9E8)",
  marginLeft: "1.5vw",
  fontWeight: "500",
  fontSize: "min(1.5vh,1.5vw)",
}))

const ColorButtonB = styled(Button)(({ theme }) => ({
  color: "white",
  backgroundImage: "linear-gradient(to right,#645087, #C1A9E8)",
  fontWeight: "500",
  fontSize: "min(1.5vh,1.5vw)",
}))

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

const Portfolio = ({ balance, changeInBalance }) => {
  return (
    <div className='total-area'>
      <Sidebar balance={balance} />
      <div className='main-content'>
        <div className='main-content-heading'>
          <div className='main-content-heading-up'>Current Balance</div>
          <div className='main-content-heading-down'>
            ${numberWithCommas(balance)}
            <div className='buttonA'>
              <ColorButtonA
                fullWidth={true}
                variant='contained'
                startIcon={
                  changeInBalance > 0 ? (
                    <IconContext.Provider value={{ className: "buttonA-icon" }}>
                      <GoTriangleUp />
                    </IconContext.Provider>
                  ) : (
                    <IconContext.Provider value={{ className: "buttonA-icon" }}>
                      <GoTriangleDown />
                    </IconContext.Provider>
                  )
                }
              >
                {((changeInBalance / balance) * 100).toFixed(2)}%
              </ColorButtonA>
            </div>
            <div className='buttonB'>
              <ColorButtonB
                fullWidth={true}
                variant='contained'
                startIcon={
                  <IconContext.Provider value={{ className: "buttonB-icon" }}>
                    <FaPlus />
                  </IconContext.Provider>
                }
              >
                Add Crypto
              </ColorButtonB>
            </div>
          </div>
          <div className='chart-area'>
            <PortfolioChart />
          </div>
          <div className='assets'>
            <div className='assets-heading'>Your Assets</div>
            <div className='assets-table'>
              <PortfolioTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
