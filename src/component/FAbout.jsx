function FAbout() {
    return (
        <section className="relative z-10 w-full px-6 py-6 md:px-24 md:py-12 text-white flex flex-col md:flex-row items-center">
            <div className="flex flex-shrink-0 w-full md:w-1/2 justify-center mb-4 md:mb-0">
                <img
                    src="/assets/fotoacm.jpg"
                    alt="Mi foto"
                    className="w-60 h-60 rounded-full border-4 border-[#7f69a5] hover:scale-105 animate-border-pulse object-cover"
                />
            </div>
            <div className="md:w-1/2 w-full text-center md:text-left">
                <h2 className="font-bold text-white text-4xl w-fit">Hi,</h2>
                <h2 className="w-fit animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl text-[#7f69a5] font-bold">
                    I'm Katy Diaz
                </h2>
                <p className="mt-4 text-justify">
                    I'm a frontend developer passionate about modern web development, I love to learn and constantly improve my skills in new technologies. My main focus is to create intuitive user experiences with responsive and visually appealing interfaces. I also enjoy the process of transforming ideas into functional products that positively impact users.
                </p>
            </div>
        </section>
    );
}

export default FAbout;
