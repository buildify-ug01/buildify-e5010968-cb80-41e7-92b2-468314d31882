
import SocialLinks from '../ui/SocialLinks';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center gradient-hero relative"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1920&h=1080&fit=crop)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay',
      }}
    >
      <div className="absolute inset-0 bg-background/90"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full bg-gradient-primary p-1 shadow-custom-xl">
              <div className="w-full h-full rounded-full bg-muted flex items-center justify-center text-4xl md:text-5xl font-bold text-primary">
                JD
              </div>
            </div>
          </div>

          {/* Name & Title */}
          <h1 className="mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            John Doe
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Full Stack Developer & Creative Problem Solver
          </p>

          {/* Brief Description */}
          <p className="text-lg text-foreground/80 mb-12 max-w-2xl mx-auto">
            Passionate about building elegant solutions to complex problems. 
            Specializing in modern web technologies and user-centered design.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button
              onClick={scrollToAbout}
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 font-medium shadow-custom-lg hover:shadow-custom-xl"
            >
              Learn More
            </button>
            <a
              href="/resume.pdf"
              download
              className="px-8 py-3 bg-background text-foreground border-2 border-primary rounded-lg hover:bg-primary/5 transition-all duration-300 font-medium"
            >
              Download Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center">
            <SocialLinks />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-primary hover:text-primary/80 transition-colors"
        aria-label="Scroll to about section"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
}