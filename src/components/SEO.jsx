import { Helmet } from 'react-helmet-async'

const SEO = ({
  title = 'HashGen - Social Media Hashtag Generator',
  description = 'Generate perfect hashtags for Instagram, YouTube, and TikTok. Boost your social media reach with intelligent hashtag recommendations.',
  keywords = 'hashtag generator, social media marketing, Instagram hashtags, YouTube hashtags, TikTok hashtags, content strategy',
  canonicalUrl = 'https://hashgen.onrender.com',
  ogImage = '/images/hashtag-logo.svg'
}) => {
  return (
    <Helmet>
      {/* Standard metadata */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Robots */}
      <meta name="robots" content="index, follow" />
    </Helmet>
  )
}

export default SEO
