import { AnimateSharedLayout, motion } from "framer-motion"
import { useState } from "react"
import { useHistory } from "react-router-dom"
function Card({
  crypto_name,
  crypto_symbol,
  crypto_currPrice,
  crypto_marketCap,
  crypto_priceChange,
  crypto_img,
  crypto_id,
}) {
  let history = useHistory()
  const [open, setOpen] = useState(false)

  return (
    <AnimateSharedLayout>
      {open ? (
        <motion.div
          onClick={() => setOpen(false)}
          className='expanded-card'
          layoutId='expandable-card'
          style={{ width: "60vw", marginLeft: "auto", marginRight: "auto" }}
        >
          <motion.h2 className='expanded-card-h' layoutId='expandable-card-h'>
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
                    src={crypto_img}
                    alt={crypto_name}
                    className='tempCoin-icon'
                  />
                </th>
                <th style={{ width: "30%", fontSize: "2vh" }}>
                  {crypto_name + " (" + crypto_symbol + ")"}
                </th>
                <th style={{ width: "20%", fontSize: "2vh" }}>
                  {"$ " + crypto_currPrice.toFixed(4)}
                </th>
                <th style={{ width: "20%", fontSize: "2vh" }}>
                  {"$ " + crypto_marketCap}
                </th>
                <th
                  style={{
                    width: "20%",
                    fontSize: "2vh",
                    color: crypto_priceChange < 0 ? "red" : "green",
                  }}
                >
                  {crypto_priceChange.toFixed(2) + "%"}
                </th>
              </tr>
            </table>
          </motion.h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            aliquam molestiae ratione sint magnam sequi fugiat u llam earum
            distinctio fuga iure, ad odit repudiandae modi est alias ipsum
            aperiam. Culpa? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Rem, iure vero dolorem amet expedita, porro ut ab quae
            suscipit soluta magnam consequatur quidem culpa provident harum
            incidunt quod odit rerum! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ullam quidem nemo nulla culpa, perspiciatis
            accusantium non excepturi et blanditiis impedit delectus commodi hic
            debitis maiores cum quibusdam cupiditate necessitatibus dicta. Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Commodi
            temporibus, id cum veniam recusandae perspiciatis totam eveniet
            quasi soluta quia. Assumenda adipisci cupiditate facere accusantium
            odit sequi quidem cum quaerat?
          </p>
        </motion.div>
      ) : (
        <motion.div
          onClick={() => {
            history.push(`/exchange/${crypto_id}`)
          }}
          className='normal-card'
          layoutId='expandable-card'
          style={{
            width: "60vw",
            marginLeft: "auto",
            marginRight: "auto",
            height: "8vh",
          }}
        >
          <motion.h1 layoutId='expandable-card-h'>
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
                    src={crypto_img}
                    alt={crypto_name}
                    className='tempCoin-icon'
                  />
                </th>
                <th style={{ width: "30%", fontSize: "2vh" }}>
                  {crypto_name + " (" + crypto_symbol + ")"}
                </th>
                <th style={{ width: "20%", fontSize: "2vh" }}>
                  {"$ " + crypto_currPrice.toFixed(4)}
                </th>
                <th style={{ width: "20%", fontSize: "2vh" }}>
                  {"$ " + crypto_marketCap}
                </th>
                <th
                  style={{
                    width: "20%",
                    fontSize: "2vh",
                    color: crypto_priceChange < 0 ? "red" : "green",
                  }}
                >
                  {crypto_priceChange.toFixed(2) + "%"}
                </th>
              </tr>
            </table>
          </motion.h1>
        </motion.div>
      )}
    </AnimateSharedLayout>
  )
}
export default Card
