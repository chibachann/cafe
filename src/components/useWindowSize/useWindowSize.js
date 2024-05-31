// src/components/useWindowSize/useWindowSize.js
import { useState, useEffect } from 'react';

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    size: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      let size = 'large';
      if (width <= 767) {
        size = 'small';
      } else if (width <= 1023) {
        size = 'medium';
      }
      setWindowSize({ width, size });
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

export default useWindowSize;
