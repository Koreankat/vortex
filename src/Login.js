import sideimage from "./assets/SidebarImage.png"
import G from "./assets/G.png"
import "./App.css"
import { Link } from "react-router-dom"
import GoogleLogin from "react-google-login"

const Login = () => {
  const ResponseGoogle = (response) => {
    console.log(response)
  }

  return (
    <div className='body'>
      <div className='leftbar'>
        <div className='image'>
          <img src={sideimage} alt='' />
        </div>
      </div>
      <div className='middlebar'>
        <h1>Welcome User</h1>
        <div className='logintext'>Welcome to Vortex Trading.</div>
        <div className='logintext'>Please login with your personal account</div>
        <div className='buttonlogin'>
          <GoogleLogin
            clientId='658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com'
            buttonText='Login'
            onSuccess={ResponseGoogle}
            onFailure={ResponseGoogle}
            cookiePolicy={"single_host_origin"}
          />
        </div>
        <div class='loginsec4-card'>
          <div className='loginline'></div>
          <div class='loginsec4-container'>
            <p>OR</p>
          </div>
          <div className='loginline'></div>
        </div>
        <form className='loginform'>
          <div className='fieldone'>
            <label className='emaillabel' for='Email Address'>
              Email Address{" "}
            </label>{" "}
            <br />
            <input type='email' className='email' name='Email' />
          </div>
          <div className='fieldtwo'>
            <label className='passwordlabel' for='Password'>
              Password{" "}
            </label>{" "}
            <br />
            <input type='password' className='Password' name='Password' />
          </div>
          <div className='fieldone'>
            <label className='passwordlabel' for='Password'>
              {" "}
              Confirm Password{" "}
            </label>{" "}
            <br />
            <input type='password' className='Password' name='Password' />
          </div>
        </form>
        <div className='submits'>
          <div className='registers'>
            <Link className='register' to='/Buy'>
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
