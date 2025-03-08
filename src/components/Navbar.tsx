import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/zooveLogo.jpeg'

import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import UserAvatar from './login/UserAvatar';

const Navbar = () => {
  const user = useSelector((state: RootState) => state.auth.user);
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
            <div>
              <img className='max-w-20 rounded-full' src={logo} alt="logo" />
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <div  className="cursor-pointer relative" onClick={toggleProductVisible}>
              <span className='text-gray-300 hover:text-white transition-colors' >Products</span>
              {productsVisible &&
                <div className=" bg-gray-900 text-white rounded-lg shadow-lg p-1 mt-2 absolute">
                  <Link to="/" className="block p-2 hover:text-purple-400">Hardware</Link>
                  <Link to="/software" className="block p-2 hover:text-purple-400">Software</Link>
                </div>
              }
            </div>
            <a href="#application" className="text-gray-300 hover:text-white transition-colors">Applications</a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
            {user?
              <UserAvatar name={user.name} />
              :
              <Link to='/signIn'>
                <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full text-white transition-colors">
                  Sign In
                </button>
              </Link>
            }
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
            <div className="flex flex-col gap-3">
              <a href="#" className="text-gray-300 hover:text-white transition-colors px-4 py-2" onClick={toggleProductVisible}>
                Products
                {productsVisible &&
                  <div className="flex flex-col bg-gray-900 text-white rounded-lg shadow-lg p-1 mt-1 w-max">
                    <Link to="/" className="p-2 hover:text-purple-400">Hardware</Link>
                    <Link to="/software" className="p-2 hover:text-purple-400">Software</Link>
                </div>
                }
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors px-4 py-2">
                Applications
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors px-4 py-2">
                About
              </a>
              {user?
              <div className='ml-3'>
                <UserAvatar name={user.name}/>
              </div>
              :
              <Link to='/signIn'>
                <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full text-white transition-colors">
                  Sign In
                </button>
              </Link>
            }
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

            {/* <a href="#" className="text-gray-300 hover:text-white transition-colors">Careers</a> */}
            {/* <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full text-white transition-colors">
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=questions@zoove.space" target="_blank">
              Contact Us
              </a>
            </button> */}