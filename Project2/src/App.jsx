import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className="App">
      <div className="Card">
      <div className="Card_Container">
      <div className="Card_Image">
        <img src="src/assets/image-1.png" className="Card_Image_Effect">
        </img>       
      </div>
      <div className="Card_Text">
        <div className="Card_Text_Header">
          <h1><a>#3429</a></h1>
        </div>
      <div className="Card_Text_Supporting">
        <p>Our Equilibrium collection promotes balance and calm.</p>
      </div>
      <div className="Card_Text_Group">
        <div className="Card_Text_Group_Price">
          <p><strong>0.41 ETH</strong></p>
        </div>
        <div className="Card_Text_Group_Time">
          <p>3 Days left</p>
        </div>
      </div>
      </div>
      <hr className="Card_Divider"></hr>
      <div className="Card_Footer">
        <div className="Card_Footer_Group">
          <div className="Card_Footer_Image">
            <img src="src/assets/image-2.png"></img>
          </div>
          <div className="Card_Footer_Text">
            <p className="Card_Footer_Text_Sup">Creation of <a className="Card_Footer_Text_Head"><strong>Jules Wyvern</strong></a></p>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
  )
}

export default App
