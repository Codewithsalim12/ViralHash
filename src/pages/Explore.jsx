import React, { useState } from 'react'
import SEO from '../components/SEO'

export default function Explore() {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    {
      name: 'all',
      title: 'All Categories',
      description: 'Explore trending hashtags across all platforms',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
        </svg>
      )
    },
    {
      name: 'fitness',
      title: 'Fitness & Wellness',
      description: 'Motivational hashtags for health and fitness enthusiasts',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )
    },
    {
      name: 'travel',
      title: 'Travel & Adventure',
      description: 'Discover hashtags for wanderlust and exploration',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      name: 'food',
      title: 'Food & Cooking',
      description: 'Delicious hashtags for culinary creators',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    }
  ]

  const hashtagCollections = {
    all: [
      { tag: '#trending', platform: 'Instagram', popularity: 'High' },
      { tag: '#viral', platform: 'TikTok', popularity: 'Very High' },
      { tag: '#contentcreator', platform: 'YouTube', popularity: 'Medium' }
    ],
    fitness: [
      { tag: '#fitfam', platform: 'Instagram', popularity: 'Very High' },
      { tag: '#workout', platform: 'TikTok', popularity: 'High' },
      { tag: '#healthylifestyle', platform: 'YouTube', popularity: 'Medium' }
    ],
    travel: [
      { tag: '#wanderlust', platform: 'Instagram', popularity: 'Very High' },
      { tag: '#traveltok', platform: 'TikTok', popularity: 'High' },
      { tag: '#traveldiaries', platform: 'YouTube', popularity: 'Medium' }
    ],
    food: [
      { tag: '#foodie', platform: 'Instagram', popularity: 'Very High' },
      { tag: '#cooking', platform: 'TikTok', popularity: 'High' },
      { tag: '#recipe', platform: 'YouTube', popularity: 'Medium' }
    ]
  }

  const filteredHashtags = hashtagCollections[activeCategory] || hashtagCollections.all

  return (
    <>
      <SEO 
        title="Explore Hashtag Categories | HashGen"
        description="Discover trending hashtags across different categories. Find the perfect hashtags for fitness, travel, food, and more!"
        keywords="hashtag categories, trending hashtags, social media hashtags, content creation, Instagram hashtags, TikTok hashtags"
      />
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Explore Hashtag Categories
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover trending hashtags tailored to your content niche and boost your social media engagement.
          </p>
        </div>

        <div className="flex justify-center space-x-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`
                flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300
                ${activeCategory === category.name 
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}
              `}
            >
              <span className="w-6 h-6">{category.icon}</span>
              <span>{category.title}</span>
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredHashtags.map((hashtag, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    {hashtag.tag}
                  </span>
                  <span className={`
                    px-3 py-1 rounded-full text-xs font-semibold
                    ${hashtag.popularity === 'Very High' 
                      ? 'bg-green-100 text-green-800' 
                      : hashtag.popularity === 'High' 
                      ? 'bg-blue-100 text-blue-800' 
                      : 'bg-gray-100 text-gray-800'}
                  `}>
                    {hashtag.popularity}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-gray-600">Platform:</span>
                    <span className="font-bold text-gray-900">{hashtag.platform}</span>
                  </div>
                  <button className="
                    bg-gradient-to-r from-blue-500 to-purple-500 
                    text-white px-4 py-2 rounded-lg text-sm 
                    hover:from-blue-600 hover:to-purple-600 
                    transition-colors
                  ">
                    Copy
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
