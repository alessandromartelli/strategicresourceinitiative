
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFoundPage = () => {
  useEffect(() => {
    document.title = "Page Not Found | Strategic Resources Initiatives";
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center p-8">
        <h1 className="font-merriweather text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-merriweather font-bold mb-6">Page Not Found</h2>
        <p className="text-gray-600 max-w-md mx-auto mb-8">
          The page you are looking for might have been removed, had its name changed,
          or is temporarily unavailable.
        </p>
        
        <div className="space-y-6">
          <Link to="/">
            <Button className="bg-primary hover:bg-primary/90 text-white">
              Return to Home
            </Button>
          </Link>
          
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/services" className="text-accent hover:underline">Services</Link>
              <Link to="/sectors" className="text-accent hover:underline">Sectors</Link>
              <Link to="/contact" className="text-accent hover:underline">Contact</Link>
              <Link to="/team" className="text-accent hover:underline">Our Team</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
