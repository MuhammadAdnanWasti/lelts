'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function PricingPage() {
  const [annual, setAnnual] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-12">
      {/* Header */}
      <div className="text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
          Simple, transparent pricing
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10">
          Choose the plan that fits your IELTS preparation needs. No hidden fees, cancel anytime.
        </p>
        
        {/* Toggle */}
        <div className="flex items-center justify-center space-x-4">
          <span className={`text-base font-medium ${!annual ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>Monthly</span>
          <button
            onClick={() => setAnnual(!annual)}
            aria-label="Toggle annual pricing"
            className="relative rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <div className="w-16 h-8 transition bg-blue-600 rounded-full shadow-inner"></div>
            <div className={`absolute top-1 left-1 w-6 h-6 transition bg-white rounded-full shadow transform ${annual ? 'translate-x-8' : 'translate-x-0'}`}></div>
          </button>
          <span className={`text-base font-medium ${annual ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>
            Yearly <span className="text-green-500 font-bold ml-1">(Save 20%)</span>
          </span>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Free Plan */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-8 flex flex-col">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Free Starter</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Perfect for getting started</p>
            </div>
            <div className="mb-6">
              <span className="text-4xl font-extrabold text-gray-900 dark:text-white">$0</span>
              <span className="text-gray-500 dark:text-gray-400">/forever</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span className="text-gray-600 dark:text-gray-300">2 Full Mock Tests</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span className="text-gray-600 dark:text-gray-300">Basic Score Analysis</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span className="text-gray-600 dark:text-gray-300">Community Access</span>
              </li>
              <li className="flex items-start text-gray-400 dark:text-gray-500">
                <svg className="h-6 w-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                <span>Speaking Evaluation</span>
              </li>
              <li className="flex items-start text-gray-400 dark:text-gray-500">
                <svg className="h-6 w-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                <span>Writing Correction</span>
              </li>
            </ul>
            <Link href="/signup" className="w-full block text-center py-3 px-6 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors">
              Get Started
            </Link>
          </div>

          {/* Pro Plan */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border-2 border-blue-600 p-8 flex flex-col relative transform md:-translate-y-4">
            <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg uppercase tracking-wide">
              Most Popular
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Pro Achiever</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">For serious aspirants</p>
            </div>
            <div className="mb-6">
              <span className="text-4xl font-extrabold text-gray-900 dark:text-white">
                ${annual ? '19' : '29'}
              </span>
              <span className="text-gray-500 dark:text-gray-400">/month</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span className="text-gray-600 dark:text-gray-300">20+ Full Mock Tests</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span className="text-gray-600 dark:text-gray-300">Detailed Analytics & Insights</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span className="text-gray-600 dark:text-gray-300">5 Speaking Evaluations/mo</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span className="text-gray-600 dark:text-gray-300">5 Writing Corrections/mo</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span className="text-gray-600 dark:text-gray-300">Priority Support</span>
              </li>
            </ul>
            <Link href="/signup?plan=pro" className="w-full block text-center py-3 px-6 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
              Start Free Trial
            </Link>
          </div>

          {/* Ultimate Plan */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-8 flex flex-col">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Ultimate</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Maximum preparation</p>
            </div>
            <div className="mb-6">
              <span className="text-4xl font-extrabold text-gray-900 dark:text-white">
                ${annual ? '49' : '59'}
              </span>
              <span className="text-gray-500 dark:text-gray-400">/month</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span className="text-gray-600 dark:text-gray-300">Unlimited Mock Tests</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span className="text-gray-600 dark:text-gray-300">AI-Powered Weakness Detection</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span className="text-gray-600 dark:text-gray-300">Unlimited Speaking Evaluations</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span className="text-gray-600 dark:text-gray-300">Unlimited Writing Corrections</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span className="text-gray-600 dark:text-gray-300">1-on-1 Expert Session (1/mo)</span>
              </li>
            </ul>
            <Link href="/signup?plan=ultimate" className="w-full block text-center py-3 px-6 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              Choose Ultimate
            </Link>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-8">
          {[
            {
              q: "Can I switch plans later?",
              a: "Yes, you can upgrade or downgrade your plan at any time. If you upgrade, the pro-rated amount will be charged immediately. If you downgrade, the credit will be applied to your next billing cycle."
            },
            {
              q: "Is there a money-back guarantee?",
              a: "We offer a 7-day money-back guarantee for all paid plans. If you're not satisfied with our service, simply contact our support team within 7 days of purchase for a full refund."
            },
            {
              q: "How accurate are the mock tests?",
              a: "Our mock tests are created by former IELTS examiners and strictly follow the official IELTS test format and difficulty levels. The scoring algorithm is calibrated to provide a highly accurate estimate of your actual band score."
            },
            {
              q: "Can I use it on mobile?",
              a: "Absolutely! Our platform is fully responsive and works seamlessly on desktops, tablets, and smartphones, allowing you to practice anytime, anywhere."
            }
          ].map((faq, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                {faq.q}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Trust Badges */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 text-center">
        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">Trusted by students from</p>
        <div className="flex justify-center items-center space-x-8 opacity-50 grayscale">
            <span className="text-2xl font-bold text-gray-600 dark:text-gray-400">Harvard</span>
            <span className="text-2xl font-bold text-gray-600 dark:text-gray-400">MIT</span>
            <span className="text-2xl font-bold text-gray-600 dark:text-gray-400">Stanford</span>
            <span className="text-2xl font-bold text-gray-600 dark:text-gray-400">Oxford</span>
        </div>
      </div>
    </div>
  );
}
