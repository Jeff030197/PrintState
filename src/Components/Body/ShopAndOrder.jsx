import { useEffect } from 'react';
import HeroShop from '../img/Banner/heroshop.png';
const MainBody = () => {
  useEffect(() => {
    const section = document.querySelector('.white');

    const fadeIn = () => {
      section.classList.add('fadeIn');
    };

    const fadeOut = () => {
      section.classList.remove('fadeIn');
    };

    const handleScroll = () => {
      const sectionPosition = section.getBoundingClientRect().top;

      if (sectionPosition < window.innerHeight * 0.9 && sectionPosition > 0) {
        fadeIn();
      } else {
        fadeOut();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='white opacity-0 transition-opacity duration-500'>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 px-4 md:px-8 lg:px-16 py-8 md:py-12">
        <div className='md:py-0 flex flex-col justify-center'>
          <p className='text-black text-4xl md:text-6xl font-semibold text-center md:text-left mb-4'>
            <strong>Shop & </strong>
            <strong className='text-pink-600'>Order</strong>
            <div className='text-2xl py-5'>We offer a wide range of quality items that you can choose from different stores. We are dedicated to providing exceptional products and exceptional services.</div>
          </p>
          <div className='flex flex-col md:flex-row gap-4 justify-center md:justify-center'>
            <button className='bg-pink-600 text-2xl md:text-2xl rounded py-2 px-4 outline outline-1 outline-pink-600 hover:bg-white text-white hover:text-black mb-2 md:mb-0'>
              <strong>Explore</strong>
            </button>
          </div>
        </div>
        <div className='flex justify-center'>
          <img src={HeroShop} className='md:max-w-none h-96' alt='T-shirt' />
        </div>
      </div>
    </div>
  );
};

export default MainBody;
