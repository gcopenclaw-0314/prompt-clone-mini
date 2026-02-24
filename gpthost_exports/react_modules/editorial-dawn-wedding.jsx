import React, { useEffect, useState } from "react";

const EditorialDawnWedding = () => {
        const [timeLeft, setTimeLeft] = useState({ days: 124, hours: 10, minutes: 45, seconds: 12 });

        useEffect(() => {
            const timer = setInterval(() => {
                setTimeLeft(prev => {
                    if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
                    return prev; 
                });
            }, 1000);
            return () => clearInterval(timer);
        }, []);

        return (
            <div className="bg-[#fcfaf7] text-[#2c2c2c] font-serif overflow-x-hidden">
                {/* Hero */}
                <header className="relative h-screen flex flex-col justify-between p-6 md:p-12">
                     <div className="absolute inset-0 z-0">
                        <div className="w-full h-full bg-stone-300 overflow-hidden">
                             <div className="w-full h-full bg-cover bg-center opacity-80 mix-blend-multiply" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop)'}}></div>
                        </div>
                     </div>
                     
                     <nav className="relative z-10 flex justify-between items-center text-white/90 uppercase tracking-[0.2em] text-xs font-sans">
                        <span>The Wedding</span>
                        <div className="flex gap-6">
                            <a href="#story" className="hover:text-white">Story</a>
                            <a href="#details" className="hover:text-white">Details</a>
                            <a href="#rsvp" className="hover:text-white">RSVP</a>
                        </div>
                     </nav>

                     <div className="relative z-10 text-center text-white pb-12">
                         <h1 className="text-6xl md:text-9xl font-thin italic mb-4">Sarah & James</h1>
                         <p className="text-lg md:text-xl font-sans tracking-widest uppercase">September 24, 2025 • Tuscany, Italy</p>
                     </div>
                </header>

                {/* Story */}
                <section id="story" className="py-24 px-6 md:px-12 max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="order-2 md:order-1 space-y-8">
                            <span className="font-sans text-xs tracking-[0.2em] uppercase text-stone-500">Our Story</span>
                            <h2 className="text-4xl md:text-5xl leading-tight">Five years of laughter, travel, and coffee.</h2>
                            <p className="text-lg text-stone-600 leading-relaxed font-sans">
                                It started in a small cafe in Brooklyn. What was meant to be a quick coffee turned into a four-hour conversation about art, dogs, and the best pizza in New York.
                            </p>
                            <div className="border-l-2 border-stone-300 pl-6 italic text-xl text-stone-500">
                                "I knew from the moment he ordered the same weird pastry as me."
                            </div>
                        </div>
                        <div className="order-1 md:order-2 h-[600px] bg-stone-200 overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1522673607200-1645062cd495?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Couple" />
                        </div>
                    </div>
                </section>

                {/* Countdown */}
                <section className="bg-[#1a1a1a] text-[#fcfaf7] py-24 text-center">
                    <h3 className="text-3xl font-thin italic mb-12">The Big Day</h3>
                    <div className="flex justify-center gap-8 md:gap-24 font-sans">
                        {[
                            { label: "Days", val: timeLeft.days },
                            { label: "Hours", val: timeLeft.hours },
                            { label: "Minutes", val: timeLeft.minutes },
                            { label: "Seconds", val: timeLeft.seconds }
                        ].map(item => (
                            <div key={item.label} className="flex flex-col items-center">
                                <span className="text-4xl md:text-6xl font-light">{item.val}</span>
                                <span className="text-xs uppercase tracking-widest opacity-50 mt-2">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Details */}
                <section id="details" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Ceremony", time: "4:00 PM", desc: "The Garden", icon: "❦" },
                            { title: "Cocktails", time: "5:30 PM", desc: "The Terrace", icon: "🍸" },
                            { title: "Reception", time: "7:00 PM", desc: "Grand Hall", icon: "🍽" }
                        ].map(event => (
                            <div key={event.title} className="bg-white p-12 text-center shadow-sm border border-stone-100 hover:border-stone-300 transition-colors">
                                <div className="text-4xl mb-6 text-stone-300">{event.icon}</div>
                                <h3 className="text-2xl font-serif mb-2">{event.title}</h3>
                                <p className="font-sans text-sm tracking-widest uppercase text-stone-500 mb-4">{event.time}</p>
                                <p className="text-stone-600 font-serif italic">{event.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* RSVP */}
                <section id="rsvp" className="py-24 px-6 bg-stone-100">
                    <div className="max-w-xl mx-auto text-center">
                        <h2 className="text-4xl md:text-5xl font-serif mb-8">R.S.V.P.</h2>
                        <p className="font-sans text-stone-500 mb-12">Please respond by August 1st</p>
                        
                        <form className="space-y-6 text-left font-sans" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label className="block text-xs uppercase tracking-widest mb-2">Full Name</label>
                                <input type="text" className="w-full bg-white border-0 p-4 focus:ring-1 focus:ring-stone-400" placeholder="Jane Doe" />
                            </div>
                            <div>
                                <label className="block text-xs uppercase tracking-widest mb-2">Email</label>
                                <input type="email" className="w-full bg-white border-0 p-4 focus:ring-1 focus:ring-stone-400" placeholder="jane@example.com" />
                            </div>
                            <div className="space-y-2">
                                <label className="block text-xs uppercase tracking-widest mb-2">Attending?</label>
                                <div className="flex gap-8">
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input type="radio" name="attending" className="accent-stone-800" />
                                        <span>Joyfully Accept</span>
                                    </label>
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input type="radio" name="attending" className="accent-stone-800" />
                                        <span>Regretfully Decline</span>
                                    </label>
                                </div>
                            </div>
                            <button className="w-full bg-[#1a1a1a] text-white py-4 uppercase tracking-[0.2em] text-xs hover:bg-stone-800 transition-colors">
                                Send Response
                            </button>
                        </form>
                    </div>
                </section>

                <footer className="py-12 text-center font-sans text-xs uppercase tracking-widest text-stone-400">
                    <p>Sarah & James • 2025</p>
                    <p className="mt-2">See you in Tuscany</p>
                </footer>
            </div>
        );
    };

export default EditorialDawnWedding;
