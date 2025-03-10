
export default function Promo() {
    return (
        <>
            <section className="py-20 bg-black">
                <div className="container mx-auto px-6">
                    <div className="relative w-full h-[600px] rounded-lg overflow-hidden group cursor-pointer">
                        <img src="https://readdy.ai/api/search-image?query=vibrant cinematic shot of a TEDx event, bright colorful stage lighting, energetic audience, high-end production setup, crystal clear 4K quality, dynamic camera angles showing both stage and crowd, professional lighting effects&width=1920&height=1080&orientation=landscape"
                            alt="TEDx Event Video Thumbnail" className="w-full h-full object-cover" />
                        <div
                            className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <div
                                className="w-20 h-20 bg-[#E50914]/90 rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform">
                                <i className="ri-play-fill text-4xl text-white"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
