import React, { useEffect, useState } from "react";

const BoldLoveWedding = () => {
        return (
            <div className="bg-[#fdf0f0] text-[#e63946] font-sans selection:bg-[#e63946] selection:text-white">
                {/* Hero */}
                <header className="min-h-screen flex flex-col items-center justify-center text-center p-6 relative overflow-hidden">
                    <div className="absolute top-0 w-full bg-[#e63946] text-white py-2 text-sm uppercase tracking-widest font-bold">
                        Save The Date • 09.12.2025
                    </div>
                    
                    <h1 className="text-[15vw] leading-[0.8] font-black tracking-tighter uppercase mb-8 text-[#1d3557]">
                        Alex<br/><span className="text-[#e63946]">Wait!</span><br/>&Sam
                    </h1>
                    
                    <p className="text-xl md:text-3xl font-serif italic text-[#1d3557] max-w-xl">
                        We’re getting married and we want you to be there to party with us.
                    </p>

                    <div className="absolute bottom-12 animate-bounce">
                        <div className="w-12 h-12 rounded-full border-2 border-[#1d3557] flex items-center justify-center text-2xl">↓</div>
                    </div>
                </header>

                {/* Story / Stats */}
                <section className="bg-white py-24 px-6 md:px-12 text-[#1d3557]">
                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                        <img src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1000&auto=format&fit=crop" className="w-full aspect-[4/5] object-cover rounded-lg shadow-[8px_8px_0px_0px_#e63946]" alt="Couple" />
                        <div>
                            <h2 className="text-5xl font-black uppercase mb-8 leading-none">It started with a swipe right.</h2>
                            <p className="text-lg leading-relaxed mb-12">
                                Six years, three apartments, and two dogs later, we decided to make it official. We can't wait to celebrate our love with our favorite people.
                            </p>
                            <div className="grid grid-cols-3 gap-4 border-t-4 border-[#e63946] pt-8">
                                <div>
                                    <span className="block text-4xl font-black">6</span>
                                    <span className="text-xs uppercase font-bold tracking-widest">Years</span>
                                </div>
                                <div>
                                    <span className="block text-4xl font-black">12</span>
                                    <span className="text-xs uppercase font-bold tracking-widest">Countries</span>
                                </div>
                                <div>
                                    <span className="block text-4xl font-black">∞</span>
                                    <span className="text-xs uppercase font-bold tracking-widest">Forever</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Details */}
                <section className="py-24 px-6 bg-[#1d3557] text-[#fdf0f0]">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-6xl font-black text-center mb-16 uppercase">The Plan</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-[#fdf0f0] text-[#1d3557] p-12 rounded-lg shadow-[8px_8px_0px_0px_#e63946] transform hover:-translate-y-2 transition-transform">
                                <div className="text-6xl mb-4">💍</div>
                                <h3 className="text-3xl font-black uppercase mb-2">The I Do's</h3>
                                <p className="font-bold mb-4">4:00 PM • The Old Warehouse</p>
                                <p>Come watch us cry and exchange rings. It'll be short and sweet, we promise.</p>
                            </div>
                            <div className="bg-[#fdf0f0] text-[#1d3557] p-12 rounded-lg shadow-[8px_8px_0px_0px_#e63946] transform hover:-translate-y-2 transition-transform">
                                <div className="text-6xl mb-4">🥂</div>
                                <h3 className="text-3xl font-black uppercase mb-2">The Party</h3>
                                <p className="font-bold mb-4">6:00 PM • The Roof Deck</p>
                                <p>Open bar, tacos, and bad dancing. Dress code: "Look good, feel good."</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Dress Code Alert */}
                <div className="bg-[#e63946] text-white py-4 text-center font-bold uppercase tracking-widest">
                    Dress Code: Cocktail Attire • No Jeans Please!
                </div>

                {/* Gallery Grid */}
                <section className="bg-black py-2 px-2">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="aspect-square bg-gray-800 overflow-hidden relative group">
                                <img src={`https://images.unsplash.com/photo-1520854221256-17451cc330e7?q=80&w=${400+i}&auto=format&fit=crop`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100" />
                            </div>
                        ))}
                    </div>
                </section>

                {/* RSVP CTA */}
                <section className="py-32 px-6 text-center bg-[#fdf0f0]">
                    <h2 className="text-5xl md:text-7xl font-black text-[#1d3557] mb-8 uppercase">Are you in?</h2>
                    <p className="text-xl mb-12 max-w-lg mx-auto text-[#1d3557]">
                        Let us know if you can make it. We need to know how many tacos to order.
                    </p>
                    <a href="mailto:rsvp@alexandsam.com" className="inline-block bg-[#e63946] text-white text-2xl font-black uppercase py-6 px-12 rounded-full hover:bg-[#c1121f] transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
                        RSVP Now
                    </a>
                </section>

                <footer className="bg-[#1d3557] text-[#fdf0f0] py-12 flex flex-col items-center">
                    <div className="w-16 h-16 bg-[#e63946] rounded-full flex items-center justify-center font-black text-xl mb-4">A&S</div>
                    <p className="text-sm uppercase tracking-widest opacity-70">New York City • 2025</p>
                </footer>
            </div>
        );
    };

export default BoldLoveWedding;
