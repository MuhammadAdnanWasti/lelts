export default function StartMockPage() {
  const mockTests = [
    {
      id: 1,
      title: "Academic Reading Test 1",
      duration: "60 mins",
      questions: 40,
      difficulty: "Medium",
      type: "Academic",
      tags: ["Reading", "Full Test"]
    },
    {
      id: 2,
      title: "General Training Listening 1",
      duration: "30 mins",
      questions: 40,
      difficulty: "Easy",
      type: "General",
      tags: ["Listening", "Audio Included"]
    },
    {
      id: 3,
      title: "Academic Writing Task 1",
      duration: "20 mins",
      questions: 1,
      difficulty: "Hard",
      type: "Academic",
      tags: ["Writing", "Graph Analysis"]
    },
    {
      id: 4,
      title: "Speaking Part 1 & 2",
      duration: "15 mins",
      questions: 5,
      difficulty: "Medium",
      type: "Both",
      tags: ["Speaking", "Recorder"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 pb-12">
      {/* Header Section */}
      <div className="bg-blue-600 dark:bg-blue-800 text-white py-12 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold mb-4">Free IELTS Mock Tests</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Practice with our professionally curated mock tests designed to simulate real exam conditions. Get instant results and detailed feedback.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="w-full md:w-1/3 relative">
            <input
              type="text"
              placeholder="Search tests..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            />
            <svg
              className="w-5 h-5 text-gray-400 absolute left-3 top-2.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium whitespace-nowrap">
              All Tests
            </button>
            <button className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 rounded-full text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700 whitespace-nowrap transition-colors">
              Reading
            </button>
            <button className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 rounded-full text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700 whitespace-nowrap transition-colors">
              Listening
            </button>
            <button className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 rounded-full text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700 whitespace-nowrap transition-colors">
              Writing
            </button>
            <button className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 rounded-full text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700 whitespace-nowrap transition-colors">
              Speaking
            </button>
          </div>
        </div>

        {/* Test Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockTests.map((test) => (
            <div key={test.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden flex flex-col">
              <div className="p-6 flex-1">
                <div className="flex justify-between items-start mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    test.type === 'Academic' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300' :
                    test.type === 'General' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' :
                    'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
                  }`}>
                    {test.type}
                  </span>
                  <span className={`text-xs font-medium px-2 py-1 rounded ${
                    test.difficulty === 'Easy' ? 'text-green-600 bg-green-50 dark:bg-green-900/20' :
                    test.difficulty === 'Medium' ? 'text-yellow-600 bg-yellow-50 dark:bg-yellow-900/20' :
                    'text-red-600 bg-red-50 dark:bg-red-900/20'
                  }`}>
                    {test.difficulty}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                  {test.title}
                </h3>
                
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4 space-x-4">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {test.duration}
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                    {test.questions} Qs
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {test.tags.map((tag, index) => (
                    <span key={index} className="text-xs text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-gray-50 dark:bg-gray-700/50 border-t border-gray-100 dark:border-gray-700">
                <button className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
                  Start Test Now
                  <svg className="ml-2 -mr-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-16 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Why Take Our Mock Tests?</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Our mock tests are designed by former IELTS examiners to help you get the score you need.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Accurate Scoring</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Get an estimated band score based on official IELTS marking criteria.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Instant Results</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                See your results immediately after finishing Listening and Reading tests.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Performance Analytics</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Track your progress over time and identify areas for improvement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
