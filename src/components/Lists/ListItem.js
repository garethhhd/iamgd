import { useEffect } from 'react';
import Link from 'next/link';

export const ListItem = ({ item, index }) => {
  useEffect(() => {
    const item = document.querySelector(`.list-item-${index}`);
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
      key={item.title}
      className={`overflow-hidden relative list-item-${index}`}
    >
      {item.type == 'work' ? (
        <WorkItem item={item} />
      ) : (
        <BlogItem item={item} />
      )}
      <div className='block w-full h-px transform -translate-x-full bg-white list-line'></div>
      {/* <div className='absolute top-0 left-0 w-16 h-16 opacity-0 pointer-events-none hover-reveal'>
        <div className='relative w-full h-full overflow-hidden hover-reveal__inner'>
          <img
            src={item.image}
            alt=''
            className='object-fill hover-reveal__img'
          />
        </div>
      </div> */}
    </li>
  );
};

function WorkItem({ item }) {
  return (
    <a
      href={item.url}
      className='relative block my-6 overflow-hidden sm:space-x-6 sm:flex sm:items-center sm:justify-between md:my-12'
    >
      <p className='text-3xl !leading-snug transform translate-y-full md:text-5xl list-title'>
        {item.title}
      </p>
      <div className='flex mt-2 space-x-4 text-sm sm:flex-col sm:text-right sm:mt-0'>
        <p className='list-info'>{item.job}</p>
        <p className='list-info'>{item.business}</p>
      </div>
    </a>
  );
}

function BlogItem({ item }) {
  return (
    <Link href={`/posts/${item.slug}`}>
      <a className='relative block my-6 overflow-hidden sm:space-x-6 sm:flex md:my-12'>
        <p className='text-3xl !leading-snug transform translate-y-full md:text-4xl list-title'>
          {item.title}
        </p>
      </a>
    </Link>
  );
}
