"use client";

import Link from "next/link";
import { signIn } from "next-auth/react";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from 'react';
import Swal from 'sweetalert2';

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const registered = searchParams.get("registered");
  
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (registered) {
      Swal.fire({
        title: 'Success!',
        text: 'Account created successfully. Please log in.',
        icon: 'success',
        confirmButtonColor: '#3b82f6',
      });
    }
  }, [registered]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: formData.email,
        password: formData.password,
      });

      if (res?.error) {
        Swal.fire({
          title: 'Error!',
          text: 'Invalid email or password',
          icon: 'error',
          confirmButtonColor: '#3b82f6',
        });
        setLoading(false);
      } else {
        await Swal.fire({
          title: 'Welcome Back!',
          text: 'Successfully logged in',
          icon: 'success',
          timer: 1500,
          showConfirmButton: false,
        });
        router.push("/"); 
        router.refresh();
      }
    } catch (err) {
      Swal.fire({
        title: 'Error!',
        text: 'An unexpected error occurred',
        icon: 'error',
        confirmButtonColor: '#3b82f6',
      });
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md space-y-8">
      <div className="text-center lg:text-left">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
          Welcome back
        </h2>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Please sign in to continue your preparation
        </p>
      </div>

      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="space-y-4">
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
              placeholder="Enter your email"
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
              autoComplete="current-password"
              required
              value={formData.password}
              onChange={handleChange}
              className="appearance-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 placeholder-gray-500 text-gray-900 dark:text-white rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm bg-white dark:bg-gray-700"
              placeholder="Enter your password"
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label
              htmlFor="remember-me"
              className="ml-2 block text-sm text-gray-900 dark:text-gray-300"
            >
              Remember me
            </label>
          </div>

          <div className="text-sm">
            <a
              href="#"
              className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400"
            >
              Forgot password?
            </a>
          </div>
        </div>

        <div>
          <button
            type="submit"
            disabled={loading}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </div>
      </form>

      <div className="mt-6 text-center text-sm">
        <span className="text-gray-600 dark:text-gray-400">
          Don't have an account?{" "}
        </span>
        <Link
          href="/signup"
          className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400"
        >
          Sign up
        </Link>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <div className="min-h-screen pt-16 lg:pt-20 bg-gray-50 dark:bg-gray-900 flex">
      {/* Left Side - IELTS Content */}
      <div className="hidden lg:flex lg:w-1/2 bg-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 opacity-90"></div>
        <div className="relative z-10 w-full flex flex-col justify-center px-12 text-white">
          <h1 className="text-4xl font-bold mb-6">Master Your IELTS Exam</h1>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of students achieving their dream scores with our
            comprehensive practice platform.
          </p>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-blue-500/30 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-blue-100"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <span className="text-lg">Full-length Mock Tests</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-blue-500/30 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-blue-100"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
              <span className="text-lg">Detailed Performance Analytics</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-blue-500/30 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-blue-100"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <span className="text-lg">Expert Study Materials</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 lg:p-16">
        <Suspense fallback={<div>Loading...</div>}>
          <LoginForm />
        </Suspense>
      </div>
    </div>
  );
}
