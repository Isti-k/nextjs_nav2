"use client"
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <section
        id="about" className="text-white h-screen bg-black text-center flex">
          <h1 className="m-auto font-waterfall text-7xl text-cyan-500">
            Hero
          </h1>
      </section>
      <section
        id="blog" className="text-white h-screen bg-cyan-500 text-center flex">
          <h1 className="m-auto font-waterfall text-7xl text-black">
            Blog
          </h1>
      </section>
      <section
        id="contact" className="text-white h-screen bg-black text-center flex">
          <h1 className="m-auto font-waterfall text-7xl text-cyan-500">
            Contact
          </h1>
      </section>
      <section
        id="project" className="text-white h-screen bg-cyan-500 text-center flex">
          <h1 className="m-auto font-waterfall text-7xl text-black">
            Project
          </h1>
      </section>
    </div>  
  );
}
