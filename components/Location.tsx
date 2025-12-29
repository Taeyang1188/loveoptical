
import React from 'react';
import { SITE_IMAGES, CONTACT_INFO } from '../constants/content';

const Location: React.FC = () => {
  return (
    <section id="contact-details" className="py-24 bg-[#fbf4f3]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Map Image/Area */}
          <div className="flex-1 h-[450px] bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 relative group">
            <img 
              src={SITE_IMAGES.mapStatic} 
              alt="Myeongdong Map" 
              className="w-full h-full object-cover"
              onError={(e) => {
                // 로드 실패 시 안경점 내부나 명동 거리 관련 사진이 나오도록 수정
                e.currentTarget.src = "https://images.unsplash.com/photo-1556740734-7f95c9ad0414?auto=format&fit=crop&q=80&w=1200";
              }}
            />
            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-all"></div>
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-lg flex flex-col sm:flex-row justify-between items-center shadow-lg border border-gray-100 gap-4">
              <div>
                <h4 className="font-bold text-gray-900 text-sm">명동 지하쇼핑센터 바-4호</h4>
                <p className="text-[10px] text-gray-500 uppercase tracking-wider">Myeongdong Underground Shopping Center, Ba-4</p>
              </div>
              <div className="flex gap-2">
                <a 
                  href={CONTACT_INFO.naverMapLink} 
                  target="_blank" 
                  rel="noreferrer"
                  className="bg-[#03C75A] text-white px-4 py-2 rounded text-[11px] font-bold hover:brightness-110 transition-colors whitespace-nowrap"
                >
                  Naver Map
                </a>
                <a 
                  href={CONTACT_INFO.googleMapLink} 
                  target="_blank" 
                  rel="noreferrer"
                  className="bg-zinc-800 text-white px-4 py-2 rounded text-[11px] font-bold hover:bg-black transition-colors whitespace-nowrap"
                >
                  Google Map
                </a>
              </div>
            </div>
          </div>

          {/* Directions Info */}
          <div className="flex-1 space-y-10">
            <div>
              <h2 className="text-[#A53837] font-bold tracking-[0.4em] uppercase text-xs mb-4">Location & Directions / 오시는 길</h2>
              <h3 className="text-3xl font-serif text-gray-900 mb-6 leading-tight">Myeongdong Landmark</h3>
              <p className="text-gray-600 leading-relaxed">
                러브안경은 명동의 중심, 롯데백화점 본점 바로 인근의 지하상가에 위치해 있습니다. 쇼핑이나 관광 중 언제든 편하게 방문하실 수 있습니다. <br/>
                <span className="text-sm font-medium text-gray-400 italic">Conveniently located near Lotte Department Store Main Branch.</span>
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#A53837] shadow-sm font-bold border border-gray-100">1</div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">롯데백화점 본점 인근 (Near Lotte Dept Store)</h4>
                  <p className="text-sm text-gray-500">을지로입구역(2호선) 혹은 롯데백화점 본점에서 명동 방향 지하상가 입구로 들어오세요.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#A53837] shadow-sm font-bold border border-gray-100">2</div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">명동 지하상가 '바' 구역 (Section 'Ba')</h4>
                  <p className="text-sm text-gray-500">지하상가 내부로 들어오신 뒤, '바' 구역으로 이동해주세요. <br/><span className="italic text-xs">Enter the underground mall and follow signs for Section 'Ba'.</span></p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#A53837] rounded-full flex items-center justify-center text-white shadow-sm font-bold">3</div>
                <div>
                  <h4 className="font-bold text-[#A53837] mb-1">바-4호 (Unit Ba-4)</h4>
                  <p className="text-sm text-gray-500">지하상가 내부에서 '바-4호' 간판을 찾으시면 러브안경이 여러분을 기다리고 있습니다. <br/><span className="italic text-xs font-bold text-[#A53837]/70">Look for the 'LOVE OPTICAL' sign at Ba-4.</span></p>
                </div>
              </div>
            </div>

            <div className="pt-6 grid grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                <h5 className="text-[10px] text-[#A53837] font-bold uppercase tracking-widest mb-2">Reservation</h5>
                <p className="text-lg font-serif">{CONTACT_INFO.phone}</p>
                <p className="text-[11px] text-gray-400 mt-1 uppercase">English Support Available</p>
              </div>
              <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                <h5 className="text-[10px] text-[#A53837] font-bold uppercase tracking-widest mb-2">Business Hours</h5>
                <p className="text-sm font-bold">{CONTACT_INFO.hoursEng}</p>
                <p className="text-[11px] text-gray-400 mt-1">Open 365 Days / 연중무휴</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
