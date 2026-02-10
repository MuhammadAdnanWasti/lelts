"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, X, ChevronDown, ChevronUp } from "lucide-react";

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Simple, Transparent <span className="text-blue-600">Pricing</span>
          </h1>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Start for free, upgrade when you need more. No hidden fees, cancel anytime.
            Join thousands of students achieving their dream band score.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className={`text-sm font-bold uppercase tracking-wide ${!isAnnual ? 'text-slate-900' : 'text-slate-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              aria-label={isAnnual ? "Switch to monthly billing" : "Switch to annual billing"}
              className="relative w-16 h-8 bg-slate-200 rounded-full p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <div
                className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                  isAnnual ? 'translate-x-8' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-sm font-bold uppercase tracking-wide ${isAnnual ? 'text-slate-900' : 'text-slate-500'}`}>
              Yearly <span className="text-green-500 ml-1 text-xs">(Save 20%)</span>
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Free Tier */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-slate-900">Starter</h3>
              <p className="text-slate-500 text-sm mt-2">Essential tools to get started.</p>
            </div>
            <div className="mb-8">
              <span className="text-4xl font-extrabold text-slate-900">$0</span>
              <span className="text-slate-500">/mo</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              {[
                "2 Full Mock Tests",
                "Basic Score Analysis",
                "Community Access",
                "Limited Practice Questions"
              ].map((feature, i) => (
                <li key={i} className="flex items-start text-sm text-slate-600">
                  <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  {feature}
                </li>
              ))}
              {[
                "AI Speaking Evaluation",
                "Writing Correction",
                "Priority Support"
              ].map((feature, i) => (
                <li key={i} className="flex items-start text-sm text-slate-400">
                  <X className="w-5 h-5 text-slate-300 mr-3 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            <Link
              href="/signup"
              className="block w-full py-3 px-6 text-center font-bold text-blue-600 border border-blue-200 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors"
            >
              Get Started Free
            </Link>
          </div>

          {/* Pro Tier (Popular) */}
          <div className="relative bg-white rounded-3xl p-8 border-2 border-blue-600 shadow-xl flex flex-col transform md:-translate-y-4">
            <div className="absolute top-0 right-0 left-0 bg-blue-600 text-white text-xs font-bold uppercase tracking-widest text-center py-2 rounded-t-2xl">
              Most Popular
            </div>
            <div className="mb-6 mt-4">
              <h3 className="text-xl font-bold text-slate-900">Pro Achiever</h3>
              <p className="text-slate-500 text-sm mt-2">Everything you need to succeed.</p>
            </div>
            <div className="mb-8">
              <span className="text-4xl font-extrabold text-slate-900">
                ${isAnnual ? '19' : '29'}
              </span>
              <span className="text-slate-500">/mo</span>
              {isAnnual && <p className="text-xs text-green-600 font-semibold mt-1">Billed ${19 * 12} yearly</p>}
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              {[
                "Unlimited Mock Tests",
                "Detailed AI Analytics",
                "10 Speaking Evaluations/mo",
                "10 Writing Corrections/mo",
                "Advanced Vocabulary Builder",
                "Priority Email Support"
              ].map((feature, i) => (
                <li key={i} className="flex items-start text-sm text-slate-700 font-medium">
                  <Check className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            <Link
              href="/signup?plan=pro"
              className="block w-full py-4 px-6 text-center font-bold text-white bg-blue-600 rounded-xl hover:bg-blue-700 hover:shadow-lg transition-all"
            >
              Start 7-Day Free Trial
            </Link>
          </div>

          {/* Ultimate Tier */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-slate-900">Ultimate</h3>
              <p className="text-slate-500 text-sm mt-2">For dedicated high achievers.</p>
            </div>
            <div className="mb-8">
              <span className="text-4xl font-extrabold text-slate-900">
                ${isAnnual ? '49' : '59'}
              </span>
              <span className="text-slate-500">/mo</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              {[
                "Everything in Pro",
                "Unlimited AI Feedback",
                "1-on-1 Expert Session (1/mo)",
                "Personalized Study Plan",
                "Weakness Detection System",
                "24/7 Priority Support"
              ].map((feature, i) => (
                <li key={i} className="flex items-start text-sm text-slate-600">
                  <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            <Link
              href="/signup?plan=ultimate"
              className="block w-full py-3 px-6 text-center font-bold text-slate-700 border border-slate-300 bg-white rounded-xl hover:bg-slate-50 transition-colors"
            >
              Choose Ultimate
            </Link>
          </div>

        </div>
      </section>

      {/* Comparison Table (Desktop Only) */}
      <section className="hidden lg:block py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-900 mb-12">Compare Features</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="p-4 border-b-2 border-slate-200 text-lg font-semibold text-slate-900 w-1/3">Feature</th>
                <th className="p-4 border-b-2 border-slate-200 text-lg font-semibold text-slate-900 text-center w-1/5">Starter</th>
                <th className="p-4 border-b-2 border-blue-600 text-lg font-bold text-blue-600 text-center w-1/5 bg-blue-50/50 rounded-t-xl">Pro</th>
                <th className="p-4 border-b-2 border-slate-200 text-lg font-semibold text-slate-900 text-center w-1/5">Ultimate</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "Mock Tests", starter: "2", pro: "Unlimited", ultimate: "Unlimited" },
                { name: "Speaking AI Feedback", starter: "No", pro: "10/mo", ultimate: "Unlimited" },
                { name: "Writing AI Correction", starter: "No", pro: "10/mo", ultimate: "Unlimited" },
                { name: "Analytics Dashboard", starter: "Basic", pro: "Advanced", ultimate: "Advanced + Weakness Detection" },
                { name: "Study Plan", starter: "-", pro: "Standard", ultimate: "Personalized" },
                { name: "Support", starter: "Community", pro: "Email", ultimate: "24/7 Priority + 1-on-1" },
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-slate-50" : "bg-white"}>
                  <td className="p-4 border-b border-slate-200 font-medium text-slate-700">{row.name}</td>
                  <td className="p-4 border-b border-slate-200 text-center text-slate-600">{row.starter}</td>
                  <td className="p-4 border-b border-slate-200 text-center font-bold text-blue-600 bg-blue-50/30">{row.pro}</td>
                  <td className="p-4 border-b border-slate-200 text-center text-slate-600">{row.ultimate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-900 mb-10">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "Can I switch plans later?",
              a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, with pro-rated charges or credits applied to your account."
            },
            {
              q: "How does the 7-day free trial work?",
              a: "You get full access to the Pro plan for 7 days. You won't be charged if you cancel before the trial ends. It's a risk-free way to try our premium features."
            },
            {
              q: "Is the AI feedback accurate?",
              a: "Our AI is trained on thousands of real IELTS exams graded by certified examiners. It provides band scores that are typically within 0.5 points of actual test results."
            },
            {
              q: "Do you offer team or institution pricing?",
              a: "Yes! We offer special rates for schools, coaching centers, and large groups. Please contact our sales team for a custom quote."
            }
          ].map((faq, index) => (
            <div key={index} className="border border-slate-200 rounded-xl overflow-hidden bg-white">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between p-5 text-left font-semibold text-slate-800 hover:bg-slate-50 transition-colors"
              >
                {faq.q}
                {openFaq === index ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
              </button>
              {openFaq === index && (
                <div className="p-5 pt-0 text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-20 px-4 text-center bg-slate-900 text-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to achieve your dream score?</h2>
        <p className="text-base md:text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
          Join 50,000+ students who trust us for their IELTS preparation.
        </p>
        <Link
          href="/signup"
          className="inline-block py-4 px-10 bg-blue-600 font-bold rounded-xl hover:bg-blue-500 hover:shadow-lg hover:-translate-y-1 transition-all"
        >
          Get Started Now
        </Link>
      </section>
    </div>
  );
}
