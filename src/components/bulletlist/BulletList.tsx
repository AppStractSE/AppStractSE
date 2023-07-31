import React, { useEffect, useRef, useState } from 'react';
import { GoDot, GoDotFill } from 'react-icons/go';
import styles from './styling.module.scss';

const BulletList = ({ children }: { children: React.ReactNode }) => {
  const childrenLength = React.Children.count(children);
  const [currentDot, setCurrentDot] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleDotClick = (index: number) => {
    if (containerRef.current) {
      const childElement = containerRef.current.children[index] as HTMLElement;
      const delay = 300;
      setTimeout(() => {
        setCurrentDot(index);
      }, delay);
      childElement?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const container = containerRef.current;
        const containerWidth = container.offsetWidth;
        const scrollLeft = container.scrollLeft;
        const index = Math.round(scrollLeft / containerWidth);
        setCurrentDot(index);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);

      return () => {
        container.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <>
      <div className="p-0 flex justify-content-center">
        <div className={`col-12 grid p-0 ${styles.container}`} ref={containerRef}>
          {children}
        </div>
      </div>
      <div className="flex justify-content-center gap-2 my-4 lg:hidden">
        {Array.from({ length: childrenLength }).map((_, i) => (
          <div key={i} className="p-1 flex justify-content-center cursor-pointer" onClick={() => handleDotClick(i)}>
            {currentDot === i ? <GoDotFill size={24} /> : <GoDot size={24} />}
          </div>
        ))}
      </div>
    </>
  );
};

export default BulletList;
