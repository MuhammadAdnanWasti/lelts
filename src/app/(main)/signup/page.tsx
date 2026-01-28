"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Swal from 'sweetalert2';

export default function SignupPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (formData.password !== formData.confirmPassword) {
      Swal.fire({
        title: 'Error!',
        text: 'Passwords do not match',
        icon: 'error',
        confirmButtonColor: '#3b82f6',
      });
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      // Redirect to login
      router.push("/login?registered=true");
    } catch (err: any) {
      Swal.fire({
        title: 'Error!',
        text: err.message,
        icon: 'error',
        confirmButtonColor: '#3b82f6',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-16 lg:pt-20 bg-gray-50 dark:bg-gray-900 flex">
      {/* Left Side - IELTS Content */}
      <div className="hidden lg:flex lg:w-1/2 bg-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 opacity-90"></div>
        <div className="relative z-10 w-full flex flex-col justify-center px-12 text-white">
          <h1 className="text-4xl font-bold mb-6">Start Your Journey Today</h1>
          <p className="text-xl text-blue-100 mb-8">
            Create an account to access our complete library of IELTS practice
            materials and mock tests.
          </p>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/30 flex items-center justify-center mt-1">
                <span className="text-lg font-bold">1</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Comprehensive Practice</h3>
                <p className="text-blue-100 mt-1">
                  Access over 100+ mock tests covering Reading, Writing,
                  Listening, and Speaking modules.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/30 flex items-center justify-center mt-1">
                <span className="text-lg font-bold">2</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Real-time Feedback</h3>
                <p className="text-blue-100 mt-1">
                  Get instant scores and detailed analysis of your performance to
                  identify weak areas.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/30 flex items-center justify-center mt-1">
                <span className="text-lg font-bold">3</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Expert Guidance</h3>
                <p className="text-blue-100 mt-1">
                  Learn from top IELTS instructors with tips, strategies, and
                  video lessons.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Signup Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 lg:p-16">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
              Create an account
            </h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Join us to start your IELTS preparation
            </p>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="full-name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Full Name
                </label>
                <input
                  id="full-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 placeholder-gray-500 text-gray-900 dark:text-white rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm bg-white dark:bg-gray-700"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="email-address"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 placeholder-gray-500 text-gray-900 dark:text-white rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm bg-white dark:bg-gray-700"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 placeholder-gray-500 text-gray-900 dark:text-white rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm bg-white dark:bg-gray-700"
                  placeholder="Create a password"
                />
              </div>
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Confirm Password
                </label>
                <input
                  id="confirm-password"
                  name="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 placeholder-gray-500 text-gray-900 dark:text-white rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm bg-white dark:bg-gray-700"
                  placeholder="Confirm your password"
                />
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                required
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label
                htmlFor="terms"
                className="ml-2 block text-sm text-gray-900 dark:text-gray-300"
              >
                I agree to the{" "}
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-500 dark:text-blue-400"
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-500 dark:text-blue-400"
                >
                  Privacy Policy
                </a>
              </label>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? "Creating account..." : "Sign up"}
              </button>
            </div>
          </form>

          <div className="mt-6 text-center text-sm">
            <span className="text-gray-600 dark:text-gray-400">
              Already have an account?{" "}
            </span>
            <Link
              href="/login"
              className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400"
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
