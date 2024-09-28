function FAbout() {
    return(
        <section id="about" className="relative z-10 w-full px-40 text-white flex flex-col md:flex-row items-center justify-center">
            <div className="flex flex-shrink-0 md:w-1/2 justify-center">
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
    )
}
export default FAbout