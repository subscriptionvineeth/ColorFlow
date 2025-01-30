import React from 'react';
import { useColorStore } from '../store/colorStore';
import { ChevronDown, Check, Star, ArrowRight, Heart, Users, Zap, Shield, Globe } from 'lucide-react';

const Preview: React.FC = () => {
  const { colors } = useColorStore();

  const style = {
    '--text-color': colors.text,
    '--bg-color': colors.background,
    '--primary-color': colors.primary,
    '--secondary-color': colors.secondary,
    '--accent-color': colors.accent,
  } as React.CSSProperties;

  return (
    <div 
      className="min-h-screen pb-32"
      style={{
        ...style,
        color: colors.text,
        backgroundColor: colors.background,
      }}
    >
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundColor: `${colors.primary}03`,
          backgroundImage: `repeating-linear-gradient(
            45deg,
            ${colors.primary}01,
            ${colors.primary}01 10px,
            transparent 10px,
            transparent 50px
          )`
        }}></div>
        <div className="container mx-auto px-4 relative">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-5 h-5 rounded-full flex items-center justify-center" 
                 style={{ backgroundColor: `${colors.primary}15` }}>
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.primary }}></div>
            </div>
            <span className="text-sm font-medium" style={{ color: colors.primary }}>Welcome to ColorFlow</span>
          </div>
          <div className="max-w-3xl">
            <h1 className="text-6xl font-bold mb-6">
              <span className="block" style={{ color: colors.text }}>Transform Your</span>
              <span className="block" style={{ color: colors.primary }}>Digital Experience</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Create stunning color schemes for your projects with our intuitive color palette generator.
              Perfect for designers, developers, and creatives.
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-3 rounded-lg text-white font-medium transition-opacity hover:opacity-90"
                      style={{ backgroundColor: colors.primary }}>
                Get Started
              </button>
              <button className="px-8 py-3 rounded-lg font-medium transition-colors border"
                      style={{ 
                        borderColor: colors.primary,
                        color: colors.primary,
                        backgroundColor: 'white'
                      }}>
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-6 text-sm font-medium" style={{ color: colors.primary }}>
            <div className="w-5 h-5 rounded-full flex items-center justify-center" 
                 style={{ backgroundColor: `${colors.primary}15` }}>
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.primary }}></div>
            </div>
            <h2 className="text-2xl font-bold" style={{ color: colors.primary }}>How It Works</h2>
          </div>

          <h2 className="text-4xl font-bold mb-16">
            <span className="block text-gray-900">Here's How Together We</span>
            <span className="block text-blue-500" style={{ color: colors.primary }}>Make a Difference</span>
          </h2>

          <div className="space-y-8">
            {/* Step 1 */}
            <div className="rounded-2xl p-8 flex gap-8 items-center relative overflow-hidden" style={{ backgroundColor: colors.primary }}>
              <div className="absolute inset-0" style={{
                backgroundColor: `${colors.accent}10`,
                backgroundImage: `url('assets/pattern.svg')`,
                backgroundSize: '500px',
                opacity: 0.02
              }}></div>
              <div className="flex-1 relative z-10">
                <div className="text-sm mb-2" style={{ color: colors.text }}>01</div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: colors.text }}>
                  Understanding the Challenges
                </h3>
                <p>
                  We begin by identifying the pressing social justice and human rights issues. Through research, dialogue, and engagement with stakeholders, we gain an understanding of the needs and priorities that guide our work.
                </p>
              </div>
              <div className="w-48 h-48 flex-shrink-0 relative z-10">
                <img src="assets/01.svg" alt="Understanding" className="w-full h-full object-contain" />
              </div>
            </div>

            {/* Step 2 */}
            <div className="rounded-2xl p-8 flex gap-8 items-center relative overflow-hidden" style={{ backgroundColor: colors.secondary }}>
              <div className="absolute inset-0" style={{
                backgroundImage: `url('assets/pattern.svg')`,
                backgroundSize: '500px',
                opacity: 0.02
              }}></div>
              <div className="flex-1 relative z-10">
                <div className="text-sm" style={{ color: colors.text }}>02</div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: colors.text }}>
                  Pioneering Solutions for Lasting Change
                </h3>
                <p>
                  With an understanding of the challenges at hand, we develop solutions and strategies to address them. Our team collaborates with experts and community members to design programs and campaigns that have the potential to drive changes.
                </p>
              </div>
              <div className="w-48 h-48 flex-shrink-0 relative z-10">
                <img src="assets/02.svg" alt="Solutions" className="w-full h-full object-contain" />
              </div>
            </div>

            {/* Step 3 */}
            <div className="rounded-2xl p-8 flex gap-8 items-center relative overflow-hidden" style={{ backgroundColor: colors.primary }}>
              <div className="absolute inset-0" style={{
                backgroundColor: `${colors.secondary}10`,
                backgroundImage: `url('assets/pattern.svg')`,
                backgroundSize: '500px',
                opacity: 0.02
              }}></div>
              <div className="flex-1 relative z-10">
                <div className="text-sm mb-2" style={{ color: colors.text }}>03</div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: colors.text }}>
                  Building Support and Changing Lives Together
                </h3>
                <p>
                  Mobilizing resources is crucial to bringing our vision to life. We engage with donors, supporters, and funding partners to secure the financial and material resources needed to implement our programs and initiatives effectively.
                </p>
              </div>
              <div className="w-48 h-48 flex-shrink-0 relative z-10">
                <img src="assets/03.svg" alt="Support" className="w-full h-full object-contain" />
              </div>
            </div>

            {/* Step 4 */}
            <div className="rounded-2xl p-8 flex gap-8 items-center relative overflow-hidden" style={{ backgroundColor: colors.secondary }}>
              <div className="absolute inset-0" style={{
               backgroundColor: `${colors.secondary}10`,
               backgroundImage: `url('assets/pattern.svg')`,
               backgroundSize: '500px',
               opacity: 0.02
              }}></div>
              <div className="flex-1 relative z-10">
                <div className="text-sm mb-2" style={{ color: colors.text }}>04</div>
                <h3 className="text-2xl font-bold mb-4 ">
                  Taking Immediate Action on the Ground
                </h3>
                <p>
                  With resources in hand, we put our plans into action by implementing programs and initiatives that directly address the identified needs. Our team works tirelessly to make a positive impact on the ground.
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
            <h2 className="text-2xl font-bold" style={{ color: colors.primary }}>Changing Lives            </h2>
          </div>
          <h2 className="text-4xl font-bold mb-12">
            <span className="block" style={{ color: colors.text }}>Uniting Hearts,</span>
            <span className="block" style={{ color: colors.primary }}>Changing Lives</span>
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
                <h3 className="text-2xl font-bold mb-4" style={{ color: colors.primary }}>Driving Change, Transforming Lives</h3>
                <p style={{ color: colors.text }}>Our mission is simple: to champion social justice and human rights for all. We are dedicated to creating a world where every individual is treated with dignity, fairness, and respect.</p>
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
                <h3 className="text-2xl font-bold mb-4" style={{ color: colors.secondary }}>A World of Equity and Opportunity</h3>
                <p style={{ color: colors.text }}>Our vision is to build a future where equity and opportunity are not just ideals, but realities for every person, regardless of race, gender, ethnicity, or socioeconomic status.</p>
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
                <h3 className="text-2xl font-bold mb-4" style={{ color: colors.accent }}>Guided by Integrity and Compassion</h3>
                <p style={{ color: colors.text }}>At the heart of our organization are our core values of integrity, compassion, and social responsibility. We believe in upholding the highest ethical standards in all that we do.</p>
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
                <h3 className="text-2xl font-bold mb-4" style={{ color: colors.primary }}>Making a Difference, One Step at a Time</h3>
                <p style={{ color: colors.text }}>We have been dedicated to making a tangible impact in the lives of individuals and communities worldwide. Our work spans a wide range of initiatives aimed at addressing systemic injustices and promoting equality.</p>
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
                <h3 className="text-2xl font-bold mb-4" style={{ color: colors.secondary }}>Dedicated Minds Behind Our Mission</h3>
                <p style={{ color: colors.text }}>Our team is comprised of passionate individuals from diverse backgrounds, united by a shared commitment to our mission. Together, we collaborate tirelessly to drive forward our mission and make a meaningful difference in the world.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundColor: `${colors.secondary}03`,
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
              { number: '10K+', label: 'Active Users', icon: '👥' },
              { number: '50K+', label: 'Colors Generated', icon: '🎨' },
              { number: '99%', label: 'Satisfaction Rate', icon: '⭐' },
              { number: '24/7', label: 'Customer Support', icon: '💬' },
            ].map(({ number, label, icon }, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 text-center shadow-lg transform hover:-translate-y-1 transition-transform relative overflow-hidden group">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity"
                     style={{ backgroundColor: colors.secondary }}></div>
                <div className="relative z-10">
                  <div className="text-4xl mb-4">{icon}</div>
                  <div className="text-4xl font-bold mb-2" style={{ color: colors.secondary }}>
                    {number}
                  </div>
                  <div className="text-gray-600">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundColor: `${colors.accent}03`,
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
            <h2 className="text-4xl font-bold mb-4">Choose Your Plan</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
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
                   className="bg-white rounded-2xl p-8 shadow-lg transform hover:-translate-y-1 transition-transform relative overflow-hidden group">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity"
                     style={{ backgroundColor: colors.accent }}></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold" style={{ color: colors.primary }}>${plan.price}</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check size={16} style={{ color: colors.secondary }} />
                        <span>{feature}</span>
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
      <section className="py-16 relative">
        <div className="absolute inset-0" style={{
          backgroundColor: `${colors.accent}03`,
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
            <h2 className="text-4xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
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
              <div key={i} className="bg-white rounded-2xl p-8 shadow-lg transform hover:-translate-y-1 transition-transform relative overflow-hidden group">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity"
                     style={{ backgroundColor: colors.accent }}></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-100">
                      <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg" style={{ color: colors.primary }}>{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  <blockquote className="text-gray-700 italic">"{testimonial.quote}"</blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"
             style={{ backgroundColor: colors.accent }}></div>
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