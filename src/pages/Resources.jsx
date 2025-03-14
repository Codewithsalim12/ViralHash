import { useNavigate } from 'react-router-dom';
import React from 'react'
import SEO from '../components/SEO'
import PageHeader from '../components/PageHeader'

const resources = [
  {
    title: 'Growth Strategies',
    description: 'Learn proven strategies to grow your social media presence',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000',
    categories: ['Strategy', 'Growth', 'Social Media'],
    content: [
      'Post consistently at optimal times',
      'Engage with your audience regularly',
      'Use relevant and trending hashtags',
      'Create high-quality, valuable content',
      'Collaborate with other creators'
    ]
  },
  {
    title: 'Content Creation Tips',
    description: 'Master the art of creating engaging content',
    image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=1000',
    categories: ['Content', 'Creation', 'Tips'],
    content: [
      'Focus on storytelling',
      'Use high-quality visuals',
      'Keep up with trends',
      'Be authentic and genuine',
      'Maintain brand consistency'
    ]
  },
  {
    title: 'Hashtag Best Practices',
    description: 'Optimize your hashtag strategy for better reach',
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?q=80&w=1000',
    categories: ['Hashtags', 'Strategy', 'Optimization'],
    content: [
      'Research relevant hashtags',
      'Mix popular and niche hashtags',
      'Create branded hashtags',
      'Avoid banned or flagged hashtags',
      'Track hashtag performance'
    ]
  }
]

export default function Resources() {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-50 min-h-screen pt-16">
      <SEO 
        title="Social Media Resources | ViralHash"
        description="Comprehensive resources for content creators and social media enthusiasts"
        keywords="social media resources, content creation tools, marketing guides"
      />
      
      <PageHeader 
        tag="Empower Your Content"
        title="Resources Hub"
        description="Unlock expert guides, tools, and insights to supercharge your social media strategy"
        tagColor="purple"
      />

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource) => (
            <div key={resource.title} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={resource.image}
                  alt={resource.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {resource.categories.map((category) => (
                    <span
                      key={category}
                      className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium"
                    >
                      {category}
                    </span>
                  ))}
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{resource.title}</h2>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <div className="space-y-2">
                  {resource.content.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Grow Your Social Media?</h2>
            <p className="text-lg mb-6">
              Use our hashtag generator to create the perfect mix of hashtags for your content
            </p> 
            <button 
              onClick={() => navigate('/')}
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
