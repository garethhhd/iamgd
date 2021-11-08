import GSAP from 'gsap';

const select = (e) => document.querySelector(e);

export const handleLogoTilt = () => {
  select('body').addEventListener('mousemove', moveLogo);
};

function moveLogo(e) {
  const { offsetX, offsetY, target } = e;
  const { clientWidth, clientHeight } = target;

  // console.log(offsetX, offsetY, clientWidth, clientHeight);
  // get 0 0 in the center
  const xPos = offsetX / clientWidth - 0.5;
  const yPos = offsetY / clientHeight - 0.5;

  GSAP.to('.logo', {
    duration: 1.2,
    rotationY: xPos * 15,
    rotationX: yPos * 15,
    ease: 'power3.out',
  });
}

export const handleHover = () => {
  const links = GSAP.utils.toArray('a');

  links.forEach((link) => {
    link.addEventListener('mouseleave', (e) => {
      link.classList.add('animate-out');
    });
    link.ontransitionend = function () {
      link.classList.remove('animate-out');
    };
  });
};
