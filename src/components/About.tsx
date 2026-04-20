import React from "react";

export default function About() {
  const skills = [
    "Cash Cow Editing",
    "Reels Editing",
    "Logo Animation",
    "Podcast Edit",
  ];

  return (
    <section id="about" className="relative w-full py-20 lg:py-28 text-white overflow-hidden">
      
      {/* Optional faint background circles mimicking the design 
          (commented out in case a purely black background is preferred, 
          but left as faint visual interest) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none opacity-20 flex justify-center items-center gap-10">
         <div className="w-120 h-120 rounded-full border-20 border-purple-900/40 blur-3xl"></div>
         <div className="w-[20rem] h-80 rounded-full border-15 border-blue-900/40 blur-3xl hidden md:block"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
        
        {/* Heading */}
        <h2 
          className="text-4xl md:text-5xl font-bold uppercase tracking-wider mb-2 font-orbitron"
        >
          About Me
        </h2>
        
        {/* Gradient Underline */}
        <div className="h-0.5 w-64 bg-linear-to-r from-red-600 via-green-500 to-blue-600 mb-10"></div>

        {/* Paragraph Description */}
        <p className="text-gray-300 font-light text-base md:text-lg leading-relaxed max-w-4xl mb-16">
          Welcome To The Cinematic Realm Of Ryan, Where Creativity Meets Technology To Craft Visually Stunning Narratives. With A Passion For Storytelling And A Keen Eye For Detail, I Embark On A Journey To Transform Ordinary Footage Into Extraordinary Visual Experiences.
        </p>

        {/* Skills / Services List */}
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-sm md:text-base font-medium uppercase tracking-widest text-white">
          {skills.map((skill, index) => (
            <React.Fragment key={skill}>
              <span>{skill}</span>
              {/* Dot Separator (except after the last item) */}
              {index < skills.length - 1 && (
                <span className="w-1.5 h-1.5 rounded-full bg-linear-to-tr from-green-400 to-blue-500 hidden sm:inline-block"></span>
              )}
            </React.Fragment>
          ))}
        </div>

      </div>
    </section>
  );
}
