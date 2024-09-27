import React from 'react';

function Main() {
  return (
    <main className="relative flex flex-col items-center space-y-8">
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

      <section id="about" className="relative z-10 w-full p-8 text-white flex flex-col md:flex-row items-center justify-center">
        <div className="flex-shrink-0 md:w-1/2">
          <img
            src="/assets/fotoacm.jpg"
            alt="Mi foto"
            className="w-60 h-60 rounded-full object-cover mx-auto md:mx-0"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left"> 
          <h2 className="text-4xl font-bold">
            Hi, I am 
            <br />
            Katy Diaz
          </h2>
          <p className="mt-4">
            A passionate frontend developer...
          </p>
        </div>
      </section>

      <section id="skills" className="relative z-10 w-full p-8 text-white flex flex-col items-center">
        <h2 className="text-2xl font-bold text-center">Skills</h2> 
        <p className="mt-4 text-center">boxfront</p> 
      </section>

      <section id="education" className="relative z-10 w-full p-8 text-white flex flex-col items-center">
        <h2 className="text-2xl font-bold text-center">Education</h2> 
        <p className="mt-4 text-center">Time Line</p> 
      </section>

      <section id="projects" className="relative z-10 w-full p-8 text-white flex flex-col items-center">
        <h2 className="text-2xl font-bold text-center">Projects</h2> 
        <p className="mt-4 text-center">box1</p> 
      </section>
    </main>
  );
}

export default Main;