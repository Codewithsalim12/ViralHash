import React from 'react'

export default function PageHeader({ 
  tag, 
  title, 
  description, 
  tagColor = 'blue', 
  className = '' 
}) {
  return (
    <div className={`container mx-auto px-4 sm:px-6 lg:px-8 mb-12 ${className}`}>
      <div className="max-w-3xl mx-auto text-center">
        {tag && (
          <div className={`inline-block bg-${tagColor}-50 rounded-full px-4 py-2 mb-4`}>
            <span className={`text-xs sm:text-sm font-medium text-${tagColor}-600`}>
              {tag}
            </span>
          </div>
        )}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
          {title}
        </h1>
        <p className="text-sm sm:text-base lg:text-xl text-gray-600 max-w-2xl mx-auto">
          {description}
        </p>
      </div>
    </div>
  )
}
