import { cn } from "@/lib/utils";
import { act, useState } from "react";

// Skills List
const skills = [
  // Frontend
  { name: "TypeScript", level: 35, category: "frontend" },
  { name: "JavaScript", level: 25, category: "frontend" },
  { name: "HTML", level: 60, category: "frontend" },
  { name: "CSS", level: 40, category: "frontend" },

  // Backend
  { name: "Python", level: 90, category: "backend" },
  { name: "SQL", level: 75, category: "backend" },
  { name: "Linux / Bash", level: 70, category: "backend" },
  { name: "C++", level: 75, category: "backend" },
  { name: "Arduino", level: 70, category: "backend" },
  { name: "FastAPI / Flask", level: 65, category: "backend" },
  { name: "REST APIs", level: 70, category: "backend" },
  { name: "Node.js", level: 15, category: "backend" },

  // ML
  { name: "PyTorch", level: 85, category: "ml" },
  { name: "HuggingFace", level: 80, category: "ml" },
  { name: "NumPy / Pandas", level: 85, category: "ml" },
  { name: "Matplotlib / Seaborn", level: 90, category: "ml" },
  { name: "OpenCV", level: 80, category: "ml" },
  { name: "CUDA / GPU", level: 75, category: "ml" },
  { name: "Weights & Biases", level: 50, category: "ml" },
  { name: "Jupyter Notebooks", level: 85, category: "ml" },

  // Robotics
  { name: "Isaac Sim / Lab", level: 70, category: "robotics" },
  { name: "URDF / SDF", level: 75, category: "robotics" },
  { name: "Physical Intelligence (π0)", level: 60, category: "robotics" },

  // Graphics
  { name: "GLSL / Shaders", level: 50, category: "graphics" },
  { name: "Unreal Engine", level: 60, category: "graphics" },
  { name: "GameMaker", level: 60, category: "graphics" },
  { name: "NLTK", level: 80, category: "graphics" },
  { name: "Pygame", level: 80, category: "graphics" },
  { name: "SFML", level: 70, category: "graphics" },

  // Tools
  { name: "Git / GitHub", level: 85, category: "tools" },
  { name: "Figma", level: 75, category: "tools" },
  { name: "Jira", level: 60, category: "tools" },
  { name: "Docker", level: 40, category: "tools" },

  // 3D / Design
  { name: "Fusion 360", level: 45, category: "3d" },
  { name: "Blender", level: 30, category: "3d" },
];

const categories = [
  "all",
  "frontend",
  "backend",
  "ml",
  "robotics",
  "graphics",
  "tools",
  "3d",
];

export const SkillsSection = () => {
  // State for active category filter
  const [activeCategory, setActiveCategory] = useState("all");

  // Filter skills based on active category
  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory,
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground/70 hover:bg-secondary",
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              {/* Skill Text */}
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              {/* Skill Bar */}
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>
              {/* Skill % */}
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
