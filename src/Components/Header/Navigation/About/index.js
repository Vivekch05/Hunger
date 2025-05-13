import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            About <span className="text-amber-500">Hunger</span>
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Your ultimate food delivery companion, bringing the best restaurants to your doorstep.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            At Hunger, we're on a mission to revolutionize food delivery by connecting food lovers with their favorite restaurants. 
            We believe that great food should be accessible to everyone, anywhere, anytime.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div className="text-amber-500 text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Fast Delivery</h3>
            <p className="text-gray-600">
              Experience lightning-fast delivery with our optimized delivery network and real-time tracking.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div className="text-amber-500 text-4xl mb-4">🍽️</div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Curated Restaurants</h3>
            <p className="text-gray-600">
              Discover the finest restaurants in your area, carefully selected for quality and taste.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div className="text-amber-500 text-4xl mb-4">💫</div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Quality Assured</h3>
            <p className="text-gray-600">
              Every order is quality-checked to ensure you receive the best dining experience.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl shadow-xl p-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-amber-100">Restaurants</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50k+</div>
              <div className="text-amber-100">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-amber-100">Support</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About