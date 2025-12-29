
import React from 'react';
import { SITE_IMAGES } from '../constants/content';

const Story: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden border-t border-gray-50">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 order-2 lg:order-1">
          <div className="relative group">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
               <img 
                 src={SITE_IMAGES.story} 
                 alt="Love Optical Heritage" 
                 className="w-full aspect-[4/5] object-cover"
                 onError={(e) => {
                   e.currentTarget.src = "https://images.unsplash.com/photo-1538670178144-b8db27bad945?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
                 }}
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#A53837]/20 to-transparent"></div>
            </div>
            {/* Overlay Info Box */}
            <div className="absolute -bottom-6 -right-6 z-20 bg-white p-8 shadow-xl border border-gray-50 max-w-xs rounded-lg">
              <h4 className="text-[#A53837] font-bold text-xs uppercase tracking-widest mb-1">Founding Year</h4>
              <p className="font-serif text-3xl text-gray-900">SINCE 1977</p>
              <div className="w-full h-px bg-gray-100 my-4"></div>
              <p className="text-gray-500 text-sm italic">"변함없는 마음으로 2대째 명동을 지키고 있습니다."</p>
            </div>
          </div>
        </div>

        <div className="flex-1 space-y-8 order-1 lg:order-2">
          <div>
            <span className="text-[#A53837] font-bold tracking-[0.4em] uppercase text-xs block mb-4">About Love Optical</span>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
              부친의 정직함을 이어받아 <br/>
              <span className="text-[#A53837]">2대째 </span> 써내려가는 안경 이야기
            </h2>
          </div>
          
          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            <p>
              러브안경은 1977년 명동 지역에서 첫 문을 열었습니다. 부친으로부터 설립된 러브안경은 현재 <strong>2대 박상원 안경사</strong>가 그 뜻을 이어받아 운영하고 있습니다.
            </p>
            <p className="text-base text-gray-500">
              50년이라는 긴 시간 동안 한 자리에서 고객 여러분의 눈을 책임져온 것은 '정직'과 '실력'이라는 두 가지 원칙이 있었기 때문입니다. 우리는 단순히 도수를 맞추는 것을 넘어, 고객의 라이프스타일과 이미지에 가장 잘 어울리는 안경을 제안합니다.
            </p>
            <div className="bg-[#fbf4f3] p-6 rounded-xl border-l-4 border-[#A53837]">
              <h5 className="font-bold text-gray-900 mb-2">Our Mission</h5>
              <p className="text-sm text-gray-600">
                "모든 고객이 자기만의 최고의 안경을 찾도록 돕는 것. 우리가 명동 지하상가에서 매일 아침 문을 여는 이유입니다."
              </p>
            </div>
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-400 uppercase tracking-widest">Master Optician</span>
                <span className="font-serif text-xl">Sang-Won Park (박상원)</span>
              </div>
              <div className="h-10 w-px bg-gray-200"></div>
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-400 uppercase tracking-widest">Experience</span>
                <span className="font-serif text-xl">25+ Years</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
