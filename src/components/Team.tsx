import { Link } from "react-router";

export default function Team() {
  return (
    <>
      <section id="team" className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Our Team</h2>
          <div className="overflow-x-auto relative">
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-[#E50914]/80 text-white rounded-full flex items-center justify-center hover:bg-[#E50914] transition-colors"
              // onclick="slideSpeakers('left')"
              >
              <i className="ri-arrow-left-s-line text-2xl"></i>
            </button>
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-[#E50914]/80 text-white rounded-full flex items-center justify-center hover:bg-[#E50914] transition-colors"
              // onlick="slideSpeakers('right')"
              >
              <i className="ri-arrow-right-s-line text-2xl"></i>
            </button>
            <div id="speakersContainer" className="flex space-x-6 pb-8 transition-transform duration-300">
              <div className="flex-none w-72">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img src="https://public.readdy.ai/ai/img_res/a8867ef2bf10e4fc157a5a23997ce69d.jpg"
                    alt="Team Member 1" className="w-full h-96 object-cover" />
                </div>
                <div
                  className="bg-black/80 p-6 rounded-lg transform -translate-y-8 hover:-translate-y-9 transition-all hover:bg-[#E50914]/90">
                  <h3 className="text-xl font-bold text-white mb-2">Sarah Johnson</h3>
                  <p className="text-gray-300">Event Coordinator</p>
                </div>
              </div>
              <div className="flex-none w-72">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img src="https://public.readdy.ai/ai/img_res/e626815941e82ce283ce9a6e9fb0c9ab.jpg"
                    alt="Team Member 2" className="w-full h-96 object-cover" />
                </div>
                <div
                  className="bg-black/80 p-6 rounded-lg transform -translate-y-8 hover:-translate-y-9 transition-all hover:bg-[#E50914]/90">
                  <h3 className="text-xl font-bold text-white mb-2">David Zhang</h3>
                  <p className="text-gray-300">Technical Director</p>
                </div>
              </div>
              <div className="flex-none w-72">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img src="https://public.readdy.ai/ai/img_res/84f999e1505dd383566d14c0315f9c0b.jpg"
                    alt="Team Member 3" className="w-full h-96 object-cover" />
                </div>
                <div
                  className="bg-black/80 p-6 rounded-lg transform -translate-y-8 hover:-translate-y-9 transition-all hover:bg-[#E50914]/90">
                  <h3 className="text-xl font-bold text-white mb-2">Priya Patel</h3>
                  <p className="text-gray-300">Marketing Lead</p>
                </div>
              </div>
              <div className="flex-none w-72">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img src="https://public.readdy.ai/ai/img_res/081f4d843a67dc5ce657eed05d133d73.jpg"
                    alt="Team Member 4" className="w-full h-96 object-cover" />
                </div>
                <div
                  className="bg-black/80 p-6 rounded-lg transform -translate-y-8 hover:-translate-y-9 transition-all hover:bg-[#E50914]/90">
                  <h3 className="text-xl font-bold text-white mb-2">Carlos Rodriguez</h3>
                  <p className="text-gray-300">Speaker Relations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-12">
          <Link to={"/team"}
            className="bg-[#E50914] text-white px-8 py-3 !rounded-button hover:bg-[#E50914]/90 transition-colors whitespace-nowrap">
            Meet Full Team
          </Link>
        </div>              
        
      </section>
    </>
  )
}
