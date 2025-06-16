import { useEffect, useState } from "react";
import Link from 'next/link';
import { Cloud, Sprout, Map, ArrowRight, ChevronRight, Users, TrendingUp, Award } from 'lucide-react';

export default function HomePage() {
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    // Fetch rainfall forecast
    fetch("http://127.0.0.1:8000/forecast")
      .then((res) => res.json())
      .then((data) => {
        console.log("Forecast Data:", data);
        setForecast(data);
      })
      .catch((err) => console.error("Error fetching forecast:", err));
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
            <Link href="/farm" className="hover:text-green-300">NOMAFARM</Link>
            <Link href="/dashboard" className="hover:text-green-00">Dashboard</Link>
            <Link href="/blog" className="hover:text-green-300">Blog</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-green-50 py-20 relative overflow-hidden">
        <div className="container mx-auto px-6 relative text-center">
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
      </section>

      {/* Rainfall Forecast Section */}
      <section className="py-16 bg-white reveal">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Rainfall Forecast</h2>
          {forecast ? (
            <pre className="bg-gray-100 p-4 rounded max-w-3xl mx-auto overflow-x-auto">
              {JSON.stringify(forecast, null, 2)}
            </pre>
          ) : (
            <p className="text-center text-gray-500">Loading forecast...</p>
          )}
        </div>
      </section>

      {/* Remaining Sections */}
      {/* Services, Statistics, Map, Carousel, CTA, Footer... */}
      {/* (No changes here from your original – keep as is) */}
    </div>
  );
}
