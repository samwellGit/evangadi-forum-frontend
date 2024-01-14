
import React from 'react'
import "./Form.css"
function Form({toggle}) {
  return (
    
      <div className="login__container  col-sm-12 col-md ">
      <h4 className='login-account'>Login to your account </h4>
      <p className='account'>Don’t have an account?<a onClick={toggle}className='create'>Sign in</a></p>
      {/* <p>"Don’t have an account?"<a className="create" data-panel="" href="#">Create a new account </a></p> */}
  
      {/* <p>Don’t have an account?<a className='create' href='https://www.evangadi.com/'>Create a new account</a></p> */}
      <form>
        <p>
        <input className='fouess' type="text" placeholder=" Email address" />
        </p>
        <div first-last>
        <input className='fouess first' type="text" placeholder=" First name" />
        <input className='fouess last' type="text" placeholder=" last name" />
        </div>
        <p>
        <input className='fouess'  type="password" placeholder=" Password" />
        </p>
        
       <p > I agree to the <a className="policy" href="">privacy policy</a> and <a      className='policy' href="terms of service">terms of service</a></p>
        <button className="login__signInButton" type="submit">
          Agree and join
        </button>
       <p ><a  className="policy have" href="Already have an account">Already have an account</a></p>

      </form>
    </div>
    
  )
}

export default Form
