import React, { useState } from 'react'
import Homebmi from './Homebmi'

function Home() {
    const [message, setMessage] = useState('Enter Weight and Height');


const calculate=(event)=>{
event.preventDefault();
const height = (event.target.height.value)/100;
const weight = event.target.weight.value;
 const bmi = (weight/(height ** 2)).toFixed(2)
if(bmi>=16 && bmi<=18.5){
    setMessage(`${bmi} BMI \n You are UnderWeight`);

}
else if(bmi>18.5 && bmi<=25){
    setMessage(`${bmi} BMI \n You are Normal`);
}
else if(bmi>25 && bmi<=40){
    setMessage(`${bmi} BMI \n You are OverWeight`);

}
else{
    setMessage(`Please input valid height and weight`);
}


}
  return (
    <div className='px-3'>
    <div className='container-fulid'>
        <div className='row g-4 my-3 d-flex justify-content-between flex-wrap'>
            <div className='col-md-3'>
                <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                    <div>
                        <h3 className='d-block text-center'>BMI Calculator</h3>
                        <form className='col-md-12 text-center' onSubmit={calculate}>
                            <label className='d-block'>Weight</label>
                        <input type='number' name='weight' placeholder='KG'/>
                        <label className='d-block'>Height</label>
                        <input type='number' name='height' placeholder='CM'/>
                        <button className='d-block 'type='submit'>Calculate</button>
                        <span className='d-block mt-2 bg-success px-3 text-white rounded' id='message'> {message}</span>
                        </form>
                    </div>
                </div>
            </div>

           


            <div className='col-md-3'>
                
                   
                <img src='https://www.bhartiaxa.com/sites/default/files/2023-02/bmi-scale.svg' alt='hello'/>    
                   
               
            </div>
          
            <div className='col-md-3'>
           <Homebmi/>
            </div>

           
        </div>
    </div>

    
   </div>
  )
}

export default Home