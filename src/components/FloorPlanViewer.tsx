import { useState, useRef, useEffect } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ZoomIn, ZoomOut, Maximize2 } from 'lucide-react';

interface FloorPlanViewerProps {
  src: string;
  alt: string;
}

export function FloorPlanViewer({ src, alt }: FloorPlanViewerProps) {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [initialScale, setInitialScale] = useState(1);
  const [imageLoaded, setImageLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  // Calculate initial scale to fit image to container height
  useEffect(() => {
    const calculateInitialScale = () => {
      if (containerRef.current && imageRef.current && imageLoaded) {
        const containerHeight = containerRef.current.clientHeight;
        const imageHeight = imageRef.current.naturalHeight;
        
        if (imageHeight > 0) {
          const fitScale = containerHeight / imageHeight;
          setInitialScale(fitScale);
          setScale(fitScale);
        }
      }
    };

    calculateInitialScale();
    window.addEventListener('resize', calculateInitialScale);
    return () => window.removeEventListener('resize', calculateInitialScale);
  }, [imageLoaded]);

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.1 : 0.1;
    setScale(prev => Math.min(Math.max(initialScale, prev + delta), 5));
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const zoomIn = () => {
    setScale(prev => Math.min(prev + 0.5, 5));
  };

  const zoomOut = () => {
    setScale(prev => {
      const newScale = Math.max(prev - 0.5, initialScale);
      if (newScale === initialScale) {
        setPosition({ x: 0, y: 0 });
      }
      return newScale;
    });
  };

  const resetZoom = () => {
    setScale(initialScale);
    setPosition({ x: 0, y: 0 });
  };

  useEffect(() => {
    const handleMouseUpWindow = () => setIsDragging(false);
    window.addEventListener('mouseup', handleMouseUpWindow);
    return () => window.removeEventListener('mouseup', handleMouseUpWindow);
  }, []);

  return (
    <div className="relative w-full h-full flex flex-col">
      {/* Controls */}
      <div className="absolute top-4 right-4 z-10 flex gap-2">
        <button
          onClick={zoomIn}
          className="bg-white/90 hover:bg-white p-2 rounded shadow-lg transition-colors"
          style={{ fontFamily: "'Figtree', sans-serif" }}
        >
          <ZoomIn className="w-5 h-5 text-[#1A2551]" />
        </button>
        <button
          onClick={zoomOut}
          className="bg-white/90 hover:bg-white p-2 rounded shadow-lg transition-colors"
          style={{ fontFamily: "'Figtree', sans-serif" }}
        >
          <ZoomOut className="w-5 h-5 text-[#1A2551]" />
        </button>
        <button
          onClick={resetZoom}
          className="bg-white/90 hover:bg-white p-2 rounded shadow-lg transition-colors"
          style={{ fontFamily: "'Figtree', sans-serif" }}
        >
          <Maximize2 className="w-5 h-5 text-[#1A2551]" />
        </button>
      </div>

      {/* Zoom level indicator */}
      {scale > 1 && (
        <div className="absolute top-4 left-4 z-10 bg-white/90 px-3 py-1.5 rounded shadow-lg">
          <span 
            className="text-[#1A2551]"
            style={{ 
              fontFamily: "'Figtree', sans-serif",
              fontSize: "0.875rem"
            }}
          >
            {Math.round(scale * 100)}%
          </span>
        </div>
      )}

      {/* Image container */}
      <div
        ref={containerRef}
        className="flex-1 overflow-hidden bg-white flex items-start justify-center"
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        style={{
          cursor: isDragging ? 'grabbing' : 'grab'
        }}
      >
        <div
          style={{
            transform: `scale(${scale}) translate(${position.x / scale}px, ${position.y / scale}px)`,
            transition: isDragging ? 'none' : 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            transformOrigin: 'top center'
          }}
        >
          <ImageWithFallback
            src={src}
            alt={alt}
            className="max-w-full max-h-full object-contain select-none pointer-events-none"
            style={{ userSelect: 'none' }}
            onLoad={() => setImageLoaded(true)}
            ref={imageRef}
          />
        </div>
      </div>

      {/* Instructions */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 bg-white/90 px-4 py-2 rounded shadow-lg">
        <p 
          className="text-[#6B7280] text-center"
          style={{ 
            fontFamily: "'Figtree', sans-serif",
            fontSize: "0.875rem"
          }}
        >
          Scroll to zoom • Drag to pan
        </p>
      </div>
    </div>
  );
}