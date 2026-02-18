"use client";

import { useState } from "react";
import {
  TrendingUp,
  // TrendingDown,
  Users,
  DollarSign,
  BookOpen,
  Activity,
  Calendar,
  Download,
} from "lucide-react";

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState<string>("7days");
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // Simulate loading
  //   setTimeout(() => setLoading(false), 800);
  // }, []);

  // Mock data
  const stats = {
    totalRevenue: 12450.5,
    revenueChange: 18.2,
    totalUsers: 1247,
    usersChange: 12.5,
    activeUsers: 892,
    activeChange: 8.3,
    totalTests: 3456,
    testsChange: 15.7,
  };

  const revenueData = [
    { month: "Jan", revenue: 8500 },
    { month: "Feb", revenue: 12450 },
  ];

  const userGrowthData = [
    { month: "Sep", users: 850 },
    { month: "Oct", users: 920 },
    { month: "Nov", users: 1050 },
    { month: "Dec", users: 1150 },
    { month: "Jan", users: 1190 },
    { month: "Feb", users: 1247 },
  ];

  const topProducts = [
    { name: "Standard Plan", sales: 342, revenue: 27343.58 },
    { name: "Premium Plan", sales: 89, revenue: 13349.11 },
    { name: "Basic Plan", sales: 156, revenue: 4678.44 },
    { name: "Enterprise Plan", sales: 12, revenue: 11999.88 },
  ];

  const recentActivity = [
    {
      user: "John Doe",
      action: "Completed Writing Mock Test",
      time: "2 hours ago",
    },
    {
      user: "Jane Smith",
      action: "Subscribed to Premium Plan",
      time: "3 hours ago",
    },
    {
      user: "Bob Johnson",
      action: "Completed Listening Practice",
      time: "5 hours ago",
    },
    {
      user: "Alice Williams",
      action: "Started Speaking Module",
      time: "6 hours ago",
    },
    {
      user: "Charlie Brown",
      action: "Renewed Enterprise Subscription",
      time: "8 hours ago",
    },
  ];

  const usageByModule = [
    { module: "Listening", count: 1250, color: "bg-blue-500" },
    { module: "Reading", count: 980, color: "bg-green-500" },
    { module: "Writing", count: 756, color: "bg-purple-500" },
    { module: "Speaking", count: 470, color: "bg-orange-500" },
  ];

  const maxUsage = Math.max(...usageByModule.map((m) => m.count));

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Analytics Dashboard
          </h1>
          <p className="text-gray-500">
            Monitor sales, usage, and platform performance
          </p>
        </div>
        <div className="flex items-center gap-3">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
          >
            <option value="7days">Last 7 Days</option>
            <option value="30days">Last 30 Days</option>
            <option value="90days">Last 90 Days</option>
            <option value="year">This Year</option>
          </select>
          <button className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-sm">
            <Download className="w-4 h-4 mr-2" />
            Export
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">
                Total Revenue
              </p>
              <h3 className="text-3xl font-bold text-gray-900 mt-1">
                ${stats.totalRevenue.toLocaleString()}
              </h3>
            </div>
            <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-green-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-green-600 font-medium flex items-center">
              <TrendingUp className="w-3 h-3 mr-1" />
              +{stats.revenueChange}%
            </span>
            <span className="text-gray-400 ml-2">vs last period</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Total Users</p>
              <h3 className="text-3xl font-bold text-gray-900 mt-1">
                {stats.totalUsers.toLocaleString()}
              </h3>
            </div>
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-green-600 font-medium flex items-center">
              <TrendingUp className="w-3 h-3 mr-1" />
              +{stats.usersChange}%
            </span>
            <span className="text-gray-400 ml-2">vs last period</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">
                Active Users
              </p>
              <h3 className="text-3xl font-bold text-gray-900 mt-1">
                {stats.activeUsers}
              </h3>
            </div>
            <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center">
              <Activity className="w-6 h-6 text-purple-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-green-600 font-medium flex items-center">
              <TrendingUp className="w-3 h-3 mr-1" />
              +{stats.activeChange}%
            </span>
            <span className="text-gray-400 ml-2">vs last period</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">
                Tests Taken
              </p>
              <h3 className="text-3xl font-bold text-gray-900 mt-1">
                {stats.totalTests.toLocaleString()}
              </h3>
            </div>
            <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-orange-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-green-600 font-medium flex items-center">
              <TrendingUp className="w-3 h-3 mr-1" />
              +{stats.testsChange}%
            </span>
            <span className="text-gray-400 ml-2">vs last period</span>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                Revenue Overview
              </h3>
              <p className="text-sm text-gray-500">Monthly revenue trends</p>
            </div>
          </div>
          <div className="space-y-4">
            {revenueData.map((data, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-600">
                    {data.month}
                  </span>
                  <span className="text-sm font-bold text-gray-900">
                    ${data.revenue.toLocaleString()}
                  </span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full transition-all"
                    style={{
                      width: `${(data.revenue / 15000) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* User Growth Chart */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900">User Growth</h3>
              <p className="text-sm text-gray-500">
                User registration trends
              </p>
            </div>
          </div>
          <div className="space-y-3">
            {userGrowthData.map((data, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-600">
                    {data.month}
                  </span>
                  <span className="text-sm font-bold text-gray-900">
                    {data.users.toLocaleString()} users
                  </span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-blue-600 h-2.5 rounded-full transition-all"
                    style={{
                      width: `${(data.users / 1500) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Products */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                Top Products
              </h3>
              <p className="text-sm text-gray-500">Best selling plans</p>
            </div>
          </div>
          <div className="space-y-4">
            {topProducts.map((product, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-900">
                    {product.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {product.sales} sales
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-green-600">
                    ${product.revenue.toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Usage by Module */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                Usage by Module
              </h3>
              <p className="text-sm text-gray-500">
                Student activity breakdown
              </p>
            </div>
          </div>
          <div className="space-y-4">
            {usageByModule.map((module, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">
                    {module.module}
                  </span>
                  <span className="text-sm font-bold text-gray-900">
                    {module.count.toLocaleString()}
                  </span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-3">
                  <div
                    className={`${module.color} h-3 rounded-full transition-all`}
                    style={{
                      width: `${(module.count / maxUsage) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-bold text-gray-900">
              Recent Activity
            </h3>
            <p className="text-sm text-gray-500">
              Latest user actions on the platform
            </p>
          </div>
        </div>
        <div className="space-y-3">
          {recentActivity.map((activity, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold text-sm">
                    {activity.user[0]}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {activity.user}
                  </p>
                  <p className="text-xs text-gray-500">{activity.action}</p>
                </div>
              </div>
              <div className="flex items-center text-xs text-gray-400">
                <Calendar className="w-3 h-3 mr-1" />
                {activity.time}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
