import React from 'react';

interface MissionSectionProps {
  colors: {
    text: string;
    background: string;
    primary: string;
    secondary: string;
    accent: string;
  };
}

export const MissionSection: React.FC<MissionSectionProps> = ({ colors }) => {
  const missions = [
    {
      title: "Empowering Change",
      description: "We believe in the power of technology to drive positive change in society.",
      image: "assets/empowering.png",
      color: colors.primary
    },
    {
      title: "Building Community",
      description: "Creating spaces where people can connect, share, and grow together.",
      image: "assets/community.png",
      color: colors.secondary
    },
    {
      title: "Driving Innovation",
      description: "Pushing boundaries to create solutions that make a real difference.",
      image: "assets/innovation.png",
      color: colors.primary
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12">
          <span className="block" style={{ color: colors.text }}>Uniting Hearts,</span>
          <span className="block" style={{ color: colors.primary }}>Changing Lives</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {missions.map((mission, index) => (
            <div key={index} 
                 className="rounded-2xl p-8 relative overflow-hidden" 
                 style={{ backgroundColor: mission.color }}>
              <div className="absolute inset-0" style={{
                backgroundImage: `url('assets/pattern.svg')`,
                backgroundSize: '500px',
                backgroundRepeat: 'repeat',
                opacity: 0.05,
                mixBlendMode: 'soft-light'
              }}></div>
              <div className="relative z-10">
                <div className="w-16 h-16 mb-6 bg-white/10 rounded-xl flex items-center justify-center">
                  <img 
                    src={mission.image} 
                    alt={mission.title} 
                    className="w-10 h-10 object-contain filter brightness-0 invert"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">
                  {mission.title}
                </h3>
                <p className="text-white/90">{mission.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
