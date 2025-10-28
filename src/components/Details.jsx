import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Iics from "../assets/iics.png";
import Figma from "../assets/figma.png";
import Travels from "../assets/tavels.png";
import Tik from "../assets/tic-tak.png";
import Exaloop from "../assets/exaloop.png";

gsap.registerPlugin(ScrollTrigger);

function Details() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const sections = gsap.utils.toArray(".card-section");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "power2.out",
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        start: "top top",
        end: () => "+=" + container.offsetWidth,
      },
    });

    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, scale: 0.8, y: 80 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          ease: "power2.out",
          duration: 1.2,
          scrollTrigger: {
            trigger: section,
            containerAnimation: ScrollTrigger.getById(container),
            start: "left center",
            end: "right center",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  const cards = [
    {
      title: "Study Buddy",
      text: "Simplify billing with Finexa. Create, manage, and track invoices seamlessly for efficient and organized financial transactions.",
      color: "bg-gradient-to-br from-[#b1a6ff] to-[#c8c9ff]",
      img: Iics,
      buttontext: "visit site",
    },
    {
      title: "Creative Design",
      text: "Beautiful UI mockups and prototypes made easy with intuitive design tools that accelerate creativity.",
      color: "bg-gradient-to-br from-[#d6b2ff] to-[#b9baff]",
      img: Figma,
      buttontext: "visit site",
    },
    {
      title: "Travel Planner",
      text: "Plan, manage, and visualize your travel experiences with AI-assisted smart recommendations.",
      color: "bg-gradient-to-br from-[#e3daff] to-[#c9e0ff]",
      textColor: "text-black",
      img: Travels,
      buttontext: "visit site",
    },
    {
      title: "Entertainment Hub",
      text: "A sleek, responsive interface to enjoy seamless gaming and fun with friends anywhere.",
      color: "bg-gradient-to-br from-[#bdb2ff] to-[#a6bfff]",
      img: Tik,
      buttontext: "visit site",
    },
    {
      title: "Data Visualization",
      text: "Transform complex datasets into actionable insights through clear, elegant visual analytics.",
      color: "bg-gradient-to-br from-[#cbb2ff] to-[#9ecaff]",
      img: Exaloop,
      buttontext: "visit site",
    },
  ];

  return (
    <section
      ref={containerRef}
      className="horizontal relative bg-gradient-to-r from-[#cbb2ff] via-[#b6baff] to-[#a6caff] text-black overflow-hidden min-h-screen"
    >
      {/* Bubble Background */}
      <div className="bubbles-container">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="bubble"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${10 + Math.random() * 30}px`,
              height: `${10 + Math.random() * 30}px`,
              animationDuration: `${5 + Math.random() * 10}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Heading */}
      <div className="sticky top-0 left-0 z-20 px-6 sm:px-12 md:px-20 pt-10 pb-10 text-center md:text-left">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold leading-tight tracking-tight text-[#201f1e] font-[DancingScript]">
          Show Case
        </h1>
      </div>

      {/* Horizontal Scroll Section */}
      <div className="projects flex px-5 mt-20 sm:mt-40 gap-10 pb-10 overflow-x-visible relative z-10">
        {cards.map((card, i) => (
          <div
            key={i}
            className="card-section min-w-[200vw] sm:min-w-[55vw] md:min-w-[32vw] h-auto md:h-[55vh] flex items-center justify-center"
          >
            <div
              className={`card ${card.color} ${
                card.textColor || "text-white"
              } rounded-[25px] sm:rounded-[30px] mt-10 p-6 sm:p-8 md:p-10 shadow-2xl flex flex-col md:flex-row items-center justify-between w-[90vh] h-auto md:h-[45vh] transition-transform duration-500`}
            >
              {/* Left: Text */}
              <div className="w-full md:w-1/2 mb-6 md:mb-0 text-center md:text-left px-2 sm:px-4">
                <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-3">
                  {card.title}
                </h2>
                <p className="text-sm sm:text-base md:text-lg opacity-90 leading-relaxed font-[Poppins]">
                  {card.text}
                </p>
                <button className="text-sm sm:text-lg md:text-xl font-bold mt-6 md:mt-10 border-2 border-dashed bg-black px-5 py-2 sm:px-6 sm:py-3 text-white rounded-[25px] hover:bg-white hover:text-black transition-colors duration-300">
                  {card.buttontext}
                </button>
              </div>

              {/* Right: Image */}
              <div className="w-full md:w-1/2 flex justify-center">
                <img
                  src={card.img}
                  alt={card.title}
                  className="rounded-2xl w-[150px] sm:w-[220px] md:w-[240px] h-[110px] sm:h-[180px] md:h-[200px] object-cover shadow-xl"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Details;
