import React, { useEffect, useState } from 'react';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    // Countdown timer
    const countdownInterval = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    // Cleanup both timers
    return () => {
      clearTimeout(timer);
      clearInterval(countdownInterval);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div 
      style={{ backgroundColor: '#f1e1d9' }}
      className={`fixed top-0 left-0 w-full h-full flex flex-col gap-4 justify-center items-center z-50 ${
        !isLoading ? 'opacity-0 invisible transition-all duration-500' : ''
      }`}
    >
      <div 
        className="w-16 h-16 border-4 rounded-full animate-spin"
        style={{ 
          borderColor: '#5fcfdd',
          borderTopColor: '#009fb3'
        }}
      />
      <div 
        className="text-3xl font-bold"
        style={{ color: '#009fb3' }}
      >
        {countdown}
      </div>
    </div>
  );
};

export default Preloader;