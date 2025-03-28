import React, { useState, useEffect } from 'react';
import { useColorStore } from '../store/colorStore';
import { Menu, Sun, Moon, Sparkles } from 'lucide-react';

const Navbar: React.FC = () => {
  const { colors, toggleDarkMode } = useColorStore();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to handle smooth scrolling
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId.substring(1));
    
    if (targetElement) {
      // Close mobile menu if open
      if (isMenuOpen) setIsMenuOpen(false);
      
      // Calculate header height for offset
      const navHeight = scrolled ? 72 : 96; // Height of the navbar (smaller when scrolled)
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl transition-all duration-300 ${
        scrolled ? 'shadow-lg py-2' : 'shadow-soft-md py-4'
      }`}
      style={{ 
        backgroundColor: scrolled ? `${colors.background}95` : `${colors.background}90`,
        borderBottom: `1px solid ${colors.text}10`,
      }}
    >
      <div className="container mx-auto px-6">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          scrolled ? 'h-16' : 'h-24'
        }`}>
          <div className="flex items-center gap-3 group"> 
             <div className={`flex items-center justify-center overflow-visible relative transition-all duration-300 ${
               scrolled ? 'h-16 py-0' : 'h-20 py-1'
             }`}>
               <div className="absolute -left-2 -top-2 w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary opacity-30 group-hover:opacity-50 blur-sm group-hover:blur-md transition-all duration-500" 
                    style={{ '--tw-gradient-from': colors.primary, '--tw-gradient-to': colors.secondary } as any}></div>
               <img 
                 src="/assets/color-flow.svg" 
                 alt="ColorFlow Logo" 
                 className={`object-contain -mt-1 relative z-10 hover:scale-110 transition-all duration-300 ${
                   scrolled ? 'w-24 h-24' : 'w-32 h-32'
                 }`}
               />
             </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { name: 'How It Works', href: '#how-it-works' },
              { name: 'Pricing', href: '#pricing' }, 
              { name: 'Testimonials', href: '#testimonials' }, 
              { name: 'FAQ', href: '#faq' }
            ].map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className={`font-medium hover:opacity-80 transition-all duration-300 relative group overflow-hidden ${
                  scrolled ? 'text-sm' : 'text-base'
                }`}
                style={{ color: colors.text, animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
                <span 
                  className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-500 ease-premium" 
                  style={{ 
                    background: `linear-gradient(to right, ${colors.primary}, ${colors.secondary})`,
                    boxShadow: `0 0 10px ${colors.primary}70`
                  }}
                ></span>
              </a>
            ))}
            <button
              onClick={toggleDarkMode}
              className={`rounded-full transition-all duration-500 hover:scale-110 shadow-md bg-gradient-to-br from-primary/10 to-secondary/10 ${
                scrolled ? 'p-2' : 'p-2.5'
              }`}
              style={{ 
                '--tw-gradient-from': `${colors.primary}10`, 
                '--tw-gradient-to': `${colors.secondary}10`,
                boxShadow: `0 0 15px ${colors.primary}30`
              } as any}
            >
              {colors.isDarkMode ? (
                <Sun size={scrolled ? 18 : 20} style={{ color: colors.primary }} className="animate-pulse" />
              ) : (
                <Moon size={scrolled ? 18 : 20} style={{ color: colors.primary }} className="animate-pulse" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggleDarkMode}
              className={`rounded-full transition-all duration-500 hover:scale-110 shadow-md bg-gradient-to-br from-primary/10 to-secondary/10 ${
                scrolled ? 'p-2' : 'p-2.5'
              }`}
              style={{ 
                '--tw-gradient-from': `${colors.primary}10`, 
                '--tw-gradient-to': `${colors.secondary}10` 
              } as any}
            >
              {colors.isDarkMode ? (
                <Sun size={scrolled ? 18 : 20} style={{ color: colors.primary }} />
              ) : (
                <Moon size={scrolled ? 18 : 20} style={{ color: colors.primary }} />
              )}
            </button>
            <button
              className={`rounded-lg shadow-md bg-gradient-to-br from-primary/10 to-secondary/10 ${
                scrolled ? 'p-2' : 'p-2.5'
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{ 
                color: colors.text, 
                '--tw-gradient-from': `${colors.primary}10`, 
                '--tw-gradient-to': `${colors.secondary}10` 
              } as any}
            >
              <Menu size={scrolled ? 20 : 24} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-5 animate-slide-in rounded-b-xl shadow-inner mb-2 bg-gradient-to-b from-background/90 to-background/95 backdrop-blur-lg" 
               style={{ 
                 '--tw-gradient-from': `${colors.background}90`, 
                 '--tw-gradient-to': `${colors.background}95` 
               } as any}>
            {[
              { name: 'How It Works', href: '#how-it-works' },
              { name: 'Pricing', href: '#pricing' }, 
              { name: 'Testimonials', href: '#testimonials' }, 
              { name: 'FAQ', href: '#faq' }
            ].map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className="block py-3 px-4 font-medium hover:opacity-80 transition-all duration-300 rounded-lg my-1 hover:translate-x-1"
                style={{ 
                  color: colors.text,
                  background: index % 2 === 0 ? `linear-gradient(to right, ${colors.primary}05, transparent)` : 'transparent',
                  animationDelay: `${0.1 + index * 0.1}s`
                }}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export { Navbar }