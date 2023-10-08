import React from 'react'


const Esewa = (props) => {
    const price = props.amount;
    const total = price+5+2+3;
    
  return (
    <div>
           <form action="https://uat.esewa.com.np/epay/main" method="POST">
    <input value={total.toString()} name="tAmt" type="hidden"/>
    <input value={price.toString()} name="amt" type="hidden"/>
    <input value="5" name="txAmt" type="hidden"/>
    <input value="2" name="psc" type="hidden"/>
    <input value="3" name="pdc" type="hidden"/>
    <input value="JB0BBQ4aD0UqIThFJwAKBgAXEUkEGQUBBAwdOgABHD4DChwUAB0R" name="scd" type="hidden"/>
    <input value="ee2c3ca1-696b-4cc5-a6be-2c40d929d453" name="pid" type="hidden"/>
    <input value="http://merchant.com.np/page/esewa_payment_success?q=su" type="hidden" name="su"/>
    <input value="http://merchant.com.np/page/esewa_payment_failed?q=fu" type="hidden" name="fu"/>
    <button type='submit' class='btn btn-success'>
  <img src='https://seeklogo.com/images/E/esewa-logo-DA36F8FD2F-seeklogo.com.png' alt='Button' width='60' height='20'/>
</button>

    </form>

    </div>
  )
}

export default Esewa