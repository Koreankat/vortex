import "./App.css"
import image from "./assets/courses.png"
import image1 from "./assets/bitcoins.jpeg"
import image2 from "./assets/Bitcoin.jpeg"
import image3 from "./assets/coins.jpeg"
import image4 from "./assets/download.jpeg"
import articles from "./assets/articles.png"
import * as React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import { Link } from "react-router-dom"

const Learn = () => {
  return (
    <div className='learnbody'>
      <div className='learnheading'>
        <p>
          Questions About Cryptocurrency?
          <br /> Here Are Your Answers
        </p>
      </div>
      <hr className='learnline' />
      <div className='questions'>
        <div className='question'>1. What are Cryptocurrencies?</div>
        <div className='answer'>
          Cryptocurrencies are digital assets and decentralized systems that
          allow for secure online payments.
        </div>
      </div>
      <div className='questions'>
        <div className='question'>
          2. Beyond the method of payment ,what are other functions of
          cryptocurrencies?
        </div>
        <div className='answer'>
          Cryptocurrency value can be pegged to underlying asset such as U.S.
          dollar, central bank digital currencies, privacy coins (senders and
          receivers are anonymous), governance tokens (gives owners the right to
          vote in decisions regarding blockchain’s future development), utility
          tokens, and non-fungible tokens (distinct characteristics from all
          others). This is from a developer/development side. Of course, there
          are also investors and speculators who are hoping for appreciation. It
          is very important you know the intent and functionality of
          cryptocurrency you own or are considering owning.
        </div>
      </div>
      <div className='questions'>
        <div className='question'>3.What is a Blockchain? </div>
        <div className='answer'>
          Blockchain is a system of recording information in a way that makes it
          difficult or impossible to change, hack, or cheat the system. A
          blockchain is essentially a digital ledger of transactions that is
          duplicated and distributed across the entire network of computer
          systems on the blockchain.
        </div>
      </div>
      <div className='questions'>
        <div className='question'>
          3. How are cryptocurrency transactions recorded?{" "}
        </div>
        <div className='answer'>
          Most cryptocurrencies use blockchain technology to record
          transactions. For example, the bitcoin network and Ethereum network
          are both based on blockchain, and this acts as a form of public
          ledger, which is a series (or chain) of blocks on which transaction
          details are recorded after suitable authentication and verification by
          the designated network participants. The public ledger is used as a
          record-keeping system that maintains participants’ identities in
          secure and (pseudo-)anonymous form, their respective cryptocurrency
          balances, and a record book of all the genuine transactions executed
          between network participants.
        </div>
      </div>

      <div className='recommended'>
        <div className='recommendedheading'> Free & Recommended</div>
        <div className='recommendedcards'>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia component='img' alt='' height='140' image={image} />
            <CardContent>
              <a href='https://www.youtube.com/watch?v=vbscdY4Hj2o'>
                <Typography gutterBottom variant='h5' component='div'>
                  Types of Cryptocurrencies
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  In this video, we'll help you understand types of
                  cryptocurrency along with examples of each. This will help you
                  to better judge a crypto investment as you'll know what crypto
                  type you'll be placing your bet on.
                </Typography>
              </a>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia component='img' alt='' height='140' image={image1} />
            <CardContent>
              <a href='https://www.youtube.com/watch?v=Us7HiZIcWb4'>
                <Typography gutterBottom variant='h5' component='div'>
                  Learn how to trade Crypto
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  A cryptocurrency exchange is an online marketplace where users
                  buy, sell, and trade cryptocurrency. Crypto exchanges work
                  similar to online brokerages, as users ...
                </Typography>
              </a>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia component='img' alt='' height='140' image={image2} />
            <CardContent>
              <a href='https://www.youtube.com/watch?v=yMkzsj6_1dw'>
                <Typography gutterBottom variant='h5' component='div'>
                  how to manage your crypto portfolio
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  “Don’t invest more than you can afford to lose” we all know
                  this one but if you are in the crypto space, and want to know
                  some more tips that can help you manage your portfolio, here
                  are some suggestions that might help you to manage your
                  #crypto #portfolio.
                </Typography>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className='recommended'>
        <div className='recommendedheading'>Udemy Courses</div>
        <div className='recommendedcards'>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia component='img' alt='' height='140' image={articles} />
            <CardContent>
              <a href='https://www.udemy.com/course/the-complete-cryptocurrency-trading-course/'>
                <Typography gutterBottom variant='h5' component='div'>
                  The Complete Cryptocurrency & Bitcoin Trading Course 2022
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  Cryptocurrency & Bitcoin Trading - Earn Extra Passive Income
                  Weekly Trading Crypto & Altcoin Using Technical Analysis
                </Typography>
                <hr></hr>
                <Typography variant='body2' color='text.secondary'>
                  <b>Time Required: 9.5 hours</b>
                </Typography>
              </a>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia component='img' alt='' height='140' image={image4} />
            <CardContent>
              <a href='https://www.udemy.com/course/price-action-trading-master-course-forex-and-crypto/'>
                <Typography gutterBottom variant='h5' component='div'>
                  Price Action Trading Master Course (Forex and Crypto)
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  Learn How To Trade Naked Charts From Former Investment Bank
                  Treasurers. From Beginner to Advanced (+50 Live Examples))
                </Typography>
                <hr></hr>
                <Typography variant='body2' color='text.secondary'>
                  <b>Time Required: 4.5 hours</b>
                </Typography>
              </a>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia component='img' alt='' height='140' image={image3} />
            <CardContent>
              <a href='https://www.udemy.com/course/making-passive-income-with-cryptocurrency-to-maximize-profit/'>
                <Typography gutterBottom variant='h5' component='div'>
                  Making passive income with cryptocurrency to maximize profit
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  Learn how to make passive income with crypto and to buy crypto
                  cost effective to maximize profit
                </Typography>
                <hr></hr>
                <Typography variant='body2' color='text.secondary'>
                  <b>Time Required: 1 hour</b>
                </Typography>
              </a>
            </CardContent>
          </Card>
        </div>
        <br></br>
        <br></br>
      </div>
    </div>
  )
}

export default Learn
