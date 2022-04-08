import logo from "./assets/vortex.coin.png"
import React from "react"
import ReactDOM from "react-dom"
import StripeCheckout from "react-stripe-checkout"
import axios from "axios"
import { toast } from "react-toastify"

import "react-toastify/dist/ReactToastify.css"
toast.configure()

const Buy = (balance) => {
  const [vortexium] = React.useState({
    name: "Vortexium",
    price: "65$",
  })
  async function handleToken(token, addresses) {
    const response = await axios.post(
      "https://6r2gj6.sse.codesandbox.io/checkout",
      {
        token,
        vortexium,
      }
    )
    const { status } = response.data
    console.log("Response:", response.data)
    if (status === "success") {
      toast("Success! Check email for details", { type: "success" })
    } else {
      toast("Something went wrong", { type: "error" })
    }
  }
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
            Buy and be one of the first to benefit from the prestige of holding
            the VORTEXIUM and get 20% from staking !
          </div>
          <br></br>
          <StripeCheckout
            label='Buy Vortexium'
            stripeKey='pk_test_4TbuO6qAW2XPuce1Q6ywrGP200NrDZ2233'
            token={handleToken}
            name='Vortexium'
            billingAddress
            shippingAddress
          />
        </div>
      </div>
    </div>
  )
}
export default Buy
