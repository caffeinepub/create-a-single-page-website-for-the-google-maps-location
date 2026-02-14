import { useState, useEffect } from 'react';

interface SafeImageProps {
  src: string;
  alt: string;
  fallbackSrc: string;
  className?: string;
}

export function SafeImage({ src, alt, fallbackSrc, className = '' }: SafeImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  // Reset state when src prop changes (e.g., switching categories/tabs)
  useEffect(() => {
    setImgSrc(src);
    setHasError(false);
  }, [src]);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImgSrc(fallbackSrc);
    }
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={handleError}
      loading="lazy"
    />
  );
}
