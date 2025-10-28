import React from "react";

function About() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-start justify-start bg-gradient-to-br from-[#d6b2ff] to-[#b9baff] px-6 sm:px-12 py-12 overflow-hidden">
      {/* Heading */}
      <div className="relative max-w-6xl">
        <h1 className="pb-6 text-5xl sm:text-6xl md:text-7xl font-bold font-dancing text-gray-900">
          About Me
        </h1>

        {/* About Text */}
        <div className="pb-10 ml-2 sm:ml-6 text-base sm:text-lg md:text-xl font-medium font-poppins leading-relaxed text-gray-800">
          <p className="pb-6">
            I'm a passionate{" "}
            <span className="text-purple-700 font-semibold">
              Frontend Developer
            </span>{" "}
            with expertise in creating engaging and responsive web applications.
            My journey in web development started with curiosity and has evolved
            into a deep love for crafting pixel-perfect user interfaces.
          </p>

          <p>
            I specialize in modern JavaScript frameworks like{" "}
            <span className="text-purple-700 font-semibold">React</span>, along
            with expertise in HTML5, CSS3, and various frontend tools. I'm
            committed to writing clean, maintainable code and creating seamless
            user experiences.
          </p>
        </div>
      </div>

      {/* Skills Section */}
      <h3 className="px-6 sm:px-8 text-3xl sm:text-4xl font-semibold font-dancing text-gray-900 mb-8">
        Skills & Technologies
      </h3>

      <div className="flex flex-col sm:flex-row flex-wrap gap-10 sm:gap-16 ml-6 sm:ml-10 text-base sm:text-lg font-poppins text-gray-800">
        <ul>
          <h4 className="border-b-2 border-gray-900 font-semibold mb-2">
            Frontend
          </h4>
          <li>HTML & CSS</li>
          <li>JavaScript</li>
          <li>React.js</li>
          <li>PHP</li>
          <li>Laravel</li>
        </ul>

        <ul>
          <h4 className="border-b-2 border-gray-900 font-semibold mb-2">
            Styling
          </h4>
          <li>Tailwind CSS</li>
          <li>Bootstrap</li>
          <li>Shad CN</li>
          <li>Daisy UI</li>
        </ul>

        <ul>
          <h4 className="border-b-2 border-gray-900 font-semibold mb-2">
            Tools
          </h4>
          <li>Git & GitHub</li>
          <li>React Hook Form</li>
          <li>GSAP</li>
          <li>Figma</li>
          <li>& More</li>
        </ul>

        <ul>
          <h4 className="border-b-2 border-gray-900 font-semibold mb-2">
            Additional
          </h4>
          <li>Python</li>
          <li>C++</li>
          <li>MySQL</li>
        </ul>
      </div>
    </section>
  );
}

export default About;
