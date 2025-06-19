import React, { useState, useEffect, useRef } from 'react';

const FadeAnimator = ({ 
  text = "This is your first paragraph that will animate smoothly.\n\nThis is the second paragraph with beautiful transitions.\n\nEach paragraph uses a different fade-based animation.\n\nChoose the style that best fits your content and design.",
  speed = 800,
  className = "",
  startAnimation = true,
  animationType = "fadeUp", // fadeUp, fadeDown, fadeLeft, fadeRight, fadeScale, fadeBlur
  triggerOnScroll = true, // New prop to enable scroll triggering
  threshold = 0.1 // How much of the element should be visible before triggering
}) => {
  const [visibleLines, setVisibleLines] = useState(0);
  const [hasTriggered, setHasTriggered] = useState(false);
  const containerRef = useRef(null);

  const lines = text.split('\n').filter(line => line.trim() !== '');

  // Intersection Observer for scroll triggering
  useEffect(() => {
    if (!triggerOnScroll) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTriggered) {
            setHasTriggered(true);
            startAnimationSequence();
          }
        });
      },
      {
        threshold: threshold,
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before element is fully visible
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [triggerOnScroll, threshold, hasTriggered]);

  // Original animation logic
  useEffect(() => {
    if (!startAnimation || triggerOnScroll) {
      if (!triggerOnScroll) {
        setVisibleLines(0);
      }
      return;
    }

    startAnimationSequence();
  }, [startAnimation, speed, lines.length, triggerOnScroll]);

  const startAnimationSequence = () => {
    setVisibleLines(0);

    const timer = setInterval(() => {
      setVisibleLines(prev => {
        if (prev >= lines.length) {
          clearInterval(timer);
          return prev;
        }
        return prev + 1;
      });
    }, speed);

    return () => clearInterval(timer);
  };

  const reset = () => {
    setVisibleLines(0);
    setHasTriggered(false);
  };

  const replay = () => {
    reset();
    setTimeout(() => {
      if (triggerOnScroll) {
        setHasTriggered(true);
      }
      startAnimationSequence();
    }, 100);
  };

  const getAnimationClasses = (index, animType) => {
    const isVisible = index < visibleLines;
    const baseClasses = "transition-all duration-700 ease-out";
    
    switch (animType) {
      case 'fadeUp':
        return `${baseClasses} transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`;
      case 'fadeDown':
        return `${baseClasses} transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`;
      case 'fadeLeft':
        return `${baseClasses} transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'}`;
      case 'fadeRight':
        return `${baseClasses} transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'}`;
      case 'fadeScale':
        return `${baseClasses} transform ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`;
      case 'fadeBlur':
        return `${baseClasses} ${isVisible ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'}`;
      default:
        return `${baseClasses} ${isVisible ? 'opacity-100' : 'opacity-0'}`;
    }
  };

  return (
    <div ref={containerRef} className={`max-w-4xl mx-auto ${className}`}>
      <div className="space-y-3">
        {lines.map((line, index) => (
          <div
            key={index}
            className={getAnimationClasses(index, animationType)}
            style={{
              transitionDelay: `${index * 0.1}s`
            }}
          >
            <p className="text-gray-800 leading-relaxed font-normal">
              {line}
            </p>
          </div>
        ))}
      </div>
      
      {/* Optional controls for testing */}
      {!triggerOnScroll && (
        <div className="flex gap-3 mt-6">
          <button
            onClick={replay}
            className="px-4 py-2 text-sm bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors duration-200"
          >
            Replay
          </button>
          <button
            onClick={reset}
            className="px-4 py-2 text-sm border border-gray-300 text-gray-700 rounded hover:bg-gray-50 transition-colors duration-200"
          >
            Reset
          </button>
        </div>
      )}
    </div>
  );
};

export default FadeAnimator;