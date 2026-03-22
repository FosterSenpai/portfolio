import { useEffect, useState } from "react";

export const StarBackground = () => {
  // States
  const [stars, setStars] = useState<
    {
      id: number;
      size: number;
      x: number;
      y: number;
      opacity: number;
      animationDuration: number;
    }[]
  >([]);
  const [meteors, setMeteors] = useState<
    {
      id: number;
      size: number;
      x: number;
      y: number;
      animationDelay: number;
      animationDuration: number;
    }[]
  >([]);

  // Generate once on component mount
  useEffect(() => {
    generateStars();
    generateMeteors();

    const handleResize = () => {
      generateStars();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Function to generate stars
  const generateStars = () => {
    // Get n stars from screen size
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 5000,
    );

    const newStars = [];

    // Create stars
    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1, // Between 1 and 4 px
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5, // Between 0.5 and 1
        animationDuration: Math.random() * 4 + 2, // Between 2 and 6 seconds
      });
    }
    setStars(newStars);
  };

  // Function to generate meteors
  const generateMeteors = () => {
    const numberOfMeteors = 4;
    const newMeteors = [];

    // Create meteors
    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20, // Start from top 20% of the screen
        animationDelay: Math.random() * 15, // Between 0 and 15 seconds
        animationDuration: Math.random() * 3 + 2, // Between 2 and 5 seconds
      });
    }
    setMeteors(newMeteors);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
          }}
        />
      ))}
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: meteor.size * 30 + "px",
            height: meteor.size * 2 + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDelay: meteor.animationDelay + "s",
            animationDuration: meteor.animationDuration + "s",
            animationFillMode: "backwards",
          }}
        />
      ))}
    </div>
  );
};
