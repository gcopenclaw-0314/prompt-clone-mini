import React, { useEffect, useState } from "react";

const ParallaxAgencyPortfolio = () => {
        return (
            <div className="bg-black min-h-screen text-white font-sans selection:bg-white selection:text-black">
                {/* Header */}
                <header className="fixed top-0 left-0 w-full flex justify-between items-center px-6 py-6 z-50 mix-blend-difference">
                    <div className="flex flex-col text-sm leading-tight">
                        <span className="font-bold">Marco Coppeto</span>
                        <span className="text-gray-400">Brooklyn, NY</span>
                    </div>
                    
                    <button className="bg-white/20 backdrop-blur-md rounded-full px-4 py-2 flex gap-2 items-center hover:bg-white/30 transition-all">
                         <div className="w-4 h-4 rounded-full border border-white/50"></div>
                         <div className="w-4 h-4 rounded-sm border border-white/50"></div>
                    </button>

                    <a href="#" className="text-sm font-bold uppercase tracking-wider hover:underline underline-offset-4">Contacts</a>
                </header>

                {/* Hero */}
                <section className="pt-48 px-6 pb-24 md:pt-64 md:px-12 lg:px-24">
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] mb-12">
                        Shaping<br/>what’s next.
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 max-w-2xl leading-relaxed">
                        Digital product designer and art director helping brands build future-proof experiences.
                    </p>
                </section>

                {/* Work List */}
                <section className="px-6 md:px-12 lg:px-24 pb-32">
                    <div className="flex flex-col gap-1">
                        {[
                            { name: "Lumina", cat: "Fintech", tags: ["Brand", "Product"] },
                            { name: "Vortex", cat: "AI", tags: ["Strategy", "Web"] },
                            { name: "Aeon", cat: "Fashion", tags: ["Art Direction", "E-com"] },
                            { name: "Motive", cat: "Automotive", tags: ["App", "UX/UI"] }
                        ].map((project, i) => (
                            <div key={i} className="group relative border-t border-white/20 py-12 flex flex-col md:flex-row justify-between items-start md:items-center hover:bg-white/5 transition-colors cursor-pointer">
                                <h2 className="text-4xl md:text-6xl font-bold group-hover:pl-4 transition-all duration-300">{project.name}</h2>
                                <div className="mt-4 md:mt-0 flex flex-col md:text-right">
                                    <span className="text-gray-400 text-sm uppercase tracking-widest">{project.cat}</span>
                                    <div className="flex gap-2 mt-1 justify-end">
                                        {project.tags.map(t => <span key={t} className="text-xs border border-white/20 rounded-full px-2 py-1">{t}</span>)}
                                    </div>
                                </div>
                            </div>
                        ))}
                         <div className="border-t border-white/20"></div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="px-6 md:px-12 lg:px-24 pb-12">
                    <div className="mb-24">
                        <h2 className="text-5xl md:text-7xl font-bold mb-8">Let’s connect.</h2>
                        <a href="mailto:hello@example.com" className="text-2xl md:text-3xl underline underline-offset-8 decoration-1 text-gray-400 hover:text-white transition-colors">hello@marcocoppeto.com</a>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm uppercase tracking-widest text-gray-500">
                        <div className="flex flex-col gap-4">
                            <span className="text-white font-bold">Social</span>
                            <a href="#" className="hover:text-white">LinkedIn</a>
                            <a href="#" className="hover:text-white">Twitter</a>
                            <a href="#" className="hover:text-white">Instagram</a>
                        </div>
                        <div className="flex flex-col gap-4">
                            <span className="text-white font-bold">Menu</span>
                            <a href="#" className="hover:text-white">Work</a>
                            <a href="#" className="hover:text-white">About</a>
                            <a href="#" className="hover:text-white">Contact</a>
                        </div>
                        <div className="col-span-2 md:col-span-2 md:text-right flex flex-col justify-end">
                            <span>© {new Date().getFullYear()} Marco Coppeto</span>
                        </div>
                    </div>
                </footer>
            </div>
        );
    };

export default ParallaxAgencyPortfolio;
