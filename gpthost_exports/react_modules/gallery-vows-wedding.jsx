import React, { useEffect, useState } from "react";

const GalleryVowsWedding = () => {
        return (
            <div className="bg-white text-[#111] font-sans selection:bg-black selection:text-white">
                {/* Nav */}
                <nav className="sticky top-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100 py-4 px-6 md:px-12 flex justify-between items-center text-xs tracking-widest uppercase">
                    <span className="font-bold border border-black px-2 py-1">M+E — 2025</span>
                    <div className="hidden md:flex gap-8">
                        <a href="#exhibition" className="hover:underline">Exhibition</a>
                        <a href="#chronology" className="hover:underline">Chronology</a>
                        <a href="#venue" className="hover:underline">Venue</a>
                        <a href="#rsvp" className="hover:underline">RSVP</a>
                    </div>
                </nav>

                {/* Hero */}
                <section id="exhibition" className="min-h-[80vh] flex flex-col justify-center items-center text-center px-6">
                    <h1 className="text-6xl md:text-9xl font-light mb-6">Maya &<br/>Elijah</h1>
                    <div className="max-w-xs text-left border-l border-black pl-4 text-sm text-gray-500 font-mono">
                        <p className="mb-2"><strong className="text-black">Figure 1.</strong> The Union.</p>
                        <p>A celebration of love, art, and shared futures. Held at the Modern Art Wing, Chicago.</p>
                        <p className="mt-4 uppercase text-black">October 12, 2025</p>
                    </div>
                </section>

                {/* Chronology */}
                <section id="chronology" className="py-24 px-6 md:px-24 border-t border-gray-100">
                    <div className="grid md:grid-cols-12 gap-12">
                        <div className="md:col-span-4 text-xs tracking-widest uppercase text-gray-400 sticky top-24 self-start">
                            Chronology
                        </div>
                        <div className="md:col-span-8 space-y-24">
                            {[
                                { year: "2018", title: "The Vernissage", text: "Met at a gallery opening. Debated abstract expressionism for three hours." },
                                { year: "2020", title: "The Collaboration", text: "Moved in together. Curated a home full of plants and books." },
                                { year: "2023", title: "The Commission", text: "A proposal in Paris, in front of the Rodin Museum." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-8 group">
                                    <span className="font-mono text-gray-300 text-xl">{item.year}</span>
                                    <div>
                                        <h3 className="text-2xl font-medium mb-2 group-hover:underline decoration-1 underline-offset-4">{item.title}</h3>
                                        <p className="text-gray-600 max-w-md">{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* The Works / Venue */}
                <section id="venue" className="py-24 px-6 md:px-24 border-t border-gray-100 bg-gray-50">
                     <div className="grid md:grid-cols-2 gap-16">
                         <div>
                             <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop" className="w-full grayscale mb-4" alt="Venue" />
                             <div className="font-mono text-xs text-gray-500">
                                 <p className="uppercase text-black mb-1">Venue: The Modern Wing</p>
                                 <p>123 Art Institute Blvd, Chicago, IL</p>
                             </div>
                         </div>
                         <div className="flex flex-col justify-center">
                             <h2 className="text-4xl font-light mb-8">The Collection</h2>
                             <ul className="space-y-6 text-sm tracking-wide">
                                 <li className="flex justify-between border-b border-gray-200 pb-2">
                                     <span>Ceremony</span>
                                     <span className="text-gray-500">4:00 PM</span>
                                 </li>
                                 <li className="flex justify-between border-b border-gray-200 pb-2">
                                     <span>Cocktails & Viewing</span>
                                     <span className="text-gray-500">5:00 PM</span>
                                 </li>
                                 <li className="flex justify-between border-b border-gray-200 pb-2">
                                     <span>Dinner Service</span>
                                     <span className="text-gray-500">7:00 PM</span>
                                 </li>
                             </ul>
                             <div className="mt-12 p-6 bg-white border border-gray-200">
                                 <p className="text-xs uppercase tracking-widest mb-2 font-bold">Dress Code</p>
                                 <p className="text-sm text-gray-600">Creative Black Tie. We encourage sculptural silhouettes and bold textures.</p>
                             </div>
                         </div>
                     </div>
                </section>

                {/* RSVP */}
                <section id="rsvp" className="py-24 px-6 md:px-24 border-t border-gray-100">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-light mb-12">Confirm Your Attendance</h2>
                        <form className="space-y-8 text-left" onSubmit={e => e.preventDefault()}>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs uppercase tracking-widest mb-2 text-gray-500">Name</label>
                                    <input type="text" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors" />
                                </div>
                                <div>
                                    <label className="block text-xs uppercase tracking-widest mb-2 text-gray-500">Guest Count</label>
                                    <select className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors bg-transparent">
                                        <option>1</option>
                                        <option>2</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div>
                                <span className="block text-xs uppercase tracking-widest mb-4 text-gray-500">Status</span>
                                <div className="flex gap-4">
                                    <button className="flex-1 py-3 border border-black hover:bg-black hover:text-white transition-colors uppercase text-xs tracking-widest">Attending</button>
                                    <button className="flex-1 py-3 border border-gray-300 text-gray-500 hover:border-black hover:text-black transition-colors uppercase text-xs tracking-widest">Declining</button>
                                </div>
                            </div>

                            <button className="w-full bg-black text-white py-4 uppercase text-xs tracking-[0.2em] hover:bg-gray-800 transition-colors">
                                Submit Response
                            </button>
                        </form>
                    </div>
                </section>

                <footer className="py-12 border-t border-gray-100 text-center text-xs uppercase tracking-widest text-gray-400 flex flex-col gap-4">
                    <a href="#" className="hover:text-black">#MayaAndElijah2025</a>
                    <a href="#" className="hover:text-black">Back to Top</a>
                </footer>
            </div>
        );
    };

export default GalleryVowsWedding;
