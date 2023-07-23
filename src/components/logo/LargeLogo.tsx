import { useEffect, useState } from 'react';

interface Props {
  className?: string;
  height: number;
  isScrolled?: boolean;
}

const LargeLogoOld = ({ height, className, isScrolled }: Props) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [logoHeight, setHeight] = useState(height);
  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth));
    console.log(isScrolled);
    if (width < 768) {
      setHeight(isScrolled ? height : height * 0.6);
    } else if (width < 992) {
      setHeight(isScrolled ? height : height * 0.7);
    } else {
      setHeight(height);
    }
  }, [width, height, isScrolled]);

  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      id="appstract"
      height={logoHeight ? logoHeight : '100%'}
      viewBox="0 0 1000 217"
    >
      <svg
        viewBox="0 0 396 86"
        data-background-color="#ffffff0"
        preserveAspectRatio="xMidYMid meet"
        height="217"
        width="1000"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="logo-group">
          <g id="text">
            <path
              id="text"
              fill={'var(--purple-100)'}
              data-fill-palette-color="primary"
              d="M129.8,55.07c-2.92,0-5.44-0.78-7.55-2.33c-2.12-1.54-3.73-3.62-4.84-6.24   c-1.12-2.62-1.67-5.45-1.67-8.5l0,0c0-3.31,0.63-6.28,1.9-8.89c1.26-2.62,3.13-4.69,5.6-6.21c2.46-1.53,5.41-2.29,8.85-2.29l0,0   c1,0,2.26,0.05,3.77,0.16c1.5,0.11,2.77,0.26,3.82,0.43l0,0h4.38v27.14c0,0.61,0.14,1.08,0.43,1.4c0.28,0.33,0.7,0.5,1.27,0.5l0,0   c0.74,0,1.33-0.37,1.77-1.11l0,0l3.66,2.42c-0.57,1.09-1.38,1.95-2.45,2.58c-1.07,0.64-2.22,0.95-3.44,0.95l0,0   c-1.61,0-2.99-0.47-4.15-1.41c-1.16-0.93-1.78-2.03-1.87-3.3l0,0v0.07c-0.74,1.44-1.98,2.57-3.73,3.4   C133.81,54.66,131.89,55.07,129.8,55.07L129.8,55.07z M130.19,50.23c1.74,0,3.29-0.46,4.64-1.37c1.35-0.92,2.38-2.07,3.07-3.47l0,0   c0.39-0.74,0.62-1.37,0.69-1.9c0.06-0.52,0.09-1.11,0.09-1.77l0,0V25.91l-2.75-0.2c-2.18-0.17-3.64-0.26-4.38-0.26l0,0   c-3.31,0-5.89,1.18-7.72,3.53c-1.83,2.35-2.75,5.34-2.75,8.96l0,0c0,3.36,0.81,6.24,2.42,8.66   C125.14,49.02,127.36,50.23,130.19,50.23L130.19,50.23z M170.47,20.81c3.05,0,5.65,0.76,7.81,2.29c2.16,1.53,3.8,3.56,4.9,6.11   c1.12,2.55,1.67,5.36,1.67,8.41l0,0c0,3.36-0.65,6.35-1.94,8.98c-1.28,2.64-3.16,4.71-5.62,6.21c-2.46,1.51-5.34,2.26-8.66,2.26   l0,0c-1.31,0-3.53-0.2-6.67-0.59l0,0v16.94h-5.17V31.53c0-3.4-0.92-5.89-2.75-7.45l0,0l3.6-3.33c0.65,0.39,1.31,0.97,1.96,1.73   c0.65,0.77,1.2,1.65,1.63,2.65l0,0c1.05-1.31,2.42-2.35,4.12-3.14C167.07,21.2,168.77,20.81,170.47,20.81L170.47,20.81z    M168.32,50.23c3.66,0,6.44-1.11,8.33-3.33c1.9-2.22,2.85-5.19,2.85-8.89l0,0c0-3.49-0.81-6.42-2.42-8.8   c-1.61-2.37-3.77-3.56-6.47-3.56l0,0c-2.14,0-4.07,0.68-5.79,2.05c-1.72,1.38-2.66,3.13-2.84,5.27l0,0v16.87   C164.59,50.1,166.7,50.23,168.32,50.23L168.32,50.23z M206.05,20.81c3.05,0,5.65,0.76,7.81,2.29c2.16,1.53,3.8,3.56,4.9,6.11   c1.12,2.55,1.67,5.36,1.67,8.41l0,0c0,3.36-0.65,6.35-1.94,8.98c-1.29,2.64-3.16,4.71-5.62,6.21c-2.46,1.51-5.34,2.26-8.66,2.26   l0,0c-1.31,0-3.53-0.2-6.67-0.59l0,0v16.94h-5.17V31.53c0-3.4-0.92-5.89-2.75-7.45l0,0l3.6-3.33c0.65,0.39,1.31,0.97,1.96,1.73   c0.65,0.77,1.2,1.65,1.63,2.65l0,0c1.05-1.31,2.42-2.35,4.12-3.14C202.64,21.2,204.34,20.81,206.05,20.81L206.05,20.81z    M203.89,50.23c3.65,0,6.43-1.11,8.33-3.33s2.85-5.19,2.85-8.89l0,0c0-3.49-0.81-6.42-2.43-8.8c-1.6-2.37-3.76-3.56-6.46-3.56l0,0   c-2.14,0-4.07,0.68-5.79,2.05c-1.72,1.38-2.66,3.13-2.84,5.27l0,0v16.87C200.16,50.1,202.28,50.23,203.89,50.23L203.89,50.23z    M237.03,55.07c-4.8,0-9.02-1.83-12.69-5.49l0,0l3.07-3.6c1.66,1.44,3.23,2.49,4.71,3.16c1.48,0.68,3.05,1.02,4.71,1.02l0,0   c2.14,0,3.83-0.47,5.07-1.41c1.24-0.93,1.86-2.23,1.86-3.88l0,0c0-1-0.25-1.81-0.75-2.42c-0.51-0.61-1.22-1.15-2.16-1.61   c-0.94-0.45-2.5-1.12-4.68-1.99l0,0c-2.4-0.96-4.26-1.8-5.58-2.52c-1.33-0.71-2.39-1.63-3.18-2.75c-0.78-1.11-1.18-2.49-1.18-4.15   l0,0c0-2.7,0.96-4.88,2.88-6.54c1.92-1.66,4.4-2.48,7.45-2.48l0,0c1.79,0,3.59,0.29,5.4,0.88c1.8,0.59,3.23,1.35,4.28,2.26l0,0   l-2.29,3.86c-1.96-1.44-4.25-2.16-6.87-2.16l0,0c-1.66,0-2.97,0.34-3.95,1.01c-0.99,0.68-1.48,1.61-1.48,2.79l0,0   c0,1.22,0.49,2.17,1.48,2.84c0.98,0.68,2.66,1.5,5.06,2.46l0,0c2.7,1.09,4.82,2.07,6.34,2.94c1.53,0.87,2.68,1.88,3.47,3.03   c0.78,1.16,1.18,2.61,1.18,4.36l0,0c0,3.1-1.13,5.6-3.4,7.52S240.6,55.07,237.03,55.07L237.03,55.07z M264.69,55.07   c-3.05,0-5.35-0.93-6.89-2.79c-1.55-1.85-2.33-4.43-2.33-7.74l0,0V13.29h5.36v8.44h10v4.84h-10v17.98c0,1.57,0.33,2.89,0.98,3.95   c0.65,1.07,1.61,1.61,2.88,1.61l0,0c1.26,0,2.33-0.36,3.2-1.09c0.87-0.71,1.55-1.68,2.03-2.9l0,0l4.18,2.68   C272.01,52.98,268.87,55.07,264.69,55.07L264.69,55.07z M294.18,20.61c1.26,0,2.77,0.22,4.51,0.65l0,0l-0.13,5.17   c-1.74-0.48-3.16-0.72-4.25-0.72l0,0c-2.05,0-3.64,0.48-4.77,1.44l0,0c-1.31,1.05-2.44,2.44-3.4,4.19l0,0v23.15h-5.36V31.34   c0-3.4-0.92-5.89-2.75-7.45l0,0l3.6-3.33c0.65,0.39,1.32,0.98,1.99,1.77c0.68,0.78,1.24,1.68,1.67,2.68l0,0   c0.96-1.22,1.94-2.16,2.94-2.81l0,0C289.89,21.13,291.87,20.61,294.18,20.61L294.18,20.61z M315.24,55.07   c-2.92,0-5.44-0.78-7.56-2.33c-2.11-1.54-3.72-3.62-4.84-6.24c-1.11-2.62-1.66-5.45-1.66-8.5l0,0c0-3.31,0.63-6.28,1.9-8.89   c1.26-2.62,3.13-4.69,5.58-6.21c2.47-1.53,5.42-2.29,8.87-2.29l0,0c1,0,2.25,0.05,3.75,0.16c1.51,0.11,2.79,0.26,3.83,0.43l0,0   h4.38v27.14c0,0.61,0.14,1.08,0.42,1.4c0.29,0.33,0.71,0.5,1.28,0.5l0,0c0.74,0,1.33-0.37,1.77-1.11l0,0l3.66,2.42   c-0.57,1.09-1.39,1.95-2.46,2.58c-1.06,0.64-2.21,0.95-3.43,0.95l0,0c-1.61,0-3-0.47-4.16-1.41c-1.15-0.93-1.77-2.03-1.86-3.3l0,0   v0.07c-0.74,1.44-1.98,2.57-3.73,3.4S317.33,55.07,315.24,55.07L315.24,55.07z M315.63,50.23c1.74,0,3.29-0.46,4.64-1.37   c1.35-0.92,2.38-2.07,3.07-3.47l0,0c0.39-0.74,0.62-1.37,0.68-1.9c0.07-0.52,0.1-1.11,0.1-1.77l0,0V25.91l-2.75-0.2   c-2.18-0.17-3.64-0.26-4.38-0.26l0,0c-3.31,0-5.89,1.18-7.72,3.53c-1.83,2.35-2.75,5.34-2.75,8.96l0,0c0,3.36,0.81,6.24,2.42,8.66   C310.57,49.02,312.79,50.23,315.63,50.23L315.63,50.23z M354.52,54.81c-4.97,0-8.85-1.44-11.64-4.32   c-2.79-2.88-4.18-6.87-4.18-11.97l0,0c0-3.49,0.65-6.6,1.94-9.32c1.28-2.72,3.08-4.83,5.39-6.34c2.31-1.5,4.97-2.25,7.98-2.25l0,0   c2.4,0,4.57,0.49,6.51,1.46c1.94,0.99,3.42,2.33,4.45,4.03c1.02,1.7,1.44,3.57,1.27,5.62l0,0H361c0.17-1.79-0.37-3.28-1.63-4.49   c-1.26-1.19-2.96-1.79-5.1-1.79l0,0c-2.01,0-3.78,0.54-5.32,1.63c-1.55,1.09-2.75,2.64-3.6,4.64c-0.85,2.01-1.28,4.29-1.28,6.87   l0,0c0,3.66,0.91,6.47,2.72,8.44c1.8,1.96,4.39,2.94,7.74,2.94l0,0c1.48,0,2.99-0.26,4.51-0.78c1.53-0.52,3.44-1.42,5.75-2.68l0,0   l2.48,4.05C363.44,53.39,359.19,54.81,354.52,54.81L354.52,54.81z M382.77,55.07c-3.05,0-5.35-0.93-6.89-2.79   c-1.55-1.85-2.33-4.43-2.33-7.74l0,0V13.29h5.36v8.44h10v4.84h-10v17.98c0,1.57,0.33,2.89,0.98,3.95c0.65,1.07,1.61,1.61,2.88,1.61   l0,0c1.26,0,2.33-0.36,3.2-1.09c0.87-0.71,1.55-1.68,2.03-2.9l0,0l4.18,2.68C390.09,52.98,386.96,55.07,382.77,55.07L382.77,55.07z   "
            />
          </g>
          <g id="logo">
            <path
              id="cloud"
              fill="none"
              stroke={'var(--orange-400'}
              stroke-width="2"
              stroke-miterlimit="10"
              data-fill-palette-color="accent"
              d="M13.23,69.87c-3.52,0.02-6.63-3.07-7.91-4.79c-3.57-4.8-3.24-11.27,0.39-16.02   c2.04-2.67,6.69-5.01,8.84-5.15l5.49-0.2l0.17-2.89c0.18-3.06,1.42-5.97,3.55-8.06c1.41-1.39,3.06-2.48,4.86-3.22   c1.55-0.63,3.75-1.04,5.39-0.92c0.82,0.06,1.64,0.24,2.43,0.51l3.26,1.42l0.25-3.16c0.11-1.33,0.43-2.9,0.72-3.71   c0.66-1.86,2-3.7,3.03-5.09c1.13-1.52,2.88-2.84,3.64-3.39c4.29-3.05,9.82-3.46,14.46-1.09c1.12,0.57,2.97,1.67,4.77,3.48   c1.5,1.51,3.64,4.73,4.22,6.84l0.76,3.77l3.16-3.55c2.22-2.32,5.18-3.75,8.3-3.87c7.31-0.28,14.07,6.01,12.5,13.96l-0.7,3.7   l0.63,0.27c3.36,2.35,3.66,3.63,4.3,6.8l1.6,0.91c5.3,3.38,6.14,7.74,6.28,11.45c0.11,3.01-1.23,5.68-3.17,7.88   c-2.35,2.66-3.52,3.12-3.76,3.22c-1.59,0.65-4,0.91-5.65,0.91H57.2L13.23,69.87L13.23,69.87z"
            />
          </g>
        </g>
      </svg>
    </svg>
  );
};

export default LargeLogoOld;
