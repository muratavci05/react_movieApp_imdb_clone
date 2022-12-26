import React from "react";
import "./footer.css";
import Logo from "./assets/logo.svg";
import { Link } from "react-router-dom";

const Footer = () => {

    return(
        <div className="footer">
            <div className="footerLeft">
               <Link to="/" >  <img src={Logo} className="footer__icon"/> </Link>
               
            </div>
            <div className="footer__titles">
                    <p className="footer_titleP">This Project has been prepared by<span style={{color:"white"}}> Murat AVCI</span> </p> &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                    <p className="footer_titleP">in This Project<span> IMDB Movie </span>menu was created using<span> TMDB API</span></p>
                </div>
            
           
        </div>
    )
}

export default Footer;