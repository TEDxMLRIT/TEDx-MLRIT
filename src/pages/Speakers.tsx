import React from 'react'

export default function SpeakersPage() {
    return (
        <>
            <section className="py-28 bg-black">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-12 text-white">Meet Our Speakers</h2>
                    <div className="overflow-x-auto relative">
                        <div id="speakersContainer" className="grid grid-cols-2 md:grid-cols-4 gap-4 space-x-6 pb-8 transition-transform duration-300">
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
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
