import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const aboutRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate heading
      gsap.from(".about-heading", {
        opacity: 0,
        y: -80,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-heading",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      // Animate text paragraphs
      gsap.utils.toArray(".about-text p").forEach((el, i) => {
        gsap.from(el, {
          opacity: 0,
          x: i % 2 === 0 ? -100 : 100,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // Animate section heading
      gsap.from(".skills-heading", {
        opacity: 0,
        scale: 0.8,
        duration: 1.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".skills-heading",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      // Animate skill columns staggered
      gsap.from(".skill-list", {
        opacity: 0,
        y: 60,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".skills-heading",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={aboutRef}
      className="relative w-full min-h-screen flex flex-col items-start justify-start bg-gradient-to-br from-[#d6b2ff] to-[#b9baff] px-6 sm:px-12 py-12 overflow-hidden"
    >
      {/* Heading */}
      <div className="relative max-w-6xl">
        <h1 className="about-heading pb-6 text-5xl sm:text-6xl md:text-7xl font-bold font-dancing text-gray-900">
          About Me
        </h1>

        {/* About Text */}
        <div className="about-text pb-10 ml-2 sm:ml-6 text-base sm:text-lg md:text-xl font-medium font-poppins leading-relaxed text-gray-800">
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
      <h3 className="skills-heading px-6 sm:px-8 text-3xl sm:text-4xl font-semibold font-dancing text-gray-900 mb-8">
        Skills & Technologies
      </h3>

      <div className="skills flex flex-col sm:flex-row flex-wrap gap-10 sm:gap-16 ml-6 sm:ml-10 text-base sm:text-lg font-poppins text-gray-800">
        <ul className="skill-list">
          <h4 className="border-b-2 border-gray-900 font-semibold mb-2">
            Frontend
          </h4>
          <li>HTML & CSS</li>
          <li>JavaScript</li>
          <li>React.js</li>
          <li>PHP</li>
          <li>Laravel</li>
        </ul>

        <ul className="skill-list">
          <h4 className="border-b-2 border-gray-900 font-semibold mb-2">
            Styling
          </h4>
          <li>Tailwind CSS</li>
          <li>Bootstrap</li>
          <li>Shad CN</li>
          <li>Daisy UI</li>
        </ul>

        <ul className="skill-list">
          <h4 className="border-b-2 border-gray-900 font-semibold mb-2">
            Tools
          </h4>
          <li>Git & GitHub</li>
          <li>React Hook Form</li>
          <li>GSAP</li>
          <li>Figma</li>
          <li>& More</li>
        </ul>

        <ul className="skill-list">
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
