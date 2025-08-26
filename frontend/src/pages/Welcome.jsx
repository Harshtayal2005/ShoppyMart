import Carousel from "../components/Carousel";
import { SignInButton } from "@clerk/clerk-react";

function Welcome() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-emerald-50 to-orange-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-emerald-100">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-emerald-600">
              ShoppyMart
            </div>
            <nav className="hidden md:flex space-x-6">
              <a
                href="#"
                className="text-gray-600 hover:text-emerald-600 transition-colors"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-emerald-600 transition-colors"
              >
                Features
              </a>
              <a
                href="https://github.com/Harshtayal2005/ShoppyMart" target="blank"
                className="text-gray-600 hover:text-emerald-600 transition-colors"
              >
                Github
              </a>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-grow flex flex-col lg:flex-row">
        {/* Left side: Carousel */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12">
          <div className="w-full max-w-2xl">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-emerald-100">
              <Carousel />
            </div>
          </div>
        </div>

        {/* Right side: Sign In */}
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-6 lg:p-12">
          <div className="w-full max-w-md space-y-8">
            {/* Welcome Card */}
            <div className="bg-gradient-to-r from-emerald-500 to-orange-500 text-white text-center p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="space-y-4">
                <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                  Welcome to ShoppyMart
                </h1>
                <p className="text-lg md:text-xl opacity-90">
                  Your local guide for the ultimate shopping experience
                </p>
                <div className="flex justify-center space-x-2 mt-6">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse delay-100"></div>
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse delay-200"></div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-white p-4 rounded-xl shadow-md border border-emerald-100 hover:shadow-lg transition-shadow">
                <div className="text-emerald-500 text-2xl mb-2">🛍️</div>
                <h3 className="font-semibold text-gray-800">Smart Shopping</h3>
                <p className="text-sm text-gray-600">
                  Find the best deals locally
                </p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-md border border-orange-100 hover:shadow-lg transition-shadow">
                <div className="text-orange-500 text-2xl mb-2">📍</div>
                <h3 className="font-semibold text-gray-800">Local Stores</h3>
                <p className="text-sm text-gray-600">
                  Discover nearby retailers
                </p>
              </div>
            </div>

            {/* Sign In Button */}
            <div className="text-center">
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <p className="text-gray-600 mb-4">Ready to start shopping?</p>
                <SignInButton>
                  <button className="w-full bg-gradient-to-r from-emerald-500 to-orange-500 hover:from-emerald-600 hover:to-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
                    Get Started
                  </button>
                </SignInButton>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-emerald-400">
                ShoppyMart
              </h3>
              <p className="text-gray-400 text-sm">
                Your trusted local shopping companion, connecting you with the
                best stores and deals in your area.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-orange-400">
                Quick Links
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-emerald-400">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>harshtayal2005@gmail.com</li>
                <li>harshivgdtu@gmail.com</li>
                <li>himanshusyuni123@gmail.com</li>
                <li>himanshusingh2087@gmail.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-4 text-center">
            <p className="text-gray-400 text-sm">
              &copy; 2025 ShoppyMart. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Welcome;
