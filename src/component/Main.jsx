import React from 'react';

function Main() {
  return (
    <main className=" relative flex flex-col items-center space-y-8">
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className=" w-full h-full object-cover"
        >
          <source src="/assets/backk.mp4" type="video/mp4" />
        </video>
      </div>

      <section className="relative z-10 w-full flex flex-col md:flex-row items-center md:items-start  p-8 space-y-4 md:space-y-0 md:space-x-8">
        <div className='flex flex-col text-white'>
          <h2 className="text-2xl font-bold">I am Katy Diaz</h2>
          <br/>
          <p className="mt-4">
            A passionate frontend developer... 
          </p>
        </div>
        <div className="flex-shrink-0">
          <img
            src="/assets/fotoacm.jpg"
            alt="Mi foto"
            className="w-60 h-60 rounded-full object-cover"
          />
        </div>
      </section>

      <section className="relative z-10 w-full p-8 text-white">
        <h2 className="text-2xl font-bold">Skills</h2>
        <p className="mt-4">boxfront</p>
      </section>

      <section className="relative z-10 w-full p-8 text-white">
        <h2 className="text-2xl font-bold">Projects</h2>
        <p className="mt-4"> box1 </p>
      </section>

      <section className="relative z-10 w-full p-8 text-white">
        <h2 className="text-2xl font-bold">Education</h2>
        <p className="mt-4">Time Line</p>
      </section>
    </main>
  );
}

export default Main;



  