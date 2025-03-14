import React, { useState } from 'react'
import SEO from '../components/SEO'
import { 
  ArrowTrendingUpIcon, 
  SparklesIcon, 
  ChartBarIcon, 
  FireIcon 
} from '@heroicons/react/24/solid'

export default function Explore() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [hoveredCard, setHoveredCard] = useState(null)

  const categories = [
    { 
      name: 'all', 
      title: 'All Categories', 
      color: 'bg-blue-500',
      icon: '🌐'
    },
    { 
      name: 'fitness', 
      title: 'Fitness', 
      color: 'bg-green-500',
      icon: '💪'
    },
    { 
      name: 'travel', 
      title: 'Travel', 
      color: 'bg-purple-500',
      icon: '✈️'
    },
    { 
      name: 'food', 
      title: 'Food', 
      color: 'bg-red-500',
      icon: '🍽️'
    }
  ]

  const hashtagCollections = {
    all: [
      { 
        tag: '#trending', 
        platform: 'Instagram', 
        popularity: 'High',
        description: 'Viral content that\'s taking the internet by storm',
        color: 'from-blue-400 to-purple-500'
      },
      { 
        tag: '#viral', 
        platform: 'TikTok', 
        popularity: 'Very High',
        description: 'Content that\'s breaking the internet right now',
        color: 'from-pink-400 to-red-500'
      },
      { 
        tag: '#contentcreator', 
        platform: 'YouTube', 
        popularity: 'Medium',
        description: 'Community for digital content innovators',
        color: 'from-green-400 to-blue-500'
      }
    ],
    fitness: [
      { 
        tag: '#fitfam', 
        platform: 'Instagram', 
        popularity: 'Very High',
        description: 'Fitness community motivation and support',
        color: 'from-green-400 to-blue-500'
      },
      { 
        tag: '#workout', 
        platform: 'TikTok', 
        popularity: 'High',
        description: 'Share your fitness journey and progress',
        color: 'from-yellow-400 to-red-500'
      },
      { 
        tag: '#healthylifestyle', 
        platform: 'YouTube', 
        popularity: 'Medium',
        description: 'Inspiring wellness and nutrition content',
        color: 'from-purple-400 to-pink-500'
      }
    ],
    travel: [
      { 
        tag: '#wanderlust', 
        platform: 'Instagram', 
        popularity: 'Very High',
        description: 'Explore the world through stunning visuals',
        color: 'from-blue-400 to-purple-500'
      },
      { 
        tag: '#traveltok', 
        platform: 'TikTok', 
        popularity: 'High',
        description: 'Short-form travel experiences and tips',
        color: 'from-pink-400 to-red-500'
      },
      { 
        tag: '#traveldiaries', 
        platform: 'YouTube', 
        popularity: 'Medium',
        description: 'Documenting global adventures',
        color: 'from-green-400 to-blue-500'
      }
    ],
    food: [
      { 
        tag: '#foodie', 
        platform: 'Instagram', 
        popularity: 'Very High',
        description: 'Culinary creations and food adventures',
        color: 'from-red-400 to-pink-500'
      },
      { 
        tag: '#cooking', 
        platform: 'TikTok', 
        popularity: 'High',
        description: 'Quick and creative cooking content',
        color: 'from-yellow-400 to-orange-500'
      },
      { 
        tag: '#recipe', 
        platform: 'YouTube', 
        popularity: 'Medium',
        description: 'Step-by-step culinary instructions',
        color: 'from-purple-400 to-indigo-500'
      }
    ]
  }

  const trendingStats = {
    totalHashtags: 125670,
    dailyGrowth: 3.5,
    topPlatform: 'Instagram',
    averageEngagement: 12.4
  }

  const insights = [
    {
      title: 'Hashtag Evolution',
      description: 'How hashtag trends change across platforms',
      icon: <ArrowTrendingUpIcon className="w-8 h-8 text-blue-500" />,
      color: 'bg-blue-50'
    },
    {
      title: 'Content Strategies',
      description: 'Optimize your hashtag usage for maximum reach',
      icon: <SparklesIcon className="w-8 h-8 text-purple-500" />,
      color: 'bg-purple-50'
    },
    {
      title: 'Platform Insights',
      description: 'Deep dive into hashtag performance metrics',
      icon: <ChartBarIcon className="w-8 h-8 text-green-500" />,
      color: 'bg-green-50'
    }
  ]

  const filteredHashtags = hashtagCollections[activeCategory] || hashtagCollections.all

  return (
    <div className="container mx-auto px-4 py-12 bg-gray-50">
      <SEO 
        title="Explore Hashtag Categories | ViralHash"
        description="Discover trending hashtags across different categories."
        keywords="hashtag categories, trending hashtags"
      />
      
      {/* Page Header Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block bg-blue-50 rounded-full px-4 py-2 mb-4">
            <span className="text-xs sm:text-sm font-medium text-blue-600">
              Discover Trending Hashtags
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            Hashtag Explorer
          </h1>
          <p className="text-sm sm:text-base lg:text-xl text-gray-600 max-w-2xl mx-auto">
            Unlock the power of trending hashtags and elevate your social media content strategy
          </p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-12 px-4 sm:px-6">
        {categories.map((category) => (
          <button
            key={category.name}
            onClick={() => setActiveCategory(category.name)}
            className={`
              flex items-center space-x-2 
              px-3 py-2 sm:px-4 sm:py-2 
              rounded-lg 
              transition-all duration-300 
              text-sm sm:text-base
              focus:outline-none focus:ring-2 focus:ring-offset-2
              ${activeCategory === category.name 
                ? `${category.color} text-white` 
                : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'}
            `}
          >
            <span className="text-base sm:text-xl">{category.icon}</span>
            <span className="hidden sm:inline">{category.title}</span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-16 px-4 sm:px-6">
        {filteredHashtags.map((hashtag) => (
          <div 
            key={hashtag.tag}
            className="bg-white rounded-xl shadow-lg p-4 sm:p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
              <span className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2 sm:mb-0">
                {hashtag.tag}
              </span>
              <span className={`
                px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-semibold
                ${hashtag.popularity === 'Very High' 
                  ? 'bg-green-100 text-green-800' 
                  : hashtag.popularity === 'High' 
                  ? 'bg-blue-100 text-blue-800' 
                  : 'bg-gray-100 text-gray-800'}
              `}>
                {hashtag.popularity}
              </span>
            </div>
            <p className="text-xs sm:text-sm mb-4 text-gray-600">
              {hashtag.description}
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-2 sm:space-y-0">
              <div className="flex items-center space-x-2">
                <span className="text-xs sm:text-sm font-medium text-gray-600">Platform:</span>
                <span className="text-sm sm:text-base font-bold text-gray-900">{hashtag.platform}</span>
              </div>
              <button className="
                mt-2 sm:mt-0 px-3 py-1 text-xs sm:text-sm
                bg-blue-50 text-blue-600 
                rounded-full hover:bg-blue-100 
                transition-colors font-semibold
              ">
                Copy Hashtag
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Trending Stats Section */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Hashtag Trending Statistics
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real-time insights into hashtag performance and growth
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <FireIcon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-blue-800">
              {trendingStats.totalHashtags.toLocaleString()}
            </h3>
            <p className="text-blue-600">Total Hashtags</p>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg text-center">
            <ArrowTrendingUpIcon className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-green-800">
              {trendingStats.dailyGrowth}%
            </h3>
            <p className="text-green-600">Daily Growth</p>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-lg text-center">
            <SparklesIcon className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-purple-800">
              {trendingStats.topPlatform}
            </h3>
            <p className="text-purple-600">Top Platform</p>
          </div>
          
          <div className="bg-red-50 p-6 rounded-lg text-center">
            <ChartBarIcon className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-red-800">
              {trendingStats.averageEngagement}%
            </h3>
            <p className="text-red-600">Avg. Engagement</p>
          </div>
        </div>
      </div>

      {/* Insights Section */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Hashtag Insights
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Expert analysis and strategic recommendations for content creators
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <div
              key={index}
              className={`
                ${insight.color} p-6 rounded-xl 
                flex flex-col items-center text-center
                transform transition-all duration-300
                hover:shadow-lg
              `}
            >
              <div className="mb-4">
                {insight.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {insight.title}
              </h3>
              <p className="text-gray-600">
                {insight.description}
              </p>
              <button className="
                mt-4 px-4 py-2 bg-white text-blue-600 
                rounded-full hover:bg-blue-50 
                transition-colors font-semibold
              ">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
