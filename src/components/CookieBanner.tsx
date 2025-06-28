import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
        setIsAnimating(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("cookieConsent", "accepted");
    localStorage.setItem("cookiePreferences", JSON.stringify({
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true
    }));
    hideBanner();
  };

  const handleRejectAll = () => {
    localStorage.setItem("cookieConsent", "rejected");
    localStorage.setItem("cookiePreferences", JSON.stringify({
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false
    }));
    hideBanner();
  };

  const handleManagePreferences = () => {
    // For now, just accept necessary cookies
    localStorage.setItem("cookieConsent", "partial");
    localStorage.setItem("cookiePreferences", JSON.stringify({
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false
    }));
    hideBanner();
  };

  const hideBanner = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsVisible(false);
    }, 300);
  };

  const handleClose = () => {
    hideBanner();
  };

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-2xl z-50 transition-all duration-300 ${
        isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
    >
      <div className="container mx-auto p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          {/* Close button - mobile top right */}
          <button
            onClick={handleClose}
            className="absolute top-2 right-2 sm:hidden text-gray-400 hover:text-gray-600 transition-colors p-2"
            aria-label="Close cookie banner"
          >
            <X className="h-4 w-4" />
          </button>

          {/* Content */}
          <div className="flex-1 pr-8 sm:pr-4">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-1">
                <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1">
                  Cookie Preferences
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  We use cookies to enhance your browsing experience, provide personalized content, and analyze our traffic. 
                  <span className="hidden sm:inline"> By clicking "Accept All", you consent to our use of cookies.</span>
                </p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
            {/* Mobile: Full width buttons */}
            <div className="flex flex-col sm:hidden gap-2 w-full">
              <Button 
                onClick={handleAcceptAll}
                className="w-full bg-accent hover:bg-accent/90 text-white text-sm h-10"
              >
                Accept All
              </Button>
              <div className="flex gap-2">
                <Button 
                  onClick={handleManagePreferences}
                  variant="outline"
                  className="flex-1 text-sm h-10 border-gray-300 hover:bg-gray-50"
                >
                  Necessary Only
                </Button>
                <Button 
                  onClick={handleRejectAll}
                  variant="ghost"
                  className="flex-1 text-sm h-10 text-gray-600 hover:bg-gray-50"
                >
                  Reject All
                </Button>
              </div>
            </div>

            {/* Desktop: Horizontal buttons */}
            <div className="hidden sm:flex gap-2 items-center">
              <Button 
                onClick={handleClose}
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-gray-600 hover:bg-gray-50"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </Button>
              <Button 
                onClick={handleRejectAll}
                variant="ghost"
                className="text-sm h-9 px-3 text-gray-600 hover:bg-gray-50"
              >
                Reject
              </Button>
              <Button 
                onClick={handleManagePreferences}
                variant="outline"
                className="text-sm h-9 px-3 border-gray-300 hover:bg-gray-50"
              >
                Manage
              </Button>
              <Button 
                onClick={handleAcceptAll}
                className="text-sm h-9 px-4 bg-accent hover:bg-accent/90 text-white"
              >
                Accept All
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner; 