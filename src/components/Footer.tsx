import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="border-t bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h3 className="font-bold text-xl mb-4 bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">Ravi</h3>
            <p className="text-muted-foreground leading-relaxed">
              Python Developer specializing in Django, DevOps, and Data Structures & Algorithms.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold text-xl mb-4 bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About" },
                { to: "/projects", label: "Projects" },
                { to: "/contact", label: "Contact" }
              ].map((link) => (
                <li key={link.to}>
                  <Link 
                    to={link.to} 
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center group"
                  >
                    <span className="inline-block transform group-hover:translate-x-1 transition-transform duration-300">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold text-xl mb-4 bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">Connect</h3>
            <div className="flex space-x-6">
              {[
                { href: "https://github.com", icon: Github, label: "GitHub" },
                { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
                { href: "mailto:your.email@example.com", icon: Mail, label: "Email" }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-muted-foreground">
          <p className="flex items-center justify-center gap-2">
            Made with <Heart className="h-4 w-4 text-red-500 animate-pulse" /> by Ravi © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};