"use client";

import { useSession } from "next-auth/react";
import { User, Mail, MapPin, Phone, Calendar, Edit, Camera, Award, BookOpen, Clock } from "lucide-react";
import { useState } from "react";

export default function ProfilePage() {
  const { data: session } = useSession();
  const [isEditing, setIsEditing] = useState(false);

  // Mock data - in a real app, this would come from an API
  const [userData, setUserData] = useState({
    phone: "+1 (555) 123-4567",
    location: "New York, USA",
    bio: "Aspiring student preparing for IELTS Academic. Targeting Band 7.5+ for university admission in Canada.",
    joinDate: "January 2024",
    targetScore: "7.5",
    nextExamDate: "2024-04-15"
  });

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Cover Image */}
        <div className="h-32 bg-gradient-to-r from-blue-600 to-blue-400"></div>
        
        <div className="px-6 pb-6">
          <div className="relative flex items-end -mt-12 mb-6">
            <div className="relative">
              <div className="w-24 h-24 rounded-full border-4 border-white bg-white shadow-md flex items-center justify-center text-blue-600 text-3xl font-bold">
                {session?.user?.name?.[0]?.toUpperCase() || "U"}
              </div>
              <button className="absolute bottom-0 right-0 p-1.5 bg-gray-100 rounded-full border-2 border-white hover:bg-gray-200 transition-colors">
                <Camera className="w-4 h-4 text-gray-600" />
              </button>
            </div>
            <div className="ml-4 flex-1 pt-12 md:pt-0">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">{session?.user?.name}</h1>
                  <p className="text-gray-500 capitalize">{session?.user?.role || "Student"}</p>
                </div>
                <div className="mt-4 md:mt-0 flex space-x-3">
                  <button 
                    onClick={() => setIsEditing(!isEditing)}
                    className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    <Edit className="w-4 h-4 mr-2" />
                    Edit Profile
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* User Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 border-t border-gray-100 pt-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Target Band</p>
                <p className="font-semibold text-gray-900">{userData.targetScore}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-green-50 rounded-lg text-green-600">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Tests Taken</p>
                <p className="font-semibold text-gray-900">12</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-purple-50 rounded-lg text-purple-600">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Practice Time</p>
                <p className="font-semibold text-gray-900">24.5 hrs</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-orange-50 rounded-lg text-orange-600">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Next Exam</p>
                <p className="font-semibold text-gray-900">{userData.nextExamDate}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Personal Info */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">About</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              {userData.bio}
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center text-gray-600">
                <Mail className="w-4 h-4 mr-3" />
                <span className="text-sm">{session?.user?.email}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Phone className="w-4 h-4 mr-3" />
                <span className="text-sm">{userData.phone}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <MapPin className="w-4 h-4 mr-3" />
                <span className="text-sm">{userData.location}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Calendar className="w-4 h-4 mr-3" />
                <span className="text-sm">Joined {userData.joinDate}</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Skills Overview</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Listening</span>
                  <span className="font-medium text-gray-900">7.5</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Reading</span>
                  <span className="font-medium text-gray-900">7.0</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '78%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Writing</span>
                  <span className="font-medium text-gray-900">6.5</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '72%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Speaking</span>
                  <span className="font-medium text-gray-900">6.5</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div className="bg-orange-500 h-2 rounded-full" style={{ width: '72%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Edit Form / Activity */}
        <div className="lg:col-span-2">
          {isEditing ? (
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Edit Profile</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      defaultValue={session?.user?.name || ""}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      defaultValue={session?.user?.email || ""}
                      disabled
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input
                      type="text"
                      defaultValue={userData.phone}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                    <input
                      type="text"
                      defaultValue={userData.location}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Target Score</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>Band 6.0</option>
                      <option>Band 6.5</option>
                      <option>Band 7.0</option>
                      <option>Band 7.5</option>
                      <option>Band 8.0+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Next Exam Date</label>
                    <input
                      type="date"
                      defaultValue={userData.nextExamDate}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                  <textarea
                    rows={4}
                    defaultValue={userData.bio}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>

                <div className="flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700"
                    onClick={() => setIsEditing(false)}
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Recent Activity</h3>
              <div className="space-y-6">
                {[
                  { title: "Completed Reading Mock Test 4", date: "2 hours ago", score: "7.0", type: "Test" },
                  { title: "Practiced Speaking Part 2", date: "Yesterday", score: "Pending", type: "Practice" },
                  { title: "Watched Writing Task 1 Tutorial", date: "2 days ago", score: null, type: "Learning" },
                  { title: "Completed Listening Section 3", date: "3 days ago", score: "8.0", type: "Practice" }
                ].map((activity, i) => (
                  <div key={i} className="flex items-start space-x-4 pb-6 border-b border-gray-100 last:border-0 last:pb-0">
                    <div className={`p-2 rounded-full shrink-0 ${
                      activity.type === 'Test' ? 'bg-blue-100 text-blue-600' :
                      activity.type === 'Practice' ? 'bg-green-100 text-green-600' :
                      'bg-purple-100 text-purple-600'
                    }`}>
                      {activity.type === 'Test' ? <Award className="w-4 h-4" /> :
                       activity.type === 'Practice' ? <BookOpen className="w-4 h-4" /> :
                       <User className="w-4 h-4" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                      <p className="text-xs text-gray-500 mt-1">{activity.date}</p>
                    </div>
                    {activity.score && (
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        activity.score === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'
                      }`}>
                        {activity.score === 'Pending' ? 'Review' : `Band ${activity.score}`}
                      </span>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-100">
                <button className="w-full py-2 text-center text-sm text-blue-600 font-medium hover:text-blue-700">
                  View Full History
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
