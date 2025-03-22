import React from 'react'
import me from "../assets/meak.png";
import {AiOutlineArrowUp, AiFillInstagram, AiFillYoutube, AiFillGithub } from 'react-icons/ai';
export const Footer = () => {
  return (
    <footer>
   
        <div>
            <img src={me} alt="Founder" />

            <h2>Aarti kumari</h2>
            <p>Motivation is temporary , but discipline last forever.</p>
        </div>
        <aside>
            <h2>Social Media</h2>
            <article>
                <a href="https://youtube.com"><AiFillYoutube/></a>
                <a href="https://linkedin.com"><AiFillInstagram/></a>
                <a href="https://github.com"><AiFillGithub/></a>
            </article>
        </aside>
        <a href="#home"><AiOutlineArrowUp/></a>
    
    </footer>
  )
}
