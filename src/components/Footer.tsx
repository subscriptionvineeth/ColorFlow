import React from 'react';
import { useColorStore } from '../store/colorStore';
import { ChevronRight, Github, Twitter, Linkedin, Instagram, Heart, Mail, MapPin, Phone, Sparkles, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const { colors } = useColorStore();

  return (
    <footer 
      style={{ color: colors.text }} 
      className="relative border-t transition-colors duration-500 overflow-hidden"
    >
      {/* Background gradient effects */}
      <div className="absolute inset-0 z-0" style={{ 
        backgroundColor: colors.background,
        backgroundImage: `
          radial-gradient(circle at 20% 110%, ${colors.primary}20 0%, transparent 40%),
          radial-gradient(circle at 80% -10%, ${colors.secondary}20 0%, transparent 40%),
          linear-gradient(180deg, transparent 0%, ${colors.background} 100%)
        `
      }}></div>
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: `linear-gradient(${colors.text} 1px, transparent 1px), linear-gradient(90deg, ${colors.text} 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      ></div>
      
      {/* Animated gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px z-0 animate-shimmer" style={{
        background: `linear-gradient(90deg, 
          transparent 0%, 
          ${colors.primary}50 30%, 
          ${colors.secondary}50 50%, 
          ${colors.accent}50 70%, 
          transparent 100%
        )`,
        backgroundSize: '200% 100%'
      }}></div>
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-12 gap-y-16">
          <div className="md:col-span-4 space-y-6">
            <div className="group">
              <div className="flex items-center gap-3 transform transition-transform duration-500 group-hover:translate-y-[-2px]">
                <div className="relative">
                  <div className="w-14 h-14 rounded-full absolute -left-2 -top-2 blur-md group-hover:blur-lg transition-all duration-500" 
                       style={{ 
                         background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                         opacity: 0.3,
                       }}></div>
                  <img 
                    src="/assets/color-flow.svg" 
                    alt="ColorFlow Logo" 
                    className="w-16 h-16 object-contain relative z-10 group-hover:scale-110 transition-transform duration-500" 
                  />
                </div>
                <div>
                  <span className="font-extrabold text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                        style={{ '--tw-gradient-from': colors.primary, '--tw-gradient-to': colors.secondary } as any}>
                    ColorFlow
                  </span>
                  
                </div>
              </div>
            </div>
            
            <p className="text-sm leading-relaxed opacity-80 max-w-md">
              Transform your design workflow with our premium color palette generator. Create stunning, harmonious color schemes with advanced AI and color theory.
            </p>
            
            <div className="pt-4 space-y-4">
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-full flex items-center justify-center shadow-soft-md transition-transform group-hover:scale-110"
                     style={{ backgroundColor: `${colors.primary}15` }}>
                  <Mail size={16} style={{ color: colors.primary }} />
                </div>
                <div>
                  <div className="text-xs opacity-60 uppercase tracking-wider">Email Us</div>
                  <a href="mailto:hello@colorflow.io" className="text-sm hover:underline">hello@redbaron.in</a>
                </div>
              </div>
              
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-full flex items-center justify-center shadow-soft-md transition-transform group-hover:scale-110"
                     style={{ backgroundColor: `${colors.primary}15` }}>
                  <MapPin size={16} style={{ color: colors.primary }} />
                </div>
                <div>
                  <div className="text-xs opacity-60 uppercase tracking-wider">Location</div>
                  <div className="text-sm">Bangalore, India</div>
                </div>
              </div>
            </div>
            
            <div className="flex gap-3 pt-2">
              {[
                { icon: <Github size={18} />, link: '#' },
                { icon: <Twitter size={18} />, link: '#' },
                { icon: <Linkedin size={18} />, link: '#' },
                { icon: <Instagram size={18} />, link: '#' }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.link} 
                  className="w-10 h-10 flex items-center justify-center rounded-full transition-transform hover:scale-110 hover:-translate-y-1 shadow-soft-md relative overflow-hidden group"
                  style={{ 
                    backgroundColor: `${colors.primary}15`, 
                    color: colors.primary,
                    transitionDelay: `${index * 0.05}s`
                  }}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity" 
                       style={{ 
                         background: `radial-gradient(circle, ${colors.primary} 0%, transparent 70%)` 
                       }}></div>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-6">
                <h3 className="font-semibold text-lg flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: colors.primary }}></div>
                  Products
                </h3>
                <ul className="space-y-4">
                  {['Color Generator', 'Palette Builder', 'Color Theory', 'Export Tools', 'Mobile App'].map((item, index) => (
                    <li key={item} style={{ transitionDelay: `${index * 0.05}s` }}>
                      <a 
                        href={`#${item.toLowerCase().replace(' ', '-')}`} 
                        className="text-sm opacity-75 hover:opacity-100 transition-all duration-300 flex items-center gap-2 group hover:translate-x-1"
                      >
                        <ChevronRight size={14} className="transform transition-transform duration-300 opacity-0 group-hover:opacity-100" style={{ color: colors.primary }} />
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6">
                <h3 className="font-semibold text-lg flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: colors.secondary }}></div>
                  Resources
                </h3>
                <ul className="space-y-4">
                  {['Documentation', 'Tutorials', 'Color Trends', 'API Access', 'Support Center'].map((item, index) => (
                    <li key={item} style={{ transitionDelay: `${index * 0.05}s` }}>
                      <a 
                        href={`#${item.toLowerCase().replace(' ', '-')}`} 
                        className="text-sm opacity-75 hover:opacity-100 transition-all duration-300 flex items-center gap-2 group hover:translate-x-1"
                      >
                        <ChevronRight size={14} className="transform transition-transform duration-300 opacity-0 group-hover:opacity-100" style={{ color: colors.secondary }} />
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6">
                <h3 className="font-semibold text-lg flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: colors.accent }}></div>
                  Company
                </h3>
                <ul className="space-y-4">
                  {['About Us', 'Careers', 'Blog', 'Press Kit', 'Contact'].map((item, index) => (
                    <li key={item} style={{ transitionDelay: `${index * 0.05}s` }}>
                      <a 
                        href={`#${item.toLowerCase().replace(' ', '-')}`} 
                        className="text-sm opacity-75 hover:opacity-100 transition-all duration-300 flex items-center gap-2 group hover:translate-x-1"
                      >
                        <ChevronRight size={14} className="transform transition-transform duration-300 opacity-0 group-hover:opacity-100" style={{ color: colors.accent }} />
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="mt-16 glass-effect p-6 rounded-2xl">
              <div className="flex flex-col md:flex-row md:items-end gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles size={14} style={{ color: colors.primary }} className="animate-pulse" />
                    <h3 className="font-semibold" style={{ color: colors.primary }}>Join Our Newsletter</h3>
                  </div>
                  <p className="text-sm opacity-75 mb-3">Get the latest color trends and design inspiration delivered to your inbox.</p>
                </div>
                <div className="flex-1 flex items-stretch">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="px-4 py-3 rounded-l-xl text-sm w-full focus:outline-none shadow-inner border-r-0"
                    style={{ 
                      backgroundColor: `${colors.text}08`,
                      borderColor: `${colors.text}15`
                    }}
                  />
                  <button 
                    className="px-5 py-3 rounded-r-xl text-white text-sm font-medium shadow-soft-md whitespace-nowrap relative overflow-hidden group"
                    style={{ 
                      background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                    }}
                  >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity" 
                         style={{ 
                           background: `radial-gradient(circle, white 0%, transparent 70%)` 
                         }}></div>
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderColor: `${colors.text}15` }}>
          <p className="text-sm opacity-60">
            © {new Date().getFullYear()} ColorFlow. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {['Terms', 'Privacy', 'Cookies', 'Contact'].map((item, index) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-sm opacity-60 hover:opacity-100 transition-all duration-300 relative group"
                style={{ transitionDelay: `${index * 0.05}s` }}
              >
                <span>{item}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all duration-300" 
                      style={{ backgroundColor: colors.primary }}></span>
              </a>
            ))}
          </div>
          <div className="flex items-center gap-1 text-sm opacity-60">
            <span>No cookies</span>
            <Heart size={14} className="text-red-500 animate-pulse" fill="#ef4444" />
            <span>Just colors </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer }