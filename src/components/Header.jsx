import React from 'react'

export const Header = () => {
  return (
    <nav className='nav'>
        <NavContent/>
    </nav>
  )
}



const NavContent = () => (
    <>
    <h2>Aarti</h2>
    <div>
        <a href="#home">Home</a>
        <a href="#work">Work</a>
        <a href="#timeline">Experience</a>
        <a href="#services">Services</a>
        <a href="#testimonial">Testimonial</a>
        <a href="#contact">Contact</a>
    </div>

    <a href="mailto:official.kaarti.kc@gmail.com">
        <button>Email</button>
    </a>
    </>
)