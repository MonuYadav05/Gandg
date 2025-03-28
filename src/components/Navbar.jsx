
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ShoppingCartIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container-custom">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl flex items-center font-bold text-primary">
            <img src="/logo.jpg" alt="Gorgeous and Gleam Logo" className="h-16 mr-4" />

            Gorgeous & Gleam
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary">Home</Link>
            <div className="relative group">
              <button className="text-gray-700 hover:text-primary">
                Categories
              </button>
              <div className="absolute hidden group-hover:block w-48 bg-white shadow-lg py-2 z-50">
                <Link to="/?category=necklaces" className="block px-4 py-2 text-gray-700 hover:bg-primary hover:text-white">Necklaces</Link>
                <Link to="/?category=earrings" className="block px-4 py-2 text-gray-700 hover:bg-primary hover:text-white">Earrings</Link>
                <Link to="/?category=bows" className="block px-4 py-2 text-gray-700 hover:bg-primary hover:text-white">Bows</Link>
              </div>
            </div>
            <Link to="/about" className="text-gray-700 hover:text-primary">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary">Contact</Link>
            <Link to="/cart" className="text-gray-700 hover:text-primary">
              <ShoppingCartIcon className="h-6 w-6" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6 text-gray-700" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-primary">Home</Link>
              <Link to="/?category=necklaces" className="block px-3 py-2 text-gray-700 hover:text-primary">Necklaces</Link>
              <Link to="/?category=earrings" className="block px-3 py-2 text-gray-700 hover:text-primary">Earrings</Link>
              <Link to="/?category=bows" className="block px-3 py-2 text-gray-700 hover:text-primary">Bows</Link>
              <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-primary">About</Link>
              <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-primary">Contact</Link>
              <Link to="/cart" className="block px-3 py-2 text-gray-700 hover:text-primary">Cart</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;