
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-merriweather text-xl font-bold">Strategic Resources Initiatives</h3>
            <p className="text-sm">
              Driving Climate-Aligned Infrastructure & Inclusive Growth through strategic advisory.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-white hover:text-accent">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-accent">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.016 10.016 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-merriweather text-lg font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors">Services</Link></li>
              <li><Link to="/sectors" className="hover:text-accent transition-colors">Sectors</Link></li>
              <li><Link to="/process" className="hover:text-accent transition-colors">Process</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-merriweather text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/credentials" className="hover:text-accent transition-colors">Credentials</Link></li>
              <li><Link to="/team" className="hover:text-accent transition-colors">Our Team</Link></li>
              <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-merriweather text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg className="h-6 w-6 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
                <span>Global operations with regional presence</span>
              </li>
              <li className="flex items-center">
                <svg className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                <a href="mailto:info@sri-advisory.com" className="hover:text-accent transition-colors">
                  info@sri-advisory.com
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <Link to="/contact" className="bg-white text-primary hover:bg-secondary hover:text-primary px-4 py-2 rounded-md font-medium transition-all inline-block">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Strategic Resources Initiatives. All rights reserved.</p>
        </div>
      </div>
      
      {/* Cookie Consent Banner */}
      <div className="fixed bottom-0 left-0 right-0 bg-primary p-4 shadow-lg z-50">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm mb-4 md:mb-0">
            This website uses cookies to ensure you get the best experience on our website.
          </p>
          <div className="flex space-x-4">
            <button className="bg-white text-primary px-4 py-2 rounded text-sm font-medium">
              Accept All
            </button>
            <button className="border border-white text-white px-4 py-2 rounded text-sm font-medium">
              Manage Preferences
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
