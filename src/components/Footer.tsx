import React from 'react';
import { useColorStore } from '../store/colorStore';
import {
  Palette,
  Facebook,
  Twitter,
  Instagram,
  Github,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';

const Footer: React.FC = () => {
  const { colors } = useColorStore();

  return (
    <footer style={{ backgroundColor: `${colors.background}22` }}>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center"> 
             <img src="/assets/color-flow.png" alt="color-flow" className="object-contain w-60" />
          </div>
            </div>
            <p className="opacity-80 mb-4">
              Create stunning color schemes for your website with our intuitive color
              customization tool.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="hover:opacity-80 transition-opacity"
                  style={{ color: colors.primary }}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Features', 'Pricing', 'About Us', 'Contact'].map(
                (link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="hover:opacity-80 transition-opacity"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {[
                'Documentation',
                'Tutorials',
                'Blog',
                'Support Center',
                'Terms of Service',
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="hover:opacity-80 transition-opacity"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Mail size={20} style={{ color: colors.primary }} />
                <span>support@color-flow.app</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={20} style={{ color: colors.primary }} />
                <span>+91 (123) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={20} style={{ color: colors.primary }} />
                <span>#80 Color Street, Bangalore 12345</span>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="pt-8 mt-8 text-sm text-center border-t"
          style={{ borderColor: `${colors.text}22` }}
        >
          <p>© {new Date().getFullYear()} ColorCraft. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export { Footer }