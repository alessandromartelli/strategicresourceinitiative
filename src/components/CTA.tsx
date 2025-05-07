
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

type CTAProps = {
  type: "discovery" | "capability" | "proposal";
  className?: string;
};

const CTA = ({ type, className = "" }: CTAProps) => {
  let buttonText = "";
  let buttonLink = "";
  
  switch(type) {
    case "discovery":
      buttonText = "Schedule a Discovery Call";
      buttonLink = "/contact";
      break;
    case "capability":
      buttonText = "Download Capability Statement";
      buttonLink = "#";
      break;
    case "proposal":
      buttonText = "Request Proposal";
      buttonLink = "/contact";
      break;
  }
  
  return (
    <Link to={buttonLink}>
      <Button 
        className={`${className} bg-accent hover:bg-accent/80 text-white font-medium px-6 py-3 h-auto`}
      >
        {buttonText}
      </Button>
    </Link>
  );
};

export default CTA;
