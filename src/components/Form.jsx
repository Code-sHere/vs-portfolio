import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

function Form() {
  const formRef = useRef(null);

  useEffect(() => {
    const sections = gsap.utils.toArray(".fade-section"); // 👈 use a unique class for animation

    sections.forEach((section) => {
      gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none reverse",
        },
      });
    });
  }, []);

  return (
    <section
      ref={formRef}
      className="relative w-full h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-bl from-[#e3daff] to-[#c9e0ff] px-12 py-16 overflow-hidden"
    >
      {/* 🌸 Bubble Background */}
      <div className="bubbles-container absolute inset-0 z-0 overflow-hidden">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="bubble absolute bg-white bg-opacity-30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: `-${Math.random() * 100}px`,
              width: `${10 + Math.random() * 30}px`,
              height: `${10 + Math.random() * 30}px`,
              animationDuration: `${5 + Math.random() * 10}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* 🌟 Left Section */}
      <div className="fade-section w-full md:w-1/2 flex flex-col justify-center mb-10 md:mb-0 space-y-6 relative z-10">
        <button
          type="button"
          className="flex items-center gap-2 bg-black text-white text-2xl md:text-3xl font-semibold px-6 py-3 rounded-4xl w-fit hover:bg-white hover:text-black border-2 border-black transition-colors duration-300"
        >
          Let’s Get in Touch <ArrowRight size={22} />
        </button>

        <p className="text-2xl md:text-3xl text-gray-700 leading-relaxed font-[Poppins] max-w-xl">
          Have a project in mind or just want to say hi? Fill out the form and I’ll get back to you soon!
        </p>
      </div>

      {/* ✨ Right Section */}
      <div className="fade-section w-full md:w-1/2 flex flex-col justify-center p-8 relative z-10">
        <form className="flex flex-col space-y-8">
          <input
            type="text"
            placeholder="Your Name"
            className="border-b border-gray-400 bg-transparent focus:outline-none text-gray-800 py-2"
          />
          <input
            type="email"
            placeholder="Email"
            className="border-b border-gray-400 bg-transparent focus:outline-none text-gray-800 py-2"
          />
          <input
            type="text"
            placeholder="Subject"
            className="border-b border-gray-400 bg-transparent focus:outline-none text-gray-800 py-2"
          />
          <textarea
            placeholder="Description about project"
            rows="4"
            className="border-b border-gray-400 bg-transparent focus:outline-none text-gray-800 py-2 resize-none"
          ></textarea>

          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="bg-black text-white py-2 rounded-md w-[180px] hover:bg-white hover:text-black border-2 border-black transition-colors duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

    </section>
  );
}

export default Form;
