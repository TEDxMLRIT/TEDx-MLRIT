import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


export default function Speakers() {
  return (
    <>
      <section id="speakers" className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Featured Speakers</h2>
          <Carousel responsive={responsive} swipeable={true}
            draggable={true}
            showDots={true}
            ssr={false} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={100}
            dotListClass=""
            renderDotsOutside
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            itemClass="carousel-item-padding-40-px">
            <div className="flex-none w-72 relative group">
              <div className="relative overflow-hidden rounded-lg">
                <img src="https://public.readdy.ai/ai/img_res/3ca272685bc122c9e93710715ccf148c.jpg"
                  alt="Speaker 1"
                  className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-110" />
                <div
                  className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div
                    className="absolute bottom-12 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold mb-2">Dr. Alexander Mitchell</h3>
                    <p className="text-gray-300 mb-4">Innovation Director at Future Labs</p>
                    <p className="text-sm mb-4">Leading expert in artificial intelligence and its impact on
                      future societies.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-none w-72 relative group">
              <div className="relative overflow-hidden rounded-lg">
                <img src="https://public.readdy.ai/ai/img_res/592f85e5a7ae93ab9a2cfb38c0029072.jpg"
                  alt="Speaker 2"
                  className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-110" />
                <div
                  className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div
                    className="absolute bottom-12 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold mb-2">Dr. Emily Chen</h3>
                    <p className="text-gray-300 mb-4">Quantum Computing Researcher</p>
                    <p className="text-sm mb-4">Pioneer in quantum computing applications for sustainable
                      energy solutions.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-none w-72 relative group">
              <div className="relative overflow-hidden rounded-lg">
                <img src="https://public.readdy.ai/ai/img_res/cc5711692d9011f5547f8f7aee7e496d.jpg"
                  alt="Speaker 3"
                  className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-110" />
                <div
                  className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div
                    className="absolute bottom-12 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold mb-2">Dr. Michelle Washington</h3>
                    <p className="text-gray-300 mb-4">Climate Change Specialist</p>
                    <p className="text-sm mb-4">Leading researcher in environmental sustainability and
                      climate action initiatives.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-none w-72 relative group">
              <div className="relative overflow-hidden rounded-lg">
                <img src="https://public.readdy.ai/ai/img_res/a0943536d8e71693896c1157d0ce7b94.jpg"
                  alt="Speaker 4"
                  className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-110" />
                <div
                  className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div
                    className="absolute bottom-12 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold mb-2">Dr. Karim Nasser</h3>
                    <p className="text-gray-300 mb-4">Neuroscience Innovator</p>
                    <p className="text-sm mb-4">Pioneering research in brain-computer interfaces and neural
                      plasticity.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-none w-72 relative group">
              <div className="relative overflow-hidden rounded-lg">
                <img src="https://public.readdy.ai/ai/img_res/ce93d38580c418b6e0764922e55b1079.jpg"
                  alt="Speaker 5"
                  className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-110" />
                <div
                  className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div
                    className="absolute bottom-12 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold mb-2">Dr. Sofia Andersson</h3>
                    <p className="text-gray-300 mb-4">Biotech Innovation Leader</p>
                    <p className="text-sm mb-4">Revolutionary research in sustainable biotechnology and
                      circular economy solutions.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-none w-72 relative group">
              <div className="relative overflow-hidden rounded-lg">
                <img src="https://public.readdy.ai/ai/img_res/6a9f7ab70b16e1fff2b9e67304eafb01.jpg"
                  alt="Speaker 6"
                  className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-110" />
                <div
                  className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div
                    className="absolute bottom-12 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold mb-2">Dr. Marco Rivera</h3>
                    <p className="text-gray-300 mb-4">Space Technology Pioneer</p>
                    <p className="text-sm mb-4">Leading innovations in space exploration and satellite
                      communication systems.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-none w-72 relative group">
              <div className="relative overflow-hidden rounded-lg">
                <img src="https://public.readdy.ai/ai/img_res/3c912a5951e208c8028c3050c0600b60.jpg"
                  alt="Speaker 7"
                  className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-110" />
                <div
                  className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div
                    className="absolute bottom-12 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold mb-2">Dr. Priya Sharma</h3>
                    <p className="text-gray-300 mb-4">Digital Ethics Researcher</p>
                    <p className="text-sm mb-4">Expert in AI ethics and responsible technology development.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-none w-72 relative group">
              <div className="relative overflow-hidden rounded-lg">
                <img src="https://public.readdy.ai/ai/img_res/b8433bca3116d593f1615549047cfca4.jpg"
                  alt="Speaker 8"
                  className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-110" />
                <div
                  className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div
                    className="absolute bottom-12 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold mb-2">Dr. Hiroshi Tanaka</h3>
                    <p className="text-gray-300 mb-4">Robotics Engineering Director</p>
                    <p className="text-sm mb-4">Pioneering advancements in humanoid robotics and automation
                      systems.</p>
                  </div>
                </div>
              </div>
            </div>
          </Carousel>
          <div className="overflow-x-auto relative">
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-[#E50914]/80 text-white rounded-full flex items-center justify-center hover:bg-[#E50914] transition-colors"
            // onclick="slideSpeakers('left')"
            >
              <i className="ri-arrow-left-s-line text-2xl"></i>
            </button>
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-[#E50914]/80 text-white rounded-full flex items-center justify-center hover:bg-[#E50914] transition-colors"
            // onclick="slideSpeakers('right')"
            >
              <i className="ri-arrow-right-s-line text-2xl"></i>
            </button>
            {/* <div id="speakersContainer" className="flex space-x-6 pb-8 transition-transform duration-300">
              <div className="flex-none w-72 relative group">
                <div className="relative overflow-hidden rounded-lg">
                  <img src="https://public.readdy.ai/ai/img_res/3ca272685bc122c9e93710715ccf148c.jpg"
                    alt="Speaker 1"
                    className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-110" />
                  <div
                    className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div
                      className="absolute bottom-12 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-xl font-bold mb-2">Dr. Alexander Mitchell</h3>
                      <p className="text-gray-300 mb-4">Innovation Director at Future Labs</p>
                      <p className="text-sm mb-4">Leading expert in artificial intelligence and its impact on
                        future societies.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-none w-72 relative group">
                <div className="relative overflow-hidden rounded-lg">
                  <img src="https://public.readdy.ai/ai/img_res/592f85e5a7ae93ab9a2cfb38c0029072.jpg"
                    alt="Speaker 2"
                    className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-110" />
                  <div
                    className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div
                      className="absolute bottom-12 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-xl font-bold mb-2">Dr. Emily Chen</h3>
                      <p className="text-gray-300 mb-4">Quantum Computing Researcher</p>
                      <p className="text-sm mb-4">Pioneer in quantum computing applications for sustainable
                        energy solutions.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-none w-72 relative group">
                <div className="relative overflow-hidden rounded-lg">
                  <img src="https://public.readdy.ai/ai/img_res/cc5711692d9011f5547f8f7aee7e496d.jpg"
                    alt="Speaker 3"
                    className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-110" />
                  <div
                    className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div
                      className="absolute bottom-12 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-xl font-bold mb-2">Dr. Michelle Washington</h3>
                      <p className="text-gray-300 mb-4">Climate Change Specialist</p>
                      <p className="text-sm mb-4">Leading researcher in environmental sustainability and
                        climate action initiatives.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-none w-72 relative group">
                <div className="relative overflow-hidden rounded-lg">
                  <img src="https://public.readdy.ai/ai/img_res/a0943536d8e71693896c1157d0ce7b94.jpg"
                    alt="Speaker 4"
                    className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-110" />
                  <div
                    className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div
                      className="absolute bottom-12 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-xl font-bold mb-2">Dr. Karim Nasser</h3>
                      <p className="text-gray-300 mb-4">Neuroscience Innovator</p>
                      <p className="text-sm mb-4">Pioneering research in brain-computer interfaces and neural
                        plasticity.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-none w-72 relative group">
                <div className="relative overflow-hidden rounded-lg">
                  <img src="https://public.readdy.ai/ai/img_res/ce93d38580c418b6e0764922e55b1079.jpg"
                    alt="Speaker 5"
                    className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-110" />
                  <div
                    className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div
                      className="absolute bottom-12 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-xl font-bold mb-2">Dr. Sofia Andersson</h3>
                      <p className="text-gray-300 mb-4">Biotech Innovation Leader</p>
                      <p className="text-sm mb-4">Revolutionary research in sustainable biotechnology and
                        circular economy solutions.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-none w-72 relative group">
                <div className="relative overflow-hidden rounded-lg">
                  <img src="https://public.readdy.ai/ai/img_res/6a9f7ab70b16e1fff2b9e67304eafb01.jpg"
                    alt="Speaker 6"
                    className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-110" />
                  <div
                    className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div
                      className="absolute bottom-12 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-xl font-bold mb-2">Dr. Marco Rivera</h3>
                      <p className="text-gray-300 mb-4">Space Technology Pioneer</p>
                      <p className="text-sm mb-4">Leading innovations in space exploration and satellite
                        communication systems.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-none w-72 relative group">
                <div className="relative overflow-hidden rounded-lg">
                  <img src="https://public.readdy.ai/ai/img_res/3c912a5951e208c8028c3050c0600b60.jpg"
                    alt="Speaker 7"
                    className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-110" />
                  <div
                    className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div
                      className="absolute bottom-12 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-xl font-bold mb-2">Dr. Priya Sharma</h3>
                      <p className="text-gray-300 mb-4">Digital Ethics Researcher</p>
                      <p className="text-sm mb-4">Expert in AI ethics and responsible technology development.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-none w-72 relative group">
                <div className="relative overflow-hidden rounded-lg">
                  <img src="https://public.readdy.ai/ai/img_res/b8433bca3116d593f1615549047cfca4.jpg"
                    alt="Speaker 8"
                    className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-110" />
                  <div
                    className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div
                      className="absolute bottom-12 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-xl font-bold mb-2">Dr. Hiroshi Tanaka</h3>
                      <p className="text-gray-300 mb-4">Robotics Engineering Director</p>
                      <p className="text-sm mb-4">Pioneering advancements in humanoid robotics and automation
                        systems.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          <div className="text-center mt-12">
            <button
              className="bg-[#E50914] text-white px-8 py-3 !rounded-button hover:bg-[#E50914]/90 transition-colors whitespace-nowrap">
              View All Speakers
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
