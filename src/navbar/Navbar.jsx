import React from "react";
function Navbar() {
    const NavbarItems = [
        { id:1, name: "Home", link: "#home" },
        { id:2, name: "Skill", link: "#skills" },
        { id:3, name: "My Projects", link: "#projects" },
        { id:4, name: "Contact", link: "#contact" },
         // { id:5, name: "Experience", link: "#experience" },
    ];

  return (
    <header className='absolute top-0 flex justify-center items-center body-font z-20'>
  <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center' >
   
    <a className='flex title-font font-medium text-pink-300 mb-4 md:mb-0'>
        <span className='ml-3 mr-11 font-bold text-white  text-3xl'>Portfolio</span>
    </a>

        <nav className='md:ml-auto md:mr-auto font-medium flex flex-wrap items-center text-base text-white justify-center'>
        {
            NavbarItems.map((item) => (
                <a key={item.id} href={item.link} className='mr-7 hover:text-white cursor-pointer'>
                    {item.name}
                </a>
            ))
        }
        </nav>
        {/* <button type='button' className='text-gray-950 mt-4 bg-white hover:bg-blue-300 font-semibold rounded-full text-sm px-5 py-2.5 text-center' >
            Contact
        </button> */}

    </div>

    </header>
    
    
   
  );
}

export default Navbar;
