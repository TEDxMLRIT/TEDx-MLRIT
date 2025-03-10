
export default function Footer() {
  return (
    <>
      <footer className="bg-black text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div className="text-center md:text-left">
              <img src="https://static.readdy.ai/image/a696ab19619978717fdfb934fe9d06a8/ae5b39aba11747580e8242bc8edbc1f1.png"
                alt="TEDx Logo" className="h-16 mb-6 mx-auto md:mx-0" />
              <p className="text-gray-400">TEDxMLRIT is a stage where visionaries, innovators, and changemakers unite
                to challenge perspectives and spark conversations. Independently organized under the TED banner,
                we bring ideas that shape the future to the forefront.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-6">Connect With Us</h3>
              <div className="flex justify-center items-center space-x-6 mb-6">
                <a href="https://instagram.com/tedxmlrit"
                  className="hover:text-[#E50914] text-2xl flex items-center gap-2">
                  <i className="ri-instagram-fill"></i>
                  <span className="text-base">@tedxmlrit</span>
                </a>
                <a href="https://youtube.com/@TEDxMLRIT"
                  className="hover:text-[#E50914] text-2xl flex items-center gap-2">
                  <i className="ri-youtube-fill"></i>
                  <span className="text-base">@TEDxMLRIT</span>
                </a>
              </div>
              <div>
                <h4 className="font-bold mb-2">Contact Us</h4>
                <p className="mb-2">Email: info@tedxmlrit.com</p>
                <p>Phone: +91 123 456 7890</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <h3 className="text-xl font-bold mb-6">Location</h3>
              <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                <img src="https://public.readdy.ai/gen_page/map_placeholder_1280x720.png" alt="Location Map"
                  className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              <p className="text-sm">MLRIT Campus, Dundigal,<br />Hyderabad, Telangana 500043</p>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center">
            <p>&copy; 2025 TEDx MLRIT. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
