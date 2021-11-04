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
    gsap.to('.cursor__ball--big', {
      duration: 0.4,
      x: e.clientX,
      y: e.clientY,
      boxShadow: '1 1 10px rgb(29 29 29 / 32%)',
    });
    gsap.to('.cursor__ball--text', {
      duration: 0.4,
      x: e.clientX - 40,
      y: e.clientY - 40,
    });
    gsap.to('.cursor__ball--small', {
      // duration: 0.1,
      x: e.clientX - 5,
      y: e.clientY - 7,
      // x: e.clientX,
      // y: e.clientY,
    });
  }

  function mouseEnterAnimations(e, text, dark) {
    gsap.to('.cursor__ball--small', {
      x: e.clientX,
      y: e.clientY,
      scale: () => (text ? 0 : 3),
    });
    if (text) {
      gsap.to('.cursor__ball--text', {
        x: e.clientX - 40,
        y: e.clientY - 40,
        duration: 0.3,
        scale: 1,
        text: text,

        backgroundColor: () => (dark ? '#fff' : '#000'),
        color: () => (dark ? '#000' : '#fff'),
      });
    }
  }

  function mouseLeaveAnimations(e, text) {
    gsap.to('.cursor__ball--text', {
      duration: 0.3,
      scale: 0,
      text: '',
    });
    gsap.to('.cursor__ball--small', {
      x: e.clientX,
      y: e.clientY,
      scale: 1,
    });
  }

  function onMouseHover(e) {
    const {
      image,
      text = false,
      color,
      dark = false,
      work = false,
    } = e.target.dataset;
    var title = e.target.querySelector('.work-title')
      ? e.target.querySelector('.work-title')
      : null;

    if (e.type === 'mouseenter') {
      mouseEnterAnimations(e, text, dark);

      if (work) {
        gsap.to(title, {
          color: color,
        });
      }

      if (image) {
        gsap.to('.cursor__ball--big', {
          duration: 0,
          backgroundImage: `url(${image})`,
        });
        gsap.to('.cursor__ball--big', {
          x: e.clientX,
          y: e.clientY,
          duration: 0.3,
          scale: 1.1,
        });
      }
    } else if (e.type === 'mouseleave') {
      mouseLeaveAnimations(e, text);

      if (work) {
        gsap.to(title, {
          color: () => (dark === true || dark == 'true' ? '#000' : '#fff'),
        });
      }
      gsap.to('.cursor__ball--big', {
        duration: 0.3,
        scale: 0,
      });
    }
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
