import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-23 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate AI & ML Engineer
            </h3>
            <p className="text-muted-foreground">
              I have almost completed my software engineering (AI & Cloud
              Computing) bachelors from Media Design School at Strayer
              University. I have completed the instep internship at InfoSys
              bangalore travelling internationally to work on robotics policies.
            </p>

            <p className="text-muted-foreground">
              I am passionate about machine learning, robotics, computer vision,
              embedded systems and have a fondness for cellular automata and
              procedural generation.
            </p>

            {/* Info Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right Side */}
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-4 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Machine Learning</h4>
                  <p className="text-muted-foreground">
                    Developing and deploying machine learning models for various
                    applications
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-4 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Robotics</h4>
                  <p className="text-muted-foreground">
                    Post training physical intelligence's pi0 policy and
                    robotics simulations using NVIDIA isaac sim and lab
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-4 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Internship Experience
                  </h4>
                  <p className="text-muted-foreground">
                    Gained hands-on experience at InfoSys Bangalore, working on
                    robotics policies and international projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
