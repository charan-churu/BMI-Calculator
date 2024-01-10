import React, { useState } from 'react'
import './Bmi.css'

function Bmi() {
    const [weight,setWeight]=useState();
    const [height,setHeight]=useState();
    const [bmi,setBmi]=useState('');
    const [message,setMessage]=useState('');

    let calcBmi =(e)=>{
        e.preventDefault();
        if(weight<=0 || height<=0){
            alert(`please enter a valid value`)
        }
        else{
            let bmi = (weight / (height * height) * 703)
            setBmi(bmi.toFixed(1))

            if(bmi<18.5){
                setMessage('you are underweight')
            }
            else if(bmi <=24.9 && bmi>=18.5){
                setMessage('you are healthy weight')
            }
            else if(bmi <=29.9 && bmi>=25){
                setMessage('you are over-weight')
            }
            else if(bmi <=39.9 && bmi>=5){
                setMessage('you are obese')
            }
            else{
                setMessage('you are severly obese')
            }
        }
    }
let reload=()=>{
    window.location.reload()
}
    
  return (
    <div className='App'>
      <div className='container'>
        <h2>BMI-Calculator</h2>
        <form>
            <div className='label'>
                <label >Weight(lbs):</label>
                <input type="text" placeholder='weight in lbs' value={weight} onChange={(e)=>setWeight(e.target.value)} />
            </div>
            <div className='label'>
                <label > Height(in):</label>
                <input type="text" placeholder='Height in inches' value={height} onChange={(e)=>setHeight(e.target.value)} />
            </div>
            <div>
                <button className='btn' type='submit' onClick={calcBmi}>Submit</button>
                <button className='btn-Reload'onChange={reload} type='submit'>Reload</button>
            </div>
            <div className='center'>
                <h3>Your BMI is :{bmi}</h3>
                <p >{message}</p>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Bmi
