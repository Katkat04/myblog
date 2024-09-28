import { cardsInfo } from "../../utils/info";

function Card({ title, items }) {
    return (
        <div className="block max-w p-6 bg-inherit border border-[#7f69a5] rounded-2xl h-auto shadow-lg shadow-[#7f69a5] transform transition-transform duration-300 hover:scale-105">
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-center text-[#7d62ad]">{title}</h2>
            <div className="flex flex-wrap justify-center gap-4"> 
                {items.map((item) => (
                    <div key={item.id} className="flex items-center p-2 border rounded-md bg-inherit shadow-md">
                        <img 
                            src={item.icon} 
                            alt={`${item.title} icon`} 
                            className="w-8 h-8 mr-2"
                        />
                        <h5 className="font-bold">{item.title}</h5>
                    </div>
                ))}
            </div>
        </div>
    )
}

function FSkills() {
    return (
        <section className="flex-col w-full h-auto bg-inherit px-6 py-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-2"> 
                {cardsInfo.map((card) => (
                    <Card key={card.id} title={card.type} items={card.items} />
                ))}
            </div>
        </section>
    )
}

export default FSkills