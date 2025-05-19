import React, { useState } from 'react';
import { Search, Menu, X, ChevronDown, User, ChevronRight, ExternalLink, ArrowRight } from 'lucide-react';

const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeClientSlide, setActiveClientSlide] = useState(8);
  
  const featuredProducts = [
    {
      id: 1,
      name: "QuantumSpec Pro 5000",
      category: "Spectroscopy",
      description: "High-precision spectrometer with quantum detection technology",
      price: "$24,999",
      image: "https://labkafe.com/storage/boiling-flask-lab-equipment-labkafe.jpg"
    },
    {
      id: 2,
      name: "CryoPrep Ultra",
      category: "Sample Preparation",
      description: "Advanced cryogenic sample preparation system with automated processing",
      price: "$18,750",
      image: "https://labkafe.com/storage/boiling-flask-lab-equipment-labkafe.jpg"
    },
    {
      id: 3,
      name: "GenomeScan Elite",
      category: "DNA Analysis",
      description: "Next-generation DNA sequencing and analysis platform",
      price: "$35,800",
      image: "https://labkafe.com/storage/boiling-flask-lab-equipment-labkafe.jpg"
    },
    {
      id: 4,
      name: "MicroVision 4K",
      category: "Microscopy",
      description: "Ultra-high resolution digital microscope with AI-powered image analysis",
      price: "$12,495",
      image: "https://labkafe.com/storage/boiling-flask-lab-equipment-labkafe.jpg"
    }
  ];
  
  const partnerProducts = [
    { name: "BOROSIL", products: 48, image: "/api/placeholder/280/180" },
    { name: "XENOCS", products: 4, image: "/api/placeholder/280/180" },
    { name: "WABASH MPI", products: 10, image: "/api/placeholder/280/180" },
    { name: "ARMI MBH", products: 7, image: "/api/placeholder/280/180" }
  ];
  
  const blogPosts = [
    {
      date: { day: 22, month: "AUG" },
      title: "How Automation Secures the Future Workforce",
      excerpt: "Automation is not a threat to jobs, but a way to create more valuable and[...]",
      image: "https://emmainternational.com/wp-content/uploads/2024/05/Lab_Chemistry-scaled.jpeg"
    },
    {
      date: { day: 24, month: "JUL" },
      title: "Solving mining challenges with the new Revontium™ XRF instrument",
      excerpt: "The energy transition is driving demand for the critical elements that will help decarbonize our[...]",
      image: "https://www.chitkara.edu.in/blogs/wp-content/uploads/2024/08/Laboratory-Science.jpg"
    },
    {
      date: { day: 26, month: "JUN" },
      title: "Waste not, want not: Fueling green cement",
      excerpt: "How many people do you think there will be on Earth by 2050? According to[...]",
      image: "https://www.augustahealth.com/wp-content/uploads/2021/10/labratory-image.jpg"
    }
  ];
  
  const clients = [
    "AREF", "HALLIBURTON", "HAIL CEMENT CO.", "NAJRAN CEMENT", "KACST"
  ];
  
  const solutions = [
    "Automation", "Beakers", "BioXolver", "Borosil", "Building Materials", 
    "Burette", "burettes", "Chemical & Petrochemical", "Condensers", "Cones", 
    "Cylinders", "Desiccators", "Dishes"
  ];
  
  return (
    <div className="min-h-screen bg-white">
    
      {/* Main Navigation */}
<div className="bg-gray-100 border-b border-gray-200">
  <div className="container mx-auto px-4">
    <div className="flex justify-between items-center">
      {/* Logo on the left */}
      <div className="text-2xl font-bold text-blue-800">
        ProLab <span className="text-blue-600">Systems</span>
        <div className="text-xs text-gray-500">Your Quality Is Our Concern</div>
      </div>
      
      {/* Navigation on the right */}
      <div className="flex items-center">
        <nav className="hidden md:flex">
          <a href="#" className="bg-blue-800 text-white px-6 py-4 font-medium text-sm">Home</a>
          <a href="#" className="text-gray-700 hover:bg-gray-200 px-6 py-4 font-medium text-sm flex items-center">
            Products <ChevronDown size={16} className="ml-1" />
          </a>
          <a href="#" className="text-gray-700 hover:bg-gray-200 px-6 py-4 font-medium text-sm flex items-center">
            Solutions <ChevronDown size={16} className="ml-1" />
          </a>
          <a href="#" className="text-gray-700 hover:bg-gray-200 px-6 py-4 font-medium text-sm">Services</a>
          <a href="#" className="text-gray-700 hover:bg-gray-200 px-6 py-4 font-medium text-sm">Gallery</a>
          <a href="#" className="text-gray-700 hover:bg-gray-200 px-6 py-4 font-medium text-sm">Community</a>
          <button className="text-gray-700 hover:bg-gray-200 px-6 py-4">
            <Search size={18} />
          </button>
        </nav>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-600 py-4"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </div>
    
    {/* Mobile Navigation */}
    {mobileMenuOpen && (
      <div className="md:hidden py-4">
        <nav className="flex flex-col">
          <a href="#" className="bg-blue-800 text-white px-4 py-2 font-medium text-sm">Home</a>
          <a href="#" className="text-gray-700 hover:bg-gray-200 px-4 py-2 font-medium text-sm">Products</a>
          <a href="#" className="text-gray-700 hover:bg-gray-200 px-4 py-2 font-medium text-sm">Solutions</a>
          <a href="#" className="text-gray-700 hover:bg-gray-200 px-4 py-2 font-medium text-sm">Services</a>
          <a href="#" className="text-gray-700 hover:bg-gray-200 px-4 py-2 font-medium text-sm">Gallery</a>
          <a href="#" className="text-gray-700 hover:bg-gray-200 px-4 py-2 font-medium text-sm">Community</a>
        </nav>
      </div>
    )}
  </div>
</div>
      
      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">We Help Laboratories Reach Their Full Potential</h2>
            <p className="text-gray-600 max-w-3xl">Our advanced laboratory instruments and integrated systems are designed to enhance research efficiency, analytical precision, and scientific discovery across multiple disciplines.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center md:items-start">
              <div className="bg-green-100 text-green-800 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold">95%</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Research Acceleration</h3>
              <p className="text-gray-600 text-center md:text-left">Our systems help scientists complete research projects up to 95% faster than traditional methods.</p>
            </div>
            
            <div className="flex flex-col items-center md:items-start">
              <div className="bg-green-100 text-green-800 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold">99%</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Data Accuracy</h3>
              <p className="text-gray-600 text-center md:text-left">Achieve 99% data accuracy with our precision instruments designed for reliable results.</p>
            </div>
            
            <div className="flex flex-col items-center md:items-start">
              <div className="bg-green-100 text-green-800 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold">24/7</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Expert Support</h3>
              <p className="text-gray-600 text-center md:text-left">Around-the-clock technical support from our team of scientific and engineering experts.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Featured Products</h2>
            <p className="text-gray-600 max-w-3xl">Discover our cutting-edge laboratory equipment designed to accelerate your research and analytical capabilities</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white overflow-hidden hover:shadow-md transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-green-700 font-semibold mb-1">{product.category}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-green-800">{product.price}</span>
                    <button className="text-green-700 hover:text-green-900 font-medium flex items-center text-sm">
                      Learn More <ArrowRight size={16} className="ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12">
            <button className="bg-green-800 hover:bg-green-900 text-white px-6 py-2 rounded-sm text-sm font-medium inline-flex items-center">
              View All Products <ArrowRight size={16} className="ml-2" />
            </button>
          </div>
        </div>
      </section>
      
      {/* Blog Section */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-12">
            <div className="text-center relative">
              <h2 className="text-2xl font-bold text-gray-800 uppercase">LATEST FROM OUR BLOG</h2>
              <div className="absolute -bottom-2 left-0 right-0 flex justify-center">
                <div className="w-12 h-0.5 bg-blue-800"></div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {blogPosts.map((post, index) => (
              <div key={index} className="bg-white border border-gray-100 overflow-hidden">
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 md:h-56 object-cover"
                  />
                  <div className="absolute top-0 left-0 m-2 md:m-4">
                    <div className="bg-white p-1 md:p-2 text-center">
                      <div className="text-blue-800 font-bold text-lg md:text-xl">{post.date.day}</div>
                      <div className="text-blue-600 font-medium text-xs md:text-sm">{post.date.month}</div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0">
                    <div className={`${post.color} text-white py-1 md:py-2 px-2 md:px-4`}>
                      <h4 className="font-bold text-xs md:text-sm uppercase line-clamp-1">{post.title}</h4>
                    </div>
                  </div>
                </div>
                <div className="p-3 md:p-4">
                  <h3 className="text-base md:text-lg font-bold text-gray-800 mb-2 md:mb-3">{post.title}</h3>
                  <p className="text-gray-600 text-xs md:text-sm mb-3 md:mb-4">{post.excerpt}</p>
                  <a href="#" className="text-gray-500 hover:text-gray-700 text-xs md:text-sm">LEAVE A COMMENT</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Clients Section */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-12">
            <div className="text-center relative">
              <h2 className="text-2xl font-bold text-gray-800 uppercase">OUR CLIENTS</h2>
              <div className="absolute -bottom-2 left-0 right-0 flex justify-center">
                <div className="w-8 h-0.5 bg-blue-800"></div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 mt-8 md:mt-12">
            {clients.map((client, index) => (
              <div key={index} className="text-center w-full sm:w-auto sm:min-w-[120px]">
                <img 
                  src="/api/placeholder/120/60" 
                  alt={client}
                  className="h-8 md:h-12 object-contain mx-auto"
                />
                <div className="mt-2 md:mt-4 font-bold text-gray-800 text-sm md:text-base">{client}</div>
                <div className="text-gray-500 text-xs">{index + 3} PRODUCTS</div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center space-x-1 md:space-x-2 mt-6 md:mt-8">
            {Array.from({ length: 10 }).map((_, index) => (
              <button 
                key={index}
                className={`w-2 h-2 rounded-full ${index === activeClientSlide ? 'bg-gray-800' : 'bg-gray-300'}`}
                onClick={() => setActiveClientSlide(index)}
                aria-label={`Slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-700 text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div>
              <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4 uppercase">About Us</h3>
              <p className="text-gray-300 text-xs md:text-sm mb-4">
                ProLab Systems is a dynamic company. We specialize in providing total laboratory solutions and support. Our strongest asset is our highly professional team.
              </p>
            </div>
            
            <div>
              <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4 uppercase">Latest News</h3>
              <ul className="space-y-2 text-xs md:text-sm">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">How Automation Secures the Future Workforce</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Solving mining challenges with the new Revontium™ XRF instrument</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Waste not, want not: Fueling green cement</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4 uppercase">Solutions</h3>
              <div className="flex flex-wrap gap-1 md:gap-2">
                {solutions.map((solution, index) => (
                  <a 
                    key={index} 
                    href="#" 
                    className="bg-gray-600 hover:bg-gray-500 text-xs text-white px-2 py-1 transition-colors duration-200"
                  >
                    {solution}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-800 py-4">
          <div className="container mx-auto px-4">
            <div className="flex justify-center">
              <a href="#" className="bg-gray-900 hover:bg-black rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center transition-colors duration-200">
                <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/>
                </svg>
              </a>
            </div>
            <div className="text-center mt-4 text-gray-400 text-xs">
              © {new Date().getFullYear()} ProLab Systems. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
