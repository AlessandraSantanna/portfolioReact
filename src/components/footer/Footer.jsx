import React from 'react';
import { FaInstagram } from "react-icons/fa6";
import { AiOutlineLinkedin } from "react-icons/ai";
import { CgMail } from "react-icons/cg";
import { FaWhatsapp } from "react-icons/fa";




export default function Footer() {
  return (
    <>
    
    <footer className="text-gray-200 bg-pink-900 body-font">
        <div className="container px-5 py-7 mx-auto flex items-center sm:flex-row flex-col">
            <p className="text-sm text-gray-100 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-100 sm:py-2 sm:mt-0 mt-4">
                Portfólio © 2025
                
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        <a
                                href="https://www.instagram.com/alessandrasantanadev/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-200 mx-2">
                                <FaInstagram size={24} />
                </a>

                <a
                                href="https://www.linkedin.com/in/devalessandrasantana/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-200 mx-2">
                                <AiOutlineLinkedin size={24} />
                </a>

                <a
                                href="mailto:alesy2007@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-200 mx-2">
                                <CgMail size={24} />
                </a>

                 <a
                                href="https://wa.me/5521970199028"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-200 mx-2">
                                <FaWhatsapp size={24} />
                </a>
            </span>

        </div>
    </footer>
    </>
    );      
}