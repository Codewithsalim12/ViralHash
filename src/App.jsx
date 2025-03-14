import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Navbar from './components/Navbar'
import SEO from './components/SEO'
import Generator from './pages/Generator'
import Explore from './pages/Explore'
import Trending from './pages/Trending'
import Resources from './pages/Resources'
import About from './pages/About'
import AITools from './pages/AITools'
import Owner from './pages/Owner'

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="flex flex-col min-h-screen w-screen overflow-x-hidden bg-gray-50">
          <SEO />
          <Navbar />
          <main className="flex-1 overflow-auto">
            <Routes>
              <Route path="/" element={<Generator />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/trending" element={<Trending />} />
              <Route path="/ai-tools" element={<AITools />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/about" element={<About />} />
              <Route path="/owner" element={<Owner />} />
            </Routes>
          </main>
          <footer className="bg-white shadow-lg mt-auto">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">HashGen</h3>
                  <p className="text-gray-600">
                    Generate perfect hashtags for your social media content and grow your online presence.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
                  <ul className="space-y-2">
                    <li><a href="/explore" className="text-gray-600 hover:text-blue-600">Explore Categories</a></li>
                    <li><a href="/trending" className="text-gray-600 hover:text-blue-600">Trending Hashtags</a></li>
                    <li><a href="/resources" className="text-gray-600 hover:text-blue-600">Resources</a></li>
                    <li><a href="/owner" className="text-violet-500 hover:text-violet-600">Support HashGen</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Connect</h3>
                  <div className="flex space-x-4">
                    <a href="https://github.com/Codewithsalim12" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600">
                      <span className="sr-only">GitHub</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="https://www.instagram.com/mohammadsalim__567/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600">
                      <span className="sr-only">Instagram</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12.315 2c2.633 0 2.922.01 3.937.058 1.094.05 1.79.222 2.413.475a4.87 4.87 0 011.757 1.143 4.87 4.87 0 011.143 1.757c.253.623.425 1.319.475 2.413.048 1.015.058 1.304.058 3.937s-.01 2.922-.058 3.937c-.05 1.094-.222 1.79-.475 2.413a4.87 4.87 0 01-1.143 1.757 4.87 4.87 0 01-1.757 1.143c-.623.253-1.319.425-2.413.475-1.015.048-1.304.058-3.937.058s-2.922-.01-3.937-.058c-1.094-.05-1.79-.222-2.413-.475a4.87 4.87 0 01-1.757-1.143 4.87 4.87 0 01-1.143-1.757c-.253-.623-.425-1.319-.475-2.413-.048-1.015-.058-1.304-.058-3.937s.01-2.922.058-3.937c.05-1.094.222-1.79.475-2.413a4.87 4.87 0 011.143-1.757 4.87 4.87 0 011.757-1.143c.623-.253 1.319-.425 2.413-.475 1.015-.048 1.304-.058 3.937-.058zM12 2c-2.67 0-3.005.012-4.042.06-1.064.049-1.791.218-2.426.465a4.89 4.89 0 00-1.772 1.153A4.89 4.89 0 002.565 5.53C2.318 6.165 2.15 6.892 2.1 7.956 2.052 8.993 2.04 9.328 2.04 12s.012 3.005.06 4.042c.049 1.064.218 1.791.465 2.426a4.89 4.89 0 001.153 1.772 4.89 4.89 0 001.772 1.153c.635.247 1.362.416 2.426.465 1.037.048 1.372.06 4.042.06s3.005-.012 4.042-.06c1.064-.049 1.791-.218 2.426-.465a4.89 4.89 0 001.772-1.153 4.89 4.89 0 001.153-1.772c.247-.635.416-1.362.465-2.426.048-1.037.06-1.372.06-4.042s-.012-3.005-.06-4.042c-.049-1.064-.218-1.791-.465-2.426a4.89 4.89 0 00-1.153-1.772 4.89 4.89 0 00-1.772-1.153c-.635-.247-1.362-.416-2.426-.465-1.037-.048-1.372-.06-4.042-.06z" clipRule="evenodd" />
                        <path d="M12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                      </svg>
                    </a>
                    <a href="mailto:mohammadsalimmir13@gmail.com" className="text-gray-400 hover:text-blue-600">
                      <span className="sr-only">Email</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-8 border-t border-gray-200 pt-6">
                <p className="text-center text-gray-500 text-sm">
                  &copy; 2025 HashGen. All rights reserved.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </Router>
    </HelmetProvider>
  )
}

export default App
