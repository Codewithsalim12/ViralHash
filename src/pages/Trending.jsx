import { useState } from 'react'
import { Link } from 'react-router-dom';

const platforms = [
  {
    name: 'Instagram',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png',
    trends: [
      { tag: '#reels', posts: '2.1M', growth: '+15%' },
      { tag: '#instagood', posts: '1.8M', growth: '+12%' },
      { tag: '#photography', posts: '1.5M', growth: '+8%' },
      { tag: '#fashion', posts: '1.2M', growth: '+10%' }
    ],
    extendedTrends: [
      { tag: '#instadaily', posts: '1.1M', growth: '+7%', engagement: '5.2%' },
      { tag: '#photooftheday', posts: '980K', growth: '+9%', engagement: '4.8%' },
      { tag: '#instagram', posts: '950K', growth: '+6%', engagement: '4.5%' },
      { tag: '#love', posts: '920K', growth: '+8%', engagement: '6.1%' },
      { tag: '#beautiful', posts: '890K', growth: '+5%', engagement: '5.5%' },
      { tag: '#picoftheday', posts: '850K', growth: '+7%', engagement: '4.9%' }
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
    ],
    extendedTrends: [
      { tag: '#foryou', posts: '1.8M', growth: '+17%', engagement: '7.2%' },
      { tag: '#tiktokdance', posts: '1.6M', growth: '+19%', engagement: '6.8%' },
      { tag: '#funny', posts: '1.5M', growth: '+16%', engagement: '6.5%' },
      { tag: '#comedy', posts: '1.4M', growth: '+14%', engagement: '7.1%' },
      { tag: '#music', posts: '1.3M', growth: '+15%', engagement: '6.9%' },
      { tag: '#duet', posts: '1.2M', growth: '+13%', engagement: '6.2%' }
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
    ],
    extendedTrends: [
      { tag: '#youtubeshorts', posts: '1.7M', growth: '+25%', engagement: '5.8%' },
      { tag: '#youtuber', posts: '1.5M', growth: '+11%', engagement: '4.9%' },
      { tag: '#subscribe', posts: '1.4M', growth: '+13%', engagement: '4.7%' },
      { tag: '#youtube', posts: '1.3M', growth: '+12%', engagement: '5.1%' },
      { tag: '#video', posts: '1.2M', growth: '+14%', engagement: '5.3%' },
      { tag: '#howto', posts: '1.1M', growth: '+9%', engagement: '5.5%' }
    ]
  }
]

export default function Trending() {
  const [selectedPlatform, setSelectedPlatform] = useState('all')
  const [showTrendsModal, setShowTrendsModal] = useState(false)
  const [showTrackingModal, setShowTrackingModal] = useState(false)
  const [selectedPlatformData, setSelectedPlatformData] = useState(null)
  const [hashtag, setHashtag] = useState('')
  const [email, setEmail] = useState('')
  const [trackingPlatform, setTrackingPlatform] = useState('all')

  const filteredPlatforms = selectedPlatform === 'all' 
    ? platforms 
    : platforms.filter(p => p.name.toLowerCase() === selectedPlatform)

  const handleViewAllTrends = (platform) => {
    setSelectedPlatformData(platform)
    setShowTrendsModal(true)
  }

  const TrendsModal = () => {
    if (!showTrendsModal || !selectedPlatformData) return null

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center space-x-4">
                <img src={selectedPlatformData.icon} alt={selectedPlatformData.name} className="h-12 w-12 object-contain" />
                <h2 className="text-2xl font-bold text-gray-900">{selectedPlatformData.name} Extended Trends</h2>
              </div>
              <button onClick={() => setShowTrendsModal(false)} className="text-gray-500 hover:text-gray-700">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="grid gap-6">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hashtag</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Posts</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Growth</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Engagement</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {[...selectedPlatformData.trends, ...selectedPlatformData.extendedTrends].map((trend, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{trend.tag}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{trend.posts}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">{trend.growth}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">{trend.engagement || 'N/A'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">Trend Insights</h3>
                <p className="text-blue-800">
                  Top performing hashtags on {selectedPlatformData.name} are showing strong engagement rates above industry average.
                  Consider incorporating these trending hashtags into your content strategy for better visibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const TrackingModal = () => {
    if (!showTrackingModal) return null

    const startTracking = (type) => {
      alert(`Started ${type} tracking! You'll receive updates about trending hashtags.`)
      setShowTrackingModal(false)
    }

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-xl max-w-sm w-full">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">Start Tracking</h2>
              <button 
                type="button"
                onClick={() => setShowTrackingModal(false)} 
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-4">
              <button
                onClick={() => startTracking('daily')}
                className="w-full p-4 bg-blue-50 hover:bg-blue-100 rounded-lg text-left transition-colors"
              >
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-medium">Daily Updates</span>
                </div>
              </button>

              <button
                onClick={() => startTracking('weekly')}
                className="w-full p-4 bg-purple-50 hover:bg-purple-100 rounded-lg text-left transition-colors"
              >
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-purple-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <span className="font-medium">Weekly Report</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Trending Hashtags</h1>
        <p className="text-xl text-gray-600">Discover what's popular right now</p>
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
              <button 
                onClick={() => handleViewAllTrends(platform)}
                className="w-full flex items-center justify-center space-x-2 text-blue-600 hover:text-blue-700 font-medium"
              >
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
          <button 
            onClick={() => setShowTrackingModal(true)}
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
          >
            Start Tracking Now
          </button>
        </div>
      </div>

      <TrendsModal />
      <TrackingModal />
    </div>
  )
}
