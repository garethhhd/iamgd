import { useEffect } from 'react';

export const WorkItem = ({ work, index }) => {
  useEffect(() => {
    const item = document.querySelector(`.work-item-${index}`);
    addEventListeners(item);
    return () => removeEventListeners(item);
  }, []);

  const addEventListeners = (item) => {
    item.addEventListener('mousemove', onMouseMove), { passive: true };
  };

  const removeEventListeners = (item) => {
    item.removeEventListener('mouseleave', onMouseMove);
  };

  function onMouseMove(e) {
    // console.log('mouseMove', e);
  }

  return (
    <li
      key={work.title}
      className={`overflow-hidden relative work-item-${index}`}
    >
      <a
        href={work.url}
        className='relative block my-6 overflow-hidden sm:space-x-6 sm:flex sm:items-center sm:justify-between md:my-12'
      >
        <p className='text-3xl transform translate-y-full md:text-5xl work-title'>
          {work.title}
        </p>
        <div className='flex mt-2 space-x-4 text-sm sm:flex-col sm:text-right sm:mt-0'>
          <p className='work-info'>{work.job}</p>
          <p className='work-info'>{work.business}</p>
        </div>
      </a>
      <div className='block w-full h-px transform -translate-x-full bg-white work-line'></div>
      <div className='absolute top-0 left-0 w-16 h-16 opacity-0 pointer-events-none hover-reveal'>
        <div className='relative w-full h-full overflow-hidden hover-reveal__inner'>
          <img
            src={work.image}
            alt=''
            className='object-fill hover-reveal__img'
          />
        </div>
      </div>
    </li>
  );
};
