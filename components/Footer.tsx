import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";

/**
 * Footer Component
 * 
 * Displays:
 * - Social media links
 * - Copyright information
 * - Quick navigation links
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "GitHub", icon: Github, href: "https://github.com/nayanamotagi", ariaLabel: "Visit GitHub profile" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/in/nayana-motagi", ariaLabel: "Visit LinkedIn profile" },
    { name: "Email", icon: Mail, href: "mailto:nayanamotagi24@gmail.com", ariaLabel: "Send email" },
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-dark-50 dark:bg-dark-900 border-t border-dark-200 dark:border-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent mb-4">
              Nayana
            </h3>
            <p className="text-dark-600 dark:text-dark-400 text-sm">
              Building modern web experiences with passion and precision.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-dark-900 dark:text-dark-100 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-dark-600 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-dark-900 dark:text-dark-100 mb-4">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.ariaLabel}
                    className="p-2 rounded-lg bg-dark-100 dark:bg-dark-800 hover:bg-primary-100 dark:hover:bg-primary-900/30 text-dark-700 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-dark-200 dark:border-dark-800 text-center">
          <p className="text-dark-600 dark:text-dark-400 text-sm">
            © {currentYear} Nayana. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

