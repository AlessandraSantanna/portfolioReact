import React from "react";
import Navbar from "../../navbar/Navbar";
import Alessandra from "../../Alessandra.png";

export default function Hero() {
  return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] flex flex-col  items-center'>
      <div className='md:h-[720px] h-[990px] md:w-[1600px] w-[900px] bg-gradient-to-r absolute bg-pink-800 rounded-full transform rotate-6 -top-40 z-0'></div>
      <Navbar />
    <section id='home' className="flex flex-col md:flex-row items-center justify-center w-full px-4 md:px-52 pb-4 md:pd-24 pt-24 md:pb-24 mt:24 md:mt-0 z-10">
      <div data-aos='fade-up' className="flex-1 md:text-left mt-10 md:mt-0">
       {/* <h1 className="text-3xl sm:text-4xl md:text-2xl font-bold text-white">Welcome to My Portfolio</h1> */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">Alessandra Santana</h1>
        <p data-aos='ffade-up'data-aos-delay='300' className="text-base sm:text-lg md:text-lg text-white mb-6">Sou um desenvolvedor apaixonado com talento para criar aplicativos web.</p>
     
       <button type='button' className='text-gray-900 mt-4 bg-white hover:bg-pink-300 font-semibold rounded-full text-sm px-5 py-2.5 text-center' >
            Contact
        </button>
      </div>
      <div data-aos='fade-up' className="flex-1 flex justify-center md:justify-end mt-0 md:mt-0">

         <img src={Alessandra} alt="Hero" className="h-[300px] sm:h-[400px] md:h-[380px] w-[250px] sm:w-[360px] object-cover rounded-lg" />
         
      </div>
    </section>
</div>
  );
}