
import React, { useState, useEffect, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Story from './components/Story';
import Location from './components/Location';
import Footer from './components/Footer';
import ContactFAB from './components/ContactFAB';
import { SITE_IMAGES, CONTACT_INFO, EYEWEAR_PRODUCTS, Product } from './constants/content';

// --- Shared Components ---

const SubPageHero = ({ title, engTitle, bgImage }: { title: string, engTitle: string, bgImage: string }) => (
  <section className="relative h-[300px] flex items-center justify-center overflow-hidden bg-zinc-900">
    <div className="absolute inset-0 z-0">
      <img 
        src={bgImage} 
        className="w-full h-full object-cover opacity-40 brightness-75" 
        alt={title} 
      />
    </div>
    <div className="relative z-10 text-center text-white px-6">
      <h2 className="text-3xl md:text-5xl font-bold mb-3 drop-shadow-lg">{title}</h2>
      <div className="w-16 h-0.5 bg-[#A53837] mx-auto mb-3"></div>
      <h3 className="text-lg md:text-2xl font-serif uppercase tracking-widest opacity-80 drop-shadow-md">{engTitle}</h3>
    </div>
  </section>
);

// --- Home Page ---

const HomePage = ({ onNavigate }: { onNavigate: (page: any) => void }) => (
  <div className="animate-in fade-in duration-700">
    <Hero onNavigate={onNavigate} />
    <Stats />
    <section className="bg-[#A53837] py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
          변함없는 가치, 50년 명동의 자부심
        </h2>
        <div className="w-20 h-1 bg-white mx-auto mb-8 opacity-50"></div>
        <p className="text-white/80 max-w-2xl mx-auto leading-relaxed">
          러브안경은 단순히 안경을 파는 곳이 아닌, 고객의 소중한 눈 건강과 삶의 질을 함께 고민하는 동반자입니다.
        </p>
      </div>
    </section>
    <Services onSelectCategory={onNavigate} />
    <Story />
    <Location />
  </div>
);

// --- Admin Login & Dashboard ---

const AdminView = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');
  const [isSyncing, setIsSyncing] = useState(false);
  const [lastSynced, setLastSynced] = useState<string>(new Date().toLocaleTimeString());

  // 가상 실시간 데이터 (GA4 연동 시 이 부분이 API 데이터로 교체됨)
  const [gaData, setGaData] = useState({
    activeUsers: 14,
    totalVisitors: 1284,
    avgSession: '4m 32s',
    conversion: '3.8%',
    topPages: [
      { path: '/', views: 450 },
      { path: '#eyewear', views: 320 },
      { path: '#about', views: 180 },
      { path: '#contact', views: 134 }
    ]
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (userId === 'admin' && password === '1230!!!') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('아이디 또는 비밀번호가 올바르지 않습니다.');
    }
  };

  const syncGA4 = async () => {
    setIsSyncing(true);
    // [Integration Point] 향후 Google Analytics Data API 호출 로직이 이곳에 들어갑니다.
    // const response = await fetch('https://analyticsdata.googleapis.com/v1beta/properties/YOUR_ID:runReport', ...);
    setTimeout(() => {
      setLastSynced(new Date().toLocaleTimeString());
      setIsSyncing(false);
      // 데이터가 갱신된 것처럼 약간의 랜덤 수치 변화 부여
      setGaData(prev => ({
        ...prev,
        activeUsers: Math.floor(Math.random() * 20) + 5,
        totalVisitors: prev.totalVisitors + Math.floor(Math.random() * 5)
      }));
    }, 1500);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-10 border border-gray-100">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Admin Login</h2>
            <p className="text-gray-500 text-sm italic font-serif mt-1">러브안경 관리 콘솔</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">User ID</label>
              <input 
                type="text" 
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#A53837] focus:ring-0 transition-all outline-none"
                placeholder="ID 입력"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Password</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#A53837] focus:ring-0 transition-all outline-none"
                placeholder="Password 입력"
              />
            </div>
            {error && <p className="text-red-500 text-xs font-bold animate-pulse">{error}</p>}
            <button 
              type="submit"
              className="w-full bg-[#A53837] text-white py-4 rounded-xl font-bold hover:brightness-95 transition-all shadow-lg"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#f8f9fa] min-h-screen pb-24 animate-in fade-in duration-700 pt-32 font-sans">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h2 className="text-3xl font-serif text-gray-900">Management Dashboard</h2>
              <span className="bg-green-100 text-green-600 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                LIVE CONNECTED
              </span>
            </div>
            <p className="text-gray-500 text-sm">GA4 Property: <span className="font-mono text-gray-400">GTM-P6HNL37N</span></p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Last Synced</p>
              <p className="text-sm font-medium text-gray-600">{lastSynced}</p>
            </div>
            <button 
              onClick={syncGA4}
              disabled={isSyncing}
              className={`p-3 rounded-xl bg-white border border-gray-200 shadow-sm hover:border-[#A53837] transition-all ${isSyncing ? 'animate-spin' : ''}`}
            >
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </button>
            <button 
              onClick={() => setIsAuthenticated(false)}
              className="bg-white border border-gray-200 text-gray-400 px-5 py-2.5 rounded-xl font-bold text-sm hover:text-gray-900 transition-colors"
            >
              Sign Out
            </button>
          </div>
        </div>

        {/* Main Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#A53837]/5 rounded-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Active Users</h4>
            <p className="text-5xl font-serif text-gray-900">{gaData.activeUsers}</p>
            <p className="text-xs text-green-500 font-bold mt-2">Right now on site</p>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Total Visitors</h4>
            <p className="text-5xl font-serif text-gray-900">{gaData.totalVisitors.toLocaleString()}</p>
            <p className="text-xs text-green-500 font-bold mt-2">↑ 12.4% vs last week</p>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Avg. Session</h4>
            <p className="text-5xl font-serif text-gray-900">{gaData.avgSession}</p>
            <p className="text-xs text-gray-400 font-bold mt-2">Customer engagement</p>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Conversion</h4>
            <p className="text-5xl font-serif text-gray-900">{gaData.conversion}</p>
            <p className="text-xs text-green-500 font-bold mt-2">Booking & Inquiry rate</p>
          </div>
        </div>

        {/* Content Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
            <div className="flex justify-between items-center mb-8">
              <h3 className="font-bold text-gray-900 uppercase tracking-widest text-sm">Top Pages (Views)</h3>
              <button className="text-xs text-[#A53837] font-bold">Details View</button>
            </div>
            <div className="space-y-6">
              {gaData.topPages.map((page, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-mono text-gray-500">{page.path}</span>
                    <span className="font-bold text-gray-900">{page.views}</span>
                  </div>
                  <div className="w-full h-2 bg-gray-50 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-[#A53837]/70 rounded-full transition-all duration-1000"
                      style={{ width: `${(page.views / gaData.topPages[0].views) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-10 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-xl font-serif mb-2">Google Analytics Insight</h3>
              <p className="text-white/60 text-sm mb-8">대시보드에 표시되는 데이터는 GA4 API를 통해 매일 오전 9시에 정기 업데이트됩니다.</p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/></svg>
                  </div>
                  <div>
                    <p className="text-xs text-white/40 font-bold uppercase tracking-widest">Growth Forecast</p>
                    <p className="text-sm font-medium">이번 달 방문자 수가 지난달 대비 15% 증가할 것으로 예측됩니다.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-12 flex gap-3">
              <a 
                href="https://analytics.google.com/" 
                target="_blank" 
                className="bg-white text-zinc-900 px-6 py-3 rounded-xl font-bold text-xs hover:bg-[#A53837] hover:text-white transition-all"
              >
                Go To GA4 Console
              </a>
              <button className="bg-white/10 text-white px-6 py-3 rounded-xl font-bold text-xs hover:bg-white/20">
                Setup API Key
              </button>
            </div>
            
            {/* Background Decoration */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#A53837] opacity-10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- About Page ---

const AboutPage = () => (
  <div className="bg-white pb-24 animate-in fade-in duration-700">
    <SubPageHero 
      title="브랜드 스토리" 
      engTitle="OUR STORY" 
      bgImage={SITE_IMAGES.aboutHero || SITE_IMAGES.story} 
    />
    
    <Story />

    <section className="py-24 bg-[#fbf4f3] border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <div>
              <span className="text-[#A53837] font-bold tracking-[0.4em] uppercase text-xs block mb-4">Our Space</span>
              <h2 className="text-4xl font-serif text-gray-900 leading-tight">
                편안한 시력을 위한 <br/>
                <span className="text-[#A53837]">따뜻한 공간</span>
              </h2>
            </div>
            <div className="text-gray-600 leading-relaxed space-y-4">
              <p>
                명동 지하상가 바-4호에 위치한 러브안경은 화려함보다는 편안함을 지향합니다. 
                누구라도 부담 없이 들어와 안경을 써보고, 전문적인 상담을 받으실 수 있는 열린 공간입니다.
              </p>
              <p className="text-sm italic text-gray-400">
                A warm and welcoming space designed for your visual comfort. Located at Ba-4, Myeongdong Underground Mall.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="border-l-2 border-[#A53837] pl-4">
                <h5 className="font-bold text-gray-900">정밀 검안실</h5>
                <p className="text-xs text-gray-500">최신 장비를 통한 정확한 측정</p>
              </div>
              <div className="border-l-2 border-[#A53837] pl-4">
                <h5 className="font-bold text-gray-900">피팅 스테이션</h5>
                <p className="text-xs text-gray-500">개인별 맞춤형 피팅 서비스</p>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full">
            <div className="rounded-2xl overflow-hidden shadow-2xl aspect-video">
              <img 
                src={SITE_IMAGES.aboutInterior} 
                className="w-full h-full object-cover" 
                alt="Shop Interior"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1556740734-7f95c9ad0414?auto=format&fit=crop&q=80&w=1200";
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

// --- Eyewear Catalog Page ---

const EyewearCatalogPage = ({ onProductClick }: { onProductClick: (product: Product) => void }) => {
  const [filter, setFilter] = useState<'all' | 'frame' | 'sunglasses'>('all');

  const filteredProducts = filter === 'all' 
    ? EYEWEAR_PRODUCTS 
    : EYEWEAR_PRODUCTS.filter(p => p.category === filter);

  return (
    <div className="bg-white pb-24 animate-in fade-in duration-700">
      <SubPageHero 
        title="안경 & 선글라스" 
        engTitle="COLLECTIONS" 
        bgImage={SITE_IMAGES.cards.eyewear} 
      />
      <div className="container mx-auto px-6 py-12">
        <div className="flex justify-center mb-12 space-x-4">
          {(['all', 'frame', 'sunglasses'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                filter === cat 
                  ? 'bg-[#A53837] text-white shadow-lg' 
                  : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div 
              key={product.id}
              onClick={() => onProductClick(product)}
              className="group cursor-pointer"
            >
              <div className="aspect-square overflow-hidden rounded-2xl bg-gray-100 mb-4 relative border border-gray-50 shadow-sm">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {!product.inStock && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center backdrop-blur-[2px]">
                    <span className="text-white font-bold tracking-widest border-2 border-white px-4 py-2">품절</span>
                  </div>
                )}
              </div>
              <div className="space-y-1">
                <h4 className="text-[10px] text-[#A53837] font-bold uppercase tracking-widest">{product.brand}</h4>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#A53837] transition-colors">{product.name}</h3>
                <p className="text-gray-500 font-serif">₩{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- Eyewear Detail Page ---

const EyewearDetailPage = ({ product, onBack, onNavigate }: { product: Product, onBack: () => void, onNavigate: (page: any) => void }) => {
  const images = product.gallery || [product.image];
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="bg-white min-h-screen pb-24 animate-in fade-in slide-in-from-bottom-2 duration-500">
      <div className="container mx-auto px-6 py-6 border-b border-gray-100 mb-12 flex justify-between items-center">
        <nav className="flex text-[11px] font-medium text-gray-400 uppercase tracking-widest space-x-2">
          <button onClick={onBack} className="hover:text-gray-900">Collections</button>
          <span>/</span>
          <span className="text-gray-900">{product.brand}</span>
        </nav>
        <button onClick={onBack} className="text-sm font-bold text-gray-500 hover:text-gray-900">BACK TO LIST</button>
      </div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="flex-1 space-y-4">
            <div className="aspect-square bg-white rounded-xl flex items-center justify-center p-8 border border-gray-100 overflow-hidden shadow-sm">
              <img src={selectedImage} alt={product.name} className="max-w-full max-h-full object-contain" />
            </div>
            {images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {images.map((img, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setSelectedImage(img)}
                    className={`aspect-square bg-white rounded-lg p-2 border transition-all ${selectedImage === img ? 'border-[#A53837] shadow-md' : 'border-gray-100 opacity-60'}`}
                  >
                    <img src={img} className="w-full h-full object-contain" alt="thumb" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="flex-1 space-y-8">
            <div>
              <h4 className="text-[#A53837] font-bold text-sm tracking-widest uppercase mb-2">{product.brand}</h4>
              <h1 className="text-4xl font-serif text-gray-900 mb-4">{product.name}</h1>
              <p className="text-3xl font-bold text-gray-900">₩ {product.price}</p>
            </div>

            <div className="prose prose-sm leading-relaxed border-t border-gray-100 pt-8 space-y-4">
              <p className="text-gray-700 font-medium">{product.description}</p>
              <p className="text-gray-500 italic">{product.descriptionEng}</p>
              <div className="mt-6 p-4 bg-gray-50 rounded-lg border-l-4 border-[#A53837]">
                <p className="text-[13px] font-bold text-gray-900">매장 방문 시 시착 및 구매가 가능합니다.</p>
                <p className="text-[12px] text-gray-500">Available for fitting and purchase at our store.</p>
              </div>
            </div>

            <div className="pt-8 space-y-4">
              <a 
                href={CONTACT_INFO.naverTalk}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center bg-[#03C75A] text-white py-4 rounded-md font-bold hover:brightness-95 transition-all shadow-lg group"
              >
                <span className="text-lg">재고 문의 (네이버 톡톡)</span>
                <span className="text-[10px] opacity-80 uppercase tracking-widest">Check Stock (Naver Talk)</span>
              </a>
              <button 
                onClick={() => onNavigate('contact')}
                className="w-full flex flex-col items-center justify-center bg-zinc-900 text-white py-4 rounded-md font-bold hover:bg-[#A53837] transition-all shadow-lg"
              >
                <span className="text-lg">매장 위치 안내</span>
                <span className="text-[10px] opacity-80 uppercase tracking-widest">Find Our Store</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Contact Page ---

const ContactPage = () => (
  <div className="bg-white pb-24 animate-in fade-in duration-700">
    <SubPageHero title="문의" engTitle="CONTACT US" bgImage={SITE_IMAGES.contactHero} />
    <div className="container mx-auto px-6 py-20 text-center">
      <div id="phone-section" className="max-w-4xl mx-auto bg-white border border-gray-100 shadow-sm rounded-3xl p-12 mb-20">
        <h3 className="text-2xl font-bold mb-10 text-gray-400 tracking-widest uppercase">Reservation & Consultation</h3>
        <div className="space-y-12">
          {/* Phone Section */}
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">Main Phone</p>
            <div className="text-[#A53837] text-4xl md:text-5xl font-serif font-bold hover:scale-105 transition-transform inline-block">
              <a href={`tel:${CONTACT_INFO.phone}`}>{CONTACT_INFO.phone}</a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href={CONTACT_INFO.naverTalk} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#03C75A] text-white px-10 py-5 rounded-full font-bold shadow-lg hover:brightness-105 transition-all w-full sm:w-auto text-sm md:text-base flex items-center justify-center gap-2"
            >
              네이버 톡톡상담 / Naver Talk
            </a>
            <a 
              href={`mailto:${CONTACT_INFO.email}`}
              className="bg-zinc-800 text-white px-10 py-5 rounded-full font-bold shadow-lg hover:bg-zinc-900 transition-all w-full sm:w-auto text-sm md:text-base"
            >
              이메일 문의하기 / Email Us
            </a>
          </div>

          <div className="pt-10 border-t border-gray-50">
            <h4 className="text-gray-400 text-xs uppercase tracking-widest mb-4">Business Hours / 영업 시간</h4>
            <div className="space-y-2">
              <p className="font-bold text-2xl text-gray-900">{CONTACT_INFO.hoursEng}</p>
              <p className="text-gray-500 text-sm font-medium">{CONTACT_INFO.hours}</p>
              <div className="mt-4 flex flex-col items-center">
                <span className="bg-[#A53837]/10 text-[#A53837] px-6 py-2 rounded-full font-bold text-lg">
                  365일 오픈 / Open 365 Days
                </span>
                <p className="text-xs text-gray-400 mt-2">연중무휴로 운영되어 언제든 방문하실 수 있습니다.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Location />
    </div>
  </div>
);

// --- Main App Component ---

const App = () => {
  type PageType = 'home' | 'service' | 'about' | 'contact' | 'eyewear' | 'lens' | 'contact-info' | 'eyewear-detail' | 'admin';
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "OpticalBusiness",
      "name": "러브안경 (Love Optical)",
      "image": SITE_IMAGES.aboutInterior,
      "@id": "https://loveoptical.co.kr",
      "url": "https://loveoptical.co.kr",
      "telephone": CONTACT_INFO.phone,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "남대문로 81 (명동지하상가 바-4호)",
        "addressLocality": "중구",
        "addressRegion": "서울특별시",
        "postalCode": "04533",
        "addressCountry": "KR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 37.5647,
        "longitude": 126.9815
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "11:00",
        "closes": "19:00"
      },
      "sameAs": [
        "https://naver.me/5W92IMqE",
        "https://talk.naver.com/profile/wargoq0"
      ]
    };
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const titles: Record<string, string> = {
      home: '러브안경 | 명동 50년 전통 정밀 검안 안경원',
      about: '브랜드 스토리 | 러브안경 SINCE 1977',
      service: '서비스 안내 | 정밀 검안 및 피팅 전문',
      eyewear: '컬렉션 | 프리미엄 하우스 브랜드 안경',
      lens: '콘택트 렌즈 | 아큐브, 바슈롬 정품 취급점',
      contact: '오시는 길 | 명동 지하상가 바-4호 러브안경',
      admin: 'Admin Dashboard | 러브안경',
      'eyewear-detail': `${selectedProduct?.brand || '안경'} - ${selectedProduct?.name || '상세보기'} | 러브안경`
    };

    const descriptions: Record<string, string> = {
      home: '1977년부터 명동을 지켜온 러브안경. 2대째 이어오는 정밀 검안 노하우를 만나보세요.',
      about: '부친의 정직함을 이어받아 2대째 운영 중인 명동 러브안경의 역사와 철학.',
      service: 'Essilor 최첨단 검안기와 50년 숙련된 노하우로 최상의 시력을 제공합니다.',
      eyewear: '블랙몬스터, 펠리즈 등 다양한 하우스 브랜드 안경 및 선글라스 컬렉션.',
      lens: '다양한 글로벌 브랜드 콘택트 렌즈와 전용 솔루션 전문 상담.',
      contact: '명동 롯데백화점 인근, 명동 지하상가 바-4호 위치 및 상담 안내.',
      admin: '러브안경 관리자 페이지 - 사이트 통계 및 현황 확인'
    };

    document.title = titles[currentPage] || titles.home;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', descriptions[currentPage] || descriptions.home);
    }
  }, [currentPage, selectedProduct]);

  const handleHashNavigation = useCallback(() => {
    const fullHash = window.location.hash.replace('#', '');
    const hash = fullHash.split('?')[0] as PageType;

    if (['home', 'service', 'about', 'contact', 'eyewear', 'lens', 'admin'].includes(hash)) {
      setCurrentPage(hash);
    } else if (!hash) {
      setCurrentPage('home');
    }
  }, []);

  useEffect(() => {
    handleHashNavigation();
    window.addEventListener('hashchange', handleHashNavigation);
    return () => window.removeEventListener('hashchange', handleHashNavigation);
  }, [handleHashNavigation]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage, selectedProduct]);

  const handleNavigate = (page: PageType) => {
    setCurrentPage(page);
    if (page === 'home') {
      window.location.hash = '';
      if (window.history.pushState) {
        window.history.pushState('', '/', window.location.pathname);
      }
    } else {
      window.location.hash = page;
    }
  };

  const handleProductDetail = (product: Product) => {
    setSelectedProduct(product);
    setCurrentPage('eyewear-detail');
    window.location.hash = 'eyewear-detail';
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'home': return <HomePage onNavigate={handleNavigate} />;
      case 'eyewear': return <EyewearCatalogPage onProductClick={handleProductDetail} />;
      case 'eyewear-detail': return selectedProduct ? <EyewearDetailPage product={selectedProduct} onBack={() => handleNavigate('eyewear')} onNavigate={handleNavigate} /> : <EyewearCatalogPage onProductClick={handleProductDetail} />;
      case 'lens': return <div className="animate-in fade-in duration-700"><SubPageHero title="콘택트 렌즈" engTitle="CONTACT LENSES" bgImage={SITE_IMAGES.cards.lens} /><div className="container mx-auto px-6 py-20 text-center"><h3 className="text-3xl font-serif italic mb-8">Professional Contact Lens Care</h3><p className="text-gray-500">아큐브, 바슈롬 등 글로벌 브랜드 렌즈를 만나보세요.</p></div></div>;
      case 'service': return <div className="pt-20"><Services onSelectCategory={handleNavigate} /></div>;
      case 'about': return <AboutPage />;
      case 'admin': return <AdminView />;
      case 'contact':
      case 'contact-info': return <ContactPage />;
      default: return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar onNavigate={handleNavigate} currentPage={currentPage} />
      <main>{renderContent()}</main>
      <Footer onNavigate={handleNavigate} />
      <ContactFAB />
    </div>
  );
};

export default App;
