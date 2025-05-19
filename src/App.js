import React, { useState } from 'react';
import { Search, Menu, X, ChevronDown, ArrowRight, ExternalLink, Users, Building, Beaker, Trophy, Phone, Mail } from 'lucide-react';

const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Client logos
  const clients = [
    { name: "AREF", logo: "/api/placeholder/120/40" },
    { name: "HALLIBURTON", logo: "/api/placeholder/120/40" },
    { name: "HAIL CEMENT CO.", logo: "/api/placeholder/120/40" },
    { name: "NAJRAN CEMENT", logo: "/api/placeholder/120/40" },
    { name: "KACST", logo: "/api/placeholder/120/40" },
    { name: "Saudi Aramco", logo: "/api/placeholder/120/40" },
  ];
  
  // Solutions categories
  const categories = [
    {
      id: 1,
      title: "Research Laboratories",
      description: "Comprehensive solutions for academic and corporate research environments",
      icon: (
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
          <Beaker size={28} />
        </div>
      )
    },
    {
      id: 2,
      title: "Quality Control",
      description: "Systems and instruments for industrial quality assurance testing",
      icon: (
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
          <Trophy size={28} />
        </div>
      )
    },
    {
      id: 3,
      title: "Educational Labs",
      description: "Teaching and learning equipment for schools and universities",
      icon: (
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
          <Users size={28} />
        </div>
      )
    }
  ];
  
  // Stats
  const stats = [
    { number: "2,245", label: "Lab Equipment Installations" },
    { number: "46,328", label: "Tests Conducted" },
    { number: "$28.9M", label: "Client Savings" },
    { number: "1,926", label: "Scientific Publications Supported" }
  ];
  
  // Blog posts
  const blogPosts = [
    {
      title: "Cutting-Edge Spectroscopy Techniques with ProLab Systems",
      image: "/api/placeholder/320/200",
      description: "Learn how our spectroscopy equipment is helping researchers make breakthrough discoveries"
    },
    {
      title: "What are your lab's sustainability responsibilities and how can you manage them?",
      image: "/api/placeholder/320/200",
      description: "Discover eco-friendly lab practices that reduce waste while maintaining quality"
    },
    {
      title: "Automating Lab Workflows Made with TrueFlow Analytics",
      image: "/api/placeholder/320/200",
      description: "Our new software integration is changing how labs operate daily"
    }
  ];
  
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="py-4 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-2xl font-bold text-blue-800">
                ProLab <span className="text-blue-600">Systems</span>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Products</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Solutions</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Services</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Blog</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Contact</a>
            </nav>
            
            {/* CTA Button */}
            <div className="hidden md:block">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300">
                Contact Sales →
              </button>
            </div>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden text-gray-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4">
              <nav className="flex flex-col space-y-2">
                <a href="#" className="text-gray-700 hover:text-blue-600 py-2 font-medium">Home</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 py-2 font-medium">Products</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 py-2 font-medium">Solutions</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 py-2 font-medium">Services</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 py-2 font-medium">Blog</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 py-2 font-medium">Contact</a>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 mt-2 w-full">
                  Contact Sales →
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            {/* Text Content */}
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Precision science <span className="text-blue-600">for over 25 years</span>
              </h1>
              <p className="text-gray-600 mb-8">
                Where precision matters: equipping laboratories with cutting-edge instruments and reliable solutions
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-sm font-medium transition-colors duration-300">
                Contact Us
              </button>
            </div>
            
            {/* Hero Image */}
            <div className="md:w-1/2">
              <img 
                src="https://www.bdo.co.za/BDO/media/bdo/Images/1140x1026-Banner-Images/Laboratory-1140X1026.jpg" 
                alt="Laboratory equipment"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Clients Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Our Clients</h2>
            <p className="text-gray-600">
              We have been working with industry leaders across the Middle East
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {clients.map((client, index) => (
              <div key={index} className="w-24 h-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">
              Complete laboratory solutions
              <br />designed for your needs
            </h2>
            <p className="text-gray-600">
              How ProLab Systems serves different sectors
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <div 
                key={category.id} 
                className="bg-white p-8 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex justify-center mb-6">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Case Study 1 Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img 
                src="https://www.labmanager.com/app/uploads/2021/10/automated-liquid-handler-GettyImages-645846866.jpg" 
                alt="Laboratory automation"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                The power of automation in modern laboratories
              </h2>
              <p className="text-gray-600 mb-4">
                Our automation solutions have revolutionized how research facilities operate, saving time and reducing human error while improving consistency and reproducibility. With our integrated systems, clients report up to 70% increase in throughput and 40% reduction in operational costs.
              </p>
              <p className="text-gray-600 mb-6">
                From sample preparation to data analysis, ProLab Systems provides end-to-end automation that transforms laboratory workflows.
              </p>
              <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                Learn More <ArrowRight size={16} className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Helping research labs achieve breakthrough results
              </h2>
              <p className="text-gray-600 mb-6">
                Our laboratory equipment and integrated systems have enabled scientists and researchers across the Middle East to make significant advancements in their fields. From pharmaceuticals to petrochemicals, academic research to industrial quality control, ProLab Systems has been a trusted partner in scientific excellence.
              </p>
              <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                Learn More <ArrowRight size={16} className="ml-2" />
              </button>
            </div>
            
            <div className="md:w-1/2 md:pl-12">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="text-blue-600 flex items-center mb-2">
                      {index === 0 ? <Building size={20} className="mr-2" /> : 
                       index === 1 ? <Beaker size={20} className="mr-2" /> : 
                       index === 2 ? <Trophy size={20} className="mr-2" /> : 
                       <Users size={20} className="mr-2" />}
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">{stat.number}</div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Case Study 2 Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12 order-2 md:order-1">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                How we designed our sample management system
              </h2>
              <p className="text-gray-600 mb-4">
                When pharmaceutical companies approached us with challenges in tracking and managing their biological samples, we created a groundbreaking system that integrates hardware and software. Our system maintains sample integrity while providing real-time tracking and complete chain of custody documentation.
              </p>
              <p className="text-gray-600 mb-6">
                The result is a 99.9% sample recovery rate and full regulatory compliance, giving researchers peace of mind and saving countless hours of administrative work.
              </p>
              <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                Learn More <ArrowRight size={16} className="ml-2" />
              </button>
            </div>
            <div className="md:w-1/2 mb-8 md:mb-0 order-1 md:order-2">
              <img 
                src="https://www.labmanager.com/app/uploads/2022/04/iStock-1352063064-1536x864.jpg" 
                alt="Sample management"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      
      {/* Blog Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Excellence in laboratory science</h2>
            <p className="text-gray-600">The latest insights and innovations from our scientific team</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div key={index} className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.description}</p>
                  <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                    Read More <ArrowRight size={16} className="ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gray-800 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">
            Elevate your research capabilities
            <br />with our advanced solutions
          </h2>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-sm font-medium transition-colors duration-300 mt-4">
            Get in Touch →
          </button>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-100 pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="text-xl font-bold text-blue-800 mb-4">
                ProLab <span className="text-blue-600">Systems</span>
              </div>
              <p className="text-gray-600 mb-4">
                Your trusted partner in laboratory excellence since 1998
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-500 hover:text-blue-600">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-blue-600">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124-4.090-.193-7.715-2.157-10.141-5.126-.427.722-.666 1.561-.666 2.457 0 1.819.957 3.431 2.408 4.385-.89-.028-1.721-.269-2.433-.67v.068c0 2.54 1.811 4.612 4.206 5.084-.454.126-.928.192-1.402.192-.34 0-.672-.033-.995-.096.665 2.084 2.6 3.6 4.903 3.644-1.797 1.402-4.066 2.24-6.519 2.24-.424 0-.842-.025-1.252-.075 2.319 1.49 5.075 2.36 8.039 2.36 9.643 0 14.922-7.99 14.922-14.925 0-.225-.004-.452-.014-.677.1-.72 1.9-1.581 2.592-2.543z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-blue-600">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-gray-800 mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-blue-600">About Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Products</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Solutions</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Services</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Careers</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-gray-800 mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Help Center</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Technical Support</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Customer Service</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Training</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Documentation</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-gray-800 mb-4">Stay up to date</h3>
              <p className="text-gray-600 mb-4">Subscribe to our newsletter for the latest updates</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-white px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 flex-grow"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-md transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="text-gray-600 mr-6">© {new Date().getFullYear()} ProLab Systems</div>
              <a href="#" className="text-gray-600 hover:text-blue-600 mr-4">Privacy Policy</a>
              <a href="#" className="text-gray-600 hover:text-blue-600">Terms of Service</a>
            </div>
            <div className="flex items-center">
              <div className="flex items-center mr-6">
                <Phone size={16} className="text-blue-600 mr-2" />
                <span className="text-gray-600">+966 11 456 7890</span>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="text-blue-600 mr-2" />
                <span className="text-gray-600">info@prolabsystems.com</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
