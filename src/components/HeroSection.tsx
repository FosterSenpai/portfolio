import { cn } from "@/lib/utils";
import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

export const HeroSection = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight / 2);
    };

    // Scroll listener
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20"
    >
      <div className="container max-w-4xl mx-auto z-10">
        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
          {/* Profile Image */}
          <div className="opacity-0 animate-fade-in shrink-0">
            <img
              src="/headshot.jpg"
              alt="Foster Rae"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-primary shadow-lg"
            />
          </div>

          {/* Text */}
          <div className="space-y-7 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="opacity-0 animate-fade-in">Hi, I'm</span>
              <span className="text-primary opacity-0 animate-fade-in-delay-1">
                {" "}
                Foster
              </span>
              <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
                {" "}
                Rae
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl opacity-0 animate-fade-in-delay-4">
              AI & ML engineer specialising in machine learning, computer vision
              and robotics. Currently in my final year of my Software
              Engineering (AI & Cloud Computing) degree at Media Design School,
              Strayer University.
            </p>

            {/* Projects Button */}
            <div className="pt-4 opacity-0 animate-fade-in-delay-long">
              <a href="#projects" className="cosmic-button">
                View My Work
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={cn(
          "absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce transition-opacity duration-300",
          isScrolled ? "opacity-0" : "opacity-100",
        )}
      >
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
