import { styles } from "../styles";
import 'react-vertical-timeline-component/style.min.css';
import { experiences } from "../constants";
import { textVariant } from './../utils/motion';
import { SectionWrapper } from '../hoc';
import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";


const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: '#1d1836', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid #232631' }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img src={experience.icon} alt={experience.company_name}
            className='h-[60px] w-[60px] object-contain' />
        </div>
      }>
      {experience.date}
    </VerticalTimelineElement >
  )
}

// Main components

const Experience = () => {
  return (<>

    <motion.div
      variants={textVariant}>
      <p className={styles.heroSubText}>What i have done</p>
      <h3 className={styles.heroHeadText}>
        Work Experience
      </h3>
    </motion.div>
    <div className="mt-20 flex flex-col">
      <VerticalTimeline
        animate={Boolean}
        lineColor="#1a706c"
      >
        {
          experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />

          ))
        }
      </VerticalTimeline>
    </div>
  </>
  )
}

export default SectionWrapper(Experience, 'experience');