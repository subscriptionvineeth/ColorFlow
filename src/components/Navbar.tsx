import React from 'react';
import { useColorStore } from '../store/colorStore';
import { Palette, Menu } from 'lucide-react';

const Navbar: React.FC = () => {
  const { colors } = useColorStore();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav
      className="sticky top-0 z-40 backdrop-blur-lg bg-opacity-80"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Palette size={24} style={{ color: colors.primary }} />
            <span className="text-xl font-bold" style={{ color: colors.primary }}>
            ColorFlow
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {['Features', 'Pricing', 'Testimonials', 'FAQ'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-medium hover:opacity-80 transition-opacity"
              >
                {item}
              </a>
            ))}
            <button
              className="px-4 py-2 rounded-lg text-white font-medium"
              style={{ backgroundColor: colors.primary }}
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-slide-in">
            {['Features', 'Pricing', 'Testimonials', 'FAQ'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-2 font-medium hover:opacity-80 transition-opacity"
              >
                {item}
              </a>
            ))}
            <button
              className="w-full mt-4 px-4 py-2 rounded-lg text-white font-medium"
              style={{ backgroundColor: colors.primary }}
            >
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export { Navbar }