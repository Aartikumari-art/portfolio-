import React, { useRef } from "react";
import { animate, motion } from "framer-motion";
import TypeWriter from "typewriter-effect";
import { BsArrowUpRight , BsChevronDown } from "react-icons/bs";
import me from "../assets/meak.png";


export const Home = () => {
  const clientCount = useRef(null);
  const projectCount = useRef(null);

  const animationClientsCount = () =>{
    animate(0, 10,{
      duration:1,
      onUpdate:(v)=> (clientCount.current.textContent = v.toFixed())
    })
  }

  
  const animationProjectCount = () =>{
    animate(0, 50,{
      duration:1,
      onUpdate:(v)=> (projectCount.current.textContent = v.toFixed())
    })
  }


  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },

    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };
  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi, I Am <br /> Aarti Kumari
          </motion.h1>

          <TypeWriter
            options={{
              strings: ["A Full stack Developer","A NodeJs Developer", "A ReactJs Developer", "A ThreeJs Developer" , "A Typescript Developer", "A Angular Developer"],
              autoStart: true,
              cursor: "",
              loop: true,
              wrapperClassName: "typewriterpara",
            }}
          />

          <div>
            <a href="mailto:official.kaarti.kc@gmail.com">Hire Me</a>
            <a href="#work">
              Projects Done <BsArrowUpRight />
            </a>
          </div>

          <article>
            <p>
              +<motion.span whileInView={animationClientsCount} ref= { clientCount }></motion.span>
            </p>

            <span>Clients Worldwide</span>
          </article>

          <aside>
            <article>
              <p>
                +<motion.span ref={projectCount} whileInView={animationProjectCount}></motion.span>
              </p>

              <span>Projects Made</span>
            </article>

            <article data-special>
              <p>Contact</p>

              <span>official.kaarti.kc@gmail.com</span>
            </article>
          </aside>
        </div>
      </section>

      <section>
        <img src={me} alt="Aarti" />


      </section>

      <BsChevronDown/>



    </div>
  );
};
