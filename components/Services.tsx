
import React from 'react';
import { SITE_IMAGES } from '../constants/content';

interface ServiceCardProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  description: string;
  onClick?: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, subtitle, imageUrl, description, onClick }) => (
  <div 
    onClick={onClick}
    className="group relative overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 cursor-pointer h-full"
  >
    <div className="aspect-[4/3] overflow-hidden bg-gray-100 flex items-center justify-center">
      <img 
        src={imageUrl} 
        alt={title} 
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        onError={(e) => {
          // 이미지 로드 실패 시 그라데이션 배경으로 대체
          e.currentTarget.style.display = 'none';
          const parent = e.currentTarget.parentElement;
          if (parent) {
            parent.className = "w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200";
            const span = document.createElement('span');
            span.innerText = title;
            span.className = "text-gray-400 font-bold text-sm opacity-50";
            parent.appendChild(span);
          }
        }}
      />
    </div>
    <div className="p-6">
      <h4 className="text-[#A53837] font-bold text-[10px] uppercase tracking-widest mb-1">{subtitle}</h4>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">
        {description}
      </p>
      <div className="mt-4 flex items-center text-[#A53837] text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
        View Details <span className="ml-2">→</span>
      </div>
    </div>
  </div>
);

interface ServicesProps {
  onSelectCategory?: (page: 'eyewear' | 'lens' | 'contact') => void;
}

const Services: React.FC<ServicesProps> = ({ onSelectCategory }) => {
  return (
    <section id="services" className="py-24 bg-[#fbf4f3]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[#A53837] font-bold tracking-[0.3em] uppercase mb-4 text-sm">Product & Service</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6 italic">전문적인 안경 서비스</h3>
          <div className="w-16 h-1 bg-[#A53837] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <ServiceCard 
            title="안경 & 선글라스" 
            subtitle="Eyewear Collection"
            imageUrl={SITE_IMAGES.cards.eyewear}
            description="Black Monster, Feliz, Plume, Ray-Ban, Caffeine, Thats, Sueey 등 다양한 하우스 브랜드 컬렉션을 제안합니다."
            onClick={() => onSelectCategory?.('eyewear')}
          />
          <ServiceCard 
            title="콘택트 렌즈" 
            subtitle="Contact Lenses"
            imageUrl={SITE_IMAGES.cards.lens}
            description="아큐브, 바슈롬, 옵티프리 등 검증된 글로벌 브랜드의 렌즈와 전용 솔루션을 취급합니다."
            onClick={() => onSelectCategory?.('lens')}
          />
          <ServiceCard 
            title="정밀 검안 및 피팅" 
            subtitle="Professional Care"
            imageUrl={SITE_IMAGES.cards.professional}
            description="최첨단 Essilor AKR 700 검안기를 통한 50년 숙련된 노하우로 정밀 검안 서비스를 제공합니다."
            onClick={() => onSelectCategory?.('contact')}
          />
        </div>

        {/* Price Table Section */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="bg-[#1a1a1a] p-6 text-white text-center">
            <h4 className="font-serif text-xl">Service Price Guide</h4>
            <p className="text-[10px] tracking-widest text-white/50 uppercase mt-1">합리적이고 투명한 가격 정책</p>
          </div>
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              <div className="space-y-4">
                <div className="flex justify-between items-end border-b border-gray-100 pb-2">
                  <span className="text-gray-900 font-bold">안경테 (Frame)</span>
                  <span className="text-[#A53837] font-serif">20,000 ~ 200,000원</span>
                </div>
                <div className="flex justify-between items-end border-b border-gray-100 pb-2">
                  <span className="text-gray-900 font-bold">안경 렌즈 (Lens)</span>
                  <span className="text-[#A53837] font-serif">20,000 ~ 100,000원</span>
                </div>
                <div className="flex justify-between items-end border-b border-gray-100 pb-2">
                  <span className="text-gray-900 font-bold">선글라스 (Sunglasses)</span>
                  <span className="text-[#A53837] font-serif">30,000 ~ 160,000원</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-end border-b border-gray-100 pb-2">
                  <span className="text-gray-900 font-bold">렌즈 교체 (Lens Only)</span>
                  <span className="text-[#A53837] font-serif">30,000원 ~</span>
                </div>
                <div className="flex justify-between items-end border-b border-gray-100 pb-2">
                  <span className="text-gray-900 font-bold">무료 피팅 (Custom Fitting)</span>
                  <span className="text-green-600 font-bold">FREE</span>
                </div>
                <p className="text-[11px] text-gray-400 italic mt-2">
                  * 제품 사양 및 도수에 따라 가격이 상이할 수 있습니다. 피팅 서비스는 구매 고객에 한해 무료로 제공됩니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
