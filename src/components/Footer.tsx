import React from 'react';
import { Orbit, Twitter, Linkedin, Github, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Orbit className="w-6 h-6 text-blue-500" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Zoove
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Pioneering the future of space imaging with neuromorphic technology.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Press</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Technology</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Solutions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Research</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Patents</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white" target='_blank'>
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/zoove-space/about/" className="text-gray-400 hover:text-white" target='_blank'>
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/zoove.space/" className="text-gray-400 hover:text-white" target='_blank'>
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Zoove. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;