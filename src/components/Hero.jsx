import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
export function Cursor() {
  const cursor = useRef();

  useGSAP(() => {
    // Cursor movement
    const move = (e) => {
      gsap.to(cursor.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.25,
        ease: "power2.out",
      });
    };

    document.addEventListener("mousemove", move);

    // GSAP timeline for continuous color changes
    const colors = ["#47ececff", "#25e81bff", "#0d0c0dff", "#fafafcff", "#3efbf1ff"];
    const tl = gsap.timeline({ repeat: -1, yoyo: true, defaults: { duration: 2 } });

    colors.forEach((color) => {
      tl.to(cursor.current, {
        backgroundColor: color,
        scale: gsap.utils.random(0.9, 1.3),
        ease: "power1.inOut",
      });
    });

    return () => {
      document.removeEventListener("mousemove", move);
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={cursor}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "14px",
        height: "14px",
        borderRadius: "50%",
        backgroundColor: "#afacacff",
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
        zIndex: 9999,
        mixBlendMode: "difference", // looks cool on bright/dark sections
      }}
    ></div>
  );
}


export function Hero() {
  const textRef = useRef(null);

  // 🔹 Animate text on mount
  useEffect(() => {
    gsap.from(textRef.current.children, {
      y: 40,
      opacity: 0,
      scale: 0.95,
      duration: 2,
      ease: "power4.out",
      stagger: 0.2,
      delay: 0.3,      // small delay between lines
    });
  }, []);

  return (
    <div 
    ref={textRef}
    className="relative w-full min-h-screen flex flex-col justify-between px-6 sm:px-12 md:px-20 overflow-hidden">
      
      {/* 🔹 TOP-LEFT TEXT BLOCK WITH ANIMATION */}
      <div
        
        className="absolute top-10 left-6 sm:top-16 sm:left-12 md:top-20 md:left-20 text-left"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 cursive leading-snug">
          Hey, I'm Vansh
        </h1>

        <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-700 cursive mt-3 sm:mt-4 tracking-wide font-medium leading-snug">
          A Designer and A Developer
        </h2>
      </div>

      {/* 🔹 CENTER DESCRIPTION */}
      <div className="flex flex-col items-center justify-center flex-grow mt-40 md:mt-0 px-4 pt-30">
        <p className="max-w-3xl text-center text-lg sm:text-2xl md:text-3xl font-medium tracking-wide text-gray-800 leading-relaxed satisfy">
          I’m a Software Developer who loves building clean, functional, and creative web experiences.
          Always learning, <br className="hidden sm:block" /> always coding.
        </p>
      </div>

      {/* 🔹 SOCIAL ICONS (bottom-right corner) */}
      <div className="social flex justify-center md:justify-end items-end w-full pb-25">
        <ul className="flex flex-row gap-8 sm:gap-10 md:gap-16 text-xl sm:text-2xl mr-0 md:mr-20 text-gray-700">
          <li>
            <a href="#" className="fa fa-facebook hover:text-blue-600 transition-colors"></a>
          </li>
          <li>
            <a href="#" className="fa fa-twitter hover:text-sky-500 transition-colors"></a>
          </li>
          <li>
            <a href="#" className="fa fa-linkedin hover:text-blue-700 transition-colors"></a>
          </li>
          <li>
            <a href="#" className="fa fa-github hover:text-gray-900 transition-colors"></a>
          </li>
        </ul>
      </div>
    </div>
  );
}
