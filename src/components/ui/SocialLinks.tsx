
import { Facebook, Github, Linkedin } from 'lucide-react';

export default function SocialLinks() {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/yourusername',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/yourusername',
      icon: Linkedin,
    },
    {
      name: 'Facebook',
      url: 'https://facebook.com/yourusername',
      icon: Facebook,
    },
  ];

  return (
    <div className="flex items-center space-x-4">
      {socialLinks.map((link) => {
        const Icon = link.icon;
        return (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-background border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300 group"
            aria-label={link.name}
          >
            <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
        );
      })}
    </div>
  );
}