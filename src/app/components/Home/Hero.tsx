export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          Master Your IELTS Exam
          <span className="block text-blue-600 mt-2">With Confidence</span>
        </h1>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          Practice with authentic mock tests, track your progress, and achieve
          your target band score with our comprehensive IELTS preparation
          platform.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg rounded-lg shadow-lg hover:shadow-xl transition-all">
            Start Free Mock Test
          </button>
          <button className="px-8 py-4 bg-white hover:bg-gray-50 text-gray-900 font-semibold text-lg rounded-lg border-2 border-gray-300 hover:border-gray-400 transition-all">
            View Practice Materials
          </button>
        </div>
      </div>
    </section>
  );
}
