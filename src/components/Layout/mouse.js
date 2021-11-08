import { useEffect } from 'react';

import gsap from 'gsap';
import { TextPlugin } from 'gsap/dist/TextPlugin';

gsap.registerPlugin(TextPlugin);

const Cursor = () => {
  useEffect(() => {
    addEventListeners();
    return () => removeEventListeners();
  }, []);

  const addEventListeners = () => {
    document.addEventListener('mousemove', onMouseMove), { passive: true };
  };

  const removeEventListeners = () => {
    document.removeEventListener('mousemove', onMouseMove);
  };

  function onMouseMove(e) {
    gsap.to('.cursor__ball--small', {
      x: e.clientX - 5,
      y: e.clientY - 7,
    });
  }

  return (
    <>
      <style jsx>
        {`
          .cursor {
            pointer-events: none;
          }
          .cursor__ball {
            position: fixed;
            top: 0;
            left: 0;
            z-index: 10000;
          }
          .cursor__ball circle {
            fill: #4cc1aa;
          }

          .cursor__ball--small {
            mix-blend-mode: difference;
          }
          @media (hover: none) and (pointer: coarse) {
            .cursor {
              display: none;
            }
          }
        `}
      </style>
      <div className='cursor'>
        <div className='shadow-lg cursor__ball cursor__ball--small'>
          <svg height='10' width='10'>
            <circle cx='5' cy='5' r='4' strokeWidth='0'></circle>
          </svg>
        </div>
      </div>
    </>
  );
};

export default Cursor;
