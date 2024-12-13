import React, { useEffect } from 'react';
import Link from 'next/link';
import { Cloud, Sprout, Map, ArrowRight, ChevronRight, Users, TrendingUp, Award } from 'lucide-react';

export default function HomePage() {
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      
      reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-green-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src="/images/logo.png" 
              alt="Nomagro Logo" 
              className="h-16 md:h-22 w-auto logo-float logo-glow cursor-pointer" 
            />
          </div>
          <div className="space-x-4">
            <Link href="/" className="hover:text-green-300">Home</Link>
            <Link href="/login" className="hover:text-green-300">Login</Link>
            <Link href="/dashboard" className="hover:text-green-00">Dashboard</Link>
            <Link href="/blog" className="hover:text-green-300">Blog</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
<section className="bg-green-50 py-20 relative overflow-hidden">
  {/* Animated background elements */}
  <div className="absolute inset-0">
    <div className="absolute top-20 left-10 w-20 h-20 bg-green-200 rounded-full opacity-20 animate-float"></div>
    <div className="absolute bottom-10 right-20 w-32 h-32 bg-green-200 rounded-full opacity-20 animate-float-delayed"></div>
    <div className="absolute top-40 right-40 w-16 h-16 bg-green-200 rounded-full opacity-20 animate-float-slow"></div>
  </div>

  <div className="container mx-auto px-6 relative">
    <div className="text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
        Revolutionizing Agriculture 
        <span className="text-green-600 block mt-2">Through Data Science</span>
      </h1>
      <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in-delayed">
        Empowering Nigerian farmers with data-driven insights for better yields and sustainable farming practices
      </p>
      <Link 
        href="/login" 
        className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 inline-flex items-center group transition-all transform hover:scale-105 animate-fade-in-delayed-more"
      >
        Get Started
        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
      </Link>
    </div>

    {/* Animated icons */}
    <div className="absolute left-0 top-0 w-full h-full pointer-events-none">
      <div className="absolute left-[10%] top-[20%] animate-bounce-slow">
        <Sprout className="h-8 w-8 text-green-400 opacity-50" />
      </div>
      <div className="absolute right-[15%] top-[30%] animate-bounce-delayed">
        <Cloud className="h-8 w-8 text-green-400 opacity-50" />
      </div>
      <div className="absolute left-[20%] bottom-[20%] animate-bounce-slow-delayed">
        <Map className="h-8 w-8 text-green-400 opacity-50" />
      </div>
    </div>
  </div>
</section>

      {/* Features Section */}
      <section className="py-20 reveal">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <Cloud className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Weather Forecasting</h3>
              <p className="text-gray-600 mb-4">
                Get accurate weather predictions and recommendations specific to your farm's location
              </p>
            </div>
            <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <Sprout className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Crop Recommendations</h3>
              <p className="text-gray-600 mb-4">
                Receive data-driven suggestions for optimal crop selection based on soil and climate
              </p>
            </div>
            <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <Map className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Soil Analysis</h3>
              <p className="text-gray-600 mb-4">
                Understanding your soil composition for better farming decisions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gray-50 reveal">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center transform hover:-translate-y-1 transition-transform">
              <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">10,000+</h3>
              <p className="text-gray-600">Active Farmers</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center transform hover:-translate-y-1 transition-transform">
              <TrendingUp className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">35%</h3>
              <p className="text-gray-600">Average Yield Increase</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center transform hover:-translate-y-1 transition-transform">
              <Award className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">15</h3>
              <p className="text-gray-600">States Covered</p>
            </div>
          </div>
        </div>
      </section>
{/* Interactive Map */}
<section className="py-16 reveal">
  <div className="container mx-auto px-6">
    <h2 className="text-3xl font-bold text-center mb-12">Our Coverage Area</h2>
    <div className="relative w-full h-[400px] bg-white rounded-lg shadow-lg overflow-hidden">
      <img 
        src="/images/nigeria-map.png" 
        alt="Nigeria Map" 
        className="w-full h-full object-contain"
      />
      {/* Kano */}
      <div className="absolute top-[15%] left-[48%] w-4 h-4">
        <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
      </div>
      
      {/* Kaduna */}
      <div className="absolute top-[22%] left-[42%] w-4 h-4">
        <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
      </div>
      
      {/* Sokoto */}
      <div className="absolute top-[12%] left-[32%] w-4 h-4">
        <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
      </div>
      
     

      {/* Jigawa */}
      <div className="absolute top-[14%] left-[58%] w-4 h-4">
        <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
      </div>

      {/* Bauchi */}
      <div className="absolute top-[25%] left-[62%] w-4 h-4">
        <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
      </div>

      {/* Yobe */}
      <div className="absolute top-[15%] left-[68%] w-4 h-4">
        <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
      </div>

      {/* Zamfara */}
      <div className="absolute top-[18%] left-[38%] w-4 h-4">
        <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
      </div>

      {/* Add a legend */}
      <div className="absolute bottom-4 right-4 bg-white p-2 rounded-lg shadow flex items-center space-x-2">
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        <span className="text-sm text-gray-600">Active Coverage Areas</span>
      </div>
    </div>
  </div>
</section>
      {/* Image Carousel */}
      <section className="py-16 bg-gray-50 reveal">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Agriculture in Action</h2>
          <div className="relative">
            <div className="flex overflow-x-hidden">
              <div className="flex animate-carousel">
                <div className="min-w-[300px] h-[200px] mx-2">
                  <img 
                    src="/images/farm1.jpg" 
                    alt="Farming Activity" 
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="min-w-[300px] h-[200px] mx-2">
                  <img 
                    src="/images/farm2.jpg" 
                    alt="Farming Activity" 
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="min-w-[300px] h-[200px] mx-2">
                  <img 
                    src="/images/farm3.jpg" 
                    alt="Farming Activity" 
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-600 text-white py-20 reveal">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Farming?</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Join thousands of farmers already using Nomagro to improve their yields and make data-driven decisions.
          </p>
          <Link 
            href="/login" 
            className="bg-white text-green-600 px-8 py-3 rounded-lg hover:bg-green-50 inline-flex items-center group"
          >
            Start Now
            <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Nomagro</h3>
              <p className="text-gray-400">
                Transforming agriculture through data science
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <p className="text-gray-400">contact@nomagro.com</p>
              <p className="text-gray-400">+234 806 252 6671</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Facebook</a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Nomagro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}