import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar flex w-screen h-[68px] justify-between items-center bg-white border-b-2 sticky'>
        <div className="logo ml-10">LOGO</div>
        <div className="links mr-12 flex gap-10">
            <span>Home</span>
            <span>About</span>
            <span>Contacts</span>
            <span>News</span>
        </div>
        
    </div>
  )
}

export default Navbar