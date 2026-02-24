import React, { useEffect, useState } from "react";

const InfiniteScrollingImages = () => {
        return (
            <div className="bg-black min-h-screen text-white font-sans overflow-hidden flex flex-col justify-center items-center relative">
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10 pointer-events-none"></div>

                <div className="w-full max-w-7xl mx-auto py-12 space-y-8">
                    <h2 className="text-center text-gray-500 text-sm uppercase tracking-widest mb-12">Infinite Marquee</h2>
                    
                    {/* Marquee Container */}
                    <div className="relative flex overflow-hidden group">
                         <div className="flex animate-marquee whitespace-nowrap gap-8">
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                                <div key={i} className="w-[300px] h-[400px] bg-gray-800 rounded-3xl overflow-hidden shrink-0 relative group/card cursor-pointer transform hover:scale-95 transition-transform duration-300">
                                    <img src={`https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=600&auto=format&fit=crop&sig=${i}`} className="w-full h-full object-cover opacity-60 group-hover/card:opacity-100 transition-opacity" alt="Art" />
                                    <div className="absolute bottom-0 left-0 p-6">
                                        <span className="font-bold text-xl">Card {i}</span>
                                    </div>
                                </div>
                            ))}
                            {/* Duplicate for loop */}
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                                <div key={`dup-${i}`} className="w-[300px] h-[400px] bg-gray-800 rounded-3xl overflow-hidden shrink-0 relative group/card cursor-pointer transform hover:scale-95 transition-transform duration-300">
                                    <img src={`https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=600&auto=format&fit=crop&sig=${i}`} className="w-full h-full object-cover opacity-60 group-hover/card:opacity-100 transition-opacity" alt="Art" />
                                     <div className="absolute bottom-0 left-0 p-6">
                                        <span className="font-bold text-xl">Card {i}</span>
                                    </div>
                                </div>
                            ))}
                         </div>
                    </div>

                    <div className="text-center text-gray-600 text-xs mt-12">
                        Hover to pause (simulated with CSS)
                    </div>
                </div>

                <style>{ `
                    @keyframes marquee {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                    .animate-marquee {
                        animation: marquee 30s linear infinite;
                    }
                    .group:hover .animate-marquee {
                        animation-play-state: paused;
                    }
                ` }</style>
            </div>
        );
    };

export default InfiniteScrollingImages;
