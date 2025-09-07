import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-6 sm:px-10 md:px-20 lg:px-40"
    >
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
        <img
          src="/projects/img.jpg"
          alt="Profile"
          className="w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 rounded-full object-cover border-2 border-gray-400"
        />
      </div>

      {/* Text Section */}
      <div className="container max-w-4xl mx-auto text-center md:text-left z-10 w-full md:w-1/2">
        <div className="space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}Naveen
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"></span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0 opacity-0 animate-fade-in-delay-3">
            I create stellar web experiences with modern technologies.
            Specializing in full-stack development, I build interfaces that are
            both beautiful and functional.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
