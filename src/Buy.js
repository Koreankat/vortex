import logo from "./assets/vortex.coin.png"
import React from "react"
import ReactDOM from "react-dom"
import StripeCheckout from "react-stripe-checkout"

import axios from "axios"
import { toast } from "react-toastify"

import "react-toastify/dist/ReactToastify.css"

const Buy = (balance) => {
  toast.configure()

  const [vortexium] = React.useState({
    name: "Vortexium",
    price: 600,
  })
  async function handleToken(token, addresses) {
    const response = await axios.post("http://localhost:8080/checkout", {
      token,
      vortexium,
    })

    console.log(response.status)

    if (response.status === 200) {
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
            stripeKey='pk_test_51KqjyVJQOvuEYUCuGre0kVF8vMq4jLcp0ZPgQYRVFyPxst6TNTUoGZjqUxK8zIdpIm7dxZ8LIkH8XL1YuZaWAsuH00QyQZgPph'
            token={handleToken}
            name={vortexium.name}
            amount={vortexium.price * 100}
            billingAddress
            shippingAddress
          />
        </div>
      </div>
    </div>
  )
}
export default Buy
