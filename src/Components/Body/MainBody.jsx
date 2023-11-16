import { useEffect } from 'react';
import Tshirt from '../img/Banner/Tshirt.png'; 
import ShopAndOrder from './ShopAndOrder';
import WhyChooseUs from './WhyChooseUs';

const MainBody = () => {
  useEffect(() => {
    const section = document.querySelector('.bg-bg1');

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
    <>
    <div className='bg-bg1 opacity-0 transition-opacity duration-500'>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 px-4 md:px-8 lg:px-16 py-8 md:py-12">
        <div className='md:py-0 flex flex-col justify-center'>
          <p className='text-white text-4xl md:text-6xl font-semibold text-center md:text-left mb-4'>
            <strong>Your Ideas, Our Prints:</strong>
          </p>
          <div className='text-center md:text-left'>
            <p className='text-white text-xl md:text-2xl mb-6'>PrintState, Made Just for You!</p>
          </div>
          <div className='flex flex-col md:flex-row gap-4 justify-center md:justify-start'>
            <button className='bg-pink-600 text-2xl md:text-2xl rounded py-2 px-4 outline outline-1 outline-cyan-400 hover:bg-white text-white hover:text-black mb-2 md:mb-0'>
              <strong>Shop</strong>
            </button>
            <button className='bg-slate-950 text-2xl md:text-2xl rounded px-4 outline outline-1 outline-cyan-400 text-white hover:bg-white hover:text-black'>
              <strong>Create</strong>
            </button>
          </div>
        </div>
        <div className='flex justify-center'>
          <img src={Tshirt} className='max-w-full md:max-w-none' alt='T-shirt' />
        </div>
      </div>
    </div>
    <ShopAndOrder/>
    <WhyChooseUs/>
    </>
  );
};

export default MainBody;
