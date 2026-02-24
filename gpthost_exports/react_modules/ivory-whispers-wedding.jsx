import React, { useEffect, useState } from "react";

const IvoryWhispersWedding = () => {
        return (
            <div className="bg-[#fdfbf7] text-[#5c5552] font-serif selection:bg-[#e6dcd3]">
                {/* Hero */}
                <header className="min-h-screen flex flex-col items-center justify-center p-8 text-center relative">
                    <div className="border border-[#dcd6d0] p-12 md:p-24 max-w-4xl relative">
                         <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#fdfbf7] px-4 text-xs tracking-[0.3em] uppercase">The Wedding Of</div>
                         <h1 className="text-6xl md:text-8xl font-medium tracking-tight mb-6 text-[#2a2624]">Elena <span className="font-light italic">&</span> Thomas</h1>
                         <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-center items-center text-sm tracking-widest uppercase font-sans mt-8 text-[#8a817c]">
                             <span>June 21, 2025</span>
                             <span className="hidden md:inline">•</span>
                             <span>Château de Lancy</span>
                             <span className="hidden md:inline">•</span>
                             <span>France</span>
                         </div>
                    </div>
                    <div className="absolute bottom-12 animate-bounce text-[#dcd6d0]">
                        ↓
                    </div>
                </header>

                {/* Photo Trio */}
                <section className="px-6 md:px-12 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="aspect-[3/4] bg-[#efebe6] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
                                <img src={`https://images.unsplash.com/photo-1511285560982-1351c4f809b9?q=80&w=${400+i}&auto=format&fit=crop`} className="w-full h-full object-cover" alt="Moment" />
                            </div>
                        ))}
                    </div>
                </section>

                {/* Our Story */}
                <section className="py-24 px-6 md:px-12 max-w-3xl mx-auto">
                    <div className="space-y-24">
                        {[
                            { title: "Chapter I: Spring 2019", text: "We met in a library. Silence was our first language." },
                            { title: "Chapter II: The Journey", text: "Three years of long distance, endless flights, and midnight calls." },
                            { title: "Chapter III: The Question", text: "Under an old oak tree, with hands shaking and hearts racing." },
                            { title: "Chapter IV: Forever", text: "And now, we build our home." }
                        ].map((chapter, i) => (
                            <div key={i} className="text-center">
                                <h3 className="text-xl font-sans uppercase tracking-widest mb-6 text-[#8a817c]">{chapter.title}</h3>
                                <p className="text-2xl md:text-3xl leading-relaxed italic">{chapter.text}</p>
                                {i === 1 && <div className="mt-12 text-4xl text-[#dcd6d0]">❝</div>}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Celebration */}
                <section className="py-24 bg-[#f4f1ed]">
                    <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
                        <div className="text-center p-8 bg-white shadow-sm">
                            <h3 className="text-3xl font-medium mb-2">The Ceremony</h3>
                            <p className="font-sans text-xs uppercase tracking-widest text-[#8a817c] mb-6">4:00 PM • The Gardens</p>
                            <p className="leading-relaxed text-[#5c5552]">
                                Join us for an intimate exchange of vows amidst the blooming roses of the lower garden.
                            </p>
                        </div>
                        <div className="text-center p-8 bg-white shadow-sm">
                            <h3 className="text-3xl font-medium mb-2">The Reception</h3>
                            <p className="font-sans text-xs uppercase tracking-widest text-[#8a817c] mb-6">6:30 PM • The Grand Hall</p>
                            <p className="leading-relaxed text-[#5c5552]">
                                Dinner, dancing, and celebration will follow immediately after the cocktail hour.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Gentle Notes */}
                <section className="py-24 px-6 max-w-4xl mx-auto text-center space-y-12">
                    <h2 className="text-4xl italic">Gentle Notes</h2>
                    <div className="grid md:grid-cols-3 gap-8 font-sans text-sm tracking-wide">
                        <div>
                            <strong className="block uppercase mb-2 text-[#2a2624]">Attire</strong>
                            <p className="text-[#8a817c]">Black Tie Optional. We invite you to dress in earth tones.</p>
                        </div>
                        <div>
                            <strong className="block uppercase mb-2 text-[#2a2624]">Unplugged</strong>
                            <p className="text-[#8a817c]">We ask you to be fully present with us during the ceremony.</p>
                        </div>
                        <div>
                            <strong className="block uppercase mb-2 text-[#2a2624]">Children</strong>
                            <p className="text-[#8a817c]">We love your little ones, but this will be an adults-only affair.</p>
                        </div>
                    </div>
                </section>

                {/* RSVP */}
                <section className="py-24 px-6 border-t border-[#efebe6]">
                    <div className="max-w-2xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-5xl font-medium mb-4">R.S.V.P.</h2>
                            <p className="font-sans uppercase tracking-widest text-xs text-[#8a817c]">Kindly reply by May 1st</p>
                        </div>
                        
                        <form className="space-y-6 font-sans text-sm" onSubmit={e => e.preventDefault()}>
                            <div className="grid md:grid-cols-2 gap-6">
                                <input type="text" placeholder="First Name" className="w-full bg-transparent border-b border-[#dcd6d0] py-3 focus:outline-none focus:border-[#5c5552]" />
                                <input type="text" placeholder="Last Name" className="w-full bg-transparent border-b border-[#dcd6d0] py-3 focus:outline-none focus:border-[#5c5552]" />
                            </div>
                            <input type="email" placeholder="Email Address" className="w-full bg-transparent border-b border-[#dcd6d0] py-3 focus:outline-none focus:border-[#5c5552]" />
                            
                            <div className="py-4">
                                <span className="block mb-4 text-[#8a817c]">Will you be joining us?</span>
                                <div className="flex gap-8">
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input type="radio" name="attending" className="accent-[#5c5552]" />
                                        <span>Accepts with Pleasure</span>
                                    </label>
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input type="radio" name="attending" className="accent-[#5c5552]" />
                                        <span>Declines with Regret</span>
                                    </label>
                                </div>
                            </div>

                            <textarea placeholder="Message for the couple..." rows="4" className="w-full bg-[#f4f1ed] border-none p-4 mt-4 focus:outline-none"></textarea>

                            <button className="w-full bg-[#2a2624] text-white py-4 uppercase tracking-[0.2em] text-xs hover:bg-[#4a4441] transition-colors mt-8">
                                Confirm Attendance
                            </button>
                        </form>
                    </div>
                </section>

                <footer className="py-12 text-center border-t border-[#efebe6] font-sans text-xs uppercase tracking-[0.2em] text-[#8a817c]">
                    Elena & Thomas • 2025
                </footer>
            </div>
        );
    };

export default IvoryWhispersWedding;
