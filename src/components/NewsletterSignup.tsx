
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    
    // Integration with MailerLite would happen here
    toast({
      title: "Thank you for subscribing!",
      description: "You've been added to our newsletter list.",
    });
    
    setEmail("");
  };
  
  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
      <Input
        type="email"
        placeholder="Your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="flex-grow"
      />
      <Button 
        type="submit" 
        className="bg-accent hover:bg-accent/90 text-white whitespace-nowrap"
      >
        Subscribe
      </Button>
    </form>
  );
};

export default NewsletterSignup;
