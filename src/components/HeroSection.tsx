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
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-7">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            <span className=" text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Foster
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Rae
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-4">
            I'm a passionate AI & ML engineer currently in the penultimate year
            of my software engineering (AI & Cloud Computing) bachelors from
            Media Design School at Strayer University. My main languages are
            Python, C++ and SQL and I have heavy experience with machine
            learning models and frameworks such as PyTorch, TensorFlow and
            Hugging Face. I have completed an internship at InfoSys working on
            robotics policies and have a strong background in deep learning,
            computer vision and natural language processing.
          </p>

          {/* Projects Button */}
          <div className="pt-4 opacity-0 animate-fade-in-delay-long">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
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
