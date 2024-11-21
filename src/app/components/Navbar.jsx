import React, { useState } from 'react';

function Navbar() {
    
    const [navbar, setNavbar] = useState(false);
  
    return (
    <div>
        <nav className='w-full bg-black fixed top-0 left-0 right-0 z-10'>
            <div className='justify-between px-4 mx-auto lg:max-w-7x1 md:items-center md:flex md:px-8'>
                <div>
                    <div className='flex items-center justify-between py-3 md:py-5 md:block'>
                        /* logo */
                        <Link href='/'>
                            <h2 className='text-2x1 text-cyan-500 font-bold'>LOGO</h2>
                        </Link>
                        /* Hamburger Button For Mobile */
                        <div className='md:hidden'>
                            <button className='p-2 text-gray-700 rounded-md outline-none focus border-gray-400' onClick={() => setNavbar(!navbar)}>
                            
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar