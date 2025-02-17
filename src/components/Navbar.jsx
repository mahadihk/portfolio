import {Menu, X} from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar =() => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          
          <div className="flrx items-center flex-shrink-0">
            <span className="text-xl tracking-tight">Mahadi Hasan</span>
          </div>

          <ul className="hidden lg:flex ml-14 space-x-12">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Contact</a></li>
          </ul>

          <div className="lg:hidden md:flex  justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>


        </div>

        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul className='text-amber-50'>
              <li className="py-4"><a href="#">Home</a></li>
              <li className="py-4"><a href="#">About</a></li>
              <li className="py-4"><a href="#">Services</a></li>
              <li className="py-4"><a href="#">Projects</a></li>
              <li className="py-4"><a href="#">Contact</a></li>
            </ul>
          </div>
        )}

      </div>
    </nav>
  )
}

export default Navbar