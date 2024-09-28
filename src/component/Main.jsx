import React from 'react';
import FAbout from './fAbout'; // Verifica que la ruta sea correcta
import FSkills from './fSkills'; // Verifica que la ruta sea correcta
import FEducation from './FEducation';

function Main() {
  return (
    <main className="relative flex flex-col items-center space-y-3">
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

      <FAbout />

      <section id="skills" className="relative z-10 w-full px-40 text-white flex flex-col items-center">
        <h2 className="text-4xl font-bold text-center">Skills</h2>
        <FSkills /> 
      </section>

      <section id="education" className="relative z-10 w-full px-40 text-white flex flex-col items-center">
        <h2 className="text-4xl font-bold text-center py-2">Education</h2> 
        <FEducation/>
      </section>

      <section id="projects" className="relative z-10 w-full px-40 text-white flex flex-col items-center">
        <h2 className="text-4xl font-bold text-center">Projects</h2> 
        <p className="mt-4 text-center">box1</p> 
      </section>
    </main>
  );
}

export default Main;
