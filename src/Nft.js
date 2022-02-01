 import React from "react";
 import imag from "./images/image-equilibrium.jpg";
 import ethereum from "./images/icon-ethereum.svg";
 import clock from "./images/icon-clock.svg";
 import avat from "./images/image-avatar.png";
 import './Nft.css'
 
 function Nftcard(){
     return (
         <div className="main2">
                <div className="nftCard">
                            <img src={imag} alt="equilbrium" id="equilbrium"/>
                            <p className="equilibrium">Equilibrium #3429</p>
                            <p id="texteq">Our Equilibrium collection promotes balance and calm.</p>
                            <div className="logoz">
                                <div className="ether">
                                    <img src={ethereum} alt="ethereum" id="ethr"/>
                                    <p>0.041 ETH</p>
                                </div>
                                <div className="time">
                                    <img src={clock} alt="clock" id="clck"/>
                                    <p>3 days left</p>
                                </div>
                            </div>
                            <hr />
                            <div className="avtar">
                                <img src={avat} alt="avatar" id="avt"/>
                                <p><span id="textl">Creation of</span> Jules Wyvern</p>
                            </div>
                </div>
         </div>
         
     )
 }
 export default Nftcard;