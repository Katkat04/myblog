import { projectsInfo } from "../../utils/info";

function PCard({ title, items, photo }) {
  return (
    <div className="block max-w p-6 bg-inherit border border-[#7f69a5] rounded-2xl h-auto shadow-lg shadow-[#7f69a5] transform transition-transform duration-300 hover:scale-105">
      <img src={photo} alt={title} className="w-full h-32 object-cover mb-4" />
      <h2 className="mb-2 text-2xl font-bold tracking-tight text-center text-[#7d62ad]">{title}</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="text-sm text-gray-600">{item}</li>
        ))}
      </ul>
    </div>
  );
}

function FProjects() {
  return (
    <section className="flex-col w-full h-auto bg-inherit md:px-24 py-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-2"> 
                {projectsInfo.map((project) => (
                    <PCard
                    key={project.id}
                    title={project.title}
                    items={project.description}
                    photo={project.photo}
                />
            ))}
            </div>
        </section>
    
  );
}

export default FProjects;
