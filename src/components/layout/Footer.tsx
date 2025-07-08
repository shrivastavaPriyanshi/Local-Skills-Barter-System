import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t bg-muted/30 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">SkillSwap</h3>
            <p className="text-sm text-muted-foreground">
              Building stronger communities through skill sharing and meaningful connections.
            </p>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-medium text-foreground">Platform</h4>
            <div className="space-y-2 text-sm">
              <Link to="/discover" className="block text-muted-foreground hover:text-primary transition-colors">
                Discover Skills
              </Link>
              <Link to="/how-it-works" className="block text-muted-foreground hover:text-primary transition-colors">
                How It Works
              </Link>
              <Link to="/community" className="block text-muted-foreground hover:text-primary transition-colors">
                Community Guidelines
              </Link>
            </div>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-medium text-foreground">Support</h4>
            <div className="space-y-2 text-sm">
              <Link to="/help" className="block text-muted-foreground hover:text-primary transition-colors">
                Help Center
              </Link>
              <Link to="/safety" className="block text-muted-foreground hover:text-primary transition-colors">
                Trust & Safety
              </Link>
              <Link to="/contact" className="block text-muted-foreground hover:text-primary transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-medium text-foreground">Legal</h4>
            <div className="space-y-2 text-sm">
              <Link to="/privacy" className="block text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="block text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t pt-6 mt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 SkillSwap. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;