import React from 'react'
import { Helmet } from 'react-helmet-async'

const SEO = ({ 
  title = 'ViralHash | Hashtag Generator & Insights', 
  description = 'Discover, generate, and analyze the best hashtags for your social media content. Boost your engagement and reach across Instagram, TikTok, and YouTube.',
  keywords = 'hashtag generator, social media hashtags, content creation, viral hashtags, Instagram hashtags, TikTok hashtags, YouTube hashtags',
  image = '/og-image.png',
  url = 'https://viralhash.vercel.app/'
}) => {
  return (
    <Helmet>
      {/* Standard metadata */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Canonical link */}
      <link rel="canonical" href={url} />

      {/* Robots meta tag for indexing */}
      <meta name="robots" content="index, follow" />
    </Helmet>
  )
}

export default SEO
