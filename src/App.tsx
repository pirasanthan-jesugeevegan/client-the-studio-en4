import { useEffect, useState } from 'react';
import { SelectedPage } from '@/utils/types';
import Navbar from '@/Components/Nav';
import Hero from './Components/Hero';
import Benefits from './Components/Benefits';
import About from './Components/About';
import Price from './Components/Price';
import Testimonials from './Components/Testimonials';

export const App = () => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) {
        setIsTopOfPage(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app bg-secondary-500">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Hero setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <About />
      <Price />
      <Testimonials />
    </div>
  );
};

export default App;
