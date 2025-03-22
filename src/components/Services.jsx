import React from 'react';
import { motion }  from "framer-motion";
import { AiFillIeCircle, AiFillAndroid , AiFillWindows} from  "react-icons/ai";
import { SiThreedotjs, SiAngular } from "react-icons/si"; 


export const Services = () => {


    const animations = {
        whileInView:{
            x:0,
            y:0,
            opacity: 1,

        },
        one:{
            opacity:0,
            x: "-100%"
        },
        twoAndThree:{
            opacity:0,
            y: "-100%"
        },
      
        four:{
            opacity:0,
            x: "100%"
        },
    }
  return (
    <div id="services">
      <h2>Services</h2>
      <section>
        <motion.div
          className="serviceBox1"
          whileInView={animations.whileInView}
          initial={animations.one}
        >
          <h3>1+</h3>
          <p>Year Experience in Freelancing</p>
        </motion.div>

        <motion.div
          className="serviceBox2"
          whileInView={animations.whileInView}
          initial={animations.twoAndThree}
        >
          <AiFillIeCircle />
          <span>MERN Stack Web Development</span>
        </motion.div>
        <motion.div
          className="serviceBox3"
          whileInView={animations.whileInView}
          initial={animations.twoAndThree}
          transition={{
            delay: 0.2,
          }}
        >
          <SiThreedotjs />
          <span>ThreeJs AR View Development</span>
        </motion.div>

        <motion.div
          className="serviceBox4"
          whileInView={animations.whileInView}
          initial={animations.four}
        >
          <SiAngular />
          <span>Angular Development</span>
        </motion.div>
      </section>
    </div>
  );
}
