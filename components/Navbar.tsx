
import React, { useState, useEffect } from 'react';
import { SITE_IMAGES } from '../constants/content';

interface NavbarProps {
  onNavigate: (page: 'home' | 'service' | 'about' | 'contact' | 'eyewear' | 'lens' | 'contact-info') => void;
  currentPage: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = currentPage === 'home';
  const navBg = (!isHome || isScrolled) ? 'bg-white/95 shadow-md py-3' : 'bg-transparent py-5';
  const textColor = (!isHome || isScrolled) ? 'text-gray-900' : 'text-white';

  const menuItems = [
    { id: 'home', label: 'HOME' },
    { id: 'service', label: 'SERVICE' },
    { id: 'about', label: 'ABOUT' },
    { id: 'contact', label: 'CONTACT' }
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navBg}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => onNavigate('home')}>
          <div className="w-12 h-12 flex items-center justify-center overflow-hidden rounded-lg bg-white p-1 shadow-sm border border-gray-100">
            <img 
              src={SITE_IMAGES.logo} 
              alt="Logo" 
              className="w-full h-full object-contain"
              onError={(e) => {
                // 이미지 로드 실패 시 텍스트 로고로 대체
                const parent = e.currentTarget.parentElement;
                if (parent) {
                  e.currentTarget.style.display = 'none';
                  const textEl = document.createElement('span');
                  textEl.innerText = 'LOVE';
                  textEl.style.color = '#A53837';
                  textEl.style.fontWeight = 'bold';
                  textEl.style.fontSize = '10px';
                  parent.appendChild(textEl);
                }
              }}
            />
          </div>
          <div className="flex flex-col -space-y-1">
            <span className={`text-xl font-bold tracking-tighter transition-colors ${textColor}`}>
              LOVE OPTICAL
            </span>
            <span className="text-[10px] font-medium tracking-widest text-[#A53837]">러브안경 SINCE 1977</span>
          </div>
        </div>
        
        <div className={`hidden md:flex space-x-8 text-sm font-bold ${textColor}`}>
          {menuItems.map((item) => (
            <button 
              key={item.id}
              onClick={() => onNavigate(item.id as any)} 
              className={`hover:text-[#A53837] transition-colors relative py-1 ${currentPage === item.id ? 'text-[#A53837]' : ''}`}
            >
              {item.label}
              {currentPage === item.id && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#A53837] animate-in fade-in zoom-in duration-300"></span>
              )}
            </button>
          ))}
        </div>

        <a 
          href="https://naver.me/G9p5O5Gy" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#A53837] text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-[#8e2e2d] transition-all shadow-lg active:scale-95"
        >
          BOOK NOW
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
