import { useState } from 'react'

const platforms = [
  {
    name: 'Instagram',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png',
    trends: [
      { tag: '#reels', posts: '2.1M', growth: '+15%' },
      { tag: '#instagood', posts: '1.8M', growth: '+12%' },
      { tag: '#photography', posts: '1.5M', growth: '+8%' },
      { tag: '#fashion', posts: '1.2M', growth: '+10%' }
    ]
  },
  {
    name: 'TikTok',
    icon: 'https://sf-tb-sg.ibytedtos.com/obj/eden-sg/uhtyvueh7nulogpoguhm/tiktok-icon2.png',
    trends: [
      { tag: '#fyp', posts: '3.2M', growth: '+25%' },
      { tag: '#viral', posts: '2.8M', growth: '+20%' },
      { tag: '#dance', posts: '2.1M', growth: '+18%' },
      { tag: '#trending', posts: '1.9M', growth: '+15%' }
    ]
  },
  {
    name: 'YouTube',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1024px-YouTube_full-color_icon_%282017%29.svg.png',
    trends: [
      { tag: '#shorts', posts: '4.5M', growth: '+30%' },
      { tag: '#tutorial', posts: '2.2M', growth: '+10%' },
      { tag: '#vlog', posts: '1.8M', growth: '+12%' },
      { tag: '#gaming', posts: '1.6M', growth: '+15%' }
    ]
  }
]

export default function Trending() {
  const [selectedPlatform, setSelectedPlatform] = useState('all')
  
  const filteredPlatforms = selectedPlatform === 'all' 
    ? platforms 
    : platforms.filter(p => p.name.toLowerCase() === selectedPlatform)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Trending Hashtags</h1>
        <p className="text-xl text-gray-600">
          Stay updated with the most popular hashtags across social media platforms
        </p>
      </div>

      <div className="flex justify-center mb-8">
        <div className="inline-flex p-1 flex-wrap space-x-1 bg-gray-100 rounded-xl">
          <button
            onClick={() => setSelectedPlatform('all')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              selectedPlatform === 'all'
                ? 'bg-white shadow-sm text-gray-900'
                : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            All Platforms
          </button>
          {platforms.map((platform) => (
            <button
              key={platform.name}
              onClick={() => setSelectedPlatform(platform.name.toLowerCase())}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedPlatform === platform.name.toLowerCase()
                  ? 'bg-white shadow-sm text-gray-900'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              {platform.name}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredPlatforms.map((platform) => (
          <div key={platform.name} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex-shrink-0">
                  <img
                    src={platform.icon}
                    alt={platform.name}
                    className="h-12 w-12 object-contain"
                  />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{platform.name}</h2>
                  <p className="text-sm text-gray-500">Top trending hashtags</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {platform.trends.map((trend) => (
                  <div
                    key={trend.tag}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div>
                      <p className="font-medium text-gray-900">{trend.tag}</p>
                      <p className="text-sm text-gray-500">{trend.posts} posts</p>
                    </div>
                    <div className="flex items-center text-green-600">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                      <span className="text-sm font-medium">{trend.growth}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="px-6 py-4 bg-gray-50 border-t">
              <button className="w-full flex items-center justify-center space-x-2 text-blue-600 hover:text-blue-700 font-medium">
                <span>View All Trends</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Want to Track Your Hashtag Performance?</h2>
          <p className="text-lg mb-6 text-blue-100">
            Get detailed analytics and insights about your hashtag performance across all platforms
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
            Start Tracking Now
          </button>
        </div>
      </div>
    </div>
  )
}
