import React from 'react';
import { ShoppingCart, User, Menu, Search, Star, ArrowRight } from 'lucide-react';

interface Product {
  id: number;
  title: string;
  price: string;
  originalPrice?: string;
  image: string;
  isSale: boolean;
}

const products: Product[] = [
  {
    id: 1,
    title: "Small Business Bookkeeping Tracker | Notion Template",
    price: "26,000 MNT",
    image: "https://placehold.co/600x500/E5A9A9/2D2D35?text=Bookkeeping\nTracker",
    isSale: false,
  },
  {
    id: 2,
    title: "ADHD Planner & Tracker | Notion Template",
    price: "26,000 MNT",
    originalPrice: "55,000 MNT",
    image: "https://placehold.co/600x500/E5A9A9/2D2D35?text=ADHD\nPlanner",
    isSale: true,
  },
  {
    id: 3,
    title: "Bestselling Templates Bundle | Top 10 Templates",
    price: "187,000 MNT",
    originalPrice: "205,000 MNT",
    image: "https://placehold.co/600x500/D9E2D5/2D2D35?text=Templates\nBundle",
    isSale: true,
  },
  {
    id: 4,
    title: "Income & Expense Tracker | Notion Template",
    price: "26,000 MNT",
    originalPrice: "37,000 MNT",
    image: "https://placehold.co/600x500/E5A9A9/2D2D35?text=Expense\nTracker",
    isSale: true,
  }
];

