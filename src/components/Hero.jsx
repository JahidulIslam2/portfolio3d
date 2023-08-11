import { motion } from "framer-motion";
import { styles } from "../styles.js";
import { ComputersCanvas } from "./canvas";

const Hero = () => {

  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#0F044C]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-[#787A91]`}>
            Hi. I am <span className="text-[#EEEEEE]">Jahid</span>
          </h1>
          {/* auto typing */}
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a web Developer <br className="sm:block hidden" />
            I learn Web developing
          </p>
          <div className="mt-10 relative left-[15%]">
            <a className="awesome-btn" download={true} href="/Resume.pdf" target="_blank" title="Download Resume" rel="noopener noreferrer">
              Resume
            </a>

            {/* <button type="submit">Hire Me</button> */}

          </div>
        </div>
      </div>
      {/* 3d models components */}
      <ComputersCanvas />
      {/* animation scroll indicator */}
      <div className="absolute xs:bottom-2 bottom-0 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                repeatType: "loop"
              }} transparent
              className="w-0 h-0 border-t-8 border-r-8  border-white rounded transform rotate-45 "

            />
          </div>
        </a>

      </div>
    </section >
  )
}

export default Hero