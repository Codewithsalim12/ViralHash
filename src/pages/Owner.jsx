import React from 'react'
import SEO from '../components/SEO'
import PageHeader from '../components/PageHeader'
import AboutOwner from '../components/AboutOwner';

export default function Owner() {
  return (
    <div className="container mx-auto px-4 py-8">
      <SEO 
        title="Support ViralHash | Help Us Grow"
        description="Support the development of ViralHash and help us continue innovating social media tools"
        keywords="support ViralHash, contribute, social media innovation"
      />
      
      <PageHeader 
        tag="Support Our Mission"
        title="Help ViralHash Grow"
        description="Your support helps us continue developing innovative tools for content creators"
        tagColor="pink"
      />

      <h1 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-violet-500 via-purple-500 to-blue-600 bg-clip-text text-transparent">
        About the Creator
      </h1>
      <AboutOwner />
      
      <div className="max-w-2xl mx-auto mt-8 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Support ViralHash?</h2>
        <p className="text-gray-600 mb-6">
          ViralHash is provided as a free tool to help content creators optimize their social media presence.
          Your support helps maintain the service and develop new features to make ViralHash even better!
        </p>
        <div className="bg-gradient-to-r from-violet-500 via-purple-500 to-blue-600 p-6 rounded-lg text-white">
          <h3 className="text-xl font-semibold mb-2">Support Makes a Difference!</h3>
          <p className="mb-4">
            Every contribution helps keep ViralHash running and enables the development of new features.
            Thank you for being part of this journey!
          </p>
        </div>
      </div>
    </div>
  );
}
