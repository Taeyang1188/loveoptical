
import React from 'react';

interface HeroProps {
  onNavigate?: (page: any) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative h-[calc(100vh-35px)] w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Spline Background Container */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <iframe 
          src='https://my.spline.design/sunglassesspin-C7g8OFiwFUOzVe9u2C1BLjKK/' 
          frameBorder='0' 
          width='100%' 
          title="Sunglasses 3D View"
          /* @ts-ignore: fetchpriority is a valid experimental attribute for performance */
          fetchpriority="high"
          style={{
            height: 'calc(100% + 100px)',
            width: '100%',
            marginTop: '-20px',
            marginBottom: '-80px',
            opacity: 0.8,
            pointerEvents: 'none'
          }}
          className="scale-110"
        ></iframe>
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h2 className="text-[#A53837] font-bold text-lg mb-2 tracking-widest uppercase">Myeongdong Heritage</h2>
        <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
          Love Optical <br/>
          <span className="text-3xl md:text-5xl font-light italic">러브안경</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl font-light mb-10 text-white/80">
          50년 간 한 자리에서, 변치 않고 한 사람을 위한 안경 <br/>
          Crafting perfect vision in the heart of Seoul since 1977.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
          <button 
            onClick={() => onNavigate?.('contact-info')}
            className="bg-[#A53837] px-10 py-4 rounded-md text-white font-bold hover:bg-white hover:text-[#A53837] transition-all duration-300 w-full md:w-auto"
          >
            Book a Call
          </button>
          <button 
            onClick={() => onNavigate?.('eyewear')}
            className="border border-white/30 backdrop-blur-sm px-10 py-4 rounded-md text-white font-bold hover:bg-white/10 transition-all duration-300 w-full md:w-auto"
          >
            View Collections
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 opacity-50">
        <span className="text-white text-[10px] tracking-widest uppercase">Scroll Down</span>
        <div className="w-px h-12 bg-white/30 relative">
          <div className="absolute top-0 left-0 w-full bg-[#A53837] h-1/2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
