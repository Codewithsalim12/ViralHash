import AboutOwner from '../components/AboutOwner';

export default function Owner() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-violet-500 via-purple-500 to-blue-600 bg-clip-text text-transparent">
        About the Creator
      </h1>
      <AboutOwner />
      
      <div className="max-w-2xl mx-auto mt-8 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Support HashGen?</h2>
        <p className="text-gray-600 mb-6">
          HashGen is provided as a free tool to help content creators optimize their social media presence.
          Your support helps maintain the service and develop new features to make HashGen even better!
        </p>
        <div className="bg-gradient-to-r from-violet-500 via-purple-500 to-blue-600 p-6 rounded-lg text-white">
          <h3 className="text-xl font-semibold mb-2">Support Makes a Difference!</h3>
          <p className="mb-4">
            Every contribution helps keep HashGen running and enables the development of new features.
            Thank you for being part of this journey!
          </p>
        </div>
      </div>
    </div>
  );
}
