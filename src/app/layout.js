"use client";
import { React, useEffect, useState } from 'react'
import "./globals.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from "./component/footer";
import Navbar from "./component/navbar";
import { RotatingLines } from "react-loader-spinner"; 
import Script from 'next/script';

export default function RootLayout({ children }) {

	const [showloader, setShowloader] = useState(true);

  useEffect(() => {
    AOS.init({
         duration: 800,
         once: false,
       })

       setTimeout(() => {
        setShowloader(false);
       }, 5000);
 }, [])
 
  return (
    <html lang="en">
      <body>      
        <div>

      <div className='loader'> 
      {showloader ? <div className='loader_class'><RotatingLines
  visible={true}
  height="180"
  width="180"
  color="black"
  strokeWidth="5"
  animationDuration="0.75"
  ariaLabel="rotating-lines-loading"
  wrapperStyle={{}}
  wrapperClass=""
  /></div> : "" } </div>

      <div className='page_section'>
         <Navbar/>
            <main>{children}</main>
            <Footer /> 
            </div>

            
             </div>
          </body>
    </html>
  );
}
