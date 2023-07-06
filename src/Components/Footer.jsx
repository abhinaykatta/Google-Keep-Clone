import React from "react";

function Footer(){
    let date=new Date();
    return(
        <div className="footer">
        <p className="footer p">© Abhinay Katta {date.getFullYear()}</p>
        </div>
    )
}

export default Footer;