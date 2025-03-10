
export default function Blogs() {
  return (
    <>
        <section id="blogs" className="py-20 bg-black">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">Latest Blogs</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-20">
              <div
                className="bg-black border border-white/10 rounded-lg overflow-hidden group hover:border-[#E50914]/50 transition-colors">
                <div className="relative h-48 overflow-hidden">
                  <img src="https://public.readdy.ai/ai/img_res/0b8c060827e33037135dae1ae71a7522.jpg" alt="Blog 1"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute top-4 left-4 bg-[#E50914] text-white px-3 py-1 rounded-full text-sm" >
                    Technology</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#E50914] transition-colors">The
                    Future of AI in Everyday Life</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">March 1, 2025</span>
                  </div>
                </div>
              </div>
              <div
                className="bg-black border border-white/10 rounded-lg overflow-hidden group hover:border-[#E50914]/50 transition-colors">
                <div className="relative h-48 overflow-hidden">
                  <img src="https://public.readdy.ai/ai/img_res/98d764504f1dac203aa2784954e1e3be.jpg" alt="Blog 2"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute top-4 left-4 bg-[#E50914] text-white px-3 py-1 rounded-full text-sm" >
                    Innovation</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#E50914] transition-colors">
                    Sustainable Innovation in Modern Cities</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">March 2, 2025</span>
                  </div>
                </div>
              </div>
              <div
                className="bg-black border border-white/10 rounded-lg overflow-hidden group hover:border-[#E50914]/50 transition-colors">
                <div className="relative h-48 overflow-hidden">
                  <img src="https://public.readdy.ai/ai/img_res/bc976f6af2c706d9fa8b4826a95b2e5e.jpg" alt="Blog 3"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute top-4 left-4 bg-[#E50914] text-white px-3 py-1 rounded-full text-sm">Science
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#E50914] transition-colors">
                    Breakthroughs in Neuroscience Research</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">March 3, 2025</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mb-20">
          <button
            className="bg-[#E50914] text-white px-8 py-3 !rounded-button hover:bg-[#E50914]/90 transition-colors whitespace-nowrap">
            View All Blogs
          </button>
        </div>
        </section>
    </>
  )
}
