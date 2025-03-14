import React from 'react'
import SEO from '../components/SEO'
import { useNavigate } from 'react-router-dom';

export default function About() {
  const navigate = useNavigate();

  const features = [
    {
      title: "Advanced Hashtag Generation",
      description: "Leverage AI-powered algorithms to generate the most relevant and trending hashtags for your content.",
      icon: "🚀"
    },
    {
      title: "Multi-Platform Support",
      description: "Generate optimized hashtags for Instagram, YouTube, TikTok, and more with a single click.",
      icon: "🌐"
    },
    {
      title: "Real-Time Insights",
      description: "Stay ahead of trends with our constantly updated hashtag performance metrics.",
      icon: "📊"
    }
  ]

  return (
    <>
      <SEO 
        title="About ViralHash - Your Social Media Hashtag Companion"
        description="Learn about ViralHash, the innovative hashtag generator that helps content creators maximize their social media reach and engagement."
        keywords="hashtag generator, social media tools, content creation, hashtag strategy, Instagram hashtags, YouTube hashtags, TikTok hashtags"
      />
      <div className="relative min-h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center filter brightness-50" 
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80')"
          }}
        />
        <div className="relative z-10 container mx-auto px-4 py-24 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Empowering Content Creators
            </h1>
            <p className="text-xl mb-12 text-gray-200">
              ViralHash is your ultimate companion in navigating the complex world of social media hashtags. We help content creators maximize their reach and engagement across multiple platforms.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Why Choose ViralHash?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
