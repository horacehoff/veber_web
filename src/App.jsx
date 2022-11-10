import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);


  return (
    <div className="App">
    <div className="hamburger" id="hamburger">
    <h2 id="burger-menu" style={{visibility: "hidden", color: "black", fontFamily: "Montserrat", fontSize: "26px"}}>VEBER</h2>
    <svg id="hamburger-icon" className="hamburger-icon" width="24px" height="24px" strokeWidth="1.54" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M5 20v-1a7 7 0 017-7v0a7 7 0 017 7v1M12 12a4 4 0 100-8 4 4 0 000 8z" stroke="#000000" strokeWidth="1.54" strokeLinecap="round" strokeLinejoin="round"></path></svg>
    {/* | */}
    <svg id="account-icon" onClick={() => {
      if (window.innerWidth >= 570) {
        if (isBurgerOpen) {
          setIsBurgerOpen(false);
          document.getElementById("hamburger").style.width = "130px"; 
          document.getElementById("hamburger").style.height = "50px";
          document.getElementById("burger-menu").style.visibility = "hidden";
          document.getElementById("hamburger-icon").style.visibility = "visible";
          document.getElementById("account-icon").style.left = "20%";
          document.getElementById("account-icon").style.top = "50%";
        } else {
          setIsBurgerOpen(true);
          document.getElementById("hamburger").style.width = "500px";
          document.getElementById("hamburger").style.height = "300px";
          document.getElementById("burger-menu").style.visibility = "visible";
          document.getElementById("hamburger-icon").style.visibility = "hidden";
          document.getElementById("account-icon").style.left = "42px";
          document.getElementById("account-icon").style.top = "42px";
        }} else {
          if (isBurgerOpen) {
            setIsBurgerOpen(false);
            document.getElementById("hamburger").style.width = "130px"; 
            document.getElementById("hamburger").style.height = "50px";
            document.getElementById("burger-menu").style.visibility = "hidden";
            document.getElementById("hamburger-icon").style.visibility = "visible";
            document.getElementById("account-icon").style.left = "20%";
            document.getElementById("account-icon").style.top = "50%";
          } else {
            setIsBurgerOpen(true);
            document.getElementById("hamburger").style.width = "85vw";
            document.getElementById("hamburger").style.height = "300px";
            document.getElementById("burger-menu").style.visibility = "visible";
            document.getElementById("hamburger-icon").style.visibility = "hidden";
            document.getElementById("account-icon").style.left = "42px";
            document.getElementById("account-icon").style.top = "42px";
          }
      }
      }} className="account-icon" width="24px" height="24px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M3 5h18M3 12h18M3 19h18" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
    </div>
    <div style={{position: "relative"}}>
      <div className="title-money">💸</div>
      <h1 style={{fontFamily: "Montserrat", fontSize: "15vw"}}>VEBER</h1>
      <div className="title-money-bis">💸</div>
    </div>
    <h3 className="catchphrase">Your way into the economy.</h3>
    <div class="down-arrow"></div>
    </div>
  )
}

export default App
