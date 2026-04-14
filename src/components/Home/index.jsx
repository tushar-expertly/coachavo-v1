import React from "react";
import startupPng from "../../Assets/startup.jpg";
import Layout from "../layout";
function Home() {
  return (
    <Layout>
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 min-h-screen">
        {/* Background geometric shapes */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-indigo-400/20 to-cyan-400/20 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-200 shadow-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">
                    Live Learning Platform
                  </span>
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Transform Your
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    {" "}
                    Career
                  </span>
                  <br />
                  with Expert-Led Webinars
                </h1>
                <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
                  Join thousands of professionals advancing their skills through our
                  interactive, world-class webinar programs designed for real-world
                  success.
                </p>
              </div>
              {/* Stats */}
              <div className="flex items-center gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">50K+</div>
                  <div className="text-sm text-gray-600">Active Learners</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">200+</div>
                  <div className="text-sm text-gray-600">Expert Instructors</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">95%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
              </div>
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 group">
                  Start Learning Today
                  {/* Replace with ArrowRight icon if available */}
                </button>
                <button className="px-8 py-4 rounded-xl font-semibold border-2 border-gray-300 hover:border-blue-400 hover:bg-blue-50 transition-all duration-300 group">
                  {/* Replace with Play icon if available */}
                  Watch Demo
                </button>
              </div>
              {/* Trust badges */}
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  {/* Replace with Users icon if available */}
                  <span className="text-sm text-gray-600">
                    Trusted by 500+ companies
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {/* Replace with Trophy icon if available */}
                  <span className="text-sm text-gray-600">
                    Award winning platform
                  </span>
                </div>
              </div>
            </div>
            {/* Right Content - Image */}
            <div className="relative">
              <div className="relative z-10">
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50">
                  <img
                    src={startupPng}
                    alt="Professional learning environment"
                    className="w-full h-auto rounded-2xl shadow-lg"
                  />
                </div>
              </div>
              {/* Floating cards */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 z-20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    {/* Replace with Clock icon if available */}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">24/7 Access</div>
                    <div className="text-sm text-gray-600">Learn anytime</div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-blue-600 rounded-2xl p-4 shadow-xl z-20">
                <div className="text-white text-center">
                  <div className="font-bold text-lg">Live</div>
                  <div className="text-sm opacity-90">Sessions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="mb-4 inline-block bg-blue-50 text-blue-700 border border-blue-200 rounded px-3 py-1 font-semibold">
              Our Mission
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Empowering Professionals Through
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {" "}
                Excellence
              </span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              We're committed to transforming how professionals learn and grow,
              delivering world-class education that drives real career impact.
            </p>
          </div>
          <div className="space-y-24">
            {/* Feature 1 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200">
                    {/* Target icon placeholder */}
                    <span className="h-8 w-8 bg-blue-600 rounded-full"></span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">
                    Precision Skill Development
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Our carefully curated curriculum targets the exact skills
                    employers demand, ensuring your learning translates directly to
                    career advancement.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="h-5 w-5 bg-blue-600 rounded-full"></span>
                    <span className="text-gray-700 font-medium">
                      Industry-aligned content
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="h-5 w-5 bg-blue-600 rounded-full"></span>
                    <span className="text-gray-700 font-medium">
                      Real-world applications
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="h-5 w-5 bg-blue-600 rounded-full"></span>
                    <span className="text-gray-700 font-medium">
                      Immediate implementation
                    </span>
                  </div>
                </div>
                <div className="pt-4">
                  <button className="inline-flex items-center gap-2 font-semibold text-blue-600 hover:text-blue-700 transition-colors group">
                    Learn more about this approach
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="overflow-hidden border-0 shadow-2xl bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8">
                  <img
                    src="https://images.unsplash.com/photo-1698047682129-c3e217ac08b7?auto=format&fit=crop&w=800&q=80"
                    alt="Precision Skill Development"
                    className="w-full h-80 object-cover rounded-2xl"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center"></div>
                    <div>
                      <div className="font-bold text-gray-900">90%</div>
                      <div className="text-sm text-gray-600">Career growth</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center lg:grid-flow-col-dense">
              <div className="space-y-8 lg:col-start-2">
                <div className="space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-100 to-purple-200">
                    {/* Lightbulb icon placeholder */}
                    <span className="h-8 w-8 bg-purple-600 rounded-full"></span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">
                    Interactive Learning Experience
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Engage with cutting-edge technology and methodologies that make
                    complex concepts accessible and memorable through hands-on
                    practice.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="h-5 w-5 bg-purple-600 rounded-full"></span>
                    <span className="text-gray-700 font-medium">Live interaction</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="h-5 w-5 bg-purple-600 rounded-full"></span>
                    <span className="text-gray-700 font-medium">Q&A sessions</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="h-5 w-5 bg-purple-600 rounded-full"></span>
                    <span className="text-gray-700 font-medium">Peer collaboration</span>
                  </div>
                </div>
                <div className="pt-4">
                  <button className="inline-flex items-center gap-2 font-semibold text-purple-600 hover:text-purple-700 transition-colors group">
                    Learn more about this approach
                  </button>
                </div>
              </div>
              <div className="relative lg:col-start-1">
                <div className="overflow-hidden border-0 shadow-2xl bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8">
                  <img
                    src="https://images.unsplash.com/photo-1673515335564-fbe94030e4b7?auto=format&fit=crop&w=800&q=80"
                    alt="Interactive Learning Experience"
                    className="w-full h-80 object-cover rounded-2xl"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center"></div>
                    <div>
                      <div className="font-bold text-gray-900">4.9/5</div>
                      <div className="text-sm text-gray-600">Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Feature 3 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-100 to-emerald-200">
                    {/* GraduationCap icon placeholder */}
                    <span className="h-8 w-8 bg-emerald-600 rounded-full"></span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">
                    Comprehensive Learning Ecosystem
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Beyond traditional courses - access mentorship, networking
                    opportunities, and certification programs that build lasting
                    professional relationships.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="h-5 w-5 bg-emerald-600 rounded-full"></span>
                    <span className="text-gray-700 font-medium">Expert mentorship</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="h-5 w-5 bg-emerald-600 rounded-full"></span>
                    <span className="text-gray-700 font-medium">Global network</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="h-5 w-5 bg-emerald-600 rounded-full"></span>
                    <span className="text-gray-700 font-medium">Verified certificates</span>
                  </div>
                </div>
                <div className="pt-4">
                  <button className="inline-flex items-center gap-2 font-semibold text-emerald-600 hover:text-emerald-700 transition-colors group">
                    Learn more about this approach
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="overflow-hidden border-0 shadow-2xl bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8">
                  <img
                    src="https://images.unsplash.com/photo-1743865319702-f01078a80822?auto=format&fit=crop&w=800&q=80"
                    alt="Comprehensive Learning Ecosystem"
                    className="w-full h-80 object-cover rounded-2xl"
                    style={{ objectPosition: "50% 40%" }}
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center"></div>
                    <div>
                      <div className="font-bold text-gray-900">98%</div>
                      <div className="text-sm text-gray-600">Completion</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Home;
