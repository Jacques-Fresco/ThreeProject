import { useState, useEffect } from 'react';

const useWindowResize = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 952);
  const [initialHeight, setInitialHeight] = useState(645);
  const otherElementsHeight = 80;

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth <= 952);
  };

  useEffect(() => {
    const updateInitialHeight = () => {
      const documentHeight = document.documentElement.clientHeight;
      const availableHeight = documentHeight - otherElementsHeight;

      setInitialHeight(availableHeight);
    };

    window.addEventListener('resize', handleResize);
    updateInitialHeight(); // Вызов функции сразу после монтирования компонента

    console.log("initialHeight", initialHeight);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Зависимость useEffect пуста, чтобы код выполнялся только при монтировании

  useEffect(() => {
    if (!isSmallScreen) {
      setInitialHeight(645);
    }
  }, [isSmallScreen]); // Зависимость useEffect изменится только при изменении isSmallScreen

  return initialHeight;
};

export default useWindowResize;