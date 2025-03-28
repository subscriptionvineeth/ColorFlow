import React, { useState } from 'react';
import { useColorStore } from '../store/colorStore';
import { ChevronDown, Check, Star, ArrowRight, Heart, Users, Zap, Shield, Globe, Plus, Minus } from 'lucide-react';

const Preview: React.FC = () => {
  const { colors } = useColorStore();
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const style = {
    '--text-color': colors.text,
    '--bg-color': colors.background,
    '--primary-color': colors.primary,
    '--secondary-color': colors.secondary,
    '--accent-color': colors.accent,
  } as React.CSSProperties;

  return (
    <div 
      className="min-h-screen pb-32 pt-28"
      style={{
        ...style,
        color: colors.text,
        backgroundColor: colors.background,
      }}
    >
      {/* Hero Section */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundColor: `${colors.primary}03`,
          backgroundImage: `
            radial-gradient(circle at 20% 35%, ${colors.primary}05 0%, transparent 50%),
            radial-gradient(circle at 75% 44%, ${colors.secondary}08 0%, transparent 65%),
            repeating-linear-gradient(
              45deg,
              ${colors.primary}01,
              ${colors.primary}01 10px,
              transparent 10px,
              transparent 50px
            )
          `
        }}>
          {/* Decorative shapes */}
          <div className="absolute top-[10%] right-[20%] w-64 h-64 rounded-full animate-pulse opacity-60" 
               style={{ 
                 backgroundColor: `${colors.accent}30`,
                 filter: 'blur(80px)'
               }}></div>
          <div className="absolute top-[40%] right-[30%] w-52 h-52 rotate-45 animate-pulse opacity-50" 
               style={{ 
                 backgroundColor: `${colors.secondary}30`,
                 filter: 'blur(60px)'
               }}></div>
          <div className="absolute top-[60%] right-[15%] w-48 h-48 rounded-full animate-pulse opacity-70" 
               style={{ 
                 backgroundColor: `${colors.primary}30`,
                 filter: 'blur(70px)'
               }}></div>
          <div className="absolute top-1/4 left-1/4 w-20 h-20 rounded-full animate-pulse opacity-30"
               style={{ background: `linear-gradient(135deg, ${colors.primary}70, ${colors.secondary}70)` }}></div>
          <div className="absolute bottom-1/3 left-1/5 w-16 h-16 rounded-full animate-pulse opacity-20"
               style={{ background: `linear-gradient(135deg, ${colors.secondary}70, ${colors.accent}70)` }}></div>
        </div>
        <div className="container mx-auto px-6 relative">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 max-w-2xl order-2 md:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 backdrop-blur-sm animate-fade-in"
                   style={{ backgroundColor: `${colors.primary}10`, color: colors.primary }}>
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.primary }}></div>
                <span className="text-sm font-medium">Premium Color Management Solution</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-slide-in">
                <span className="block" style={{ color: colors.text }}>Transform Your <br/>Digital Experience</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed animate-slide-in opacity-90" style={{ animationDelay: '0.1s' }}>
                Create stunning color schemes for your projects with our intuitive color palette generator.
                Perfect for designers, developers, and creative professionals.
              </p>
              <div className="flex flex-wrap gap-4 animate-slide-in" style={{ animationDelay: '0.2s' }}>
                <button className="px-8 py-4 rounded-xl text-white font-medium transition-all duration-300 hover:shadow-xl shadow-md transform hover:-translate-y-1"
                        style={{ 
                          background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                          boxShadow: `0 10px 20px -10px ${colors.primary}80`
                        }}>
                  Get Started
                </button>
                <button className="px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:shadow-lg border transform hover:-translate-y-1"
                        style={{ 
                          color: colors.primary,
                          borderColor: `${colors.primary}30`,
                          backgroundColor: colors.background
                        }}>
                  <span className="flex items-center gap-2">
                    Learn More <ArrowRight size={16} />
                  </span>
                </button>
              </div>
              <div className="mt-12 flex items-center gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="flex -space-x-3">
                  {[colors.primary, colors.secondary, colors.accent].map((color, i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 flex items-center justify-center"
                         style={{ backgroundColor: color, borderColor: colors.background, zIndex: 3-i }}>
                      <span className="text-white text-xs">
                        {i === 0 ? '+' : ''}
                      </span>
                    </div>
                  ))}
                </div>
                <div>
                  <div className="text-sm font-medium" style={{ color: colors.primary }}>Trusted by 10,000+ designers</div>
                  <div className="flex items-center gap-1 text-xs">
                    <Star size={14} fill={colors.primary} color={colors.primary} />
                    <Star size={14} fill={colors.primary} color={colors.primary} />
                    <Star size={14} fill={colors.primary} color={colors.primary} />
                    <Star size={14} fill={colors.primary} color={colors.primary} />
                    <Star size={14} fill={colors.primary} color={colors.primary} />
                    <span className="ml-1 opacity-75">4.9/5 ratings</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 relative animate-scale-in w-full max-w-md md:ml-auto order-1 md:order-2">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-10 rounded-3xl blur-xl"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border"
                   style={{ borderColor: `${colors.primary}10` }}>
                <div className="h-12 flex items-center px-4 border-b" 
                     style={{ 
                       backgroundColor: colors.background,
                       borderColor: `${colors.text}10`
                     }}>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#FF5F57' }}></div>
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#FFBD2E' }}></div>
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#28C840' }}></div>
                  </div>
                </div>
                <div style={{ backgroundColor: colors.background }}>
                  <div className="p-6">
                    <div className="h-12 rounded-lg mb-4 flex items-center px-4"
                         style={{ backgroundColor: `${colors.text}05` }}>
                      <span className="text-sm opacity-70">Choose your colors...</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      {['primary', 'secondary', 'accent', 'background'].map((colorType) => (
                        <div key={colorType} className="rounded-lg p-3 h-16 flex flex-col justify-between"
                             style={{ backgroundColor: `${colors.text}05` }}>
                          <div className="text-xs opacity-70 capitalize">{colorType}</div>
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full" 
                                 style={{ backgroundColor: colors[colorType as keyof typeof colors] as string }}></div>
                            <span className="text-xs font-mono">
                              {typeof colors[colorType as keyof typeof colors] === 'string' 
                                ? colors[colorType as keyof typeof colors] 
                                : ''}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="rounded-lg h-40 p-4 flex items-center justify-center relative overflow-hidden"
                         style={{ backgroundColor: `${colors.text}05` }}>
                      <div className="absolute inset-0 flex items-center justify-center opacity-10">
                        <div className="w-64 h-64 rounded-full" 
                             style={{ backgroundColor: colors.primary }}></div>
                      </div>
                      <div className="z-10 text-center">
                        <div className="font-medium mb-2">Preview</div>
                        <div className="flex gap-2 justify-center">
                          <div className="w-20 h-8 rounded-md" style={{ backgroundColor: colors.primary }}></div>
                          <div className="w-20 h-8 rounded-md" style={{ backgroundColor: colors.secondary }}></div>
                          <div className="w-20 h-8 rounded-md" style={{ backgroundColor: colors.accent }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-6 text-sm font-medium" style={{ color: colors.primary }}>
            <div className="w-5 h-5 rounded-full flex items-center justify-center" 
                 style={{ backgroundColor: `${colors.primary}15` }}>
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.primary }}></div>
            </div>
            How It Works
          </div>

          <h2 className="text-4xl font-bold mb-16">
            <span className="block text-gray-900" style={{ color: colors.secondary }}>Here's How Together We</span>
            <span className="block text-blue-500" style={{ color: colors.primary }}>Make a Difference</span>
          </h2>

          <div className="space-y-8">
            {/* Step 1 */}
            <div className="rounded-2xl p-8 flex gap-8 items-center relative overflow-hidden" style={{ backgroundColor: `${colors.primary}10` }}>
              <div className="absolute inset-0" style={{
                backgroundImage: `url('assets/pattern.svg')`,
                backgroundSize: '500px',
                opacity: 0.02
              }}></div>
              <div className="flex-1 relative z-10">
                <div className="text-sm mb-2" style={{ color: colors.primary }}>01</div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: colors.primary }}>
                Select a Base Color That Reflects Your Vision
                </h3>
                <p style={{ color: colors.text }}>
                Begin by choosing a primary color that resonates with your project's theme, brand identity, or aesthetic preferences. Whether you're designing a website, a digital product, or a marketing campaign, selecting the right base color is the first step toward a cohesive look.
                </p>
              </div>
              <div className="w-48 h-48 flex-shrink-0 relative z-10">
                <img src="assets/01.svg" alt="Understanding" className="w-full h-full object-contain" />
              </div>
            </div>

            {/* Step 2 */}
            <div className="rounded-2xl p-8 flex gap-8 items-center relative overflow-hidden" style={{ backgroundColor: `${colors.secondary}10` }}>
              <div className="absolute inset-0" style={{
                backgroundImage: `url('assets/pattern.svg')`,
                backgroundSize: '500px',
                opacity: 0.02
              }}></div>
              <div className="flex-1 relative z-10">
                <div className="text-sm" style={{ color: colors.secondary }}>02</div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: colors.secondary }}>
                Explore Professionally Curated Color Palettes
                </h3>
                <p style={{ color: colors.text }}>
                Once you select a base color, ColorFlow automatically generates a range of complementary and harmonious color combinations based on proven color theory principles. These palettes are designed to ensure visual appeal, balance, and aesthetic consistency across various design elements.
                </p>
              </div>
              <div className="w-48 h-48 flex-shrink-0 relative z-10">
                <img src="assets/02.svg" alt="Solutions" className="w-full h-full object-contain" />
              </div>
            </div>

            {/* Step 3 */}
            <div className="rounded-2xl p-8 flex gap-8 items-center relative overflow-hidden" style={{ backgroundColor: `${colors.accent}10` }}>
              <div className="absolute inset-0" style={{
                backgroundImage: `url('assets/pattern.svg')`,
                backgroundSize: '500px',
                opacity: 0.02
              }}></div>
              <div className="flex-1 relative z-10">
                <div className="text-sm mb-2" style={{ color: colors.accent }}>03</div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: colors.accent }}>
                Customize, Adjust, and Perfect Your Colors
                </h3>
                <p style={{ color: colors.text }}>
                Have specific preferences? Fine-tune individual colors within the suggested palettes to better align with your creative needs. Adjust hues, saturation, brightness, and contrast to achieve the perfect balance between boldness and subtlety.
                </p>
              </div>
              <div className="w-48 h-48 flex-shrink-0 relative z-10">
                <img src="assets/03.svg" alt="Support" className="w-full h-full object-contain" />
              </div>
            </div>

            {/* Step 4 */}
            <div className="rounded-2xl p-8 flex gap-8 items-center relative overflow-hidden" style={{ backgroundColor: `${colors.primary}10` }}>
              <div className="absolute inset-0" style={{
                backgroundImage: `url('assets/pattern.svg')`,
                backgroundSize: '500px',
                opacity: 0.02
              }}></div>
              <div className="flex-1 relative z-10">
                <div className="text-sm mb-2" style={{ color: colors.primary }}>04</div>
                <h3 className="text-2xl font-bold mb-4 " style={{ color: colors.secondary }}>
                Save, Export, and Integrate Effortlessly
                </h3>
                <p style={{ color: colors.text }}>
                Once you're satisfied with your custom color scheme, save your selections and export them in your preferred format. Whether you need HEX, RGB, or other formats, ColorFlow ensures seamless integration into your workflow, making it easier than ever to implement your color choices into your projects.
                </p>
              </div>
              <div className="w-48 h-48 flex-shrink-0 relative z-10">
                <img src="assets/04.svg" alt="Action" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section py-16">
        <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 mb-6 text-sm font-medium" style={{ color: colors.primary }}>
            <div className="w-5 h-5 rounded-full flex items-center justify-center" 
                 style={{ backgroundColor: `${colors.primary}15` }}>
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.primary }}></div>
            </div>
            <h2 className="text-2xl font-bold" style={{ color: colors.primary }}>Changing Lives             </h2>
          </div>
          <h2 className="text-4xl font-bold mb-12">
            <span className="block" style={{ color: colors.secondary }}>Through Seamless</span>
            <span className="block" style={{ color: colors.primary }}>Color Inspiration</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Row 1 */}
            <div className="mission-card p-6 rounded-lg relative overflow-hidden">
              <div className="absolute inset-0" style={{
                backgroundColor: `${colors.primary}10`,
                backgroundImage: `repeating-linear-gradient(
                  45deg,
                  ${colors.primary}03,
                  ${colors.primary}03 10px,
                  transparent 10px,
                  transparent 50px
                )`
              }}></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4" style={{ color: colors.primary }}>Empowering Creativity for Professionals and Beginners Alike</h3>
                <p style={{ color: colors.text }}> Whether you're a seasoned designer or someone just starting out, ColorFlow takes the guesswork out of choosing the right colors. With an extensive library of predefined palettes and customization options, it encourages exploration, innovation, and creative freedom.</p>
              </div>
            </div>

            <div className="mission-image rounded-lg overflow-hidden h-[300px]">
              <img src="assets/happy-person.png" alt="Happy person with sunglasses" className="w-full h-full object-cover" />
            </div>

            <div className="mission-card p-6 rounded-lg relative overflow-hidden">
              <div className="absolute inset-0" style={{
                backgroundColor: `${colors.secondary}10`,
                backgroundImage: `repeating-linear-gradient(
                  45deg,
                  ${colors.secondary}03,
                  ${colors.secondary}03 10px,
                  transparent 10px,
                  transparent 50px
                )`
              }}></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4" style={{ color: colors.secondary }}>Increasing Productivity and Reducing Design Fatigue</h3>
                <p style={{ color: colors.text }}>Choosing the right colors can be a daunting task, but ColorFlow eliminates unnecessary back-and-forth by providing instant, professionally designed palettes. This allows users to focus more on their creative vision and spend less time struggling with color coordination.</p>
              </div>
            </div>

            {/* Row 2 */}
            <div className="mission-image rounded-lg overflow-hidden h-[300px]">
              <img src="assets/couple.png" alt="Happy couple" className="w-full h-full object-cover" />
            </div>

            <div className="mission-card p-6 rounded-lg relative overflow-hidden">
              <div className="absolute inset-0" style={{
                backgroundColor: `${colors.accent}10`,
                backgroundImage: `repeating-linear-gradient(
                  45deg,
                  ${colors.accent}03,
                  ${colors.accent}03 10px,
                  transparent 10px,
                  transparent 50px
                )`
              }}></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4" style={{ color: colors.accent }}>Enhancing Accessibility and Inclusive Design</h3>
                <p style={{ color: colors.text }}>Good design should be visually appealing to everyone. ColorFlow includes accessibility-focused features, ensuring that color combinations maintain sufficient contrast and clarity. This helps designers create inclusive digital experiences that cater to a diverse audience.</p>
              </div>
            </div>

            <div className="mission-image rounded-lg overflow-hidden h-[300px]">
              <img src="assets/sunset-person.png" alt="Person at sunset" className="w-full h-full object-cover" />
            </div>

            {/* Row 3 */}
            <div className="mission-card p-6 rounded-lg relative overflow-hidden">
              <div className="absolute inset-0" style={{
                backgroundColor: `${colors.primary}10`,
                backgroundImage: `repeating-linear-gradient(
                  45deg,
                  ${colors.primary}03,
                  ${colors.primary}03 10px,
                  transparent 10px,
                  transparent 50px
                )`
              }}></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4" style={{ color: colors.primary }}>Enabling Seamless Brand and Product Consistency</h3>
                <p style={{ color: colors.text }}> For businesses and branding professionals, maintaining a consistent color identity is crucial. ColorFlow allows users to build custom palettes aligned with their brand aesthetics, ensuring uniformity across marketing materials, websites, and digital products.</p>
              </div>
            </div>

           
            <div className="mission-image rounded-lg overflow-hidden h-[300px]">
              <img src="assets/artist.png" alt="Person at sunset" className="w-full h-full object-cover" />
            </div>
            <div className="mission-card p-6 rounded-lg relative overflow-hidden">
              <div className="absolute inset-0" style={{
                backgroundColor: `${colors.secondary}10`,
                backgroundImage: `repeating-linear-gradient(
                  45deg,
                  ${colors.secondary}03,
                  ${colors.secondary}03 10px,
                  transparent 10px,
                  transparent 50px
                )`
              }}></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4" style={{ color: colors.secondary }}>Unlocking a World of Color Exploration and Trends </h3>
                <p style={{ color: colors.text }}>Stay ahead of design trends with ColorFlow's dynamic color insights. Discover trending color schemes, explore seasonal palettes, and experiment with fresh combinations to keep your projects modern, engaging, and visually stunning.g</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundColor: colors.isDarkMode ? `${colors.background}70` : `${colors.secondary}03`,
          backgroundImage: `repeating-linear-gradient(
            45deg,
            ${colors.secondary}01,
            ${colors.secondary}01 10px,
            transparent 10px,
            transparent 50px
          )`
        }}></div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center gap-2 justify-center mb-4">
              <div className="w-5 h-5 rounded-full flex items-center justify-center" 
                   style={{ backgroundColor: `${colors.secondary}15` }}>
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.secondary }}></div>
              </div>
              <h2 className="text-2xl font-bold" style={{ color: colors.secondary }}>Our Impact</h2>
            </div>
            <h2 className="text-4xl font-bold mb-4">Growing Together</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join our thriving community of designers and developers
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: '10K+', label: 'Active Users', icon: <img src="/assets/active.svg" alt="Active users" className="w-20 h-20 mx-auto" /> },
              { number: '50K+', label: 'Colors Generated', icon: <img src="/assets/color-palette.svg" alt="Color palette" className="w-20 h-20 mx-auto" /> },
              { number: '99%', label: 'Satisfaction Rate', icon: <img src="/assets/score.svg" alt="Star rating" className="w-20 h-20 mx-auto" /> },
              { number: '24/7', label: 'Customer Support', icon: <img src="/assets/online-chat.svg" alt="Customer support" className="w-20 h-20 mx-auto" /> },
            ].map((stat, index) => (
              <div key={index} className={`text-center p-6 rounded-lg relative overflow-hidden ${colors.isDarkMode ? 'bg-gray-800/60' : 'bg-white/80'}`}>
                <div className="relative z-10">
                  {stat.icon}
                  <div className="text-3xl font-bold mt-4" style={{ color: colors.primary }}>{stat.number}</div>
                  <div style={{ color: colors.text }}>{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section id="pricing" className="py-16 relative overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundColor: colors.isDarkMode ? `${colors.background}70` : `${colors.accent}03`,
          backgroundImage: `repeating-linear-gradient(
            45deg,
            ${colors.accent}01,
            ${colors.accent}01 10px,
            transparent 10px,
            transparent 50px
          )`
        }}></div>
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="flex items-center gap-2 justify-center mb-4">
              <div className="w-5 h-5 rounded-full flex items-center justify-center" 
                   style={{ backgroundColor: `${colors.accent}15` }}>
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.accent }}></div>
              </div>
              <h2 className="text-2xl font-bold" style={{ color: colors.accent }}>Pricing Plans</h2>
            </div>
            <h2 className="text-4xl font-bold mb-4" style={{ color: colors.text }}>Choose Your Plan</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: colors.text }}>
              Select the perfect plan that matches your needs and start creating beautiful color schemes today
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                name: 'Basic',
                price: '9',
                description: 'Perfect for individuals and small projects',
                features: ['5 Projects', 'Basic Export Options', 'Community Support', 'Regular Updates']
              },
              { 
                name: 'Pro',
                price: '29',
                description: 'Ideal for professionals and growing teams',
                features: ['Unlimited Projects', 'Advanced Export Options', 'Priority Support', 'Early Access Features']
              },
              { 
                name: 'Enterprise',
                price: '99',
                description: 'For large organizations with custom needs',
                features: ['Custom Solutions', 'API Access', 'Dedicated Support', 'Custom Integrations']
              },
            ].map((plan, i) => (
              <div key={i} 
                   className={`rounded-2xl p-8 shadow-lg transform hover:-translate-y-1 transition-transform relative overflow-hidden group ${colors.isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity"
                     style={{ backgroundColor: colors.accent }}></div>
                <div className="absolute top-0 left-0 right-0 h-24 opacity-90 z-0"
                     style={{ background: `linear-gradient(135deg, ${colors.primary}30, ${colors.primary}05)` }}></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-2 py-4" style={{ color: colors.text }}>{plan.name}</h3>
                  <p className={`mb-6 ${colors.isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{plan.description}</p>
                    
                  <div className="mb-6">
                    <span className="text-4xl font-bold" style={{ color: colors.primary }}>${plan.price}</span>
                    <span className={`${colors.isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>/month</span>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check size={16} style={{ color: colors.secondary }} />
                        <span style={{ color: colors.text }}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className="w-full py-3 rounded-lg font-medium transition-opacity hover:opacity-90 text-white"
                    style={{ backgroundColor: colors.primary }}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 relative">
        <div className="absolute inset-0" style={{
          backgroundColor: colors.isDarkMode ? `${colors.background}70` : `${colors.accent}03`,
          backgroundImage: `repeating-linear-gradient(
            45deg,
            ${colors.accent}01,
            ${colors.accent}01 10px,
            transparent 10px,
            transparent 50px
          )`
        }}></div>
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="flex items-center gap-2 justify-center mb-4">
              <div className="w-5 h-5 rounded-full flex items-center justify-center" 
                   style={{ backgroundColor: `${colors.primary}15` }}>
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.primary }}></div>
              </div>
              <h2 className="text-2xl font-bold" style={{ color: colors.primary }}>Testimonials</h2>
            </div>
            <h2 className="text-4xl font-bold mb-4" style={{ color: colors.text }}>What Our Users Say</h2>
            <p className={`max-w-2xl mx-auto ${colors.isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Join thousands of satisfied users who have transformed their projects with our color tools
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'UI/UX Designer',
                image: 'assets/testimonial.png',
                quote: 'The real-time preview feature has been a game-changer for my design workflow. It\'s incredibly intuitive and saves me hours of work.',
                rating: 5
              },
              {
                name: 'Michael Chen',
                role: 'Frontend Developer',
                image: 'assets/testimonial.png',
                quote: 'The accessibility checks give me confidence that my color choices work for everyone. Best color tool I\'ve used so far!',
                rating: 5
              },
              {
                name: 'Emma Davis',
                role: 'Creative Director',
                image: 'assets/testimonial.png',
                quote: 'This tool has become an essential part of our design process. The color combinations it suggests are always on point.',
                rating: 5
              }
            ].map((testimonial, i) => (
              <div key={i} className={`rounded-2xl p-8 shadow-lg transform hover:-translate-y-1 transition-transform relative overflow-hidden group ${colors.isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity"
                     style={{ backgroundColor: colors.accent }}></div>
                <div className="absolute top-0 left-0 right-0 h-24 opacity-90 z-0" 
                     style={{ background: `linear-gradient(135deg, ${colors.primary}30, ${colors.secondary}05)` }}></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-100">
                      <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg" style={{ color: colors.primary }}>{testimonial.name}</h3>
                      <p className={`text-sm ${colors.isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  <blockquote className={`italic ${colors.isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>"{testimonial.quote}"</blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 relative overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundColor: colors.isDarkMode ? `${colors.background}70` : `${colors.primary}03`,
          backgroundImage: `repeating-linear-gradient(
            45deg,
            ${colors.primary}01,
            ${colors.primary}01 10px,
            transparent 10px,
            transparent 50px
          )`
        }}></div>
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="flex items-center gap-2 justify-center mb-4">
              <div className="w-5 h-5 rounded-full flex items-center justify-center" 
                   style={{ backgroundColor: `${colors.primary}15` }}>
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.primary }}></div>
              </div>
              <h2 className="text-2xl font-bold" style={{ color: colors.primary }}>FAQ</h2>
            </div>
            <h2 className="text-4xl font-bold mb-4" style={{ color: colors.text }}>Frequently Asked Questions</h2>
            <p className={`max-w-2xl mx-auto ${colors.isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Get answers to common questions about ColorFlow
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "How does ColorFlow generate color palettes?",
                answer: "ColorFlow uses advanced color theory algorithms to generate harmonious color combinations. You can choose from several harmony types like complementary, split-complementary, analogous, triadic, and more."
              },
              {
                question: "Can I export my color palettes?",
                answer: "Yes! ColorFlow allows you to export your color palettes in various formats including CSS variables, Tailwind CSS config, hex codes, and more."
              },
              {
                question: "Is ColorFlow suitable for beginners?",
                answer: "Absolutely! ColorFlow is designed to be user-friendly for both beginners and professionals. The intuitive interface makes it easy to create beautiful color schemes without extensive design knowledge."
              },
              {
                question: "How do I ensure my colors are accessible?",
                answer: "ColorFlow includes built-in accessibility features that check your color combinations for proper contrast ratios, ensuring your designs meet WCAG guidelines."
              },
              {
                question: "Can I save my color combinations?",
                answer: "Yes, with a ColorFlow account you can save unlimited color palettes to your personal library for future reference and sharing."
              },
              {
                question: "Is there a mobile version available?",
                answer: "ColorFlow is fully responsive and works on all devices including smartphones and tablets, giving you the freedom to create color palettes anywhere."
              }
            ].map((faq, i) => (
              <div 
                key={i}
                className={`${colors.isDarkMode ? 'bg-gray-800/40' : 'bg-white/80'} backdrop-blur-sm rounded-xl mb-4 overflow-hidden transition-all duration-300 ${activeFaq === i ? 'shadow-xl shadow-primary/10' : 'shadow'}`}
                style={{ borderBottom: `1px solid ${colors.primary}20` }}
              >
                <div 
                  className="px-6 py-5 flex justify-between items-center cursor-pointer"
                  onClick={() => toggleFaq(i)}
                  style={{ 
                    background: activeFaq === i ? `linear-gradient(90deg, ${colors.primary}10, transparent)` : 'transparent',
                  }}
                >
                  <h3 
                    className="text-xl font-semibold flex-1" 
                    style={{ color: activeFaq === i ? colors.primary : colors.text }}
                  >
                    {faq.question}
                  </h3>
                  <div 
                    className={`h-10 w-10 rounded-full flex items-center justify-center transition-all duration-300 ${activeFaq === i ? 'rotate-180 bg-primary/20' : 'bg-gray-100/20'}`}
                    style={{ 
                      color: activeFaq === i ? colors.primary : colors.text,
                      transform: activeFaq === i ? 'rotate(180deg)' : 'rotate(0deg)'
                    }}
                  >
                    {activeFaq === i ? 
                      <Minus size={18} style={{ color: colors.primary }} /> : 
                      <Plus size={18} style={{ color: colors.primary }} />
                    }
                  </div>
                </div>
                <div 
                  className="overflow-hidden transition-all duration-500 ease-in-out"
                  style={{ 
                    maxHeight: activeFaq === i ? '300px' : '0',
                    opacity: activeFaq === i ? 1 : 0,
                    paddingLeft: '24px',
                    paddingRight: '24px',
                    paddingBottom: activeFaq === i ? '24px' : '0',
                    borderLeft: `4px solid ${activeFaq === i ? colors.primary : 'transparent'}`
                  }}
                >
                  <div 
                    className={`prose text-base leading-relaxed ${activeFaq === i ? 'animate-fadeIn' : 'animate-fadeOut'}`}
                    style={{ color: colors.text }}
                  >
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"
             style={{ backgroundColor: colors.secondary }}></div>
        <div className="relative">
          <h2 className="text-4xl font-bold mb-6" style={{ color: colors.primary }}>
            Ready to Transform Your Website?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of designers and developers who trust ColorCraft
          </p>
          <div className="flex gap-4 justify-center">
            <button
              className="px-8 py-3 rounded-lg text-white font-medium flex items-center gap-2"
              style={{ backgroundColor: colors.accent }}
            >
              Get Started Now <ArrowRight size={20} />
            </button>
            <button
              className="px-8 py-3 rounded-lg font-medium flex items-center gap-2"
              style={{ 
                backgroundColor: `${colors.accent}15`,
                color: colors.accent 
              }}
            >
              View Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export { Preview }