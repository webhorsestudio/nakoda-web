"use client";

export default function HeroImageCollage() {
  return (
    <div className="grid grid-cols-2 gap-4 h-80 lg:h-96">
      
      {/* Top-Left: Large Payment Methods Card */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 border border-gray-200 shadow-lg group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl">
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div className="relative">
            {/* Large stylized credit cards stack */}
            <div className="relative">
              {/* Top card - white with blue overlay */}
              <div className="w-20 h-12 bg-white/80 backdrop-blur-sm rounded-lg shadow-md border border-white/50 transform rotate-3 mb-2 relative">
                <div className="absolute inset-0 bg-blue-500/20 rounded-lg"></div>
                <div className="absolute top-3 right-3 w-4 h-2.5 bg-gray-400/60 rounded-sm"></div>
                <div className="absolute top-3 left-3 w-5 h-2.5 bg-gray-300/60 rounded-sm"></div>
              </div>
              
              {/* Second card - blue with translucency */}
              <div className="w-20 h-12 bg-blue-500/70 backdrop-blur-sm rounded-lg shadow-md border border-blue-400/50 transform -rotate-2 mb-2 absolute top-2 left-2">
                <div className="absolute inset-0 bg-blue-600/30 rounded-lg"></div>
              </div>
              
              {/* Third card - darker blue */}
              <div className="w-20 h-12 bg-blue-700/60 backdrop-blur-sm rounded-lg shadow-md border border-blue-600/50 transform rotate-1 absolute top-4 left-4">
                <div className="absolute inset-0 bg-blue-800/40 rounded-lg"></div>
              </div>
              
              {/* Fourth card - light blue */}
              <div className="w-20 h-12 bg-blue-400/50 backdrop-blur-sm rounded-lg shadow-md border border-blue-300/50 transform -rotate-1 absolute top-6 left-6">
                <div className="absolute inset-0 bg-blue-500/30 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-3 left-3 text-xs font-medium text-gray-700">Payment Methods</div>
      </div>

      {/* Top-Right: Medium Success Notification */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-50 to-yellow-100 border border-amber-200 shadow-lg group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl">
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
          <div className="text-center">
            {/* Green checkmark in white circle */}
            <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center mb-3 mx-auto shadow-sm border border-green-200">
              <span className="text-green-500 text-xl font-bold">✓</span>
            </div>
            {/* Success text */}
            <div className="text-green-700 font-bold text-sm mb-1">Successful Transaction</div>
            <div className="text-gray-600 text-xs">Date: Mar 20, 2024</div>
          </div>
        </div>
      </div>

      {/* Bottom-Left: Large Transaction Amount */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-500 to-green-600 border border-green-400 shadow-lg group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl">
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
          <div className="text-center text-white">
            {/* White upward-pointing triangle */}
            <div className="text-white text-2xl mb-3">▲</div>
            {/* Amount */}
            <div className="text-white font-bold text-2xl mb-2">$25,000</div>
            <div className="text-white/90 text-sm mb-4">Sent to Jack</div>
            {/* White person silhouette icon */}
            <div className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full mx-auto flex items-center justify-center shadow-sm">
              <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom-Right: Medium Mobile Payment */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 border border-gray-200 shadow-lg group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl">
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div className="relative">
            {/* Stylized mobile phone icon */}
            <div className="relative">
              {/* Phone body */}
              <div className="w-16 h-10 bg-blue-500 rounded-lg shadow-md border border-blue-400 transform -rotate-6 relative">
                {/* Phone screen */}
                <div className="w-full h-full bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <div className="text-blue-600 text-sm font-bold">G Pay</div>
                </div>
              </div>
              
              {/* White circular element with gray "G" */}
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm border border-gray-200">
                <span className="text-gray-600 text-sm font-bold">G</span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-3 left-3 text-xs font-medium text-gray-700">Mobile Payment</div>
      </div>

    </div>
  );
} 