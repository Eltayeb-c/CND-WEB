"use client";

import { Button } from "@relume_io/relume-ui";
import React, { useEffect } from "react";

export function Cta7() {
  useEffect(() => {
    // Add intersection observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    const elements = document.querySelectorAll('.cta-animate');
    elements.forEach(el => observer.observe(el));
    
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="chargeNDrive" className="bg-governor-bay text-white px-[5%] py-16 md:py-24 lg:py-28 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 right-10 w-40 h-40 rounded-full bg-accent"></div>
        <div className="absolute bottom-10 left-10 w-60 h-60 rounded-full bg-accent"></div>
      </div>
      
      <div className="container grid w-full grid-cols-1 items-start justify-between gap-6 md:grid-cols-[1fr_max-content] md:gap-x-12 md:gap-y-8 lg:gap-x-20 relative z-10">
        <div className="md:mr-12 lg:mr-0">
          <div className="w-full max-w-lg">
            <h2 className="cta-animate mb-3 text-4xl leading-[1.2] font-bold md:mb-4 md:text-5xl lg:text-6xl">
              Charge Your EV with Ease
            </h2>
            <p className="cta-animate md:text-md text-french-gray">
              Join our community of hosts and EV owners today!
            </p>
          </div>
        </div>
        <div className="flex items-start justify-start gap-4">
          <Button 
            title="Sign Up"
            className="pulse bg-accent hover:bg-malachite text-governor-bay font-bold rounded-lg transition-all duration-300 hover:shadow-lg"
          >
            Sign Up
          </Button>
          <Button 
            title="Learn More" 
            variant="secondary"
            className="bg-transparent text-white font-bold border border-white/50 rounded-lg transition-all duration-300 hover:bg-white/10 hover:border-white"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
