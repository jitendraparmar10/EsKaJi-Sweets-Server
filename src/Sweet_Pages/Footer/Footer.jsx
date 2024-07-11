import React from 'react'
import './footer.css'
import { FaLocationArrow } from "react-icons/fa";
import { ImMobile } from "react-icons/im";
import { FiMail } from "react-icons/fi";
import pic from "./Logo.png"
import sweets from "./sweet.png"
const Footer = () => {
    return (
        <>
            <nav>
                <div id='footerIcon'>
                    <a href="/product_cat/sweets">
                        <img src={"https://jodhpursweets.com/wp-content/uploads/2022/10/specialsawan.png"} />
                    </a>
                    <a href="/product_cat/namkeen">
                        <img src="https://jodhpursweets.com/wp-content/uploads/2022/10/nameekn.png" />
                    </a>

                    <a href="/product_cat/sweets">
                    <img src="https://jodhpursweets.com/wp-content/uploads/2022/10/khoya.png" />
                    </a>
                    <a href="/product_cat/manwaar">
                    <img src="https://jodhpursweets.com/wp-content/uploads/2022/10/dryfruit.png" />
                    </a>
                    <a href="/product_cat/sweets">
                    <img src="https://jodhpursweets.com/wp-content/uploads/2022/10/desighees.png" /></a>
                    <a href="/product_cat/sweets"> <img src={sweets} /></a>
               
                    

                </div>
            </nav>
            <div id='footerLinks'>


                <div className='footernav'>
                    <img src={pic} />
                    <div className='footerdetails'> <FaLocationArrow />
                        <h5 >Jodhpur-INDIA.</h5>
                    </div>
                    <div className='footerdetails'>
                        <ImMobile />

                        <h5 >Phone: +91 6376470499
                        </h5>
                    </div>
                    <div className='footerdetails'>
                        <FiMail />
                        <h5 >
                            eskajisweets@gmail.com</h5>
                    </div>

                </div>
                <div className='footernav'>
                    <h3 >SHOP NOW</h3>
                    <div className='footerdetails'>
                        <h5 > <a href="/product_cat/manwaar">Manwaar</a>


                        </h5>
                    </div>
                    <div className='footerdetails'>
                        <h5 >
                            <a href="/product_cat/namkeen">Namkeen </a>
                        </h5>
                    </div>
                    <div className='footerdetails'>
                        <h5 >
                            <a href="/product_cat/sweets">Sawan Special</a>
                        </h5>
                    </div>
                    <div className='footerdetails'>

                        <h5 > <a href="/product_cat/sweets">Sweets</a>
                        </h5>
                    </div>
                </div>
                <div className='footernav'>
                    <h3>USEFUL LINKS</h3>
                    <div className='footerdetails'>
                        <h5 > <a href="/page_id/contactus">Contact Us</a>


                        </h5>
                    </div>

                </div>
                <div className='footernav'>
                    <h3>MORE LINKS</h3>
                    <div className='footerdetails'>
                        <h5 > <a href="">Instagram</a>
                        </h5>
                    </div>
                <div className='footerdetails'>
                        <h5 > <a href="">LinkedIn</a>
                        </h5>
                    </div>
                    <div className='footerdetails'>
                        <h5 > <a href="/page_id/aboutus">About Us</a>
                        </h5>
                    </div>


                </div>
                    




            </div>
        </>
    )
}

export default Footer