'use client';

import React, { useEffect, useRef, useState } from 'react';

const VectorField = ({ height = 1000 }) => { 
  const canvasRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const angleGridRef = useRef([]);
  const requestRef = useRef();
  const previousTimeRef = useRef();
  const containerRef = useRef(null);

  // Initialize the vector field
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        const canvas = canvasRef.current;
        const rect = canvas.getBoundingClientRect();
        
        // Set canvas dimensions to match display size
        canvas.width = rect.width;
        canvas.height = rect.height;
        
        setDimensions({
          width: rect.width,
          height: rect.height
        });
        
        // Initialize angle grid
        initializeAngleGrid(rect.width, rect.height);
      }
    };
    
    // Initialize angle grid
    const initializeAngleGrid = (width, height) => {
      const GRID_SPACING = 35;
      const MAX_WIDTH = Math.ceil(width / GRID_SPACING) + 1;
      const MAX_HEIGHT = Math.ceil(height / GRID_SPACING) + 1;
      
      const newAngleGrid = Array(MAX_WIDTH).fill().map(() => Array(MAX_HEIGHT).fill(0));
      
      // Generate base angles with coherence
      for (let i = 0; i < MAX_WIDTH; i++) {
        for (let j = 0; j < MAX_HEIGHT; j++) {
          if (i === 0 || j === 0) {
            // Random angles at the borders
            newAngleGrid[i][j] = Math.random() * Math.PI * 2;
          } else {
            // Slightly modified angle from neighbors for coherence
            const neighborAvg = (newAngleGrid[i-1][j] + newAngleGrid[i][j-1]) / 2;
            // Add small random deviation (±30 degrees)
            const deviation = (Math.random() * 60 - 30) * Math.PI / 180;
            newAngleGrid[i][j] = neighborAvg + deviation;
          }
        }
      }
      
      angleGridRef.current = newAngleGrid;
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();
    
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);
  
  // Handle mouse movement globally
  useEffect(() => {
    const handleMouseMove = (event) => {
      if (!containerRef.current || !canvasRef.current) return;
      
      const containerRect = containerRef.current.getBoundingClientRect();
      
      // Calculate mouse position relative to the container
      const relativeX = event.clientX - containerRect.left;
      const relativeY = event.clientY - containerRect.top;
      
      // Only update if mouse is within the container boundaries
      if (
        relativeX >= 0 && 
        relativeX <= containerRect.width && 
        relativeY >= 0 && 
        relativeY <= containerRect.height
      ) {
        setMousePosition({
          x: relativeX,
          y: relativeY
        });
      }
    };
    
    // Listen for mouse movement on the entire window
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  // Animation loop
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const animate = (time) => {
      if (previousTimeRef.current === undefined) {
        previousTimeRef.current = time;
      }
      
      const deltaTime = time - previousTimeRef.current;
      previousTimeRef.current = time;
      
      renderVectorField(deltaTime);
      requestRef.current = requestAnimationFrame(animate);
    };
    
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [dimensions, mousePosition]);
  
  // Render the vector field
  const renderVectorField = (deltaTime) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const { width, height } = dimensions;
    
    // Clear the canvas
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, width, height);
    
    // Constants
    const GRID_SPACING = 35;
    const NEEDLE_LENGTH = 16;
    const MOUSE_INFLUENCE_RADIUS = 300; // Increased radius for wider effect
    const MOUSE_INFLUENCE_STRENGTH = 0.8; // Increased strength for more pronounced effect
    
    // Slowly animate all needles
    const timeOffset = deltaTime * 0.0003;
    
    // Draw needles
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 2;
    
    for (let x = GRID_SPACING-8; x < width; x += GRID_SPACING) {
      for (let y = GRID_SPACING-2; y < height; y += GRID_SPACING) {
        const i = Math.floor(x / GRID_SPACING);
        const j = Math.floor(y / GRID_SPACING);
        
        if (!angleGridRef.current[i] || angleGridRef.current[i][j] === undefined) continue;
        
        // Get the base angle with slight animation
        let angle = angleGridRef.current[i][j];
        angle += Math.sin(Date.now() * 0.0005 + x * 0.005 + y * 0.005) * 0.1;
        
        // Calculate distance from mouse
        const dx = mousePosition.x - x;
        const dy = mousePosition.y - y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // If mouse is within influence radius, adjust angle
        if (distance < MOUSE_INFLUENCE_RADIUS) {
          // Direction to mouse
          const mouseAngle = Math.atan2(dy, dx);
          
          // Apply non-linear falloff based on distance
          // This creates stronger influence near the mouse and weaker far away
          const normalizedDistance = distance / MOUSE_INFLUENCE_RADIUS;
          const falloff = Math.pow(1 - normalizedDistance, 2); // Quadratic falloff
          
          // Apply stronger influence near the mouse
          const influence = falloff * MOUSE_INFLUENCE_STRENGTH;
          
          // Blend between the original angle and pointing to the mouse
          angle = angle * (1 - influence) + mouseAngle * influence;
          
          // Make needles closer to the mouse more visible
          ctx.lineWidth = 2 + falloff * 2;
        } else {
          ctx.lineWidth = 2;
        }
        
        // Calculate endpoints of the needle
        const x1 = x - (NEEDLE_LENGTH/2 * Math.cos(angle));
        const y1 = y - (NEEDLE_LENGTH/2 * Math.sin(angle));
        const x2 = x + (NEEDLE_LENGTH/2 * Math.cos(angle));
        const y2 = y + (NEEDLE_LENGTH/2 * Math.sin(angle));
        
        // Draw the line
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }
    }
  };
  
  return (
    <div className="vector-field-container" style={{ height }} ref={containerRef}>
      <canvas 
        ref={canvasRef}
        className="vector-field-canvas"
      />
      
      <style jsx>{`
        .vector-field-container {
          position: relative;
          width: 100%;
          overflow: hidden;
          opacity: 0.6;
        }
        
        .vector-field-canvas {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  );
};

export default VectorField;