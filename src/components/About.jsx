import { motion } from "framer-motion"
import Tilt from "react-parallax-tilt";

import { styles } from "../styles"
import { textVariant, fadeIn } from './../utils/motion';
import { services } from "../constants/index";
import { SectionWrapper } from '../hoc';



// service card function 
const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt="title"
            className="w-16 h-16 object-contain " />
          <h3 className="text-center font-bold text-[#EEEEEE] text-[20px]">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  )
}


const About = () => {


  return (
    <>
      <motion.div variants={textVariant}>
        <p className={styles.sectionSubText}>
          Introduction
        </p>
        <h2 className={styles.heroHeadText}>
          Overview
        </h2>
        <a className="awesome-btn" href="">Resume</a>
      </motion.div>
      <motion.p variants={fadeIn(" ", " ", 0.1, 1)}
        className="mt-4 text-secondary leading-[30px] text-[15px] max-w-3xl">
        I have serious passion web developer, build a responsive dynamic website.and creating intuitive, dynamic user experiences.
        developing sites using reactJs,Next.js specializes in node.js, express.js mongoDb and responsive design.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {
          services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))
        }
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about');