import { useState } from 'react'

export default function Generator() {
  const [content, setContent] = useState('')
  const [platform, setPlatform] = useState('all')
  const [hashtags, setHashtags] = useState([])

  const generateHashtags = () => {
    // Extract key topics from content
    const topics = content.toLowerCase()
      .split(/[.,!? ]+/)
      .filter(word => word.length > 3)
      .map(word => word.replace(/[^a-zA-Z0-9]/g, ''))
      .filter(Boolean)

    // Generate content-specific hashtags
    const contentSpecificTags = topics.map(topic => `#${topic}`)
    
    // Generate variations of content hashtags
    const variations = topics.flatMap(topic => [
      `#${topic}content`,
      `#${topic}photo`,
      `#${topic}life`,
      `#${topic}lover`,
      `#${topic}community`
    ])

    // Topic-based hashtag categories
    const topicBasedHashtags = {
      nature: ['#nature', '#naturephotography', '#naturelovers', '#outdoors', '#wilderness', '#naturelover', '#landscape'],
      food: ['#food', '#foodie', '#cooking', '#foodphotography', '#foodlover', '#recipe', '#chef', '#delicious'],
      travel: ['#travel', '#wanderlust', '#adventure', '#travelphotography', '#explore', '#vacation', '#traveling'],
      fashion: ['#fashion', '#style', '#ootd', '#fashionista', '#outfit', '#fashionstyle', '#trendy'],
      technology: ['#tech', '#technology', '#innovation', '#digital', '#gadgets', '#software', '#coding'],
      art: ['#art', '#artist', '#artwork', '#creative', '#design', '#illustration', '#drawing'],
      fitness: ['#fitness', '#workout', '#gym', '#health', '#training', '#fitnessmotivation', '#healthy'],
      business: ['#business', '#entrepreneur', '#success', '#marketing', '#startup', '#motivation', '#entrepreneurship']
    }

    // Detect relevant categories based on content
    const relevantCategories = Object.entries(topicBasedHashtags)
      .filter(([category]) => 
        topics.some(topic => 
          topic.includes(category) || category.includes(topic)
        )
      )
      .map(([_, tags]) => tags)
      .flat()

    // Platform-specific hashtags
    const platformHashtags = {
      youtube: ['#youtube', '#youtuber', '#youtubechannel', '#video', '#youtubevideos'],
      instagram: ['#instagram', '#instagood', '#instadaily', '#photooftheday', '#instamood'],
      tiktok: ['#tiktok', '#tiktokviral', '#foryou', '#fyp', '#tiktoktrend']
    }

    // Engagement hashtags (use fewer)
    const engagementHashtags = ['#followme', '#likeforlikes', '#viral', '#trending']

    // Combine all hashtags with priority to content-specific ones
    let allHashtags = [
      ...contentSpecificTags,
      ...variations,
      ...relevantCategories
    ]

    // Add platform-specific tags
    if (platform === 'all') {
      allHashtags = [...allHashtags, ...Object.values(platformHashtags).flat().slice(0, 5)]
    } else {
      allHashtags = [...allHashtags, ...(platformHashtags[platform] || [])]
    }

    // Add a few engagement hashtags
    allHashtags = [...allHashtags, ...engagementHashtags.slice(0, 3)]

    // Remove duplicates and ensure content relevance
    const finalHashtags = [...new Set(allHashtags)]
      .sort((a, b) => {
        // Prioritize content-specific hashtags
        const aIsContentSpecific = contentSpecificTags.includes(a)
        const bIsContentSpecific = contentSpecificTags.includes(b)
        if (aIsContentSpecific && !bIsContentSpecific) return -1
        if (!aIsContentSpecific && bIsContentSpecific) return 1
        return Math.random() - 0.5
      })
      .slice(0, 25)

    setHashtags(finalHashtags)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(hashtags.join(' '))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Social Media Hashtag Generator
          </h1>
          <p className="text-xl text-gray-600">
            Generate the perfect hashtags for your content and boost your social media reach
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Content Description
                </label>
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  rows="4"
                  placeholder="What's your content about? Describe it in a few words..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Platform
                </label>
                <select
                  value={platform}
                  onChange={(e) => setPlatform(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="all">All Platforms</option>
                  <option value="youtube">YouTube</option>
                  <option value="instagram">Instagram</option>
                  <option value="tiktok">TikTok</option>
                </select>
              </div>

              <button
                onClick={generateHashtags}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              >
                Generate Hashtags
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="h-full flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Your Hashtags</h2>
                {hashtags.length > 0 && (
                  <button
                    onClick={copyToClipboard}
                    className="flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                    </svg>
                    Copy All
                  </button>
                )}
              </div>

              {hashtags.length > 0 ? (
                <div className="flex-1 bg-gray-50 rounded-lg p-4">
                  <div className="flex flex-wrap gap-2">
                    {hashtags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="flex-1 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <svg className="w-12 h-12 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                    </svg>
                    <p>Enter your content description and generate hashtags</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Tips for Better Hashtags</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Mix Popular & Niche</h3>
                <p className="text-gray-600">Combine popular hashtags with specific ones to maximize reach and engagement.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Stay Relevant</h3>
                <p className="text-gray-600">Use hashtags that accurately describe your content and target audience.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Keep it Clean</h3>
                <p className="text-gray-600">Avoid using too many hashtags or spammy ones that could hurt visibility.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