const Header = () => (
  <header className="sticky top-0 z-50 bg-[var(--color-page-bg)]/90 backdrop-blur-md border-b border-[#E5D5C5]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-20">
        <div className="flex items-center gap-3">
          <img 
            src="/logo.png" 
            alt="NotionPro.Studio Logo" 
            className="h-10 w-10 object-contain"
            onError={(e) => { e.currentTarget.src = 'https://placehold.co/100x100/e2e8f0/1e293b?text=Logo' }}
          />
          <span className="text-2xl font-bold text-[#2D2D35] tracking-tight">NotionPro.Studio</span>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-[#2D2D35] font-medium hover:text-[#8B8B95] transition-colors">Home</a>
          <a href="#" className="text-[#2D2D35] font-medium hover:text-[#8B8B95] transition-colors">Shop All</a>
          <a href="#" className="text-[#2D2D35] font-medium hover:text-[#8B8B95] transition-colors">Bundles</a>
          <a href="#" className="text-[#2D2D35] font-medium hover:text-[#8B8B95] transition-colors">About</a>
        </nav>
        <div className="flex items-center space-x-5">
          <button className="text-[#2D2D35] hover:text-[#8B8B95] transition-colors"><Search size={22} /></button>
          <button className="text-[#2D2D35] hover:text-[#8B8B95] transition-colors hidden sm:block"><User size={22} /></button>
          <button className="text-[#2D2D35] hover:text-[#8B8B95] transition-colors relative">
            <ShoppingCart size={22} />
            <span className="absolute -top-1.5 -right-1.5 bg-[#E5A9A9] text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
              2
            </span>
          </button>
          <button className="md:hidden text-[#2D2D35]"><Menu size={24} /></button>
        </div>
      </div>
    </div>
  </header>
);

const Hero = () => (
  <div className="bg-[var(--color-card-bg)] py-16 sm:py-24 lg:py-32 relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2D2D35] mb-6 tracking-tight">
        Organize your life & <br className="hidden sm:block" /> business with ease
      </h1>
      <p className="text-lg text-[#6B6B75] max-w-2xl mx-auto mb-10 leading-relaxed">
        Premium Notion templates designed to save you time, boost productivity, and help you reach your goals effortlessly.
      </p>
      <button className="bg-[#2D2D35] text-white px-8 py-4 rounded-full font-medium hover:bg-[#3A3A42] transition-colors inline-flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200">
        Shop All Templates <ArrowRight size={18} />
      </button>
    </div>
    {/* Decorative background elements */}
    <div className="absolute top-10 left-10 w-32 h-32 bg-[#E5A9A9]/20 rounded-full blur-2xl"></div>
    <div className="absolute bottom-10 right-10 w-48 h-48 bg-[#D9E2D5]/40 rounded-full blur-3xl"></div>
  </div>
);

const Categories = () => {
  const cats = [
    { name: "Business & Finance", color: "bg-[#E5A9A9]" },
    { name: "Life Planners", color: "bg-[#D9E2D5]" },
    { name: "Health & Fitness", color: "bg-[#E2D5D5]" },
    { name: "Value Bundles", color: "bg-[#D5DCE2]" }
  ];
  return (
    <div className="py-16 bg-[var(--color-page-bg)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-8 text-[#3A3A42] text-center">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {cats.map((c, i) => (
            <div 
              key={i} 
              className={`${c.color} rounded-2xl p-6 sm:p-8 text-center cursor-pointer hover:opacity-90 transition-all duration-300 hover:shadow-md flex items-center justify-center min-h-[120px] sm:min-h-[140px]`}
            >
              <h3 className="font-medium text-[#2D2D35] text-sm sm:text-base">{c.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const FeaturedTemplates = () => (
  <div className="py-16 bg-[var(--color-page-bg)]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-end mb-8">
        <h2 className="text-3xl font-semibold text-[#3A3A42]">
          Featured Templates
        </h2>
        <a href="#" className="hidden sm:flex items-center gap-1 text-[#6B6B75] hover:text-[#2D2D35] font-medium transition-colors">
          View all <ArrowRight size={16} />
        </a>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="bg-[var(--color-card-bg)] rounded-2xl overflow-hidden flex flex-col h-full shadow-sm hover:shadow-md transition-shadow duration-300 group cursor-pointer"
          >
            <div className="relative aspect-[5/4] w-full overflow-hidden bg-gray-200">
              <img 
                src={product.image} 
                alt={product.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              {product.isSale && (
                <div className="absolute bottom-3 left-3 bg-[var(--color-page-bg)] text-[var(--color-text-main)] text-xs font-medium px-4 py-1.5 rounded-full shadow-sm tracking-wide">
                  Sale
                </div>
              )}
            </div>
            
            <div className="p-6 flex flex-col items-center text-center flex-grow justify-between">
              <h3 className="text-[15px] font-medium leading-snug mb-4 text-[#2D2D35]">
                {product.title}
              </h3>
              
              <div className="flex items-center justify-center gap-3 text-[15px]">
                {product.originalPrice && (
                  <span className="text-[#8B8B95] line-through decoration-[#8B8B95]/60">
                    {product.originalPrice}
                  </span>
                )}
                <span className="font-medium text-[#2D2D35]">
                  {product.price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center sm:hidden">
        <button className="border-2 border-[#2D2D35] text-[#2D2D35] px-6 py-2.5 rounded-full font-medium w-full">
          View all templates
        </button>
      </div>
    </div>
  </div>
);

const Testimonials = () => (
  <div className="py-20 bg-[var(--color-card-bg)]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-semibold mb-12 text-[#3A3A42] text-center">Loved by thousands</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { name: "Sarah J.", text: "This template completely changed how I manage my small business finances. So easy to use and looks beautiful!" },
          { name: "Michael T.", text: "The ADHD planner is a lifesaver. It's the first system I've actually stuck with for more than a week." },
          { name: "Emily R.", text: "Incredible value in the bundle. The instructions are clear and the spreadsheets are perfectly formatted." }
        ].map((t, i) => (
          <div key={i} className="bg-[var(--color-page-bg)] p-8 rounded-2xl shadow-sm">
            <div className="flex text-[#E5A9A9] mb-6">
              {[...Array(5)].map((_, j) => <Star key={j} size={18} fill="currentColor" />)}
            </div>
            <p className="text-[#6B6B75] mb-6 text-[15px] leading-relaxed italic">"{t.text}"</p>
            <p className="font-medium text-[#2D2D35]">- {t.name}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Footer = () => (
  <footer className="bg-[#2D2D35] text-[#FDF8F5] py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
      <div>
        <div className="flex items-center gap-3 mb-6">
          <img 
            src="/logo.png" 
            alt="NotionPro.Studio Logo" 
            className="h-8 w-8 object-contain bg-white rounded-full p-0.5"
            onError={(e) => { e.currentTarget.src = 'https://placehold.co/100x100/e2e8f0/1e293b?text=Logo' }}
          />
          <h3 className="text-2xl font-bold tracking-tight">NotionPro.Studio</h3>
        </div>
        <p className="text-[#8B8B95] text-sm leading-relaxed">
          Beautiful, functional Notion templates for your everyday personal and business needs.
        </p>
      </div>
      <div>
        <h4 className="font-semibold mb-6 text-lg">Shop</h4>
        <ul className="space-y-3 text-sm text-[#8B8B95]">
          <li><a href="#" className="hover:text-white transition-colors">All Products</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Bundles</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Freebies</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Gift Cards</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-6 text-lg">Support</h4>
        <ul className="space-y-3 text-sm text-[#8B8B95]">
          <li><a href="#" className="hover:text-white transition-colors">FAQ & Help Center</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Refund Policy</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-6 text-lg">Newsletter</h4>
        <p className="text-[#8B8B95] text-sm mb-4">Subscribe to get 10% off your first order and free monthly templates!</p>
        <div className="flex flex-col sm:flex-row gap-2">
          <input 
            type="email" 
            placeholder="Email address" 
            className="px-4 py-3 rounded-lg w-full text-[#2D2D35] focus:outline-none focus:ring-2 focus:ring-[#E5A9A9]" 
          />
          <button className="bg-[#E5A9A9] text-[#2D2D35] px-6 py-3 rounded-lg font-medium hover:bg-[#d89c9c] transition-colors whitespace-nowrap">
            Subscribe
          </button>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-[#3A3A42] flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#8B8B95]">
      <p>&copy; 2026 NotionPro.Studio. All rights reserved.</p>
      <div className="flex gap-6">
        <a href="#" className="hover:text-white transition-colors">Instagram</a>
        <a href="#" className="hover:text-white transition-colors">TikTok</a>
        <a href="#" className="hover:text-white transition-colors">Pinterest</a>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--color-page-bg)] font-sans text-[var(--color-text-main)] selection:bg-[#E5A9A9] selection:text-[#2D2D35]">
      <Header />
      <main>
        <Hero />
        <Categories />
        <FeaturedTemplates />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
