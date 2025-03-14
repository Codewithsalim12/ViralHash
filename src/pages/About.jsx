import React from 'react'
import SEO from '../components/SEO'
import { useNavigate } from 'react-router-dom';

export default function About() {
  const navigate = useNavigate();
  const features = [
    {
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Smart Hashtag Generation',
      description: 'Intelligent algorithm that generates relevant hashtags based on your content.'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: 'Multi-Platform Support',
      description: 'Generate hashtags for Instagram, YouTube, TikTok, and more.'
    }
  ]

  return (
    <>
      <SEO 
        title="About HashGen - Your Social Media Hashtag Companion"
        description="Learn about HashGen, the innovative hashtag generator that helps content creators maximize their social media reach and engagement."
        keywords="hashtag generator, social media tools, content creation, hashtag strategy, Instagram hashtags, YouTube hashtags, TikTok hashtags"
      />
      <div className="relative min-h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center filter brightness-50" 
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")'
          }}
        />
        <div className="relative z-10 container mx-auto px-4 py-24 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Empowering Content Creators
            </h1>
            <p className="text-xl mb-12 text-gray-200">
              HashGen is your ultimate companion in navigating the complex world of social media hashtags. We help content creators maximize their reach and engagement across multiple platforms.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-blue-500 transition-all"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center space-x-4">
              <button 
                onClick={() => navigate('/generator')} 
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Start Generating
              </button>
              <button 
                onClick={() => navigate('/resources')} 
                className="bg-transparent border border-white hover:bg-white/10 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
