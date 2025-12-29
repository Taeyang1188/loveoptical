
import React from 'react';
import { SITE_IMAGES } from '../constants/content';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#1a1a1a] text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-14 h-14 flex items-center justify-center overflow-hidden rounded-lg bg-white p-1 shadow-sm">
                <img 
                  src={SITE_IMAGES.logo} 
                  alt="Love Optical Logo" 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.src = "https://placehold.co/100x100?text=L";
                  }}
                />
              </div>
              <div className="flex flex-col -space-y-1">
                <span className="text-xl font-bold tracking-tighter">
                  LOVE OPTICAL
                </span>
                <span className="text-[10px] font-medium tracking-widest text-[#A53837]">러브안경 SINCE 1977</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Myeongdong's landmark optical shop since 1977. 
              Always putting the customer's vision first with honesty and precision.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#A53837] transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#A53837] transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-8.768h-2.95v-3.419h2.95v-2.524c0-2.921 1.784-4.513 4.391-4.513 1.248 0 2.322.092 2.633.133v3.056l-1.808.001c-1.417 0-1.691.674-1.691 1.661v2.186h3.384l-.441 3.419h-2.943v8.768h6.104c.732 0 1.323-.593 1.323-1.324v-21.351c0-.732-.591-1.325-1.323-1.325z"/></svg>
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-bold border-l-4 border-[#A53837] pl-4">Location</h4>
            <div className="text-gray-400 text-sm space-y-2">
              <p>주소: 서울 중구 남대문로 81 (명동지하상가 바-4호)</p>
              <p>Address: Myeongdong Underground Shopping Center, Ba-4, Seoul</p>
              <p className="pt-2 text-[#A53837] font-bold">In the heart of Seoul's busiest area.</p>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-bold border-l-4 border-[#A53837] pl-4">Contact</h4>
            <div className="text-gray-400 text-sm space-y-2">
              <p>Phone: 02-776-4778</p>
              <p>Email: diameter4233@hanmail.net</p>
              <p>English Consultations Available</p>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-bold border-l-4 border-[#A53837] pl-4">Business Hours</h4>
            <div className="text-gray-400 text-sm space-y-2">
              <p>Mon - Sat: 10:00 AM - 08:30 PM</p>
              <p>Sun / Hol: 11:00 AM - 08:00 PM</p>
              <p className="pt-2 text-[#A53837] font-bold">Open Daily for Your Vision</p>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© 2024 LOVE OPTICAL. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Family Site</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
