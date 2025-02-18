const Hero = () => {
  return (
    <div className="flex flex-col items-center mt-6 py-9 lg:mt-10 bg-blue-950">
        <h1 className="text-4xl sm:text-3xl lg:text-6xl text-center tracking-wide text-white">Mahadi Hasan | <span className="bg-gradient-to-r from-green-700 to-blue-600 text-transparent bg-clip-text">MERN</span> Application Developer</h1>
        <p className="text-white text-1xl text-center mt-9 max-w-4xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam alias autem maiores veritatis error, possimus repellendus esse vitae, iusto molestias, tempore quod quos obcaecati quia! Praesentium minus blanditiis rerum molestiae!
        </p>
        <div className="flex justify-center my-10">
            <a href="#" className="bg-violet-300 rounded-md m-4 p-4 hover:bg-violet-900 hover:text-white">Resume</a>

            <a href="#" className="bg-green-300 rounded-md m-4 p-4 hover:bg-green-600 hover:text-white">Contact</a>
        </div>
    </div>
  )
}

export default Hero