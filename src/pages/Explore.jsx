import { useState } from 'react'

const categories = [
  {
    name: 'Photography',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000',
    hashtags: ['#photography', '#photooftheday', '#photographer', '#naturephotography', '#photoshoot']
  },
  {
    name: 'Travel',
    image: 'https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=1000',
    hashtags: ['#travel', '#travelgram', '#wanderlust', '#adventure', '#travelphoto']
  },
  {
    name: 'Food',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000',
    hashtags: ['#food', '#foodporn', '#foodie', '#instafood', '#foodphotography']
  },
  {
    name: 'Fashion',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1000',
    hashtags: ['#fashion', '#style', '#ootd', '#fashionblogger', '#streetstyle']
  }
]

export default function Explore() {
  const [selectedCategory, setSelectedCategory] = useState(null)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Explore Popular Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <div
            key={category.name}
            className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer"
            onClick={() => setSelectedCategory(category)}
          >
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={category.image}
                alt={category.name}
                className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-4">
                <h3 className="text-xl font-semibold text-white mb-2">{category.name}</h3>
                <p className="text-gray-200 text-sm">{category.hashtags.length} Popular Hashtags</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedCategory && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-2xl w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-900">{selectedCategory.name} Hashtags</h2>
              <button
                onClick={() => setSelectedCategory(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {selectedCategory.hashtags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
