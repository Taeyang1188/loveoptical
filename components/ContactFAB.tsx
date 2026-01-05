
import React from 'react';

const ContactFAB: React.FC = () => {
  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col space-y-4">
      {/* 전화 상담 버튼 */}
      <a 
        href="tel:02-776-4778" 
        className="bg-[#A53837] w-14 h-14 rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform group"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        <span className="absolute right-16 bg-white text-gray-900 px-3 py-1 rounded-md text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity shadow-sm whitespace-nowrap">
          Call Us
        </span>
      </a>
      
      {/* 라이브 챗 버튼 (네이버 톡톡 연결) */}
      <a 
        href="https://talk.naver.com/ct/wargoq0?frm=home"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white w-14 h-14 rounded-full flex items-center justify-center text-[#A53837] shadow-2xl hover:scale-110 transition-transform group border border-gray-100"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
        <span className="absolute right-16 bg-white text-gray-900 px-3 py-1 rounded-md text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity shadow-sm whitespace-nowrap">
          Live Chat (Naver Talk)
        </span>
      </a>
    </div>
  );
};

export default ContactFAB;
