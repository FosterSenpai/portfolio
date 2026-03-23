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
              I am in the final year of my Software Engineering (AI & Cloud
              Computing) degree at Media Design School, Strayer University.
              During my studies I completed the Infosys InStep internship in
              Bangalore, travelling internationally to contribute to robotics
              policy research. I have attended various hackathons and have
              enjoyed applying my skills to many external projects.
            </p>

            <p className="text-muted-foreground">
              My passion lies in machine learning, computer vision, robotics and
              embedded systems. I have a particular fondness for emergent
              behaviour, from cellular automata and procedural generation to
              physical AI and simulation.
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
                    Designing, training and deploying machine learning models
                    across computer vision, NLP and reinforcement learning
                    applications.
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
                    Post-training Physical Intelligence's π0 policy for
                    specialized robotics, with simulation work in NVIDIA Isaac
                    Sim and Isaac Lab.
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
                    Completed the Infosys InStep internship in Bangalore, one of
                    a small number of international students selected
                    contributing to robotics policy development on-site.
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
