
/**
 * LOVE OPTICAL - 중앙 콘텐츠 관리 파일
 * 이 파일에서 사이트 전반에 사용되는 이미지와 데이터를 관리합니다.
 */

export const SITE_IMAGES = {
  // [로고] 
  logo: "/logo.png", 
  
  // [메인 히어로] 3D 배경
  heroBg: "https://my.spline.design/sunglassesspin-C7g8OFiwFUOzVe9u2C1BLjKK/", 
  
  // [홈 화면 서비스 카드] 
  cards: {
    eyewear: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&q=80&w=800",
    lens: "https://i.ibb.co/Lzw2qp87/lens.png",    
    professional: "https://i.ibb.co/TDzthqk9/exam.pngg" 
  },
  
  // [소개 및 스토리 섹션]
  aboutHero: "https://i.ibb.co/DDsZzNJc/2.jpg",
  story: "https://images.unsplash.com/photo-1538670178144-b8db27bad945?q=80&w=764&auto=format&fit=crop&q=80&w=1500", 
  aboutInterior: "https://i.ibb.co/3yW4zSGD/newexterior.jpg", 
  aboutHeritage: "https://images.unsplash.com/photo-1538670178144-b8db27bad945?q=80&w=764&auto=format&fit=crop&q=80&w=1500",
  
  // [문의 및 위치 섹션]
  // 문의 페이지 상단 '문의 / CONTACT US' 배경 이미지입니다.
  contactHero: "https://i.ibb.co/dwSjsJSP/contact.png",
  
  /** 
   * [중요] 지도 이미지 경로 수정
   * 1. 'public/' 을 붙이지 마세요. 브라우저는 자동으로 루트에서 찾습니다.
   * 2. 한글 파일명(ㄹㄷ.jpg) 보다는 영문(lotte.jpg)을 권장합니다.
   */
  mapStatic: "https://i.ibb.co/bg88wXYW/lottee.jpg", 
  mapNaver: "https://i.ibb.co/v6VxCLPF/navermap.png",
  mapGoogle: "https://i.ibb.co/pjqnQfqX/googlemap.png",
  
  // [렌즈 페이지 모델]
  lensModels: {
    oneDay: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=600",
    threeDay: "https://images.unsplash.com/photo-1531123897727-8f129e16fd3c?auto=format&fit=crop&q=80&w=600",
    oneMonth: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600",
  }
};

export interface Product {
  id: number;
  brand: string;
  name: string;
  price: string;
  image: string;
  category: 'frame' | 'sunglasses';
  sku: string;
  inStock: boolean;
  description: string;
  descriptionEng: string;
  colors?: string[];
  gallery?: string[];
}

export const EYEWEAR_PRODUCTS: Product[] = [
  { 
    id: 1, 
    brand: "Black Monster", 
    name: "BM-1024 Matte Black Edition", 
    price: "158,000", 
    image: "https://images.unsplash.com/photo-1511499767350-a1590fdb7307?auto=format&fit=crop&q=80&w=800", 
    category: 'frame',
    sku: "BM-1024-BLK",
    inStock: true,
    description: "가볍고 견고한 티타늄 소재를 사용하여 장시간 착용에도 편안함을 제공하는 블랙 몬스터의 시그니처 프레임입니다.",
    descriptionEng: "Signature titanium frame by Black Monster. Lightweight and durable construction ensures maximum comfort for long-term wear.",
    gallery: [
      "https://images.unsplash.com/photo-1511499767350-a1590fdb7307?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&q=80&w=800"
    ]
  },
  { 
    id: 2, 
    brand: "Feliz", 
    name: "Classic Havana Brown", 
    price: "125,000", 
    image: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&fit=crop&q=80&w=800", 
    category: 'sunglasses',
    sku: "FZ-HAV-002",
    inStock: false,
    description: "클래식한 하바나 패턴이 돋보이는 디자인으로, 어떤 얼굴형에도 잘 어울리는 데일리 선글라스입니다.",
    descriptionEng: "A versatile daily sunglass featuring a classic Havana pattern that complements various face shapes.",
    gallery: [
      "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&fit=crop&q=80&w=800"
    ]
  },
  { 
    id: 3, 
    brand: "Ray-Ban", 
    name: "Aviator Classic Gold", 
    price: "198,000", 
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=800", 
    category: 'sunglasses',
    sku: "RB-3025-GLD",
    inStock: true,
    description: "레이밴의 아이코닉한 에비에이터 모델입니다. 골드 프레임과 G-15 렌즈의 조합으로 클래식의 정수를 보여줍니다.",
    descriptionEng: "The iconic Ray-Ban Aviator. Features a timeless gold frame and G-15 lenses, representing the pinnacle of classic style.",
  }
];

export const CONTACT_INFO = {
  phone: "02-776-4778",
  email: "diameter4233@hanmail.net",
  naverTalk: "https://talk.naver.com/profile/wargoq0",
  naverMapLink: "https://naver.me/5W92IMqE",
  googleMapLink: "https://share.google/HjSEab2oAaatTHfEi",
  address: "서울 중구 남대문로 81 (명동지하상가 바-4호)",
  addressEng: "Myeongdong Underground Shopping Center, Ba-4, Seoul",
  hours: "오전 11시 ~ 오후 7시 (연중무휴)",
  hoursEng: "11:00 AM - 07:00 PM (Open 365 Days)"
};
