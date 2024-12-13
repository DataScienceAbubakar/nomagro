import React, { useState } from 'react';
import Link from 'next/link';
import { Calendar, User, ArrowRight, Search, Tag } from 'lucide-react';

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const blogPosts = [
    {
      title: "Advanced Techniques for Maize Farming in Northern Nigeria",
      excerpt: "Discover the latest scientific approaches to maximize your maize yield in the unique climate of Northern Nigeria.",
      author: "Dr. Adebayo Johnson",
      date: "March 15, 2024",
      category: "Farming Tips",
      image: "/images/farm1.jpg",
      readTime: "8 min read"
    },
    {
      title: "Understanding Weather Patterns for Better Crop Planning",
      excerpt: "Learn how to interpret weather forecasts and make data-driven decisions for your farm's success.",
      author: "Mrs. Folake Adeyemi",
      date: "March 12, 2024",
      category: "Weather",
      image: "/images/farm2.jpg",
      readTime: "6 min read"
    },
    {
      title: "Success Story: From Small Farm to Commercial Success",
      excerpt: "How a local farmer transformed their small holding into a profitable enterprise using modern techniques.",
      author: "Ibrahim Musa",
      date: "March 10, 2024",
      category: "Success Stories",
      image: "/images/farm3.jpg",
      readTime: "10 min read"
    },
    {
      title: "Soil Analysis: The Key to Better Yields",
      excerpt: "Why regular soil testing is crucial for optimizing your farm's productivity and crop health.",
      author: "Dr. Sarah Okafor",
      date: "March 8, 2024",
      category: "Soil Science",
      image: "/images/farm1.jpg",
      readTime: "7 min read"
    }
  ];

  const categories = ['All', 'Farming Tips', 'Weather', 'Success Stories', 'Soil Science'];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-green-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/">
              <img 
                src="/images/logo.png" 
                alt="Nomagro Logo" 
                className="h-16 md:h-22 w-auto logo-float logo-glow cursor-pointer" 
              />
            </Link>
          </div>
          <div className="space-x-4">
            <Link href="/" className="hover:text-green-200">Home</Link>
            <Link href="/dashboard" className="hover:text-green-200">Dashboard</Link>
            <Link href="/login" className="hover:text-green-200">Login</Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Agricultural Insights</h1>
          <p className="text-xl text-gray-600">Latest farming tips and success stories from our community</p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
            <Search className="h-5 w-5 text-gray-400 absolute left-4 top-3.5" />
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeCategory === category
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-green-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post, index) => (
            <article 
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Tag className="h-4 w-4 text-green-600" />
                  <span className="text-sm text-green-600">{post.category}</span>
                  <span className="text-gray-300">•</span>
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {post.date}
                  </div>
                </div>
                <button className="text-green-600 hover:text-green-700 font-medium inline-flex items-center">
                  Read More
                  <ArrowRight className="h-4 w-4 ml-1" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="bg-white rounded-lg p-8 shadow-sm max-w-4xl mx-auto">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-gray-600 mb-6">
              Get the latest farming tips and insights delivered directly to your inbox
            </p>
            <form className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <button 
                type="submit"
                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}