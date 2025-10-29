import { useState, useEffect, useRef } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  priority?: boolean; // Load immediately without lazy loading
  sizes?: string; // Responsive sizes attribute
}

export function OptimizedImage({ 
  src, 
  alt, 
  className = '', 
  style,
  priority = false,
  sizes = '100vw'
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '50px', // Start loading slightly before visible
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [priority]);

  // Convert image URL to WebP if possible
  const getWebPUrl = (url: string) => {
    // For Unsplash images, we can request WebP format
    if (url.includes('unsplash.com')) {
      return url.replace(/&fm=jpg/, '&fm=webp').replace(/&fm=png/, '&fm=webp');
    }
    return url;
  };

  const webpSrc = getWebPUrl(src);

  return (
    <div ref={imgRef} className={className} style={style}>
      {isInView && (
        <picture>
          {/* WebP source for modern browsers */}
          <source srcSet={webpSrc} type="image/webp" sizes={sizes} />
          {/* Fallback to original format */}
          <img
            src={src}
            alt={alt}
            loading={priority ? 'eager' : 'lazy'}
            onLoad={() => setIsLoaded(true)}
            className={`w-full h-full transition-opacity duration-500 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ objectFit: 'cover' }}
          />
        </picture>
      )}
      {!isInView && (
        <div className="w-full h-full bg-gray-200 animate-pulse" />
      )}
    </div>
  );
}
