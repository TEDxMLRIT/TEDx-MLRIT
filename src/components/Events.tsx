
export default function Events() {
  return (
    <div id="past-editions" className="bg-gray-900 py-12 mt-12">
        <div className="container mx-auto px-6">
          <h3 className="text-2xl font-bold text-white mb-8">TEDx Editions : Past & Upcoming</h3>
          <div className="space-y-8">
            <div
              className="flex items-center gap-8 group relative hover:bg-black/20 p-4 rounded-lg transition-all cursor-pointer border-b border-[#E50914]">
              <div className="w-48 text-right">
                <h3 className="text-2xl font-bold text-[#E50914]">25</h3>
                <p className="text-white">April 2025</p>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">TEDx MLRIT 2025</h3>
                <p className="text-gray-300">Theme: Echoes Of Tomorrow</p>
              </div>
              <button
                className="bg-transparent text-white px-6 py-2 !rounded-button border-2 border-[#E50914] hover:bg-[#E50914] transition-all duration-300 whitespace-nowrap">View
                Details</button>
            </div>
            <div
              className="flex items-center gap-8 group relative hover:bg-black/20 p-4 rounded-lg transition-all cursor-pointer border-b border-[#E50914]">
              <div className="w-48 text-right">
                <h3 className="text-2xl font-bold text-[#E50914]">18</h3>
                <p className="text-white">August 2018</p>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">TEDx MLRIT 2018</h3>
                <p className="text-gray-300">Theme: One Step Closer</p>
              </div>
              <button
                className="bg-transparent text-white px-6 py-2 !rounded-button border-2 border-[#E50914] hover:bg-[#E50914] transition-all duration-300 whitespace-nowrap">View
                Details</button>
            </div>
            <div
              className="flex items-center gap-8 group relative hover:bg-black/20 p-4 rounded-lg transition-all cursor-pointer">
              <div className="w-48 text-right">
                <h3 className="text-2xl font-bold text-[#E50914]">1</h3>
                <p className="text-white">April 2017</p>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">TEDx MLRIT 2017</h3>
                <p className="text-gray-300">Theme: Wander To Wonder</p>
              </div>
              <button
                className="bg-transparent text-white px-6 py-2 !rounded-button border-2 border-[#E50914] hover:bg-[#E50914] transition-all duration-300 whitespace-nowrap">View
                Details</button>
            </div>
          </div>
        </div>
      </div>
  )
}
