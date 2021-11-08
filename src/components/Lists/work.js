const WORK = [
  {
    title: 'Studio Mindset',
    job: 'Development',
    business: 'Mindset',
    url: 'https://studiomindset.co.uk/',
    image:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
  },
  {
    title: 'Hawthorne Consulting',
    job: 'Development',
    business: 'Mindset',
    url: 'https://hawthorneconsulting.co.uk/',
    image:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
  },
  {
    title: 'HMSNI',
    job: 'Development',
    business: 'Mindset',
    url: 'https://hmsni.co.uk/',
    image:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
  },
  {
    title: 'Nocturne',
    job: 'Development',
    business: 'Freelance',
    url: 'https://nocturnelabel.com/',
    image:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
  },
];

import Container from '../Layout/container';
import HeaderTwo from '../Typography/headerTwo';
import { WorkItem } from './WorkItem';
import GSAP from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
GSAP.registerPlugin(ScrollTrigger);

import { useEffect } from 'react';
export const Work = () => {
  useEffect(() => {
    GSAP.utils.toArray('.work-list li').forEach((item, index) => {
      let title = item.querySelector('.work-title');
      let line = item.querySelector('.work-line');
      let info = item.querySelectorAll('.work-info');

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
      <HeaderTwo text='Selected Work' />
      <ul className='work-list'>
        {WORK.map((item, index) => (
          <WorkItem work={item} index={index} />
        ))}
      </ul>
    </Container>
  );
};
