import { useState } from 'react';
import { Menu, X, Orbit } from 'lucide-react';
//import logo from '../assets/ZooveLogoMain.png'
import { Link } from 'react-router-dom';
//import logo from '../assets/circular.jpg'
import logo from '../assets/zooveLogo.jpeg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [productsVisible, setProductsVisible] = useState(false);

  const toggleProductVisible = ()=>{
    setProductsVisible(!productsVisible);
  }

  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md ">
      <div  className="max-w-87rem mx-auto px-4">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center gap-2">
            {/* <Orbit className="w-8 h-8 text-blue-500" />
             <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Zoove
            </span>  */}
            <div>
              <img className='max-w-20 rounded-full' src={logo} alt="logo" />
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-gray-300 hover:text-white transition-colors" onClick={toggleProductVisible}>
              Products
              {productsVisible &&
                <div className="flex flex-col absolute bg-gray-900 text-white rounded-lg shadow-lg p-1 mt-1 right-[27%]">
                  <Link to="/hardware" className="p-2 hover:text-purple-400">Hardware</Link>
                  <Link to="/software" className="p-2 hover:text-purple-400">Software</Link>
              </div>
              }
            </a>
            <a href="#application" className="text-gray-300 hover:text-white transition-colors">Applications</a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
            {/* <a href="#" className="text-gray-300 hover:text-white transition-colors">Careers</a> */}
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full text-white transition-colors">
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=questions@zoove.space" target="_blank">
              Contact Us
              </a>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col gap-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors px-4 py-2">
                Technology
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors px-4 py-2">
                Applications
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors px-4 py-2">
                About
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors px-4 py-2">
                Careers
              </a>
              <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full text-white transition-colors mx-4">
                Contact Us
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;