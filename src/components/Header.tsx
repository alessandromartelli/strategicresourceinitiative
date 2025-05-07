
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className="text-primary font-merriweather text-xl font-bold">SRI</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-primary hover:text-accent transition-colors font-medium">Home</Link>
            <Link to="/about" className="text-primary hover:text-accent transition-colors font-medium">About Us</Link>
            <Link to="/services" className="text-primary hover:text-accent transition-colors font-medium">Services</Link>
            <Link to="/sectors" className="text-primary hover:text-accent transition-colors font-medium">Sectors</Link>
            <Link to="/process" className="text-primary hover:text-accent transition-colors font-medium">Process</Link>
            <Link to="/credentials" className="text-primary hover:text-accent transition-colors font-medium">Credentials</Link>
            <Link to="/team" className="text-primary hover:text-accent transition-colors font-medium">Team</Link>
            <Link to="/contact" className="text-primary hover:text-accent transition-colors font-medium">Contact</Link>
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="outline" size="icon" onClick={toggleMobileMenu}>
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-white">
          <div className="pt-16 pb-6 px-4 space-y-6">
            <button 
              className="absolute top-4 right-4 text-2xl"
              onClick={closeMobileMenu}
            >
              ×
            </button>
            <Link 
              to="/" 
              className="block text-primary hover:text-accent text-lg py-2" 
              onClick={closeMobileMenu}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="block text-primary hover:text-accent text-lg py-2" 
              onClick={closeMobileMenu}
            >
              About Us
            </Link>
            <Link 
              to="/services" 
              className="block text-primary hover:text-accent text-lg py-2" 
              onClick={closeMobileMenu}
            >
              Services
            </Link>
            <Link 
              to="/sectors" 
              className="block text-primary hover:text-accent text-lg py-2" 
              onClick={closeMobileMenu}
            >
              Sectors
            </Link>
            <Link 
              to="/process" 
              className="block text-primary hover:text-accent text-lg py-2" 
              onClick={closeMobileMenu}
            >
              Process
            </Link>
            <Link 
              to="/credentials" 
              className="block text-primary hover:text-accent text-lg py-2" 
              onClick={closeMobileMenu}
            >
              Credentials
            </Link>
            <Link 
              to="/team" 
              className="block text-primary hover:text-accent text-lg py-2" 
              onClick={closeMobileMenu}
            >
              Team
            </Link>
            <Link 
              to="/contact" 
              className="block text-primary hover:text-accent text-lg py-2" 
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
