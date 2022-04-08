import Sidebar from "./Sidebar"
import Card from "./Card"
import { useEffect, useState } from "react"
import axios from "axios"
import { CoinList } from "./config/api"
import { motion, AnimateSharedLayout } from "framer-motion"
import Image from "./assets/vortex.coin.png"
import { useHistory } from "react-router-dom"
import StripeCheckout from "react-stripe-checkout"
import React from "react"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
toast.configure()

const Exchange = ({ balance, changeInBalance }) => {
  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState("")
  const currency = "USD"
  const symbol = "$"
  const fetchTrendingCoins = async () => {
    const { data } = await axios.get(CoinList(currency))
    console.log(data)
    setCoins(data)
  }

  useEffect(() => {
    fetchTrendingCoins()
  }, [currency])

  const handleSearch = () => {
    return coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(search) ||
        coin.symbol.toLowerCase().includes(search)
    )
  }
  let history = useHistory()

  const x = 27.9
  const y = 65.452
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
    <div className='total-area'>
      <Sidebar balance={balance} />

      <div className='main-content'>
        <div
          className='exchange-cards'
          style={{
            width: "60vw",
            textAlign: "left",
            margin: "auto",
            marginTop: "5vh",
          }}
        >
          <table style={{ marginLeft: "1vw", height: "8vh", width: "100%" }}>
            <tr>
              <th style={{ width: "8%", fontSize: "2vh" }}></th>
              <th style={{ width: "30%", fontSize: "2vh" }}>Currency Name</th>
              <th style={{ width: "20%", fontSize: "2vh" }}>Current Price</th>
              <th style={{ width: "20%", fontSize: "2vh" }}>Market Cap</th>
              <th style={{ width: "20%", fontSize: "2vh" }}>Rate Change</th>
            </tr>
          </table>
          <AnimateSharedLayout>
            <motion.h2
              className='expanded-card-h'
              layoutId='expandable-card-h'
              style={{ boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)" }}
            >
              <table
                style={{
                  width: "100%",
                  textAlign: "left",
                  height: "8vh",
                  marginLeft: "1vw",
                }}
              >
                <tr>
                  <th style={{ width: "8%", fontSize: "2vh" }}>
                    <img
                      src={Image}
                      alt='Vortexium'
                      className='tempCoin-icon'
                    />
                  </th>
                  <th style={{ width: "30%", fontSize: "2vh" }}>
                    {"Vortexium (vtx)  "}
                  </th>
                  <th style={{ width: "20%", fontSize: "2vh" }}>
                    {"$ " + y.toFixed(4)}
                  </th>
                  <th style={{ width: "20%", fontSize: "2vh" }}>{"$ 29900"}</th>
                  <th
                    style={{
                      width: "20%",
                      fontSize: "2vh",
                      color: "0" < 0 ? "red" : "green",
                    }}
                  >
                    {x.toFixed(2) + "%"}
                  </th>
                  <StripeCheckout
                    className='stripecheckout'
                    label='Buy'
                    stripeKey='pk_test_4TbuO6qAW2XPuce1Q6ywrGP200NrDZ2233'
                    token={handleToken}
                    name='Vortexium'
                    billingAddress
                    shippingAddress
                  />
                </tr>
              </table>
            </motion.h2>
          </AnimateSharedLayout>
          {handleSearch().map((row) => {
            console.log(
              row.name,
              row.symbol,
              row.current_price,
              row.price_change_percentage_24h
            )

            return (
              <Card
                crypto_name={row.name}
                crypto_symbol={row.symbol}
                crypto_currPrice={row.current_price}
                crypto_marketCap={row.market_cap.toString().slice(0, -6)}
                crypto_priceChange={row.price_change_percentage_24h}
                crypto_img={row?.image}
                crypto_id={row.id}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Exchange
