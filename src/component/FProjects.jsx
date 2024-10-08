function FProjects() {
  return (
    <section className="flex flex-col justify-center items-center w-full h-auto bg-inherit md:px-24 py-2">
      <p className="text-center text-gray-600 mb-4">
        You can take a look at the work I have done by clicking on the following button:
      </p>
      <div className="flex justify-center items-center w-full py-2"> 
        <a href="https://github.com/Katkat04" target="_blank" rel="noopener noreferrer" className="block max-w p-6 bg-inherit border border-[#7f69a5] rounded-2xl h-auto shadow-lg shadow-[#7f69a5] transform transition-transform duration-300 hover:scale-105">
          <ul>
            <li className="text-sm text-gray-600 flex items-center font-bold">
              <img src="https://img.icons8.com/tiny-color/48/github.png" alt="GitHub Icon" className="w-6 h-6 mr-2" />
                GitHub Profile
            </li>
          </ul>
        </a>
      </div>
    </section>
  )
}

export default FProjects;
