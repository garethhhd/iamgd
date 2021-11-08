import Container from '../Layout/container';
import HeaderTwo from '../Typography/headerTwo';
import { ListItem } from './ListItem';
import GSAP from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
GSAP.registerPlugin(ScrollTrigger);

import { useEffect } from 'react';
export const List = ({ items, title }) => {
  useEffect(() => {
    GSAP.utils.toArray('.animate-list li').forEach((item, index) => {
      let title = item.querySelector('.list-title');
      let line = item.querySelector('.list-line');
      let info = item.querySelectorAll('.list-info');

      const tl = GSAP.timeline({
        delay: index * 3,
        ease: 'expo.inOut',
        scrollTrigger: {
          trigger: item,
          start: 'top bottom-=300px',
          end: '+=200',
          scrub: 1,
        },
      });

      tl.fromTo(
        title,
        { y: '100%', autoAlpha: 0, rotation: -5 },
        {
          duration: 1,
          y: 0,
          autoAlpha: 1,
          rotation: 0,
        }
      );
      tl.fromTo(
        info,
        { y: '100%', autoAlpha: 0, rotation: -5 },
        {
          duration: 1,
          rotation: 0,
          y: 0,
          autoAlpha: 1,
          stagger: 0.5,
        }
      );

      tl.fromTo(
        line,
        { x: '-100%' },
        {
          duration: 2,
          x: '0',
        },
        0
      );
    });
  }, []);

  return (
    <Container>
      <HeaderTwo text={title} />
      <ul className='animate-list'>
        {items.map((item, index) => (
          <ListItem item={item} index={index} />
        ))}
      </ul>
    </Container>
  );
};
