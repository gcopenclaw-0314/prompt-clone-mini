import React, { useEffect, useState } from "react";

const CinematicPhotographyPortfolio = () => {
        return (
            <div className="bg-[#f9f9f9] text-black min-h-screen font-sans selection:bg-black selection:text-white">
                {/* Nav */}
                <nav className="fixed top-0 w-full flex justify-between px-8 py-6 z-50 mix-blend-multiply">
                    <div className="text-sm font-bold tracking-widest uppercase">Hank Pym</div>
                    <a href="#" className="text-sm font-bold tracking-widest uppercase hover:line-through">About</a>
                </nav>

                {/* Intro */}
                <header className="pt-32 pb-24 px-6 md:px-12 flex flex-col items-center text-center">
                    <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden mb-8 grayscale hover:grayscale-0 transition-all duration-500">
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover" alt="Portrait" />
                    </div>
                    <p className="max-w-2xl text-2xl md:text-4xl font-light leading-tight">
                        I am an <a href="#" className="underline decoration-1 underline-offset-4 hover:bg-black hover:text-white transition-colors">Insect Photographer</a> and <a href="#" className="underline decoration-1 underline-offset-4 hover:bg-black hover:text-white transition-colors">Macro Artist</a> revealing the unseen world beneath our feet.
                    </p>
                </header>

                {/* Gallery */}
                <section className="px-4 md:px-8 pb-32">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-24 max-w-7xl mx-auto">
                        {/* Column 1 */}
                        <div className="flex flex-col gap-24 mt-0 md:mt-24">
                             {[
                                 { title: "Jewel Beetle", year: "2023", img: "https://images.unsplash.com/photo-1470434767159-ac7dab2272d5?q=80&w=1000&auto=format&fit=crop" },
                                 { title: "Morning Dew", year: "2022", img: "https://images.unsplash.com/photo-1551726353-85e68370773d?q=80&w=1000&auto=format&fit=crop" },
                                 { title: "Mantis Prayer", year: "2023", img: "https://images.unsplash.com/photo-1544776193-4e4d896c2144?q=80&w=1000&auto=format&fit=crop" }
                             ].map((item, i) => (
                                 <div key={i} className="group cursor-pointer">
                                     <div className="overflow-hidden mb-4">
                                         <img src={item.img} className="w-full object-cover hover:scale-105 transition-transform duration-700 ease-out" alt={item.title} />
                                     </div>
                                     <div className="flex justify-between items-baseline border-b border-black pb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                         <span className="text-xl font-medium">{item.title}</span>
                                         <span className="text-sm font-mono">{item.year}</span>
                                     </div>
                                 </div>
                             ))}
                        </div>

                        {/* Column 2 */}
                        <div className="flex flex-col gap-24">
                             {[
                                 { title: "Emerald Eyes", year: "2024", img: "https://images.unsplash.com/photo-1463107971871-fbac9ddb920f?q=80&w=1000&auto=format&fit=crop" },
                                 { title: "Paper Wings", year: "2023", img: "https://images.unsplash.com/photo-1533519803105-09f447721532?q=80&w=1000&auto=format&fit=crop" },
                                 { title: "Ant Colony", year: "2021", img: "https://images.unsplash.com/photo-1622359550993-97b73c448d3c?q=80&w=1000&auto=format&fit=crop" }
                             ].map((item, i) => (
                                 <div key={i} className="group cursor-pointer">
                                     <div className="overflow-hidden mb-4">
                                         <img src={item.img} className="w-full object-cover hover:scale-105 transition-transform duration-700 ease-out" alt={item.title} />
                                     </div>
                                     <div className="flex justify-between items-baseline border-b border-black pb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                         <span className="text-xl font-medium">{item.title}</span>
                                         <span className="text-sm font-mono">{item.year}</span>
                                     </div>
                                 </div>
                             ))}
                        </div>
                    </div>
                </section>

                <footer className="px-8 py-12 flex justify-between items-center text-xs uppercase tracking-widest border-t border-gray-200">
                    <span>© 2024 Hank Pym</span>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-gray-500">Instagram</a>
                        <a href="#" className="hover:text-gray-500">Twitter</a>
                    </div>
                </footer>
            </div>
        );
    };

export default CinematicPhotographyPortfolio;
