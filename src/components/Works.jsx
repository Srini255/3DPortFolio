import { Tilt } from "react-tilt";
import {motion} from 'framer-motion';

import { styles } from "../style";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { p } from "framer-motion/client";


const ProjectCard = ({index,project,handleGithubClick}) => {
  return(
    <motion.div variants={fadeIn("up","spring",index*0.5,0,75)}>
        <Tilt 
          options={{
            max:45,
            scale:1,
            speed:450,
          }}
          className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
          <div className="relative w-full h-[240px]">
            <img src={project.image} alt={project.name}
              className="w-full h-full object-cover rounded-2xl" />

              <div className="absolute inset-0 flex justify-end m-3 card-img_hover gap-1">
                <div className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                  <img src={github} alt="github" onClick={()=>handleGithubClick(project.source_code_link)}
                  className="w-1/2 h-1/2 object-contain" />
                </div>
                {project.backend_code_link && 
                <div className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                  <img src={github} alt="github" onClick={()=>handleGithubClick(project.backend_code_link)}
                  className="w-1/2 h-1/2 object-contain" />
                </div>
                }
              </div>
          </div>
          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{project.name}</h3>
            <p className="mt-2 text-secondary text-[14px]">{project.description}</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </Tilt>
    </motion.div>
  );
}


const Works = () => {
  const handleGithubClick = (url) =>{
    window.open(url,'_blank');
  }

  return (
   <>
     <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p variants={fadeIn("","",0.1,1)}>
          Following projects showcases my skills and experience through 
          real-world examples of my work. Each project is briefly described with links to code repositories 
          and live demos in it. It reflects my ability to solve complex problems, work with different technologies 
          and manage projects effectively.
        </motion.p>
      </div>
      <div className="flex mt-20 flex-wrap gap-7">
        {projects.map((project,index)=>(
          <ProjectCard key={`project-${index}`} index={index} project={project} handleGithubClick={handleGithubClick} />
        ))}
      </div>
   </>
  )
}

export default SectionWrapper(Works,"")