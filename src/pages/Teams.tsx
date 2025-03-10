import React from 'react'
import { Link } from 'react-router'

export default function TeamsPage() {
    return (
        <>
            <section className="py-28 bg-black">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-12 text-white">Our Team</h2>
                    <div className="overflow-x-auto relative">
                        <div id="speakersContainer" className="grid grid-cols-2 md:grid-cols-4 space-x-6 pb-8 transition-transform duration-300">
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
            </section>
        </>
    )
}
