import React from 'react';
import FAbout from './FAbout'; 
import FSkills from './FSkills';
import FEducation from './FEducation';
import FProjects from './FProjects';

function Main() {
  return (
    <main className="relative flex flex-col px-2 items-center space-y-3">
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/assets/backk.mp4" type="video/mp4" />
        </video>
      </div>
      <section id="about" className="relative z-10 w-full  text-white flex flex-col items-center">
         <FAbout/>
      </section>

      <section id="skills" className="relative z-10 w-full text-white flex flex-col items-center">
        <h2 className="text-4xl font-bold text-center">Skills</h2>
        <FSkills/> 
      </section>

      <section id="education" className="relative z-10 w-full  text-white flex flex-col items-center">
        <h2 className="text-4xl font-bold text-center py-2">Education</h2> 
        <FEducation/>
      </section>

      <section id="projects" className="relative z-10 w-full text-white flex flex-col items-center ">
        <h2 className="text-4xl font-bold text-center">Projects</h2> 
        <FProjects/>
      </section>
    </main>
  );
}

export default Main;
