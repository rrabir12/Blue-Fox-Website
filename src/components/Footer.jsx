import { Link } from 'react-router-dom';
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-blue-100 text-gray-800 py-4">



      <div className="container mx-auto flex flex-col items-center">
        <div className="flex flex-col md:flex-row justify-between items-center w-full">
          <p className="text-center font-semibold md:text-left">
            Copyright © 2025 All Rights Reserved.
          </p>
          <div className="flex items-center my-2">
            <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
            <span className="ml-2 text-blue-600"> - GoodFirms</span>
          </div>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="hover:text-blue-500"><FaLinkedin size={24} /></a>
            <a href="#" className="hover:text-blue-500"><FaTwitter size={24} /></a>
            <a href="#" className="hover:text-blue-500"><FaFacebook size={24} /></a>
            <a href="#" className="hover:text-blue-500"><FaInstagram size={24} /></a>
            <a href="#" className="hover:text-blue-500"><FaYoutube size={24} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 