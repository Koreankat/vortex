import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { SingleCoin } from "./config/api"
import Sidebar from "./Sidebar"
import HtmlReactParser from "html-react-parser"
const CoinPage = ({ balance }) => {
  const { id } = useParams()
  const [coin, setCoin] = useState()
  const [loading, setLoading] = useState(false)
  const currency = "USD"
  const symbol = "$"
  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id))
    setCoin(data)
    setLoading(true)
  }
  console.log(coin)
  useEffect(() => {
    fetchCoin()
  }, [])
  return (
    <div className='total-area'>
      <Sidebar balance={balance}></Sidebar>
      <div className='main-content-x'>
        {loading && (
          <h6>{HtmlReactParser(coin.description.en.split(". ")[0])}</h6>
        )}
      </div>
    </div>
  )
}

export default CoinPage
