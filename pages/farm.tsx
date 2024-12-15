import { useState } from 'react';
import Link from 'next/link';
import { 
  Droplets,
  Plane,
  Leaf, 
  Fish, 
  Warehouse,
  ChevronRight,
  Smartphone,
  LineChart,
  ArrowRight
} from 'lucide-react';

const FarmPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-green-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/">
              <img 
                src="/images/logo.png" 
                alt="Nomagro Logo" 
                className="h-12 md:h-16 w-auto logo-float logo-glow cursor-pointer" 
              />
            </Link>
          </div>
          <div className="space-x-4">
            <Link href="/" className="hover:text-green-200">Home</Link>
            <Link href="/dashboard" className="hover:text-green-200">Dashboard</Link>
            <Link href="/blog" className="hover:text-green-200">Blog</Link>
            <Link href="/login" className="hover:text-green-200">Login</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-green-50 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Welcome to Nomagro Farm
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience the future of agriculture through our innovative farming technologies
          </p>
          <div className="max-w-4xl mx-auto">
            <img 
              src="/images/farm-hero.jpg" 
              alt="Nomagro Farm Overview" 
              className="rounded-lg shadow-xl w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Technologies Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Advanced Technologies</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Hydroponics */}
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="relative h-64">
                <img 
                  src="/images/hydroponics.jpg" 
                  alt="Hydroponics System" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <Leaf className="h-8 w-8 text-green-600" />
                  <h2 className="text-2xl font-bold ml-3">Hydroponics System</h2>
                </div>
                <p className="text-gray-600 mb-4">
                  State-of-the-art hydroponic systems for growing vegetables and herbs without soil. 
                  Maximizing yield while minimizing water usage through precise nutrient control.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-green-600 mr-2" />
                    <span>Automated nutrient delivery system</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-green-600 mr-2" />
                    <span>LED grow lights for optimal growth</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-green-600 mr-2" />
                    <span>Year-round production capability</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Aquaponics */}
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="relative h-64">
                <img 
                  src="/images/aquaponics.png" 
                  alt="Aquaponics Facility" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <Fish className="h-8 w-8 text-green-600" />
                  <h2 className="text-2xl font-bold ml-3">Aquaponics Facility</h2>
                </div>
                <p className="text-gray-600 mb-4">
                  Integrated aquaponics system combining fish farming with plant cultivation. 
                  Creating a sustainable ecosystem where fish waste nourishes plants.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-green-600 mr-2" />
                    <span>Tilapia and catfish breeding</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-green-600 mr-2" />
                    <span>Organic vegetable production</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-green-600 mr-2" />
                    <span>Zero-waste system design</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Drip Irrigation */}
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="relative h-64">
                <img 
                  src="/images/drip-irrigation.jpg" 
                  alt="Smart Drip Irrigation" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <Droplets className="h-8 w-8 text-green-600" />
                  <h2 className="text-2xl font-bold ml-3">Smart Drip Irrigation</h2>
                </div>
                <p className="text-gray-600 mb-4">
                  Advanced drip irrigation system with IoT sensors for precise water delivery.
                  Maximizing water efficiency while ensuring optimal plant growth.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-green-600 mr-2" />
                    <span>Soil moisture monitoring</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-green-600 mr-2" />
                    <span>Automated watering schedules</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-green-600 mr-2" />
                    <span>Weather-based adjustments</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Drone Technology */}
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="relative h-64">
                <img 
                  src="/images/drone-farming.jpg" 
                  alt="Drone Monitoring" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <Plane className="h-8 w-8 text-green-600" />
                  <h2 className="text-2xl font-bold ml-3">Drone Monitoring</h2>
                </div>
                <p className="text-gray-600 mb-4">
                  Utilizing drone technology for crop monitoring, mapping, and precision agriculture.
                  Regular aerial surveys ensure optimal crop health and early problem detection.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-green-600 mr-2" />
                    <span>Thermal imaging capability</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-green-600 mr-2" />
                    <span>Crop health assessment</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-green-600 mr-2" />
                    <span>Precision spraying system</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Livestock Section */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Smart Livestock Management</h2>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Advanced Goat Farming</h3>
                <p className="text-gray-600 mb-6">
                  Our goat farming facility combines traditional practices with modern technology
                  for optimal animal health and production efficiency.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Smartphone className="h-6 w-6 text-green-600 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold">Health Monitoring</h4>
                      <p className="text-gray-600">Electronic tagging and health tracking system</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <LineChart className="h-6 w-6 text-green-600 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold">Production Analytics</h4>
                      <p className="text-gray-600">Data-driven breeding and production optimization</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Warehouse className="h-6 w-6 text-green-600 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold">Automated Feeding</h4>
                      <p className="text-gray-600">Precision feeding systems with nutritional monitoring</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="relative h-64 md:h-auto">
                <img 
                  src="/images/goat-farming.jpg" 
                  alt="Modern Goat Farming" 
                  className="rounded-lg object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Visit Our Farm</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience our innovative farming technologies firsthand. Schedule a visit to Nomagro Farm today.
          </p>
          <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 inline-flex items-center group transition-colors">
            Schedule a Visit
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default FarmPage;