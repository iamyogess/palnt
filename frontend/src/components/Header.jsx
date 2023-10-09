import React from 'react'

const Header = () => {
  return (
    <div className='m-auto overflow-x-hidden'>
      <img src="https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" className='bg-cover bg-center object-cover w-screen h-screen' alt="" />
      <div className="left max-w-[1280px] m-auto md:ml-[100px] md:w-[800px] md:flex justify-center flex-col items-start absolute top-[30%] p-8">
        <h1 className='text-white font-bold text-[50px]'>Our Goal</h1>
        <p className='text-white '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate fugiat nemo consectetur nobis pariatur, quidem porro facere illum repellat, maxime voluptates magni. Alias aliquam eum, tenetur fugit unde voluptas sapiente dignissimos omnis molestiae modi deserunt aut natus ipsa. Facere, asperiores!</p>
        <button className='py-2 px-4 text-white bg-green-500 rounded-md mt-8'>Contact Us</button>
      </div>
    </div>
  )
}

export default Header