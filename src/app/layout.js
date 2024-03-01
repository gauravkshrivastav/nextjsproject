"use client";
import { React, useEffect, useState } from "react";
import "./globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./component/footer";
import Navbar from "./component/navbar";
import { RotatingLines } from "react-loader-spinner";
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Script from "next/script";
import "@fontsource/poppins";

export default function RootLayout({ children }) {
  const [showloader, setShowloader] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });

    setTimeout(() => {
      setShowloader(false);
    }, 2000);
  }, []);

  return (
    <html lang="en">
      <body>
        <div>
          <div className="loader">
            {showloader ? (
              <div className="loader_class">
                <RotatingLines
                  visible={true}
                  height="180"
                  width="180"
                  color="black"
                  strokeWidth="5"
                  animationDuration="0.75"
                  ariaLabel="rotating-lines-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                />
              </div>
            ) : (
              ""
            )}{" "}
          </div>

          <div className="page_section">
            <Navbar />
            <main className="main_section">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}



