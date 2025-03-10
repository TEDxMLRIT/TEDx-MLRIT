
export default function Sponsors() {
  return (
    <>
      <section id="sponsors">

      <h2 className="text-4xl font-bold text-center mb-12 text-white">Our Sponsors</h2>
        <div className="overflow-x-auto">
          <div className="flex space-x-4 min-w-max pb-4">
            <div
              className="p-6 bg-black rounded-lg hover:bg-[#E50914]/10 transition-colors cursor-pointer border border-white/10 w-72">
              <img src="https://public.readdy.ai/ai/img_res/fc797d23846699f2bc176507cef281ae.jpg"
                alt="Sponsor 1"
                className="sponsor-logo w-full max-w-[200px] mx-auto border-2 border-white/20 rounded p-4" />
            </div>
            <div
              className="p-6 bg-black rounded-lg hover:bg-[#E50914]/10 transition-colors cursor-pointer border border-white/10 w-72">
              <img src="https://public.readdy.ai/ai/img_res/152809e20beee7ccca8345c69cab5a2f.jpg"
                alt="Sponsor 2"
                className="sponsor-logo w-full max-w-[200px] mx-auto border-2 border-white/20 rounded p-4" />
            </div>
            <div
              className="p-6 bg-black rounded-lg hover:bg-[#E50914]/10 transition-colors cursor-pointer border border-white/10 w-72">
              <img src="https://public.readdy.ai/ai/img_res/83455a75a967a9ea3c90b3f5c36c564e.jpg"
                alt="Sponsor 3"
                className="sponsor-logo w-full max-w-[200px] mx-auto border-2 border-white/20 rounded p-4" />
            </div>
            <div
              className="p-6 bg-black rounded-lg hover:bg-[#E50914]/10 transition-colors cursor-pointer border border-white/10 w-72">
              <img src="https://public.readdy.ai/ai/img_res/a16a3a20bde19317c42c9b30118eab58.jpg"
                alt="Sponsor 4"
                className="sponsor-logo w-full max-w-[200px] mx-auto border-2 border-white/20 rounded p-4" />
            </div>
            <div
              className="p-6 bg-black rounded-lg hover:bg-[#E50914]/10 transition-colors cursor-pointer border border-white/10 w-72">
              <img src="https://public.readdy.ai/ai/img_res/0bf695916846cb05af69c0d2310177b8.jpg"
                alt="Sponsor 5"
                className="sponsor-logo w-full max-w-[200px] mx-auto border-2 border-white/20 rounded p-4" />
            </div>
            <div
              className="p-6 bg-black rounded-lg hover:bg-[#E50914]/10 transition-colors cursor-pointer border border-white/10 w-72">
              <img src="https://public.readdy.ai/ai/img_res/b86fa9f88c2c5339e0073098afe2c08c.jpg"
                alt="Sponsor 6"
                className="sponsor-logo w-full max-w-[200px] mx-auto border-2 border-white/20 rounded p-4" />
            </div>
          </div>
        </div>
        <div className="text-center mt-12">
          <button
            className="bg-[#E50914] text-white px-8 py-3 !rounded-button hover:bg-[#E50914]/90 transition-colors whitespace-nowrap">
            Become a Sponsor
          </button>
        </div>
      </section>
    </>
  )
}
