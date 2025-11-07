
import SocialLinks from '../ui/SocialLinks';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <SocialLinks />

          {/* Copyright */}
          <div className="text-center text-muted-foreground text-sm">
            <p>© {currentYear} All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}