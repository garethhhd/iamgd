import { useEffect, useRef } from 'react';
import GSAP from 'gsap';

export default function HeaderTwo({ text }) {
  const el = useRef();

  useEffect(() => {
    console.log('hello');
    GSAP.fromTo(
      el.current,
      { y: '100%', autoAlpha: 0, rotation: -5 },
      {
        duration: 1,
        y: 0,
        autoAlpha: 1,
        rotation: 0,
        scrollTrigger: {
          trigger: el.current,
          start: 'top bottom-=250px',
          end: '+=200',
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <h2 className='max-w-md text-4xl font-black text-primary' ref={el}>
      {text}
    </h2>
  );
}
