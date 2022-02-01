import React from "react";
import pic from "./images/image-qr-code.png"
import './Qr.css'


function QrCodeCard(){
    return (
        <div className="main1">
            <div className="Card"> 
                <img src={pic} alt="qrcode"></img>
                <div className="textDiv">
                <h3>Improve your front-end skills by building projects</h3>
                <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
            </div>
        </div>
        </div>
        
    );
        
}
 
export default QrCodeCard;