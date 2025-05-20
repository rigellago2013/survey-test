import React, { useEffect, useRef } from 'react';
import { Beaker, Activity, Droplet, FlaskConical} from 'lucide-react';

// Separated Particle Canvas Component
const ParticleCanvas = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);
    
    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 1.5; // increased size
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.color = this.getRandomColor();
      }
      
      getRandomColor() {
        const colors = [
          'rgba(59, 130, 246, ', // blue - main brand color
          'rgba(31, 69, 140, ',  // cyan/teal - matches flask colors
          'rgba(245, 158, 11, ', // amber - matches orange flask
          'rgba(147, 197, 253, ', // light blue - matches background
        ];
        
        const selectedColor = colors[Math.floor(Math.random() * colors.length)];
        const opacity = Math.random() * 0.25 + 0.15; // increased opacity
        return selectedColor + opacity + ')';
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }
      
      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    // Create particles
    const particlesArray = [];
    const particleCount = Math.min(60, window.innerWidth / 25); // Reduced slightly for subtlety
    
    for (let i = 0; i < particleCount; i++) {
      particlesArray.push(new Particle());
    }
    
    // Draw connections between particles
    const connectParticles = () => {
      const maxDistance = 150;
      
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            const opacity = 1 - (distance / maxDistance);
            ctx.strokeStyle = `rgba(59, 130, 246, ${opacity * 0.3})`; // increased opacity of connections
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    };
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      
      connectParticles();
      requestAnimationFrame(animate);
    };
    
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 z-0"
      style={{ opacity: 0.8 }}
    />
  );
};

// This is a background component that ONLY provides the animated background
// without any content - you'll add your own content separately
const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 top-0 overflow-hidden pointer-events-none">
      {/* Particle animation background */}
      <ParticleCanvas />
      
      {/* <div className="absolute top-20 left-40 text-blue-600 opacity-15 animate-float1">
       
         <FlaskConical size={80} />
      </div>
      <div className="absolute bottom-20 right-10 text-amber-600 opacity-20 animate-float2">
        <Activity size={80} />
      </div>
      <div className="absolute top-40 right-40 text-cyan-600 opacity-20 animate-float3">
        <Droplet size={80} />
      </div>
      <div className="absolute top-1/2 left-1/4 text-blue-600 opacity-20 animate-float3">
        <Beaker size={80} />
      </div>
       */}
      {/* Gradient overlay */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-50/30 to-transparent"></div>
    </div>
  );
};

export default AnimatedBackground;
export { ParticleCanvas };