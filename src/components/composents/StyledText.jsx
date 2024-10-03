import React, { useEffect, useState } from 'react';

const StyledText = ({ text }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(document.body.classList.contains('dark'));

  useEffect(() => {
    const handleThemeChange = () => {
      setIsDarkTheme(document.body.classList.contains('dark'));
    };

    window.addEventListener('themeChange', handleThemeChange);
    handleThemeChange(); // Update on mount

    return () => {
      window.removeEventListener('themeChange', handleThemeChange);
    };
  }, []);

  useEffect(() => {
    if (isDarkTheme) {
      let interval;
      const elements = document.querySelectorAll('.StyledText span');

      const startBlinking = () => {
        if (elements.length === 0) return;

        const randomIndex = Math.floor(Math.random() * elements.length);
        const randomSpan = elements[randomIndex];

        interval = setInterval(() => {
          randomSpan.style.opacity = randomSpan.style.opacity === '0' ? '1' : '0';
        }, 100);

        setTimeout(() => {
          clearInterval(interval);
          randomSpan.style.opacity = '1';
        }, 3000);
      };

      const restartBlinking = () => {
        clearInterval(interval);
        startBlinking();
      };

      startBlinking();
      const restartTimeout = setInterval(restartBlinking, 5000 + Math.random() * 5000);

      return () => {
        clearInterval(interval);
        clearInterval(restartTimeout);
        elements.forEach(span => span.style.opacity = '1');
      };
    } else {
      // Clean up effects if light theme is active
      const elements = document.querySelectorAll('.StyledText span');
      elements.forEach(span => span.style.opacity = '1');
    }
  }, [isDarkTheme]);

  return (
    <div className="StyledText">
      {text.split('').map((char, index) => (
        <span key={index} className={`CHILD-${index + 1}`}>
          {char}
        </span>
      ))}
    </div>
  );
};

export default StyledText;
