// fadeIn function to create fade-in animations with directional movement
export const fadeIn = (direction) => {
  return {
    hidden: {
      y: direction === 'up' ? 80 : direction === 'down' ? -80 : 0, // Vertical offset based on direction
      opacity: 0, // Initial opacity
      x: direction === 'left' ? 80 : direction === 'right' ? -80 : 0, // Horizontal offset based on direction
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1, // Final opacity
      transition: {
        type: 'tween', // Type of transition
        duration: 1.4, // Duration of the animation
        ease: [0.25, 0.25, 0.25, 0.75], // Easing function
      },
    },
  };
};
