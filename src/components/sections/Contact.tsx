
import { Mail, MapPin, Phone } from 'lucide-react';
import SocialLinks from '../ui/SocialLinks';

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'john.doe@example.com',
      href: 'mailto:john.doe@example.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Francisco, CA',
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((info) => {
              const Icon = info.icon;
              const content = (
                <>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{info.label}</h3>
                  <p className="text-muted-foreground">{info.value}</p>
                </>
              );

              return info.href ? (
                <a
                  key={info.label}
                  href={info.href}
                  className="p-6 bg-card rounded-lg border border-border hover:border-primary transition-all duration-300 hover:shadow-custom-lg text-center group"
                >
                  {content}
                </a>
              ) : (
                <div
                  key={info.label}
                  className="p-6 bg-card rounded-lg border border-border text-center"
                >
                  {content}
                </div>
              );
            })}
          </div>

          {/* Social Links Section */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-6">Connect With Me</h3>
            <div className="flex justify-center mb-8">
              <SocialLinks />
            </div>
            <a
              href="/resume.pdf"
              download
              className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 font-medium shadow-custom-lg hover:shadow-custom-xl"
            >
              Download My Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}