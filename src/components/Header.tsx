import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/sectors", label: "Sectors" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center group">
              <div className="relative">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                  scrolled ? "bg-primary text-white shadow-sm" : "bg-white/90 text-primary shadow-md"
                }`}>
                  <span className="text-lg font-bold tracking-tight">S</span>
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full opacity-80"></div>
              </div>
              <div className="ml-3">
                <div className={`font-bold text-xl tracking-tight transition-colors duration-300 ${
                  scrolled ? "text-gray-900" : "text-white"
                }`}>
                  SRI
                </div>
                <div className={`text-xs font-medium tracking-wide transition-colors duration-300 ${
                  scrolled ? "text-gray-600" : "text-white/80"
                }`}>
                  Strategic Resources Initiative
                </div>
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.slice(0, -1).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  isActive(link.path)
                    ? scrolled 
                      ? "text-primary bg-primary/5" 
                      : "text-white bg-white/10"
                    : scrolled
                      ? "text-gray-700 hover:text-primary hover:bg-gray-50"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-accent rounded-full"></div>
                )}
              </Link>
            ))}
            
            {/* Contact Button */}
            <div className="ml-6 pl-6 border-l border-gray-200/30">
              <Link to="/contact">
                <Button 
                  className={`relative overflow-hidden transition-all duration-300 ${
                    scrolled 
                      ? "bg-primary hover:bg-primary/90 text-white shadow-sm" 
                      : "bg-white text-primary hover:bg-white/90 shadow-md"
                  }`}
                >
                  <span className="relative z-10">Contact Us</span>
                </Button>
              </Link>
            </div>
          </nav>
          
          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              className={`relative transition-colors duration-300 ${
                scrolled 
                  ? "text-gray-700 hover:text-primary hover:bg-gray-50" 
                  : "text-white hover:text-white hover:bg-white/10"
              }`}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-white shadow-lg">
          <div className="container mx-auto pt-20 pb-8">
            <div className="absolute top-4 right-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={closeMobileMenu}
                className="text-gray-700 hover:text-primary hover:bg-gray-50"
              >
                <X className="h-6 w-6" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>
            
            <div className="space-y-1 mb-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-4 py-3 text-lg font-medium rounded-lg transition-colors duration-300 ${
                    isActive(link.path)
                      ? "text-primary bg-primary/5"
                      : "text-gray-700 hover:text-primary hover:bg-gray-50"
                  }`}
                  onClick={closeMobileMenu}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            
            <Link to="/contact" onClick={closeMobileMenu}>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
