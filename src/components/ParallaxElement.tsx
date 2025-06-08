
interface ParallaxElementProps {
  children: React.ReactNode;
  intensity?: number;
  className?: string;
}

const ParallaxElement = ({ children, intensity = 0.3, className = "" }: ParallaxElementProps) => {
  return (
    <div 
      className={`parallax-element ${className}`}
      style={{ 
        transform: `translateZ(${intensity * 20}px)`,
        transformStyle: 'preserve-3d'
      }}
    >
      {children}
    </div>
  );
};

export default ParallaxElement;
