import React from "react";
import "./Checkout.css";
import { Link } from "react-router-dom";
const CheckoutPage = () => {

  return (
    <div className="checkout-page">
      
        <div className="ck-left-div">

          <div className="ck-left-content">
            

            <div className="account">
              <p>Account</p>
              <p style={{textTransform:'lowercase'}}>abc@gmail.com</p>
              <Link to={''}>logout</Link>
              <hr />
            </div>

           

           

            <div className="email-content">
              <input type="checkbox" />
              <p>Email me with news and offers</p>
            </div>

            <div className="delivery-content">
                <div className="dl-country">
                <label htmlFor="country">Country/Region</label>
                  <select name="countryCode" id="country">
                       <option value="PK">Pakistan</option>
                       <option value="US">United Stated</option>
                       <option value="UK">United Kingdom</option>
                       <option value="AU">Australia</option>
                       <option value="UAE">UAE</option>

                  </select>
                </div>
            </div>

           

            
          </div>

          

          
        </div>

        <div className="ck-right-div">
        <div className="ck-right-content">
        
        <h1>hello</h1>

        <div className="account">
              <p>Account</p>
              <p style={{textTransform:'lowercase'}}>abc@gmail.com</p>
              <Link to={''}>logout</Link>
              <hr />
            </div>


            <div className="account">
              <p>Account</p>
              <p style={{textTransform:'lowercase'}}>abc@gmail.com</p>
              <Link to={''}>logout</Link>
              <hr />
            </div>

            </div>
       
          
        </div>
      
    </div>
  );
};

export default CheckoutPage;
