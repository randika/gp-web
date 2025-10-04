import React, { useState, useCallback } from 'react';

export default function ImgWithFallback({ src, alt, className = '', style, fetchpriority, loading = 'lazy', ...rest }) {
  const base = import.meta.env.BASE_URL || '/';
  const fallback = base + 'placeholder.svg';
  const [currentSrc, setCurrentSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);

  const handleError = useCallback(() => {
    if (currentSrc !== fallback) {
      setCurrentSrc(fallback);
      setIsLoading(false);
    }
  }, [currentSrc, fallback]);

  const handleLoad = () => setIsLoading(false);

  return (
    <img
      {...(fetchpriority ? { fetchpriority } : {})}
      loading={loading}
      decoding="async"
      src={currentSrc}
      alt={alt}
      onLoad={handleLoad}
      onError={handleError}
      className={`${className} ${isLoading ? 'img-skeleton' : ''}`.trim()}
      style={style}
      {...rest}
    />
  );
}
