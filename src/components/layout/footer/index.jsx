import React from "react";
import ExpertlyLogoLogin from "../../../Assets/logo/ExpertlyLogoLogin.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Stay ahead of the curve</h3>
            <p className="text-xl text-blue-100 mb-8">
              Get the latest insights, course updates, and exclusive offers
              delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-blue-200 focus:border-white/40 rounded px-4 py-2"
              />
              <button
                type="submit"
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-2 rounded transition-colors"
              >
                Subscribe
                {/* ArrowRight icon placeholder */}
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* Main Footer */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <img
                    src={ExpertlyLogoLogin}
                    alt="Coachavo Logo"
                    className="h-6 w-6 object-contain"
                  />
                </div>
                <span className="text-xl font-bold">Coachavo</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Empowering professionals worldwide through innovative education
                and cutting-edge webinar programs that drive real career growth.
              </p>
              <div className="flex gap-4">
                <button className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors">
                  <span className="sr-only">LinkedIn</span>
                </button>

                <button className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors">
                  <span className="sr-only">Twitter</span>
                </button>

                <button className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors">
                  <span className="sr-only">Facebook</span>
                </button>
              </div>
            </div>
            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="font-semibold text-lg">Quick Links</h4>
              <nav className="space-y-3">
                <Link
                  to="/about-us"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  About Company
                </Link>
                <Link
                  to="/training"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Our Courses
                </Link>
                <Link
                  to="/our-experts"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Instructors
                </Link>
                <Link
                  to="/archive"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Success Stories
                </Link>
                <Link
                  to="/subscribe"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Certification
                </Link>
              </nav>
            </div>
            {/* Support */}
            <div className="space-y-6">
              <h4 className="font-semibold text-lg">Support</h4>
              <nav className="space-y-3">
                <Link
                  to="/contact-us"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Help Center
                </Link>
                <Link
                  to="/privacy-policy"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/terms-of-use"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
                <Link
                  to="/consulting"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Cookie Policy
                </Link>
                <Link
                  to="/contact-us"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Contact Support
                </Link>
              </nav>
            </div>
            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="font-semibold text-lg">Get in Touch</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  {/* Mail icon placeholder */}
                  <span className="h-5 w-5 text-blue-400">@</span>
                  <span className="text-gray-400">hello@Coachavo.com</span>
                </div>
                <div className="flex items-center gap-3">
                  {/* Phone icon placeholder */}
                  <span className="h-5 w-5 text-blue-400">📞</span>
                  <span className="text-gray-400">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-start gap-3">
                  {/* MapPin icon placeholder */}
                  <span className="h-5 w-5 text-blue-400 mt-0.5">📍</span>
                  <span className="text-gray-400">
                    123 Learning Street
                    <br />
                    Education City, EC 12345
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="bg-gray-800 h-px w-full" />
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 Coachavo. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                to="/privacy-policy"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Privacy
              </Link>
              <Link
                to="/terms-of-use"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Terms
              </Link>
              <Link
                to="/consulting"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
