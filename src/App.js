import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import HomePage from "./HomePage"
import NavBar from "./NavBar"
import Learn from "./Learn"
import Portfolio from "./Portfolio"
import Exchange from "./Exchange"
import Login from "./Login"
import CoinPage from "./CoinPage"
import Buy from "./Buy"
import Vortexium from "./Vortexium"

function App() {
  const balance = (1474.9109).toFixed(2)
  const changeInBalance = (301.93).toFixed(2)

  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/homepage'>
            <NavBar />
            <HomePage />
          </Route>
          <Route exact path='/Login'>
            <NavBar />
            <Login />
          </Route>
          <Route exact path='/'>
            <NavBar />
            <Portfolio balance={balance} changeInBalance={changeInBalance} />
          </Route>
          <Route exact path='/exchange'>
            <NavBar />
            <Exchange balance={balance} changeInBalance={changeInBalance} />
          </Route>
          <Route exact path='/learn'>
            <NavBar />
            <Learn />
          </Route>
          <Route path='/exchange/:id'>
            <NavBar />
            <CoinPage balance={balance} />
          </Route>
          <Route path='/Buy'>
            <NavBar />
            <Buy />
          </Route>
          <Route path='/exchange/vortexium'>
            <NavBar />
            <Vortexium />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
