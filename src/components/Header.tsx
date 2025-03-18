
export default function Header() {
    return (
        <>
            <header className="fixed w-full z-50 bg-black/90 backdrop-blur-sm">
                <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center">
                        <img src="https://static.readdy.ai/image/a696ab19619978717fdfb934fe9d06a8/ae5b39aba11747580e8242bc8edbc1f1.png"
                            alt="TEDx Logo" className="h-16" />
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="/" className="text-white hover:text-[#E50914] transition-colors">Home</a>
                        <a href="/#about" className="text-white hover:text-[#E50914] transition-colors">About</a>
                        <a href="/#past-editions" className="text-white hover:text-[#E50914] transition-colors">Past Editions</a>
                        <a href="/speakers" className="text-white hover:text-[#E50914] transition-colors">Speakers</a>
                        <a href="/sponsors" className="text-white hover:text-[#E50914] transition-colors">Sponsors</a>
                        <a href="/team" className="text-white hover:text-[#E50914] transition-colors">Team</a>
                        {/* <a href="#gallery" className="text-white hover:text-[#E50914] transition-colors">Gallery</a> */}
                        <a href="/#blogs" className="text-white hover:text-[#E50914] transition-colors">Blogs</a>
                        <a href="/register"
                            className="bg-[#E50914] text-white px-6 py-2 !rounded-button hover:bg-[#E50914]/90 transition-colors whitespace-nowrap">
                            Get Tickets
                        </a>
                    </div>
                    <button className="md:hidden w-10 h-10 flex items-center justify-center">
                        <i className="ri-menu-line text-2xl text-white"></i>
                    </button>
                </nav>
            </header>
        </>
    )
}
