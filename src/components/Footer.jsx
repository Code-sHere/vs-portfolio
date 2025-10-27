import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Phone } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);// icons

function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    const elements = gsap.utils.toArray(".fade-footer");

    elements.forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        y: 60,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    });
  }, []);
  return (
    <section 
      ref={footerRef}
    className="w-full h-screen flex flex-col items-center justify-between bg-gradient-to-bl from-[#e3daff] to-[#c9e0ff] px-12 py-16">
      
      {/* Top Section: Name + Description (Left-Aligned) */}
      <div className="fade-footer w-full flex flex-col items-start justify-start pl-10 space-y-6">
        <h1 className="text-5xl text-gray-700 font-[DancingScript]">
          Vansh Sirohi
        </h1>
        <p className="text-2xl mt-10 md:text-3xl font-[Poppins] text-gray-700 max-w-3xl leading-relaxed">
          I’m a designer who loves creating beautiful and functional websites.
          Turning pixels into purpose and code into craft.
        </p>
      </div>

      {/* Contact Info + Button (Centered) */}
      <div className="fade-footer flex flex-col items-center justify-center mt-16 space-y-6">
        {/* Contact Info */}
        <div className="flex flex-col items-center space-y-3 font-[Poppins] text-xl text-gray-800">
          <div className="flex items-center gap-3">
            <Mail size={22} className="text-gray-700" />
            <span>anshjaat7102010@gmail.com</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone size={22} className="text-gray-700" />
            <span>+91 8595232967</span>
          </div>
        </div>

        {/* Button */}
        <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-white hover:text-black border-2 transition duration-200 font-[Poppins]">
          Get in Touch With Me
        </button>
      </div>

      {/* Footer Line */}
      <div className="w-full border-t border-gray-400 mt-12 pt-5 text-center text-gray-600 font-[Poppins]">
        © 2024 Vansh Sirohi. All rights reserved.
      </div>
    </section>
  )
}

export default Footer
