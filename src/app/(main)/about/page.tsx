import Link from 'next/link';

export default function AboutPage() {
  const stats = [
    { label: 'Students Helped', value: '50,000+' },
    { label: 'Mock Tests Taken', value: '1M+' },
    { label: 'Target Scores Achieved', value: '95%' },
    { label: 'Expert Instructors', value: '100+' },
  ];

  const features = [
    {
      title: 'Our Mission',
      description: 'To democratize IELTS preparation by providing high-quality, accessible resources to students worldwide.',
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'Our Vision',
      description: 'To become the global leader in language proficiency test preparation through innovation and technology.',
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
    },
    {
      title: 'Our Values',
      description: 'Excellence, Integrity, Student-Centricity, and Continuous Innovation guide everything we do.',
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative bg-blue-600 dark:bg-blue-800 py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-900 opacity-90"></div>
        <div className="absolute inset-0">
          <svg className="absolute right-0 bottom-0 h-full w-1/2 text-white/5 transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">
            Empowering Your Global Journey
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10">
            We are dedicated to helping students and professionals achieve their dreams through comprehensive IELTS preparation.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="-mt-16 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center border border-gray-100 dark:border-gray-700">
              <div className="text-3xl lg:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">{stat.value}</div>
              <div className="text-sm lg:text-base text-gray-600 dark:text-gray-300 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Who We Are</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Founded by IELTS experts and educators, we understand the challenges of language testing and have built a platform to solve them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="relative group p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors duration-300">
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-blue-100 dark:bg-blue-900/20 rounded-full opacity-50 group-hover:scale-110 transition-transform duration-300"></div>
                <div className="relative">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6 shadow-md">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="bg-white dark:bg-gray-900 py-16 lg:py-24 border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="mb-12 lg:mb-0">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-w-4 aspect-h-3 bg-gray-200 dark:bg-gray-700 h-[400px] w-full flex items-center justify-center">
                  {/* Placeholder for an actual image */}
                  <div className="text-gray-400 dark:text-gray-500 flex flex-col items-center">
                     <svg className="w-20 h-20 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                     <span>Team Image Placeholder</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Story</h2>
              <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300">
                <p>
                  It all started with a simple observation: students were struggling not because of their English ability, but because of a lack of proper guidance and practice resources.
                </p>
                <p>
                  In 2023, a group of former IELTS examiners and tech enthusiasts came together with a shared vision: to create a platform that makes high-quality IELTS preparation accessible to everyone, everywhere.
                </p>
                <p>
                  Today, IELTS Practice Pro is trusted by thousands of students from over 50 countries. We combine cutting-edge technology with pedagogical expertise to deliver personalized learning experiences that get results.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                  Contact Us
                  <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50 dark:bg-gray-800 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Ready to start your journey?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Join thousands of successful students who achieved their dream IELTS score with us.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/signup"
              className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Get Started Free
            </Link>
            <Link
              href="/start-mock"
              className="px-8 py-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white font-semibold rounded-lg border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
            >
              Take a Mock Test
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
